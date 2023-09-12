import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import {
  Button,
  Paper,
  Typography,
} from "@mui/material";

export default function MyMenu() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection:'column'
      }}
    >
      <Paper
        sx={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          background: "#000",
          p: 2,
          py:3,
        }}
      >
        <Typography color="white" variant="h5">
          Available Balance : ₹1000.10
        </Typography>
        <Box mt={2}>
          <Button variant="contained" color="primary" size="small">
            paytm
          </Button>
        </Box>
      </Paper>
      <Footer />
    </Box>
  );
}
