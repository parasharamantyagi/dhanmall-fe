import * as React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { homeContentDummyData } from "../../../utils/constant";
import { strictFindObjectWithKey } from "../../../utils/common-utils";
import { CardMedia, Grid, CardContent, Divider } from "@mui/material";
import Footer from "../../footer";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChairAltIcon from "@mui/icons-material/ChairAlt";
import SensorDoorRoundedIcon from "@mui/icons-material/SensorDoorRounded";
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
      <CardHeader pageNo={false} title={object.title} />
      <CardContent sx={{ mb: 7 }}>
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
          <Grid container spacing={0}>
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
          <Divider />
          <Grid container spacing={2} sx={{ mt: 0.5, mb: 1 }}>
            <Grid item xs={3}>
              <div
                style={{
                  display: "inline-flex",
                  VerticalAlign: "text-bottom",
                }}
              >
                <PermIdentityIcon sx={{ mt: 0 }} />
                <Typography
                  gutterBottom
                  variant="p4"
                  sx={{ mt: 0.5 }}
                  component="div"
                >
                  {" "}
                  4
                </Typography>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div
                style={{
                  display: "inline-flex",
                  VerticalAlign: "text-bottom",
                }}
              >
                <BusinessCenterIcon sx={{ mt: 0 }} />
                <Typography
                  gutterBottom
                  variant="p4"
                  sx={{ mt: 0.5 }}
                  component="div"
                >
                  {" "}
                  3
                </Typography>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div
                style={{
                  display: "inline-flex",
                  VerticalAlign: "text-bottom",
                }}
              >
                <ChairAltIcon sx={{ mt: 0 }} />
                <Typography
                  gutterBottom
                  variant="p4"
                  sx={{ mt: 0.5 }}
                  component="div"
                >
                  {" "}
                  Auto
                </Typography>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div
                style={{
                  display: "inline-flex",
                  VerticalAlign: "text-bottom",
                }}
              >
                <SensorDoorRoundedIcon sx={{ mt: 0 }} />
                <Typography
                  gutterBottom
                  variant="p4"
                  sx={{ mt: 0.5 }}
                  component="div"
                >
                  {" "}
                  4
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Divider />
          <Grid item xs={12}>
            <Typography gutterBottom variant="p4" component="div">
              Rent Rolls Royce Wraith 2018 in Dubai for the Price of 1300 AED /
              Day. Best Price Guaranteed on Daily, Weekly and Monthly Basis in
              the United Arab Emirates.
            </Typography>
            <Typography gutterBottom variant="p4" component="div">
              This is a 2 Door Coupe Car with 4 Seats inside and having an
              automatic transmission. Furthermore, the minimum Age Requirement
              to Drive this Car is 21.
            </Typography>
            <Typography mt={2} variant="h4">
              What insurance include in this car?
            </Typography>
            <Typography gutterBottom variant="p4" component="div">
              This Car has comprehensive insurance.
            </Typography>
            {/*  */}
            <Typography mt={2} variant="h4">
              Deposit will be cash or credit card?
            </Typography>
            <Typography gutterBottom variant="p4" component="div">
              We always prefer to deposit through credit cards. As this is much
              easier for us to transfer you back in a safe way.
            </Typography>
            {/*  */}
            <Typography mt={2} variant="h4">
              Can i get full tank of petrol?
            </Typography>
            <Typography gutterBottom variant="p4" component="div">
              As per company policy, you have to return back the car at the same
              level of fuel. So if you want a car with a full tank then you can
              ask from us but should be returned back on the same fuel level.
            </Typography>
            {/*  */}
            <Typography mt={2} variant="h4">
              What is the policy for extra kilometers?
            </Typography>
            <Typography gutterBottom variant="p4" component="div">
              You will be charged 5 AED per extra Kilometer for Rolls Royce
              Wraith 2018.
            </Typography>
            {/*  */}
            <Typography mt={2} variant="h4">
              Delivery and Pickup charges?
            </Typography>
            <Typography gutterBottom variant="p4" component="div">
              We offer free delivery and pickup in Dubai including Dubai
              International Airport depending upon time. Furthermore, we also
              deliver outside to Dubai like Abu Dhabi, Sharjah, Fujairah, and
              Ajman but there will be some charges depending upon location.
            </Typography>
          </Grid>
        </Box>
      </CardContent>
      <Footer />
    </Box>
  );
}
