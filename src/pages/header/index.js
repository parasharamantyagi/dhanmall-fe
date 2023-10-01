import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Paper, Typography } from "@mui/material";
import { defaultCurrencyFormat } from "../../utils/common-utils";
import { useNavigate } from "react-router-dom";

export default function Header({ amount }) {
  const navigate = useNavigate();
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
        Available Balance : {defaultCurrencyFormat(amount)}
      </Typography>
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            navigate("/wallet-recharge");
          }}
        >
          Recharge
        </Button>
        <Button sx={{ color: "#fff" }} size="small">
          Trend
        </Button>
      </Box>
    </Paper>
  );
}
