import React, { useState } from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import Slider from "react-slick";
import WidgetComponent from "./WidgetComponent";
import AddIcon from "@mui/icons-material/Add";
import AddWidgetDrawerComponent from "./AddWidgetDrawerComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface WidgetData {
  name: string;
  description: string;
}

interface CategoryProps {
  categoryName: string;
  widgets: WidgetData[];
}

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  centerMode: false,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const CategoryComponent: React.FC<CategoryProps> = ({
  categoryName,
  widgets,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: 600, mb: 1, textAlign: "left" }}
      >
        {categoryName}
      </Typography>

      <Box
        sx={{
          "& .slick-track": {
            marginLeft: "0 !important",
          },
        }}
      >
        <Slider {...sliderSettings}>
          {widgets.map((widget, idx) => (
            <Box key={idx} sx={{ px: 1 }}>
              <WidgetComponent
                key={idx}
                name={widget.name}
                description={widget.description}
                categoryName={categoryName}
              />
            </Box>
          ))}

          <Box sx={{ px: 1 }}>
            <Card
              sx={{
                minWidth: 200,
                height: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <CardContent>
                <Button
                  variant="outlined"
                  onClick={() => setDrawerOpen(true)}
                  startIcon={<AddIcon sx={{ color: "#999999" }} />}
                  sx={{
                    color: "#999999",
                    borderColor: "#d4d4d4",
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  Add Widget
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Slider>
      </Box>

      <AddWidgetDrawerComponent
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        categoryName={categoryName}
      />
    </Box>
  );
};

export default CategoryComponent;
