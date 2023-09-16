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

const Sidebar = (props) => {
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
          to="/wallet"
        />
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
          to="/"
        />
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
