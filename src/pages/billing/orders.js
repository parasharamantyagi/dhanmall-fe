import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TablePagination, Typography } from "@mui/material";
import useRechargeList from "../../hooks/useBillingApi";
import {
  strictValidObjectWithKeys,
  validValue,
} from "../../utils/common-utils";
import CanvasJSReact from "@canvasjs/react-charts";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

export default function Orders() {
  const [page, setPage] = React.useState(4);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const { rechargeList } = useRechargeList(
    "/billing/recharge?limit=10&page=2",
    "GET"
  );

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const options = {
    title: {
      text: "Basic Column Chart",
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "column",
        dataPoints: [
          { label: "0", y: 100, color: "red" },
          { label: "1", y: 15, color: "green" },
          { label: "2", y: 25, color: "red" },
          { label: "3", y: 30, color: "green" },
          { label: "4", y: 28, color: "red" },
          { label: "5", y: 28, color: "green" },
          { label: "6", y: 28, color: "red" },
          { label: "7", y: 28, color: "green" },
          { label: "8", y: 28, color: "red" },
          { label: "9", y: 28, color: "green" },
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
      <Typography>Recent Orders</Typography>
      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Ammount</TableCell>
            <TableCell>Transaction id</TableCell>
            <TableCell>Remarks</TableCell>
            <TableCell>Status</TableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {strictValidObjectWithKeys(rechargeList) &&
            validValue(rechargeList.success) &&
            rechargeList.rechargeList.recharge.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.user_id.mobile}</TableCell>
                <TableCell>{row.ammount}</TableCell>
                <TableCell>{row.transaction_id}</TableCell>
                <TableCell>{row.remarks}</TableCell>
                <TableCell>{row.status}</TableCell>
                {/* <TableCell align="right">{`$${row.ammount}`}</TableCell> */}
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={false}
        component="div"
        count={
          strictValidObjectWithKeys(rechargeList) &&
          validValue(rechargeList.success)
            ? rechargeList.rechargeList.recharge_page
            : 0
        }
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </React.Fragment>
  );
}
