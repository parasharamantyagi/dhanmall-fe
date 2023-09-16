import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import BankCardHeader from "../header/bank-card";
import BankCardList from "./list";

export default function Addbankcard() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <BankCardHeader title="Add Bank Card" />
      <BankCardList />
      <Footer />
    </Box>
  );
}
