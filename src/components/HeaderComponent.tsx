import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { theme } from "../theme";
import BreadcrumbComponent from "./BreadcrumbComponent";
import SearchComponent from "./SearchComponent";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Avatar } from "@mui/material";
import profileImage from "../assets/2.jpg";

interface Props {
  window?: () => Window;
  children?: React.ReactNode;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function HeaderComponent(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "initial" },
              textAlign: "left",
            }}
          >
            <BreadcrumbComponent />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              flexGrow: 1,
              gap: 3.5,
            }}
          >
            <Box sx={{ flex: 1, maxWidth: "50%" }}>
              <SearchComponent setSearchTerm={props.setSearchTerm} />
            </Box>

            <FormControl variant="standard" sx={{ minWidth: 120 }}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={10}
                disableUnderline
                sx={{
                  "&:before, &:after": {
                    display: "none",
                  },
                }}
              >
                <MenuItem value={10}>Select Option</MenuItem>
              </Select>
            </FormControl>

            <IconButton aria-label="notifications" size="small">
              <NotificationsActiveIcon sx={{ color: "#999999" }} />
            </IconButton>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "text.primary",
              }}
            >
              <Avatar
                alt="Pratiksha K."
                src={profileImage}
                sx={{ width: 30, height: 30 }}
              />
              <Typography variant="body2" sx={{  }}>
                Pratiksha K
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, maxWidth: "100%", width: "100%" }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

export default HeaderComponent;
