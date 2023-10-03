import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import OrderList from "./OrderList";
import CardHeader from "../header/header-card";
import useApi from "../../hooks/useApi";

export default function Orders() {
  const { data, loading } = useApi("/order", "GET");

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <CardHeader pageNo={false} title="My Orders" />
      <OrderList data={data} loading={loading} />
      <Footer />
    </Box>
  );
}
