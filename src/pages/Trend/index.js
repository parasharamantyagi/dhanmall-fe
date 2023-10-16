import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import CardHeader from "../header/header-card";
import CanvasJSReact from "@canvasjs/react-charts";
import Footer from "../footer";
import { useGameHistory } from "./action";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Trend() {
  const { gameHistory } = useGameHistory("/game-history", "GET");
  const addSymbols = (e) => {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(
      Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)),
      0
    );
    if (order > suffixes.length - 1) order = suffixes.length - 1;
    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  };

  const options = {
    animationEnabled: true,
    theme: "light2",
    // title: {
    //   // text: `Geme ${
    //   //   gameHistory.gameHistory.game_id.date +
    //   //   gameHistory.gameHistory.game_id.period
    //   // }`,
    // },
    axisX: {
      title: "",
      reversed: true,
    },
    axisY: {
      // title: "Monthly Active Users",
      includeZero: true,
      labelFormatter: addSymbols,
    },
    data: [
      {
        type: "bar",
        dataPoints: [
          {
            y: gameHistory.gameHistory.game_budget.total_amount + 900,
            label: "Total",
            color: "black",
          },
          {
            y: gameHistory.gameHistory.pick_0.total_amount + 100,
            label: "0",
            color: "linear-gradient(90deg, #C8220E 50%, #9c27b0 50%)",
          },
          {
            y: gameHistory.gameHistory.pick_1.total_amount + 100,
            label: "1",
            color: "green",
          },
          {
            y: gameHistory.gameHistory.pick_2.total_amount + 100,
            label: "2",
            color: "red",
          },
          {
            y: gameHistory.gameHistory.pick_3.total_amount + 100,
            label: "3",
            color: "green",
          },
          {
            y: gameHistory.gameHistory.pick_4.total_amount + 100,
            label: "4",
            color: "red",
          },
          {
            y: gameHistory.gameHistory.pick_5.total_amount + 100,
            label: "5",
            color: "linear-gradient(90deg, #4caf50 50%, #9c27b0 50%)",
          },
          {
            y: gameHistory.gameHistory.pick_6.total_amount + 100,
            label: "6",
            color: "red",
          },
          {
            y: gameHistory.gameHistory.pick_7.total_amount + 100,
            label: "7",
            color: "green",
          },
          {
            y: gameHistory.gameHistory.pick_8.total_amount + 100,
            label: "8",
            color: "red",
          },
          {
            y: gameHistory.gameHistory.pick_9.total_amount + 100,
            label: "9",
            color: "green",
          },
        ],
      },
    ],
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <CardHeader title="Game trend" />
      <Box p={1} flexDirection="column" display="flex">
        <Card sx={{ minWidth: 275,mb:6 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="h2" sx={{textAlign: "left"}}>
                  Result: {gameHistory.gameHistory.game_id.unit}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h2" sx={{textAlign: "right"}}>
                  Period: {gameHistory.gameHistory.game_id.date + gameHistory.gameHistory.game_id.period}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" sx={{textAlign: "center", color: "#C8220E"}}>
                  Red: {gameHistory.gameHistory.pick_red.pick_count + 300}
                </Typography>
              </Grid>
              <Grid item xs={4}>
              <Typography variant="body2" sx={{textAlign: "center", color: "#9c27b0"}}>
                  Green: {gameHistory.gameHistory.pick_violet.pick_count + 150}
                </Typography>
              </Grid>
              <Grid item xs={4}>
              <Typography variant="body2" sx={{textAlign: "center", color: "#4caf50"}}>
                  Green: {gameHistory.gameHistory.pick_green.pick_count + 300}
                </Typography>
              </Grid>
            </Grid>
            <CanvasJSChart
              options={options}
              /* onRef={ref => this.chart = ref} */
            />
          </CardContent>
        </Card>
      </Box>
      <Footer />
    </Box>
  );
}
