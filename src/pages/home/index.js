import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import Footer from "../footer";
import Typography from "@mui/material/Typography";
import "./../../index.css";
import { homeContentDummyData } from "../../utils/constant";
import CardHeader from "../header/header-card";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <CardHeader pageNo={true} title="Welcome" />
      <CardContent>
        <Grid container spacing={2}>
          {homeContentDummyData.map((object) => (
            <Grid item xs={6}>
              <Card sx={{ width: "100%", borderRadius: 1 }}>
                <Box display={" flex"} justifyContent="center" py={1.5}>
                  <CardMedia
                    sx={{
                      height: 80,
                      width: 150,
                    }}
                    image={object.imageUrl}
                    title="green iguana"
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {object.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {object.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ background: "#000000" }}
                  >
                    Make Bidd
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => {
                      navigate("/detail/" + object.link);
                    }}
                    sx={{ background: "#000000" }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <Footer />
    </Box>
  );
}
