import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useLocation } from "react-router-dom";

const MainList = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <ListItemButton
        component={Link}
        to="/billing/luck67"
        selected={location.pathname === "/billing/luck67"}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      {/*  */}
      <ListItemButton
        component={Link}
        to="/billing/users"
        selected={location.pathname === "/billing/users"}
      >
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
      {/*  */}
      <ListItemButton
        component={Link}
        to="/billing/game-now"
        selected={location.pathname === "/billing/game-now"}
      >
        <ListItemIcon>
          <EmojiEventsIcon />
        </ListItemIcon>
        <ListItemText primary="Game now" />
      </ListItemButton>
      {/*  */}
      <ListItemButton
        component={Link}
        to="/billing/recharge-req"
        selected={location.pathname === "/billing/recharge-req"}
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Recharge Req" />
      </ListItemButton>
      {/*  */}
      <ListItemButton
        component={Link}
        to="/billing/withdrawal-req"
        selected={location.pathname === "/billing/withdrawal-req"}
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Withdrawal Req" />
      </ListItemButton>
    </React.Fragment>
  );
};
export default MainList;
