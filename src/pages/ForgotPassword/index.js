import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { resetPasswordService, verifyOtpService } from "./action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../footer";
import { strictValidObjectWithKeys } from "../../utils/common-utils";
import { InputAdornment } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Version © "}
      0.0.1 ({new Date().getFullYear()}){"."}
    </Typography>
  );
}

export default function ForgotPassword() {
  const [error, setError] = React.useState({
    mobile: "",
    password: "",
    verification_code: "",
  });
  const [objectForm, setObjectForm] = React.useState({});
  const navigate = useNavigate();

  const handleOtp = async () => {
    if (objectForm.mobile) {
      let response = await verifyOtpService({
        mobile: `+91${objectForm.mobile}`,
        type: "forgot_password",
      });
      if (!response.success) {
        setError({ mobile: response.message });
      } else {
        toast.success(response.message);
        setError("");
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let errorValidation = {};
    let object = {
      mobile: `+91${data.get("mobile")}`,
      password: data.get("password"),
      verification_code: data.get("verification_code"),
    };
    if (!data.get("mobile")) {
      errorValidation.mobile = "Please enter a valid mobile";
    }
    if (!data.get("verification_code")) {
      errorValidation.verification_code = "Please enter verification code";
    }
    if (!data.get("password")) {
      errorValidation.password = "Please enter password";
    }
    setError(errorValidation);
    if (strictValidObjectWithKeys(errorValidation)) {
      return false;
    }
    let response = await resetPasswordService(object);
    if (response.success) {
      toast.success(response.message);
      navigate("/login");
    } else {
      if (response.type === "verification_code") {
        setError({ verification_code: response.message });
      } else {
        setError({ mobile: response.message });
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}> */}
        <img
          src="img-4.png"
          style={{
            width: "100%",
            borderRadius: "10%",
            border: "33px",
            margin: "-30%",
          }}
          alt="title"
        />
        {/* </Avatar> */}
        <Typography component="h1" variant="h5">
          Forgot password
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="number"
                id="mobile"
                label="Mobile number"
                name="mobile"
                autoComplete="mobile"
                onChange={(event) =>
                  setObjectForm({
                    ...objectForm,
                    ...{ mobile: event.target.value },
                  })
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+91</InputAdornment>
                  ),
                }}
              />
              {error && error.mobile && (
                <Typography paragraph sx={{ color: "red" }}>
                  {error.mobile}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={(event) =>
                  setObjectForm({
                    ...objectForm,
                    ...{ password: event.target.value },
                  })
                }
              />
              {error && error.password && (
                <Typography paragraph sx={{ color: "red" }}>
                  {error.password}
                </Typography>
              )}
            </Grid>
            <Grid item xs={8}>
              <TextField
                required
                fullWidth
                name="verification_code"
                label="Verification code"
                id="verification_code"
                onChange={(event) =>
                  setObjectForm({
                    ...objectForm,
                    ...{ verification_code: event.target.value },
                  })
                }
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                fullWidth
                size="large"
                variant="contained"
                sx={{ mt: 0, mb: 0, height: "99%" }}
                onClick={() => handleOtp()}
              >
                Verify Otp
              </Button>
            </Grid>
            <Grid item xs={12}>
              {error && error.verification_code && (
                <Typography paragraph sx={{ color: "red" }}>
                  {error.verification_code}
                </Typography>
              )}
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update password
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="login" variant="body2">
                Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
      <Footer />
    </Container>
  );
}
