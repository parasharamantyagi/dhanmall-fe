import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import BankCardHeader from "../header/header-card";
import TextField from "@mui/material/TextField";
import { Button, Card, CardContent, Grid } from "@mui/material";
import { saveBankCardApi } from "./hooke";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Addbankcard() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let obj = {
      actual_name: data.get("actual_name"),
      ifsc_code: data.get("ifsc_code"),
      bank_name: data.get("bank_name"),
      bank_account: data.get("bank_account"),
      state: data.get("state"),
      city: data.get("city"),
      address: data.get("address"),
      mobile_number: data.get("mobile_number"),
      email: data.get("email"),
      verification_code: data.get("verification_code"),
    };
    let result = await saveBankCardApi(obj);
    if (result.success) {
      toast.success(result.message);
      navigate("/bank-card");
    }else{
      toast.error(result.message);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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
