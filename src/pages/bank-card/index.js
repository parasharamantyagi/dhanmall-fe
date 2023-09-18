import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import BankCardList from "./list";
import CardHeader from "../header/header-card";

export default function BankCard() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <CardHeader title="Bank Card" />
      <BankCardList />
      <Footer />
    </Box>
  );
}
