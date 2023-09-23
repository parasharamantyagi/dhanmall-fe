import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import BankCardHeader from "../header/header-card";
import TextField from "@mui/material/TextField";
import { Button, Card, CardContent, Grid } from "@mui/material";

export default function Addbankcard() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <BankCardHeader title="Add Bank Card" />
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Grid item xs={12} sm container>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Actual Name"
              name="actual_name"
              autoComplete="Name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="IFSC Code"
              name="ifsc_code"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Bank name"
              name="bank_name"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Bank account"
              name="bank_account"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="State"
              name="state"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="City"
              name="city"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Address"
              name="address"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Mobile number"
              name="mobile_number"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Code"
              name="verification_code"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 7 }}
            >
              Continue
            </Button>
          </Grid>
        </CardContent>
      </Card>
      <Footer />
    </Box>
  );
}
