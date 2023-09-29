import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { createStyles, withStyles } from "@mui/styles";
import AlertDialog from "../../../components/dialog";
import { makeGameOrderApi } from "../actions";
import { arrayOfObject, mergeObject } from "../../../utils/common-utils";
import { contractAmmount } from "../../../utils/constant";
import { toast } from "react-toastify";

const styles = (theme) =>
  createStyles({
    root: {
      justifyContent: "space-around",
      [theme.breakpoints.down("lg")]: {
        justifyContent: "space-between",
        flexDirection: "row", // For example, change the flex direction
        // Add any other styles you want for smaller screens
      },
      // Add more breakpoints and styles as needed
    },
    numbers: {
      width: 200,
      [theme.breakpoints.down("lg")]: {
        width: "auto",
      },
      // Add more breakpoints and styles as needed
    },
    button: {
      width: 150,
      [theme.breakpoints.down("lg")]: {
        width: 120,
      },
      [theme.breakpoints.down("sm")]: {
        width: 105,
      },
    },
  });

const CurrentGame = ({ classes, apiCall, gameNow }) => {
  const [timeLeft, setTimeLeft] = useState(gameNow.time); // 3 minutes in seconds
  const [open, setOpen] = useState(false);
  const [object, setObject] = useState({
    game_id: gameNow._id,
    label: "",
    pick: "",
    contract_type: 1,
    type: 1,
    background: "#000",
  });

  const gameNowTime = () => {
    const currentTimestamp = Date.now();
    // Convert it to seconds
    const currentSeconds = Math.floor(currentTimestamp / 1000);
    // Calculate the current second within the 180-second cycle
    const secondInCycle = currentSeconds % 180;

    return 180 - secondInCycle;
  };

  useEffect(() => {
    setTimeLeft(gameNowTime());
  }, [gameNow.time]);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeout(() => {
        apiCall();
      }, 3000);
    }
  }, [timeLeft]);

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
      } else {
        setTimeLeft(gameNowTime());
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
          disabled={timeLeft <= 30}
          onClick={() => {
            setObject({
              game_id: gameNow._id,
              label: `Select ${number}`,
              pick: number,
              contract_type: 1,
              type: 2,
              background: "#000",
            });
            setOpen(true);
          }}
          className={classes.numbers}
          variant="contained"
          color={buttonColor}
          sx={
            number === 5 && timeLeft > 30
              ? {
                  background:
                    "linear-gradient(90deg, #4caf50 50%, #9c27b0 50%)",
                }
              : number === 0 && timeLeft > 30
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

  const onSubmit = async (state) => {
    // contract_type=1&contract_number=8&type=2&pick=2&game_id=451444
    let response = await makeGameOrderApi(
      mergeObject(
        {
          game_id: object.game_id,
          pick: object.pick,
          type: object.type,
        },
        {
          contract_type: arrayOfObject(
            contractAmmount,
            { ammount: state.selected },
            "id"
          ),
          contract_number: state.value,
        }
      )
    );
    if (response.success) {
      toast.success(response.message);
      setOpen(false);
    } else {
      toast.error(response.message);
    }
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
            {gameNow.date + gameNow.period}
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
          disabled={timeLeft <= 30}
          className={classes.button}
          onClick={() => {
            setObject({
              game_id: gameNow._id,
              label: "Join Green",
              pick: "green",
              contract_type: 1,
              type: 1,
              background: "#4caf50",
            });
            setOpen(true);
          }}
          variant="contained"
          color="success"
          size="medium"
        >
          Join Green
        </Button>
        <Button
          disabled={timeLeft <= 30}
          className={classes.button}
          onClick={() => {
            setObject({
              game_id: gameNow._id,
              label: "Join Violet",
              pick: "violet",
              contract_type: 1,
              type: 1,
              background: "#9c27b0",
            });
            setOpen(true);
          }}
          variant="contained"
          color="violet"
          size="medium"
        >
          Join Violet
        </Button>
        <Button
          disabled={timeLeft <= 30}
          className={classes.button}
          onClick={() => {
            setObject({
              game_id: gameNow._id,
              label: "Join Red",
              pick: "red",
              contract_type: 1,
              type: 1,
              background: "#C8220E",
            });
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
      <AlertDialog
        object={object}
        open={open}
        setOpen={setOpen}
        onSubmit={(e) => onSubmit(e)}
      />
    </Box>
  );
};

export default withStyles(styles)(CurrentGame);
