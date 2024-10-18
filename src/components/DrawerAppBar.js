"use client";

import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import PolicyIcon from "@mui/icons-material/Policy";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import LanguageIcon from "@mui/icons-material/Language";
import LiraIcon from "@mui/icons-material/CurrencyLira";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddShoppingIcon from "@mui/icons-material/AddShoppingCart";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const iOS =
  typeof navigator !== "undefined" &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);

function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar component="nav" elevation={2} color="default">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="h1"
            sx={{ flexGrow: 1, fontWeight: 600 }}
          >
            ریالیر | خرید از ترکیه
          </Typography>
          <Button
            variant="outlined"
            href="https://www.rialir.com/contact/"
            target="_blank"
          >
            تماس با ریالیر
          </Button>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          dir="rtl"
          anchor="left"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          disableDiscovery={iOS}
          disableBackdropTransition={!iOS}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton href="https://www.rialir.com/" target="_blank">
                <ListItemIcon>
                  <LanguageIcon />
                </ListItemIcon>
                <ListItemText primary="ریالیر" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                href="https://www.rialir.com/lir/"
                target="_blank"
              >
                <ListItemIcon>
                  <LiraIcon />
                </ListItemIcon>
                <ListItemText primary="قیمت لیر ترکیه" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                target="_blank"
                href="https://www.rialir.com/account/"
              >
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="حساب ریالیر" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                target="_blank"
                href="https://www.rialir.com/account/order/"
              >
                <ListItemIcon>
                  <AddShoppingIcon />
                </ListItemIcon>
                <ListItemText primary="خرید از ترکیه" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                target="_blank"
                href="https://www.rialir.com/faq/"
              >
                <ListItemIcon>
                  <LiveHelpIcon />
                </ListItemIcon>
                <ListItemText primary="سوالات متداول" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                target="_blank"
                href="https://www.rialir.com/privacy-policy/"
              >
                <ListItemIcon>
                  <PolicyIcon />
                </ListItemIcon>
                <ListItemText primary="حریم خصوصی" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                target="_blank"
                href="https://www.rialir.com/contact/"
              >
                <ListItemIcon>
                  <AlternateEmailIcon />
                </ListItemIcon>
                <ListItemText primary="تماس با ریالیر" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </nav>
    </>
  );
}

export default DrawerAppBar;
