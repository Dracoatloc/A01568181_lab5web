import * as React from "react";
import "./index.css";
import {
  Typography,
  AppBar,
  Box,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

/**
 * Navigation Bar elements
 * @returns NavigationBar UI elements
 */
const NavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="navbar">
        <Toolbar variant="dense">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Chambasoft Store
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;