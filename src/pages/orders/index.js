import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import OrderList from "./OrderList";
import CardHeader from "../header/header-card";

export default function Orders() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <CardHeader pageNo={false} title="My Orders" />
      <OrderList />
      <Footer />
    </Box>
  );
}
