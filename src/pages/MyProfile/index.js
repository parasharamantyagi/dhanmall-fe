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
import { updateProfileService } from "./action";
import { strictValidObjectWithKeys } from "../../utils/common-utils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MyProfile() {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile.data);
  const [objectForm, setObjectForm] = React.useState({
    nickname: profile.nickname,
    email: profile.email,
  });
  

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
      nickname: data.get("nickname"),
      email: data.get("email"),
    };
    let response = await updateProfileService(object);
    if (strictValidObjectWithKeys(response) && response.success) {
      toast.success(response.message);
      navigate("/mine");
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
      <CardHeader title="Update profile" />
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
                id="nickname"
                label="Nickname"
                name="nickname"
                value={objectForm.nickname}
                onChange={(event) =>
                  setObjectForm({
                    ...objectForm,
                    ...{ nickname: event.target.value },
                  })
                }
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                value={objectForm.email}
                onChange={(event) =>
                  setObjectForm({
                    ...objectForm,
                    ...{ email: event.target.value },
                  })
                }
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 7,background:'#000000' }}
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
