import Box from "@mui/material/Box";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import IconWithText from "../../components/icon-with-text";
import AddCardIcon from "@mui/icons-material/AddCard";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
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
    <Box display={'flex'} flexDirection="column">
      <IconWithText
        icon={<PermIdentityIcon fontSize="large" />}
        text="Profile"
        onClick={() => {
          openCollapse('account-security');
        }}
        collapse={true}
      />
      <Collapse in={open === 'account-security'} timeout="auto" unmountOnExit>
        <Box flexDirection="column" display="flex">
          <Typography
            my={2}
            onClick={() => navigate('/my-profile')}
            sx={{ cursor: 'pointer' }}
            variant="p4"
            pl={6}
          >
            Update profile
          </Typography>
          <Divider />
          <Typography
            my={2}
            onClick={() => navigate('/change-password')}
            variant="p4"
            pl={6}
            sx={{ cursor: 'pointer' }}
          >
            Change password
          </Typography>
        </Box>
        <Divider />
      </Collapse>
      <IconWithText
        icon={<AddCardIcon fontSize="large" />}
        text="Recharge"
        to="/wallet-recharge"
      />
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
          openCollapse('wallet');
        }}
        collapse={true}
      />
      <Collapse in={open === 'wallet'} timeout="auto" unmountOnExit>
        <Box flexDirection="column" display="flex">
          <Typography
            sx={{ cursor: 'pointer' }}
            my={2}
            onClick={() => navigate('/wallet-withdrawal')}
            variant="p4"
            pl={6}
          >
            Withdrawal
          </Typography>
          <Divider />
          <Typography
            sx={{ cursor: 'pointer' }}
            my={2}
            onClick={() => navigate('/wallet-transactions')}
            variant="p4"
            pl={6}
          >
            Transactions
          </Typography>
          <Divider />
          <Typography
            sx={{ cursor: 'pointer' }}
            my={2}
            onClick={() => navigate('/bank-card')}
            variant="p4"
            pl={6}
          >
            Bank Card
          </Typography>
        </Box>
        <Divider />
      </Collapse>
      <IconWithText
        icon={<InfoIcon fontSize="large" />}
        text="About"
        onClick={() => {
          openCollapse('about');
        }}
        collapse={true}
      />
      <Collapse in={open === 'about'} timeout="auto" unmountOnExit>
        <Box flexDirection="column" display="flex">
          <Typography
            my={2}
            onClick={() => navigate('/privacy-policy')}
            sx={{ cursor: 'pointer' }}
            variant="p4"
            pl={6}
          >
            Privacy policy
          </Typography>
          <Divider />
          <Typography
            my={2}
            onClick={() => navigate('/riskagreement')}
            variant="p4"
            pl={6}
            sx={{ cursor: 'pointer' }}
          >
            Risk Disclosure Agreement
          </Typography>
          <Divider />
          <Typography
            my={2}
            onClick={() => navigate('/contect-us')}
            variant="p4"
            pl={6}
            sx={{ cursor: 'pointer' }}
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
