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
      password: data.get("password"),
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
              id="outlined-basic"
              label="Actual Name"
              name="actual_name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="IFSC Code"
              name="ifsc_code"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="Bank name"
              name="bank_name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="Bank account"
              type="number"
              name="bank_account"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="State"
              name="state"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="City"
              name="city"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="Address"
              name="address"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="Mobile number"
              name="mobile_number"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="Email"
              name="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="Password"
              name="password"
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
