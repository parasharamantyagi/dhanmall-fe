import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid } from "@mui/material";
import Footer from "../footer";
import CardHeader from "../header/header-card";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <CardHeader pageNo={false} title="Not Found" />
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography
              gutterBottom
              align="center"
              variant="h1"
              component="div"
              fontSize={150}
            >
              404
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              gutterBottom
              align="center"
              variant="h1"
              component="div"
              fontSize={50}
            >
              This page not found
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              gutterBottom
              align="center"
              variant="p3"
              component="div"
            >
              <Button
                sx={{ width: 200 }}
                variant="contained"
                size="small"
                onClick={() => {
                  navigate('/');
                }}
              >
                Go back
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
}
