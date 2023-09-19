import Box from "@mui/material/Box";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import IconWithText from "../../components/icon-with-text";
import AddCardIcon from "@mui/icons-material/AddCard";
import SecurityIcon from "@mui/icons-material/Security";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import WalletIcon from "@mui/icons-material/Wallet";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import store from "store2";
import { Collapse, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const [open, setOpen] = useState("");
  const navigate = useNavigate();

  const openCollapse = (text) => {
    if (open === text) {
      setOpen("");
    } else {
      setOpen(text);
    }
  };
  return (
    <Box display={"flex"} flexDirection="column">
      <IconWithText
        icon={<ReceiptLongOutlinedIcon fontSize="large" />}
        text="Orders"
        to="/orders"
      />
      <IconWithText
        icon={<CardGiftcardIcon fontSize="large" />}
        text="Promotiion"
        to="/promotion"
      />
      <IconWithText
        icon={<WalletIcon fontSize="large" />}
        text="Wallet"
        onClick={() => {
          openCollapse("wallet");
        }}
        collapse={true}
      />
      <Collapse in={open === "wallet"} timeout="auto" unmountOnExit>
        <Box flexDirection="column" display="flex">
          <Typography
            my={2}
            onClick={() => navigate("/privacy-policy")}
            variant="p4"
            pl={6}
          >
            Add Recharge
          </Typography>
          <Divider />
          <Typography
            my={2}
            onClick={() => navigate("/privacy-policy")}
            variant="p4"
            pl={6}
          >
            Withdraw
          </Typography>
        </Box>
        <Divider />
      </Collapse>
      <IconWithText
        icon={<AddCardIcon fontSize="large" />}
        text="Bank Card"
        to="/bank-card"
      />
      <IconWithText
        icon={<SecurityIcon fontSize="large" />}
        text="Account Security"
        to="/"
      />
      <IconWithText
        icon={<InfoIcon fontSize="large" />}
        text="About"
        onClick={() => {
          openCollapse("about");
        }}
        collapse={true}
      />
      <Collapse in={open === "about"} timeout="auto" unmountOnExit>
        <Box flexDirection="column" display="flex">
          <Typography
            my={2}
            onClick={() => navigate("/privacy-policy")}
            variant="p4"
            pl={6}
          >
            Privacy policy
          </Typography>
          <Divider />
          <Typography
            my={2}
            onClick={() => navigate("/riskagreement")}
            variant="p4"
            pl={6}
          >
            Risk Disclosure Agreement
          </Typography>
          <Divider />
          <Typography
            my={2}
            onClick={() => navigate("/contect-us")}
            variant="p4"
            pl={6}
          >
            Contect Us
          </Typography>
        </Box>
        <Divider />
      </Collapse>
      <IconWithText
        icon={<LogoutIcon fontSize="large" />}
        text="Logout"
        onClick={() => {
          store.clear();
        }}
        to="/"
      />
    </Box>
  );
};
export default Sidebar;
