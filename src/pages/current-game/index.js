import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { createStyles, withStyles } from '@mui/styles';

const styles = (theme) =>
  createStyles({
    root: {
      justifyContent: 'space-around',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'space-between',
        flexDirection: 'row', // For example, change the flex direction
        // Add any other styles you want for smaller screens
      },
      // Add more breakpoints and styles as needed
    },
  });

const CurrentGame = (props) => {
  const { classes } = props;
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  console.log('timeLeft: ', timeLeft);

  // Function to format the time as mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0',
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
    const isEven = Number(number) % 2 === 0;
    const buttonColor = isEven ? 'primary' : 'primary';
    // const buttonColor = isEven ? 'error' : 'success';
    return (
      <Grid item xs={2.4}>
        <Button
          style={{ width: 250 }}
          variant="contained"
          color={buttonColor}
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
        <Box display="flex" flexDirection="column" alignItems="center">
          <Button variant="contained" color="success" size="large">
            Join green
          </Button>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Button variant="contained" color="purple" size="large">
            Join Purple
          </Button>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Button variant="contained" color="error" size="large">
            Join Red
          </Button>
        </Box>
      </Box>
      <Grid my={3} container spacing={1}>
        {renderCount('0')}
        {renderCount('1')}
        {renderCount('2')}
        {renderCount('3')}
        {renderCount('4')}
        {renderCount('5')}
        {renderCount('6')}
        {renderCount('7')}
        {renderCount('8')}
        {renderCount('9')}
      </Grid>
    </Box>
  );
};

export default withStyles(styles)(CurrentGame);
