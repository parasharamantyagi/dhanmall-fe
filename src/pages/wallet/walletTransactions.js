import { Box, Divider, Grid, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import CardHeader from "../header/header-card";
import Paper from "@mui/material/Paper";
import Footer from "../footer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function WalletTransactions() {
  const renderSubtitle = (text) => {
    return (
      <Typography mt={2} variant="p4">
        {text}
      </Typography>
    );
  };
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <CardHeader title="Transactions" />
      <Box p={1} flexDirection="column" display="flex">
        {[1, 2, 4].map((object) => (
          <>
            <ListItem
              key={object.bank_account}
              disableGutters
              secondaryAction={
                <>
                  <ListItemText primary={'₹ 25.41'} secondary={'₹ 5.41'} />
                </>
              }
            >
              <ListItem>
                <ListItemText
                  primary={'₹ 10.00'}
                  secondary={
                    <>
                      <Typography>Place Order</Typography>
                      <Typography>2023-09-01 12:19</Typography>
                    </>
                  }
                />
              </ListItem>
            </ListItem>
            <Divider  />
          </>
        ))}
        {renderSubtitle()}
        {renderSubtitle()}
        {renderSubtitle()}
        {renderSubtitle()}
        {renderSubtitle()}
      </Box>
      <Footer />
    </Box>
  );
}
