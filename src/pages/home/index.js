import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../footer";
import Typography from "@mui/material/Typography";
import "./../../index.css";
import { homeContentDummyData } from "../../utils/constant";
import CardHeader from "../header/header-card";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  gameRoot: {
    position: "relative",
    height: "100%",
    margin: 2,
  },
  gameCover: {
    zIndex: 1,
    height: "inherit",
  },
  MuiCardActionArea: {
    height: "inherit",
    zIndex: 1,
  },
}));

export default function Home({ props }) {
  const navigate = useNavigate();
  const classes = useStyles(props);
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <CardHeader pageNo={true} title="Welcome" />
      <CardContent sx={{ mb: 8 }}>
        <Grid container spacing={2}>
          {homeContentDummyData.map((object) => (
            <Grid item xs={6}>
              <Card sx={{ width: "100%", borderRadius: 1 }}>
                <Box display={" flex"} justifyContent="center" py={1.5}>
                  <Card className={classes.gameRoot}>
                    <CardActionArea
                      classes={{ root: classes.MuiCardActionArea }}
                    >
                      <CardMedia
                        component="img"
                        classes={{ root: classes.gameCover }}
                        image={object.imageUrl}
                        title={object.title}
                      />
                    </CardActionArea>
                  </Card>
                </Box>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    width={"100%"}
                  >
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
                    Bidd
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => {
                      navigate("/detail/" + object.link);
                    }}
                    sx={{ background: "#000000" }}
                  >
                    Details
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
