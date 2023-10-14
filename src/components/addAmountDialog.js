import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import * as React from "react";

export default function AddAmountDialog({
  open,
  handleCancelled,
  handleAgree,
  title,
  setUserAmount,
  description,
}) {
  return (
    <Dialog
      open={open}
      onClose={handleCancelled}
      fullWidth
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={8}>
              <TextField
                id="outlined-error"
                fullWidth
                label="Enter ammount"
                onChange={(event) =>
                  setUserAmount(event.target.value)
                }
              />
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" onClick={handleAgree} autoFocus>
                Agree
              </Button>
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
      </DialogActions>
    </Dialog>
  );
}
