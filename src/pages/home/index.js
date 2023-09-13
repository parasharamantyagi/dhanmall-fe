import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import Header from "../header";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Header />
      {/* <GamesTable /> */}
      <Footer />
    </Box>
  );
}
