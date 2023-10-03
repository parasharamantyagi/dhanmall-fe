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
  strictValidObjectWithKeys,
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
            validValue(rechargeList.success) && rechargeList.rechargeList.recharge.map((object) => (
          <>
            <ListItem
              key={object.bank_account}
              disableGutters
              secondaryAction={
                <>
                  <ListItemText primary={"₹ 25.41"} secondary={"₹ 5.41"} />
                </>
              }
            >
              <ListItem>
                <ListItemText
                  primary={"₹ 10.00"}
                  secondary={
                    <>
                      <Typography>Place Order</Typography>
                      <Typography>2023-09-01 12:19</Typography>
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
