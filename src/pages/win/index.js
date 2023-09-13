import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import GamesTable from "./games";
import Header from "../header";

export default function Win() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Header />
      <GamesTable />
      <Footer />
    </Box>
  );
}
