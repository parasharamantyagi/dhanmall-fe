import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { homeContentDummyData } from "../../../utils/constant";
import { strictFindObjectWithKey } from "../../../utils/common-utils";
import { CardMedia, Grid } from "@mui/material";
import Footer from "../../footer";
import CardHeader from "../../header/header-card";

export default function ProductDetail() {
  const { productId } = useParams(); // Get the "productId" parameter from the URL
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
      <Box display={"flex"} justifyContent="center" py={1.5}>
        <CardMedia
          sx={{
            height: 220,
            width: 400,
          }}
          image={object.imageUrl}
          title="green iguana"
        />
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
      <Footer />
    </Box>
  );
}
