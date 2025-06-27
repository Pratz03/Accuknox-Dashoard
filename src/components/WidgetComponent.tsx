import React from "react";
import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface WidgetProps {
  name: string;
  description: string;
  categoryName: string;
}

const LOCAL_STORAGE_KEY = "dashboardCategoryData";

const WidgetComponent: React.FC<WidgetProps> = ({
  name,
  description,
  categoryName,
}) => {
  const handleDelete = () => {
    const existingData = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) || "[]"
    );

    const updatedData = existingData.map((category: any) => {
      if (category.categoryName === categoryName) {
        return {
          ...category,
          widgets: category.widgets.filter(
            (widget: any) =>
              widget.name !== name || widget.description !== description
          ),
        };
      }
      return category;
    });

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedData));
    window.dispatchEvent(new Event("storage-update"));
  };

  return (
    <Card
      sx={{ height: 200, minWidth: 200, borderRadius: 2, position: "relative" }}
    >
      <IconButton
        onClick={handleDelete}
        size="small"
        sx={{ position: "absolute", top: 4, right: 4 }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: description ? "flex-start" : "center",
          alignItems: description ? "flex-start" : "center",
          height: "100%",
        }}
      >
        {description ? (
          <>
            <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
              {name}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: "left" }}>
              {description}
            </Typography>
          </>
        ) : (
          <Typography variant="body2" color="text.secondary">
            No data available
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default WidgetComponent;
