import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, TablePagination, Typography } from "@mui/material";
import { useRechargeList } from "../../hooks/useBillingApi";
import {
  capitalizeFirstLetter,
  strictValidObjectWithKeys,
  unixformatDateTime,
  validValue,
} from "../../utils/common-utils";
import ConfirmDialog from "../../components/confirmDialog";
import { useRechargeDetail } from "./actions";

export default function RechargeReq() {
  const response = useRechargeDetail;
  const [open, setOpen] = React.useState(false);
  const [confirmDialog, setConfirmDialog] = React.useState({});
  const [page, setPage] = React.useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const { rechargeList } = useRechargeList(
    "/billing/recharge?limit=10&page=" + page,
    "GET"
  );
  const handleClickOpen = (recharge_id) => {
    setConfirmDialog(recharge_id);
    // response
    setOpen(true);
  };
  const handleAgree = () => {
    response("/billing/recharge-status/" + confirmDialog, "PUT", {
      status: "success",
    });
    setOpen(false);
  };
  const handleCancelled = () => {
    setOpen(false);
  };
  const handleDissAgree = () => {
    response("/billing/recharge-status/" + confirmDialog, "PUT", {
      status: "failure",
    });
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Typography>Recent Orders</Typography>
      <ConfirmDialog
        open={open}
        handleCancelled={handleCancelled}
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
            rechargeList.rechargeList.result.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{unixformatDateTime(row.date)}</TableCell>
                <TableCell>{row.user_id.mobile}</TableCell>
                <TableCell>{row.ammount}</TableCell>
                <TableCell>{row.details.transaction_id}</TableCell>
                <TableCell>{row.details.remarks}</TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      color: row.status
                        ? row.status === "processing"
                          ? "orange"
                          : row.status === "success"
                          ? "green"
                          : "red"
                        : "",
                    }}
                  >
                    {capitalizeFirstLetter(row.status)}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Button
                    disabled={row.status === "processing" ? false : true}
                    variant="contained"
                    sx={{ background: "#000" }}
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
            ? rechargeList.rechargeList.count
            : 0
        }
        rowsPerPage={10}
        page={page}
        onPageChange={handleChangePage}
      />
    </React.Fragment>
  );
}
