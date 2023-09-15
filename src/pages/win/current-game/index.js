import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { createStyles, withStyles } from "@mui/styles";
import AlertDialog from "../../../components/dialog";
import { strictValidObjectWithKeys } from "../../../utils/common-utils";

const styles = (theme) =>
  createStyles({
    root: {
      justifyContent: "space-around",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "space-between",
        flexDirection: "row", // For example, change the flex direction
        // Add any other styles you want for smaller screens
      },
      // Add more breakpoints and styles as needed
    },
    numbers: {
      width: 200,
      [theme.breakpoints.down("sm")]: {
        width: "auto",
      },
      // Add more breakpoints and styles as needed
    },
  });

const CurrentGame = (props) => {
  const { classes } = props;
  const [timeLeft, setTimeLeft] = useState(props.gameNow.time); // 3 minutes in seconds
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    setTimeLeft(props.gameNow.time)
  }, [props.gameNow.time]);

  // Function to format the time as mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  // Use useEffect to start the countdown and update the timeLeft state
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [timeLeft]);

  const renderCount = (number) => {
    const isEven = number % 2 === 0;
    const buttonColor = isEven ? "error" : "success";
    return (
      <Grid item xs={2.4}>
        <Button
          onClick={() => {
            setLabel(`Select ${number}`);
            setOpen(true);
          }}
          className={classes.numbers}
          variant="contained"
          color={buttonColor}
          sx={
            number === 5
              ? {
                  background:
                    "linear-gradient(90deg, #4caf50 50%, #9c27b0 50%)",
                }
              : number === 0
              ? {
                  background:
                    "linear-gradient(90deg, #C8220E 50%, #9c27b0 50%)",
                }
              : undefined
          }
          size="large"
        >
          {number}
        </Button>
      </Grid>
    );
  };
  return (
    <Box py={2} px={2}>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Box display="flex" flexDirection="row" alignItems="center">
            <EmojiEventsIcon />
            <Typography ml={1} variant="p5">
              Period
            </Typography>
          </Box>
          <Typography pt={2} variant="h1">
            20230913464
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography ml={1} variant="p4">
            Count Down
          </Typography>
          <Typography mt={1} sx={{ fontSize: 32 }} variant="p2">
            {formatTime(timeLeft)}
          </Typography>
        </Box>
      </Box>

      <Box display="flex" mt={2} className={classes.root}>
        <Button
          onClick={() => {
            setLabel("Join Green");
            setOpen(true);
          }}
          variant="contained"
          color="success"
          size="medium"
        >
          Join Green
        </Button>
        <Button
          onClick={() => {
            setLabel("Join Purple");
            setOpen(true);
          }}
          variant="contained"
          color="purple"
          size="medium"
        >
          Join Purple
        </Button>
        <Button
          onClick={() => {
            setLabel("Join Red");
            setOpen(true);
          }}
          variant="contained"
          color="error"
          size="medium"
        >
          Join Red
        </Button>
      </Box>
      <Grid my={3} container spacing={1}>
        {renderCount(0)}
        {renderCount(1)}
        {renderCount(2)}
        {renderCount(3)}
        {renderCount(4)}
        {renderCount(5)}
        {renderCount(6)}
        {renderCount(7)}
        {renderCount(8)}
        {renderCount(9)}
      </Grid>
      <AlertDialog label={label} open={open} setOpen={setOpen} />
    </Box>
  );
};

export default withStyles(styles)(CurrentGame);
