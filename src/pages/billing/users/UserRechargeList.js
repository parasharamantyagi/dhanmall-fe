import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Skeleton,
  TablePagination,
  Typography,
} from "@mui/material";
import { useBillingUserPayments } from "./../actions";
import { useParams } from "react-router-dom";
import { strictValidObjectWithKeys, unixformatDateTime } from "../../../utils/common-utils";

export default function UserRechargeList() {
  const [page, setPage] = React.useState(0);
  const { id } = useParams();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const { billingUserPayments, loading } = useBillingUserPayments(
    "/billing/user-payments?page=" + page,
    "POST",{user_id: id}
  );
  console.log(billingUserPayments);
  return (
    <React.Fragment>
      <Typography>Users Child</Typography>
      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell>Mobile</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Ammount</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        {loading ?
          [1, 2, 3, 4, 5, 6].map((res) => {
            return (
              <TableRow key={res}>
                <TableCell colSpan={7}>
                  <Skeleton
                    sx={{ height: 50, mt: 1, width: "100%", cs: 6 }}
                    animation="wave"
                    variant="rectangular"
                  />
                </TableCell>
              </TableRow>
            );
          }) : (
        <TableBody>
         {strictValidObjectWithKeys(billingUserPayments) &&
            billingUserPayments.billingUserPayments.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.user_id.mobile}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.ammount}</TableCell>
                <TableCell>{unixformatDateTime(row.date)}</TableCell>
              </TableRow>
            ))}
        </TableBody>
        )}
      </Table>
      <TablePagination
        rowsPerPageOptions={false}
        component="div"
        count={50}
        rowsPerPage={10}
        page={page}
        onPageChange={handleChangePage}
      />
    </React.Fragment>
  );
}