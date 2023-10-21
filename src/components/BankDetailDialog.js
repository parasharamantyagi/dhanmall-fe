import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { strictValidObjectWithKeys } from "../utils/common-utils";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BankDetailDialog({
  open,
  handleAgree,
  handleDissAgree,
  handleCancelled,
  data,
}) {
  return (
    <Dialog
      open={open}
      onClose={handleCancelled}
      fullWidth
      maxWidth="lg"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Bank detail</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Grid container spacing={2}>
            {/*  */}
            <Grid item xs={6}>
              <Item>
                <Typography align="left" sx={{ fontWeight: "bold" }}>
                  User name
                </Typography>
                <Typography align="left">
                  {strictValidObjectWithKeys(data) ? data.user_id.nickname : ""}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Typography align="left" sx={{ fontWeight: "bold" }}>
                  Mobile
                </Typography>
                <Typography align="left">
                  {strictValidObjectWithKeys(data) ? data.user_id.mobile : ""}
                </Typography>
              </Item>
            </Grid>
            {/*  */}
            <Grid item xs={6}>
              <Item>
                <Typography align="left" sx={{ fontWeight: "bold" }}>
                  Ammount
                </Typography>
                <Typography align="left">
                  {strictValidObjectWithKeys(data) ? data.details.withdraw_amount : ""}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Typography align="left" sx={{ fontWeight: "bold" }}>
                  Status
                </Typography>
                <Typography align="left">
                  {strictValidObjectWithKeys(data) ? data.status : ""}
                </Typography>
              </Item>
            </Grid>
            {/*  */}
            <Grid item xs={6}>
              <Item>
                <Typography align="left" sx={{ fontWeight: "bold" }}>
                  Bank name
                </Typography>
                <Typography align="left">
                  {strictValidObjectWithKeys(data)
                    ? data.bank_details.bank_name
                    : ""}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Typography align="left" sx={{ fontWeight: "bold" }}>
                  Bank account
                </Typography>
                <Typography align="left">
                  {strictValidObjectWithKeys(data)
                    ? data.bank_details.bank_account
                    : ""}
                </Typography>
              </Item>
            </Grid>
            {/*  */}
            <Grid item xs={6}>
              <Item>
                <Typography align="left" sx={{ fontWeight: "bold" }}>
                  Ifsc code
                </Typography>
                <Typography align="left">
                  {strictValidObjectWithKeys(data)
                    ? data.bank_details.ifsc_code
                    : ""}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Typography align="left" sx={{ fontWeight: "bold" }}>
                  State
                </Typography>
                <Typography align="left">
                  {strictValidObjectWithKeys(data)
                    ? data.bank_details.state
                    : ""}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <Typography align="left" sx={{ fontWeight: "bold" }}>
                  Address
                </Typography>
                <Typography align="left">
                  {strictValidObjectWithKeys(data)
                    ? data.bank_details.address
                    : ""}
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
      <Button
          variant="contained"
          sx={{ background: "#000" }}
          onClick={handleCancelled}
        >
          Cancelled
        </Button>
        <Button
          disabled={strictValidObjectWithKeys(data) && data.status === "processing" ? false : true}
          variant="contained"
          sx={{ background: "red" }}
          onClick={handleDissAgree}
        >
          Disagree
        </Button>
        <Button
          disabled={strictValidObjectWithKeys(data) && data.status === "processing" ? false : true}
          variant="contained"
          sx={{ background: "green" }}
          onClick={handleAgree}
          autoFocus
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
