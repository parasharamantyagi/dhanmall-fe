import {
  Box,
  Button,
  CardActions,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import CardHeader from "../header/header-card";
import Paper from "@mui/material/Paper";
import Footer from "../footer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function WalletWithdrawal() {
  const renderSubtitle = (text) => {
    return (
      <Typography mt={2} variant="p4">
        {text}
      </Typography>
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <CardHeader title="Withdrawal" />
      <Box p={1} flexDirection="column" display="flex">
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <Item>
                <Typography mt={1} variant="h2">
                  Balance: ₹ 6.49
                </Typography>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="recharge_amount"
                    label="Enter Withdrawal amount"
                    name="recharge_amount"
                    autoComplete="recharge_amount"
                    autoFocus
                  />
                </Grid>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid
                    item
                    xs={12}
                    sx={{ BackgroundPositionX: "left", textAlign: "left" }}
                  >
                    Fee: 0,to account 0
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{ BackgroundPositionX: "left", textAlign: "left" }}
                  >
                    <CardActions>
                      <Typography variant="p4">
                        {" "}
                        Payout with Bankcard{" "}
                      </Typography>
                    </CardActions>
                    <Grid item xs={12}>
                      <TextField
                        margin="normal"
                        select
                        required
                        fullWidth
                        id="bank_card"
                        label="Select bank card"
                        name="bank_card"
                        autoComplete="bank_card"
                        autoFocus
                      >
                        {[{ value: 1, label: "Axis" }].map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      sx={{ width: "50%", py: 1, mt: 1, mb: 4 }}
                    >
                      Withdraw
                    </Button>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          </Grid>
        </Box>

        {renderSubtitle()}
        {renderSubtitle()}
        {renderSubtitle()}
        {renderSubtitle()}
        {renderSubtitle()}
      </Box>
      <Footer />
    </Box>
  );
}
