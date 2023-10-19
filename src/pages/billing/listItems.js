import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useLocation } from "react-router-dom";
import Home from "@mui/icons-material/Home";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import RequestPageIcon from '@mui/icons-material/RequestPage';
const MainList = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <ListItemButton
        component={Link}
        to={`/billing/${process.env.REACT_APP_ROUTE_URL}`}
        selected={
          location.pathname === `/billing/${process.env.REACT_APP_ROUTE_URL}`
        }
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
        selected={location.pathname === '/billing/users'}
      >
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Users List" />
      </ListItemButton>
      {/*  */}
      <ListItemButton
        component={Link}
        to="/billing/game-now"
        selected={location.pathname === '/billing/game-now'}
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
        selected={location.pathname === '/billing/recharge-req'}
      >
        <ListItemIcon>
          <RequestPageIcon />
        </ListItemIcon>
        <ListItemText primary="Recharge Request" />
      </ListItemButton>
      {/*  */}
      <ListItemButton
        component={Link}
        to="/billing/withdrawal-req"
        selected={location.pathname === '/billing/withdrawal-req'}
      >
        <ListItemIcon>
          <SimCardDownloadIcon />
        </ListItemIcon>
        <ListItemText primary="Withdrawal Request" />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/"
        selected={location.pathname === '/'}
      >
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home Page" />
      </ListItemButton>
    </React.Fragment>
  );
};
export default MainList;
