import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface AddWidgetDrawerProps {
  open: boolean;
  onClose: () => void;
  categoryName: string;
}

const AddWidgetDrawerComponent: React.FC<AddWidgetDrawerProps> = ({
  open,
  onClose,
  categoryName,
}) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetDescription, setWidgetDescription] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const handleConfirm = () => {
    setShowErrors(true);

    const isNameValid = widgetName.trim() !== "";
    const isDescriptionValid = widgetDescription.trim() !== "";

    if (!isNameValid || !isDescriptionValid) return;

    const existingData = JSON.parse(
      localStorage.getItem("dashboardCategoryData") || "[]"
    );

    const updatedData = existingData.map((category: any) => {
      if (category.categoryName === categoryName) {
        return {
          ...category,
          widgets: [
            ...category.widgets,
            {
              name: widgetName.trim(),
              description: widgetDescription.trim(),
            },
          ],
        };
      }
      return category;
    });

    localStorage.setItem("dashboardCategoryData", JSON.stringify(updatedData));

    setWidgetName("");
    setWidgetDescription("");
    setShowErrors(false);
    onClose();

    window.dispatchEvent(new Event("storage-update"));
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 650,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ px: 2, py: 0.8, backgroundColor: "#060f6d" }}
        >
          <Typography variant="subtitle1" sx={{ color: "#fff" }}>
            Add Widget
          </Typography>
          <IconButton onClick={onClose} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ p: 2, flex: 1 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Personalise your dashboard by adding the new widget.
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
            {categoryName}
          </Typography>

          <Stack spacing={2}>
            <TextField
              label="Widget Name"
              fullWidth
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              error={showErrors && widgetName.trim() === ""}
              helperText={
                showErrors && widgetName.trim() === ""
                  ? "Widget Name is required"
                  : ""
              }
            />

            <TextField
              label="Widget Description"
              fullWidth
              multiline
              rows={4}
              value={widgetDescription}
              onChange={(e) => setWidgetDescription(e.target.value)}
              error={showErrors && widgetDescription.trim() === ""}
              helperText={
                showErrors && widgetDescription.trim() === ""
                  ? "Widget Description is required"
                  : ""
              }
            />
          </Stack>
        </Box>

        <Box
          sx={{
            px: 2,
            py: 1,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{
              textTransform: "none",
              px: 4,
              py: 1,
              borderColor: "#060f6d",
              color: "#060f6d",
              borderRadius: "8px",
              mr: 2,
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleConfirm}
            sx={{
              textTransform: "none",
              px: 4,
              py: 1,
              backgroundColor: "#060f6d",
              borderRadius: "8px",
            }}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default AddWidgetDrawerComponent;
