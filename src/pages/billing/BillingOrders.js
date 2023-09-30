import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, TablePagination, Typography } from "@mui/material";
import { useRechargeList } from "../../hooks/useBillingApi";
import {
  strictValidObjectWithKeys,
  unixformatDateTime,
  validValue,
} from "../../utils/common-utils";
import ConfirmDialog from "../../components/confirmDialog";

export default function BillingOrders() {
  const [open, setOpen] = React.useState(false);
  const [confirmDialog, setConfirmDialog] = React.useState({});
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
  const handleClickOpen = (recharge_id) => {
    setConfirmDialog(recharge_id);
    setOpen(true);
  };
  const handleAgree = () => {
    console.log('yyyyyyyyyyyyy');
    setOpen(false);
  };
  const handleDissAgree = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Typography>Recent Orders</Typography>
      <ConfirmDialog
        open={open}
        handleAgree={handleAgree}
        handleDissAgree={handleDissAgree}
        title=" Are you sure to approve this payment .?"
        description="Please make sure before approve this payment becouse this payment will not be revert after approve .?"
        data={confirmDialog}
      />
      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Ammount</TableCell>
            <TableCell>Transaction id</TableCell>
            <TableCell>Remarks</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {strictValidObjectWithKeys(rechargeList) &&
            validValue(rechargeList.success) &&
            rechargeList.rechargeList.recharge.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{unixformatDateTime(row.date)}</TableCell>
                <TableCell>{row.user_id.mobile}</TableCell>
                <TableCell>{row.ammount}</TableCell>
                <TableCell>{row.transaction_id}</TableCell>
                <TableCell>{row.remarks}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleClickOpen(row._id)}
                  >
                    Approve
                  </Button>
                </TableCell>
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
