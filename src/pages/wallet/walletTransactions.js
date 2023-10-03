import {
  Box,
  Divider,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import CardHeader from "../header/header-card";
import Footer from "../footer";
import { useRechargeList } from "../../hooks/useBillingApi";
import {
  defaultCurrencyFormat,
  strictValidObjectWithKeys,
  unixformatDateTime,
  validValue,
} from "../../utils/common-utils";

export default function WalletTransactions() {
  const { rechargeList } = useRechargeList("/recharge?page=0", "GET");
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
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <CardHeader title="Transactions" />
      <Box p={1} flexDirection="column" display="flex">
        {strictValidObjectWithKeys(rechargeList) &&
          validValue(rechargeList.success) &&
          rechargeList.rechargeList.recharge.map((object) => (
            <>
              <ListItem
                key={object.bank_account}
                disableGutters
                secondaryAction={
                  <>
                    <ListItemText primary={defaultCurrencyFormat(object.ammount)} secondary={defaultCurrencyFormat(0)} />
                  </>
                }
              >
                <ListItem>
                  <ListItemText
                    primary={defaultCurrencyFormat(object.ammount)}
                    secondary={
                      <>
                        <Typography>Place Order</Typography>
                        <Typography>{unixformatDateTime(object.date)}</Typography>
                      </>
                    }
                  />
                </ListItem>
              </ListItem>
              <Divider />
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
