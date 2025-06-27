import { Link, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import React from "react";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
function BreadcrumbComponent() {
  const breadcrumbs = [
    <Link
      variant="body2"
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Typography key="3" variant="body2" sx={{ color: "text.primary" }}>
      Dashboard V2
    </Typography>,
  ];
  return (
    <div>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </div>
  );
}

export default BreadcrumbComponent;
