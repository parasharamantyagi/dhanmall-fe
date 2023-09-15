import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import Header from "../header";
import FullWidthTabs from "../../components/promotion-tabs";

export default function Promotion() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Header />
      <FullWidthTabs />
      <Footer />
    </Box>
  );
}
