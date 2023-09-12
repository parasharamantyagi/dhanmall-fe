import * as React from 'react';
import Box from '@mui/material/Box';
import Footer from '../footer';
import { Button, Paper, Typography } from '@mui/material';
import AvatarWithName from '../../components/avatarname';
import { defaultCurrencyFormat } from '../../utils/common-utils';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import IconWithText from '../../components/icon-with-text';
import AddCardIcon from '@mui/icons-material/AddCard';
import SecurityIcon from '@mui/icons-material/Security';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import WalletIcon from '@mui/icons-material/Wallet';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
export default function Profile() {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <Paper
        sx={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          background: '#000',
          p: 2,
          py: 3,
        }}
      >
        <AvatarWithName name="Bharat Chhabra" />
        <Typography gutterBottom color="secondary">
          Mobile Number : +91-9896677443
        </Typography>
        <Typography gutterBottom color="secondary">
          ID : LKY001
        </Typography>
        <Box display="flex" mt={2} justifyContent="space-evenly">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography gutterBottom color="secondary">
              {defaultCurrencyFormat(2000)}
            </Typography>
            <Button variant="contained" color="primary" size="small">
              Recharge
            </Button>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography gutterBottom color="secondary">
              {defaultCurrencyFormat(2000)}
            </Typography>
            <Button variant="contained" color="primary" size="small">
              Commission
            </Button>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography gutterBottom color="secondary">
              {defaultCurrencyFormat(2000)}
            </Typography>
            <Button variant="contained" color="primary" size="small">
              Interest
            </Button>
          </Box>
        </Box>
      </Paper>
      <Box display={'flex'} flexDirection="column">
        <IconWithText
          icon={<ReceiptLongOutlinedIcon fontSize="large" />}
          text="Orders"
          to="/"
        />
        <IconWithText
          icon={<CardGiftcardIcon fontSize="large" />}
          text="Promotiion"
          to="/"
        />
        <IconWithText
          icon={<WalletIcon fontSize="large" />}
          text="Wallet"
          to="/"
        />
        <IconWithText
          icon={<AddCardIcon fontSize="large" />}
          text="Bank Card"
          to="/"
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
          to="/"
        />
      </Box>
      <Footer />
    </Box>
  );
}
