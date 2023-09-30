import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import * as React from "react";

export default function ConfirmDialog({ open, handleAgree,handleDissAgree, title, description }) {
  return (
    <Dialog
      open={open}
      onClose={handleDissAgree}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDissAgree}>Disagree</Button>
        <Button onClick={() => {
            handleAgree();
            handleDissAgree();
        }} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
