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
import { loginService } from "./action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../footer";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

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

export default function SignIn() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const [error] = React.useState("");
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let response = await loginService({
      mobile: `+91${data.get("mobile")}`,
      password: data.get("password"),
    });
    if (response.success) {
      toast.success(response.message);
      navigate("/mine");
    } else {
      toast.error(response.message);
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
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            type="number"
            id="mobile_number"
            label="Mobile Number"
            name="mobile"
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+91</InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={values.showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment sx={{ ml: 0,width: '9%' }} position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {error && (
            <Typography paragraph sx={{ color: "red" }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="forgot-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                Sign Up
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
