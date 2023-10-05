import * as React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { useBillingGameNowList } from "../../hooks/useBillingApi";
import { strictValidObjectWithKeys } from "../../utils/common-utils";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function GameNow() {
  const { billingGame } = useBillingGameNowList(
    "billing/current-game",
    "GET"
  );
  const [object, setObject] = React.useState({
    total_price: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_red: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_green: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_violet: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_0: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_1: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_2: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_3: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_4: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_5: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_6: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_7: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_8: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_9: { total_amount: 0, total_delivery: 0, pick_count: 0 },
  });

  React.useEffect(() => {
    if (strictValidObjectWithKeys(billingGame) && billingGame.success) {
      setObject(billingGame.billingGame);
    }
  }, [billingGame]);

  const options = {
    title: {
      text: "Game prediction Chart",
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "column",
        dataPoints: [
          {
            label: "Total",
            y: object.total_price.total_amount,
            color: "black",
          },
          { label: "0", y: object.pick_0.total_amount, color: "red" },
          { label: "1", y: object.pick_1.total_amount, color: "green" },
          { label: "2", y: object.pick_2.total_amount, color: "red" },
          { label: "3", y: object.pick_3.total_amount, color: "green" },
          { label: "4", y: object.pick_4.total_amount, color: "red" },
          { label: "5", y: object.pick_5.total_amount, color: "green" },
          { label: "6", y: object.pick_6.total_amount, color: "red" },
          { label: "7", y: object.pick_7.total_amount, color: "green" },
          { label: "8", y: object.pick_8.total_amount, color: "red" },
          { label: "9", y: object.pick_9.total_amount, color: "green" },
        ],
      },
    ],
  };

  const options1 = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2", // "light1", "dark1", "dark2"
    title: {
      text: "Trip Expenses",
    },
    data: [
      {
        type: "pie",
        indexLabel: "{label}: {y}%",
        startAngle: -90,
        dataPoints: [
          { y: object.pick_red.total_amount, label: "Red", color: "red" },
          { y: object.pick_green.total_amount, label: "Violet", color: "violet" },
          { y: object.pick_violet.total_amount, label: "Green", color: "green" },
        ],
      },
    ],
  };
  return (
    <React.Fragment>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      <CanvasJSChart
        options={options1}
        /* onRef={ref => this.chart = ref} */
      />
    </React.Fragment>
  );
}
