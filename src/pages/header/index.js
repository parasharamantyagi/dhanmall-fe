import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Paper, Typography } from "@mui/material";

export default function Header({ ammount }) {
  return (
    <Paper
      sx={{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        background: "#000",
        p: 2,
        py: 3,
      }}
    >
      <Typography color="white" variant="h5">
        Available Balance : ₹ {parseFloat(ammount).toFixed(2)}
      </Typography>
      <Box mt={2}>
        <Button variant="contained" color="primary" size="small">
          Recharge
        </Button>
        <Button sx={{ color: "#fff" }} size="small">
          Trend
        </Button>
      </Box>
    </Paper>
  );
}
