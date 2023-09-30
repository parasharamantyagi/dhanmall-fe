import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import CardHeader from "../header/header-card";
import Footer from "../footer";
import { strictValidObjectWithKeys } from "../../utils/common-utils";
import { changePasswordService } from "./action";
import { toast } from "react-toastify";

export default function ChangePassword() {
  const [error, setError] = React.useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });
  const [objectForm, setObjectForm] = React.useState({});
  const renderSubtitle = (text) => {
    return (
      <Typography mt={2} variant="p4">
        {text}
      </Typography>
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let object = {
      old_password: data.get("old_password"),
      new_password: data.get("new_password"),
      confirm_password: data.get("confirm_password"),
    };
    let errorValidation = {};
    if(!data.get("old_password")){
      errorValidation.old_password = 'Please enter old password';
    }
    if(!data.get("new_password")){
      errorValidation.new_password = 'Please enter new password';
    }
    if(!data.get("confirm_password")){
      errorValidation.confirm_password = 'Please enter confirm password';
    }
    setError(errorValidation);
    if(strictValidObjectWithKeys(errorValidation)){
      return false;
    }
    let response = await changePasswordService(object);
    if (strictValidObjectWithKeys(response) && response.success) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <CardHeader title="Reset Password" />
      <Box p={1} flexDirection="column" display="flex">
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
          }}
        >
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <TextField
                margin="normal"
                required
                fullWidth
                id="old_password"
                label="Old password"
                name="old_password"
                autoFocus
                onChange={(event) => {
                  setObjectForm({
                    ...objectForm,
                    ...{ old_password: event.target.value },
                  })
                }}
              />
              {error && error.old_password && (
                <Typography paragraph sx={{ color: "red" }}>
                  {error.old_password}
                </Typography>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="new_password"
                label="New password"
                name="new_password"
                autoFocus
                onChange={(event) => {
                  setObjectForm({
                    ...objectForm,
                    ...{ new_password: event.target.value },
                  })
                }}
              />
              {error && error.new_password && (
                <Typography paragraph sx={{ color: "red" }}>
                  {error.new_password}
                </Typography>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="confirm_password"
                label="Confirm password"
                name="confirm_password"
                autoFocus
                onChange={(event) => {
                  setObjectForm({
                    ...objectForm,
                    ...{ confirm_password: event.target.value },
                  })
                }}
              />
              {error && error.confirm_password && (
                <Typography paragraph sx={{ color: "red" }}>
                  {error.confirm_password}
                </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 7 }}
              >
                Update password
              </Button>
            </CardContent>
          </Card>
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
