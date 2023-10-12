import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { defaultCurrencyFormat } from "../../utils/common-utils";
import { Link, useNavigate } from "react-router-dom";
import LoopIcon from "@mui/icons-material/Loop";

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

      <Grid container>
        <Grid item xs>
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
            <Button
              variant="contained"
              color="primary"
              sx={{ ml: 1 }}
              size="small"
              onClick={() => {
                navigate("/trend");
              }}
            >
              Trend
            </Button>
          </Box>
        </Grid>
        <Grid item>
          <Link
            href="/win"
            onClick={() => window.location.reload()}
            style={{ color: "#fff" }}
            variant="body2"
          >
            <LoopIcon />
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
}
