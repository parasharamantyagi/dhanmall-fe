import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import OrderList from "./OrderList";
import CardHeader from "../header/header-card";
import useApi from "../../hooks/useApi";

export default function Orders() {
  const [orderPage, setOrderPage] = React.useState(0);
  const { data, loading } = useApi("/order?page=" + orderPage, "GET");

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <CardHeader pageNo={false} title="My Orders" />
      <OrderList data={data} loading={loading} setOder={setOrderPage} />
      <Footer />
    </Box>
  );
}
