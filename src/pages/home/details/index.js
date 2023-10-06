import * as React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { homeContentDummyData } from "../../../utils/constant";
import { strictFindObjectWithKey } from "../../../utils/common-utils";
import { CardMedia, Grid, CardContent } from "@mui/material";
import Footer from "../../footer";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardHeader from "../../header/header-card";

const useStyles = makeStyles((theme) => ({
  gameRoot: {
    position: "relative",
    height: "100%",
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

export default function ProductDetail({ props }) {
  const { productId } = useParams(); // Get the "productId" parameter from the URL
  const classes = useStyles(props);

  const object = strictFindObjectWithKey(
    homeContentDummyData,
    "link",
    productId
  );
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <CardHeader pageNo={false} title="Details" />
      <CardContent>
        <Box display={"flex"} justifyContent="center" py={1.5}>
          <Card className={classes.gameRoot}>
            <CardActionArea classes={{ root: classes.MuiCardActionArea }}>
              <CardMedia
                component="img"
                classes={{ root: classes.gameCover }}
                image={object.imageUrl}
                title={object.title}
              />
            </CardActionArea>
          </Card>
        </Box>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                gutterBottom
                align="center"
                variant="p1"
                component="div"
              >
                {object.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                gutterBottom
                align="center"
                variant="p3"
                component="div"
              >
                {object.description}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <Footer />
    </Box>
  );
}
