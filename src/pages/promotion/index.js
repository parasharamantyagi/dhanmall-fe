import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import Header from "../header";
import PromotionLavel1 from "./lavel_1";

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
      <PromotionLavel1 />
      <Footer />
    </Box>
  );
}
