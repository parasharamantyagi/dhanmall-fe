import * as React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { useBillingGameNowList } from "../../hooks/useBillingApi";
import { strictValidObjectWithKeys } from "../../utils/common-utils";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function GameNow() {
  const { billingGame } = useBillingGameNowList("billing/current-game", "GET");
  const [object, setObject] = React.useState({
    total_price: { total_amount: 0, total_delivery: 0, pick_count: 0 },
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
      console.log("Okkkkkkkk", billingGame.billingGame);
    }
  }, [billingGame]);

  const options = {
    title: {
      text: "Basic Column Chart",
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
  return (
    <React.Fragment>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    </React.Fragment>
  );
}
