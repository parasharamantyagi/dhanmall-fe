import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import * as React from "react";

export default function ConfirmDialog({
  open,
  handleCancelled,
  handleAgree,
  handleDissAgree,
  title,
  description,
}) {
  return (
    <Dialog
      open={open}
      onClose={handleDissAgree}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
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
          variant="contained"
          sx={{ background: "red" }}
          onClick={handleDissAgree}
        >
          Disagree
        </Button>
        <Button
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
