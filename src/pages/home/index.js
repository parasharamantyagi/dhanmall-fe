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
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {homeContentDummyData.map((object) => (
            <Grid mt={3} item sm={6} xs={12} md={3} lg={2}>
              <Card sx={{ maxWidth: 400, borderRadius: 1, minWidth: 100 }}>
                <Box display={"flex"} justifyContent="center" py={1.5}>
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
                  <Button variant="contained" size="small">
                    Order
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => {
                      navigate('/detail/'+object.link);
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
}
