import * as React from "react";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { registerService, verifyOtpService } from "./action";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../footer";
import { strictValidObjectWithKeys, validValue } from "../../utils/common-utils";

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

export default function SignUp() {
  const [searchParams] = useSearchParams();
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
        mobile: objectForm.mobile,
        type: "registration",
      });
      if (!response.success) {
        setError({ mobile: response.message });
      } else {
        toast.success("Use 123456 now for Verification code");
        setError("");
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let errorValidation = {};
    let object = {
      nickname: data.get("nickname"),
      mobile: data.get("mobile"),
      password: data.get("password"),
      verification_code: data.get("verification_code"),
      recommendation_code: data.get("recommendation_code"),
    };
    if(!data.get("mobile")){
      errorValidation.mobile = 'Please enter a valid mobile';
    }
    if(!data.get("verification_code")){
      errorValidation.verification_code = 'Please enter verification code';
    }
    if(!data.get("password")){
      errorValidation.password = 'Please enter password';
    }
    setError(errorValidation);
    if(strictValidObjectWithKeys(errorValidation)){
      return false;
    }
    let response = await registerService(object);
    if (response.success) {
      toast.success(response.message);
      navigate("/");
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
        <img src="all-images/img-4.png" style={{ width: "100%",borderRadius:'10%',border: "33px", margin: "-30%" }} alt="title" />
        {/* </Avatar> */}
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="nickname"
                label="Nickname"
                name="nickname"
                autoComplete="name"
                onChange={(event) =>
                  setObjectForm({
                    ...objectForm,
                    ...{ nickname: event.target.value },
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
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
              <TextField
                fullWidth
                name="recommendation_code"
                label="Recommendation code"
                id="recommendation_code"
                value={
                  validValue(searchParams.get("r_code"))
                    ? searchParams.get("r_code")
                    : ""
                }
                onChange={(event) =>
                  setObjectForm({
                    ...objectForm,
                    ...{ recommendation_code: event.target.value },
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
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
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="login" variant="body2">
                Already have an account? Sign in
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
