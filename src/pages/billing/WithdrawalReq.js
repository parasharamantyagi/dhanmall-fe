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
import BankDetailDialog from "../../components/BankDetailDialog";
import { useRechargeDetail } from "./actions";

export default function WithdrawalReq() {
  const response = useRechargeDetail;
  const [open, setOpen] = React.useState(false);
  const [confirmDialog, setConfirmDialog] = React.useState({});
  const [page, setPage] = React.useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const { rechargeList } = useRechargeList(
    "/billing/withdrawal-req?limit=10&page=" + page,
    "GET"
  );
  const handleClickOpen = async (recharge_id) => {
    const rechargeDetail = await response(
      "/billing/recharge-detail/" + recharge_id,
      "GET"
    );
    if (strictValidObjectWithKeys(rechargeDetail) && rechargeDetail.success) {
      setConfirmDialog(rechargeDetail.data);
      setOpen(true);
    }
  };

  const handleCancelled = async () => {
    setOpen(false);
  };

  const handleAgree = async () => {
    response("/billing/withdrawal-status/" + confirmDialog._id, "PUT", {
      status: "success",
    });
    setOpen(false);
  };
  
  const handleDissAgree = async () => {
    response("/billing/withdrawal-status/" + confirmDialog._id, "PUT", {
      status: "failure",
    });
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Typography>Recent Orders</Typography>
      <BankDetailDialog
        open={open}
        handleAgree={handleAgree}
        handleDissAgree={handleDissAgree}
        handleCancelled={handleCancelled}
        data={confirmDialog}
      />
      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Ammount</TableCell>
            <TableCell>withdraw</TableCell>
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
                <TableCell>{row.details.withdraw_amount ? row.details.withdraw_amount : row.ammount}</TableCell>
                <TableCell>{row.transaction_id}</TableCell>
                <TableCell>{row.remarks}</TableCell>
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
                    variant="contained"
                    onClick={() => handleClickOpen(row._id)}
                  >
                    Detail
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
