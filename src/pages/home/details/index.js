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
import Footer from "../../footer";
import Typography from "@mui/material/Typography";
import "./../../../index.css";
import { homeContentDummyData } from "../../../utils/constant";
import CardHeader from "../../header/header-card";
import { useParams } from "react-router-dom";
import { strictFindObjectWithKey } from "../../../utils/common-utils";

export default function ProductDetail() {
  const { productId } = useParams(); // Get the "productId" parameter from the URL
  const object = strictFindObjectWithKey(homeContentDummyData, "link", productId);
  
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
          <Card sx={{ minWidth: "100%", margin: 2 }}>
            <CardContent>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Grid mt={12} item sm={12} xs={12} md={3} lg={2}>
                      <Card
                        sx={{ maxWidth: '100%', borderRadius: 1, minWidth: 100 }}
                      >
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
                          <Button variant="contained" size="small">
                            Learn More
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
}
