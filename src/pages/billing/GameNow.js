import * as React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { useBillingGameNowList } from "../../hooks/useBillingApi";
import {
  strictValidObjectWithKeys, sumOfArray,
} from "../../utils/common-utils";
import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useRechargeDetail } from "./actions";
import { strictFilterArrayWithKey } from "../../utils/common-utils";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function GameNow() {
  let apiCall = useRechargeDetail;
  const { billingGame } = useBillingGameNowList("billing/current-game", "GET");
  const [gameValue, setGameValue] = React.useState(10);
  const renderCount = (number) => {
    const isEven = number % 2 === 0;
    const buttonColor = isEven ? 'error' : 'success';
    return (
      <Grid item xs={2.4}>
        <Button
          variant="contained"
          color={buttonColor}
          sx={
            number === 5
              ? {
                  background:
                    'linear-gradient(90deg, #4caf50 50%, #9c27b0 50%)',
                }
              : number === 0
              ? {
                  background:
                    'linear-gradient(90deg, #C8220E 50%, #9c27b0 50%)',
                }
              : undefined
          }
          size="large"
          mt={1}
        >
          {number}
        </Button>
      </Grid>
    );
  };
  
  const handleSubmit = async () => {
    if (gameValue !== "no") {
      let res = await apiCall("billing/set-game", "POST", {
        game_id: billingGame.billingGame.game_id._id,
        set_unit: 1,
        set_value: gameValue,
      });
      if(strictValidObjectWithKeys(res)){
        window.location.replace('');
      }
    }
  };
  const options = {
    title: {
      text:
        "Game prediction Chart " + billingGame.billingGame.game_id.date + billingGame.billingGame.game_id.period,
    },
    data: [
      {
        type: "column",
        dataPoints: [
          {
            label: "Total",
            y: billingGame.billingGame.total_price.total_amount,
            color: "black",
          },
          { label: "0", y: billingGame.billingGame.pick_0.total_amount, color: "red" },
          { label: "1", y: billingGame.billingGame.pick_1.total_amount, color: "green" },
          { label: "2", y: billingGame.billingGame.pick_2.total_amount, color: "red" },
          { label: "3", y: billingGame.billingGame.pick_3.total_amount, color: "green" },
          { label: "4", y: billingGame.billingGame.pick_4.total_amount, color: "red" },
          { label: "5", y: billingGame.billingGame.pick_5.total_amount, color: "green" },
          { label: "6", y: billingGame.billingGame.pick_6.total_amount, color: "red" },
          { label: "7", y: billingGame.billingGame.pick_7.total_amount, color: "green" },
          { label: "8", y: billingGame.billingGame.pick_8.total_amount, color: "red" },
          { label: "9", y: billingGame.billingGame.pick_9.total_amount, color: "green" },
        ],
      },
    ],
  };

  const options1 = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2", // "light1", "dark1", "dark2"
    title: {
      text: "Color Expenses",
    },
    data: [
      {
        type: "pie",
        indexLabel: "{label}: {y}%",
        startAngle: -90,
        dataPoints: [
          {
            y:
              (billingGame.billingGame.pick_red.total_amount /
                (billingGame.billingGame.pick_red.total_amount +
                  billingGame.billingGame.pick_green.total_amount +
                  billingGame.billingGame.pick_violet.total_amount)) *
              100,
            label: "Red(" + billingGame.billingGame.pick_red.total_amount + ")",
            color: "red",
          },
          {
            y:
              (billingGame.billingGame.pick_violet.total_amount /
                (billingGame.billingGame.pick_red.total_amount +
                  billingGame.billingGame.pick_green.total_amount +
                  billingGame.billingGame.pick_violet.total_amount)) *
              100,
            label: "Violet(" + billingGame.billingGame.pick_violet.total_amount + ")",
            color: "violet",
          },
          {
            y:
              (billingGame.billingGame.pick_green.total_amount /
                (billingGame.billingGame.pick_red.total_amount +
                  billingGame.billingGame.pick_green.total_amount +
                  billingGame.billingGame.pick_violet.total_amount)) *
              100,
            label: "Green(" + billingGame.billingGame.pick_green.total_amount + ")",
            color: "green",
          },
        ],
      },
    ],
  };
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
          <CanvasJSChart
            options={options}
            /* onRef={ref => this.chart = ref} */
          />
          <Divider />
          <Divider />
          <Divider />
          <Divider />
          <Divider />
          <Divider />
          <CanvasJSChart
            options={options1}
            /* onRef={ref => this.chart = ref} */
          />
        </Grid>
        <Grid item xs={12} sm={3} mt={4}>
          {"Set Value -> "}
          {billingGame.billingGame.game_id.detail.set_unit === 0
            ? "No"
            : billingGame.billingGame.game_id.detail.set_value}
          <br />
          <FormControl>
            <RadioGroup name="set_number" defaultValue={10}>
              <FormControlLabel
                control={<Radio />}
                value={0}
                label={renderCount(0)}
                onClick={() => setGameValue(0)}
              />
              <FormControlLabel
                control={<Radio />}
                value={1}
                label={renderCount(1)}
                onClick={() => setGameValue(1)}
              />
              <FormControlLabel
                control={<Radio />}
                value={2}
                label={renderCount(2)}
                onClick={() => setGameValue(2)}
              />
              <FormControlLabel
                control={<Radio />}
                value={3}
                label={renderCount(3)}
                onClick={() => setGameValue(3)}
              />
              <FormControlLabel
                control={<Radio />}
                value={4}
                label={renderCount(4)}
                onClick={() => setGameValue(4)}
              />
              <FormControlLabel
                control={<Radio />}
                value={5}
                label={renderCount(5)}
                onClick={() => setGameValue(5)}
              />
              <FormControlLabel
                control={<Radio />}
                value={6}
                label={renderCount(6)}
                onClick={() => setGameValue(6)}
              />
              <FormControlLabel
                control={<Radio />}
                value={7}
                label={renderCount(7)}
                onClick={() => setGameValue(7)}
              />
              <FormControlLabel
                control={<Radio />}
                value={8}
                label={renderCount(8)}
                onClick={() => setGameValue(8)}
              />
              <FormControlLabel
                control={<Radio />}
                value={9}
                label={renderCount(9)}
                onClick={() => setGameValue(9)}
              />
            </RadioGroup>
            <Button
              type="submit"
              size="medium"
              variant="contained"
              sx={{ mt: 3, mb: 7 }}
              onClick={handleSubmit}
            >
              Set
            </Button>
            <Divider />
            {"Game record"}
            <br />
            {"total_amount -> "+ sumOfArray(strictFilterArrayWithKey(strictFilterArrayWithKey(billingGame.game_record,'game_budget'),'total_amount'))}
            <br />
            {"total_delivery -> "+ sumOfArray(strictFilterArrayWithKey(strictFilterArrayWithKey(billingGame.game_record,'game_budget'),'total_delivery'))}
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
