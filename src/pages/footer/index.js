import * as React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PersonIcon from "@mui/icons-material/Person";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 10000 }}
      elevation={3}
    >
      <BottomNavigation showLabels value={location.pathname}>
        <BottomNavigationAction
          label="Home"
          value="/"
          icon={<HomeIcon />}
          component={Link}
          to="/"
        />
        <BottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
          component={Link}
          to="/search"
          value="/search"
        />
        <BottomNavigationAction
          label="Win"
          component={Link}
          to="/win"
          icon={<EmojiEventsIcon />}
          value="/win"
        />
        <BottomNavigationAction
          value="/mine"
          component={Link}
          to="/mine"
          label="My"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
