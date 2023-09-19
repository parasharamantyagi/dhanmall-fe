import * as React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Footer from "../footer";
import Header from "../header";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import "./../../index.css";
import { homeContentDummyData } from "../../utils/constant";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  margin: 15,
}));

const Img = styled("img")({
  margin: "auto",
  display: "block",
  width: 200,
  // height: "100%",
  height: 80
});

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {homeContentDummyData.map((object) => (
            <Grid item xs={6}>
              <Item>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 100, height: 128 }}>
                      <Img alt="complex" src={object.imageUrl} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          {object.title}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          {object.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          ID: {object.id}
                        </Typography>
                      </Grid>
                      {/* <Grid item>
                        <Typography sx={{ cursor: "pointer" }} variant="body2">
                          Remove
                        </Typography>
                      </Grid> */}
                    </Grid>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
}
