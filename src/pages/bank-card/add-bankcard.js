import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import BankCardHeader from "../header/header-card";
import TextField from "@mui/material/TextField";
import { Button, Card, CardContent, Grid } from "@mui/material";
import { saveBankCardApi, useBankCardWithIdApi } from "./hooke";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router-dom";
import { strictValidObjectWithKeys } from "../../utils/common-utils";

export default function Addbankcard() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  let { bankCardDetail } = useBankCardWithIdApi(
    "bank-card",
    "GET",
    searchParams.get("id")
  );
  console.log(bankCardDetail);
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
    if (strictValidObjectWithKeys(bankCardDetail) && bankCardDetail.success) {
      let result = await saveBankCardApi(
        "PUT",
        "/bank-card/" + bankCardDetail.bankCardDetail._id,
        obj
      );
      if (result.success) {
        toast.success(result.message);
        navigate("/bank-card");
      } else {
        toast.error(result.message);
      }
    } else {
      let result = await saveBankCardApi("POST", "/bank-card", obj);
      if (result.success) {
        toast.success(result.message);
        navigate("/bank-card");
      } else {
        toast.error(result.message);
      }
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
      <BankCardHeader title="Add Bank Detail" />
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Grid item xs={12} sm container>
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="Account holder name"
              name="actual_name"
              value={
                strictValidObjectWithKeys(bankCardDetail) &&
                bankCardDetail.success
                  ? bankCardDetail.bankCardDetail.actual_name
                  : ""
              }
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="Bank name"
              name="bank_name"
              value={
                strictValidObjectWithKeys(bankCardDetail) &&
                bankCardDetail.success
                  ? bankCardDetail.bankCardDetail.bank_name
                  : ""
              }
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
              value={
                strictValidObjectWithKeys(bankCardDetail) &&
                bankCardDetail.success
                  ? bankCardDetail.bankCardDetail.bank_account
                  : ""
              }
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="IFSC Code"
              name="ifsc_code"
              value={
                strictValidObjectWithKeys(bankCardDetail) &&
                bankCardDetail.success
                  ? bankCardDetail.bankCardDetail.ifsc_code
                  : ""
              }
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="State"
              name="state"
              value={
                strictValidObjectWithKeys(bankCardDetail) &&
                bankCardDetail.success
                  ? bankCardDetail.bankCardDetail.state
                  : ""
              }
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="City"
              name="city"
              value={
                strictValidObjectWithKeys(bankCardDetail) &&
                bankCardDetail.success
                  ? bankCardDetail.bankCardDetail.city
                  : ""
              }
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="Address"
              name="address"
              value={
                strictValidObjectWithKeys(bankCardDetail) &&
                bankCardDetail.success
                  ? bankCardDetail.bankCardDetail.state
                  : ""
              }
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              id="outlined-basic"
              label="Email"
              name="email"
              value={
                strictValidObjectWithKeys(bankCardDetail) &&
                bankCardDetail.success
                  ? bankCardDetail.bankCardDetail.address
                  : ""
              }
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
