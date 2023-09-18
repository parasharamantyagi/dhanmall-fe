import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import { Button, Paper, Typography } from "@mui/material";
import AvatarWithName from "../../components/avatarname";
import {
  defaultCurrencyFormat,
} from "../../utils/common-utils";
import { withStyles, createStyles } from "@mui/styles";
import Sidebar from "./sidebar";
import useMyProfileApi from "../../hooks/useMyProfileApi";
import { strictValidObjectWithKeys } from "../../utils/common-utils";

const styles = (theme) =>
  createStyles({
    root: {
      justifyContent: "space-evenly",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "space-between",
        flexDirection: "row", // For example, change the flex direction
        // Add any other styles you want for smaller screens
      },
      // Add more breakpoints and styles as needed
    },
  });

const Profile = (props) => {
  const { myProfileData } = useMyProfileApi("/profile", "GET");
  const { classes } = props;
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Paper
        sx={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          // mb:8
          height: "110vh",
        }}
      >
        <Box sx={{ backgroundColor: "#000", p: 2, py: 3 }}>
          <AvatarWithName name="Bharat Chhabra" />
          <Typography gutterBottom color="secondary">
            Mobile Number :{" "}
            {strictValidObjectWithKeys(myProfileData)
              ? myProfileData.myProfile.nickname
              : "N/A"}
          </Typography>
          <Typography gutterBottom color="secondary">
            ID : {strictValidObjectWithKeys(myProfileData)
              ? myProfileData.myProfile.promotion_code
              : "N/A"}
          </Typography>
          <Box display="flex" mt={2} className={classes.root}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography gutterBottom color="secondary">
                {defaultCurrencyFormat(strictValidObjectWithKeys(myProfileData) ? myProfileData.myProfile.money : 0)}
              </Typography>
              <Button variant="contained" color="primary" size="small">
                Recharge
              </Button>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography gutterBottom color="secondary">
                {defaultCurrencyFormat(strictValidObjectWithKeys(myProfileData) ? myProfileData.myProfile.commission : 0)}
              </Typography>
              <Button variant="contained" color="primary" size="small">
                Commission
              </Button>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography gutterBottom color="secondary">
                {defaultCurrencyFormat(strictValidObjectWithKeys(myProfileData) ? myProfileData.myProfile.interest : 0)}
              </Typography>
              <Button variant="contained" color="primary" size="small">
                Interest
              </Button>
            </Box>
          </Box>
        </Box>
        <Sidebar />
      </Paper>

      <Footer />
    </Box>
  );
};
export default withStyles(styles)(Profile);
