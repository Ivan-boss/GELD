import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import theme from "../theme/theme";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const [notificationsNumber, setNotificationsNumber] = useState(12);
  return (
    <>
      <Box>
        <AppBar
          position="static"
          color="transparent"
          elevation={0}
          sx={{ top: 0, marginBottom: "15px" }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              color: theme.common.placeholder,
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Box>
              <IconButton size="large" aria-label="search" color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="display more actions"
                edge="end"
                color="inherit"
              >
                <Badge badgeContent={notificationsNumber} color="primary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
