import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  CssBaseline,
  Container,
  Button,
  IconButton,
} from "@mui/material";
import CategoryComponent from "../components/CategoryComponent";
import { categoryData as defaultCategoryData } from "../data/WidgetData";
import AddIcon from "@mui/icons-material/Add";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const LOCAL_STORAGE_KEY = "dashboardCategoryData";

const Dashboard = ({ searchTerm }: { searchTerm: string }) => {
  const [categoryData, setCategoryData] = useState(defaultCategoryData);

  const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      setCategoryData(JSON.parse(savedData));
    }
  };

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!savedData) {
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(defaultCategoryData)
      );
    } else {
      setCategoryData(JSON.parse(savedData));
    }

    const handleStorageChange = () => {
      loadFromLocalStorage();
    };

    window.addEventListener("storage-update", handleStorageChange);

    return () => {
      window.removeEventListener("storage-update", handleStorageChange);
    };
  }, []);

  const filteredData = categoryData
    .map((category) => ({
      ...category,
      widgets: category.widgets.filter(
        (widget) =>
          widget.name.toLowerCase().includes(searchTerm) ||
          widget.description?.toLowerCase().includes(searchTerm)
      ),
    }))
    .filter((category) => category.widgets.length > 0);

  return (
    <Container maxWidth={false} disableGutters>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          flexWrap: { xs: "wrap", sm: "nowrap" },
          px: 1,
          gap: 1.5,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            textAlign: "left",
            mb: { xs: 0, sm: 1 },
          }}
        >
          CNAPP Dashboard
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: { xs: "flex-start", sm: "flex-end" },
            mb: { xs: 2, sm: 0 },
          }}
        >
          <Button
            variant="outlined"
            endIcon={<AddIcon sx={{ color: "#999999" }} />}
            sx={{
              color: "#999999",
              borderColor: "#d4d4d4",
              backgroundColor: "#fff",
              fontWeight: 600,
              textTransform: "none",
            }}
          >
            Add Widget
          </Button>

          <IconButton
            aria-label="refresh"
            size="small"
            sx={{
              color: "#999999",
              border: "1px solid #d4d4d4",
              backgroundColor: "#fff",
              borderRadius: "5px",
            }}
          >
            <AutorenewIcon />
          </IconButton>

          <IconButton
            aria-label="more"
            size="small"
            sx={{
              color: "#999999",
              border: "1px solid #d4d4d4",
              backgroundColor: "#fff",
              borderRadius: "5px",
            }}
          >
            <MoreVertIcon />
          </IconButton>

          <Button
            variant="outlined"
            startIcon={<WatchLaterIcon sx={{ color: "#060f6d" }} />}
            endIcon={<KeyboardArrowDownIcon sx={{ color: "#060f6d" }} />}
            sx={{
              color: "#060f6d",
              borderColor: "#060f6d",
              backgroundColor: "#fff",
              fontWeight: 600,
              textTransform: "none",
            }}
          >
            <span
              style={{ borderLeft: "1px solid #060f6d", paddingLeft: "10px" }}
            >
              Last 2 days
            </span>
          </Button>
        </Box>
      </Box>

      <Box sx={{ px: 2 }}>
        {(searchTerm ? filteredData : categoryData).map((category, idx) => (
          <CategoryComponent
            key={idx}
            categoryName={category.categoryName}
            widgets={category.widgets}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Dashboard;
