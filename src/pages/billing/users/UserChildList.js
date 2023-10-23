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
import {
  strictValidObjectWithKeys, validValue,
} from "../../../utils/common-utils";
import { useBillingUserChild } from "./../actions";
import { useParams } from "react-router-dom";

export default function UserChildList() {
  const [page, setPage] = React.useState(0);
  const { id } = useParams();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const { billingUserChild, loading } = useBillingUserChild(
    "/billing/user-child/"+id+"?page=" + page,
    "GET"
  );

  return (
    <React.Fragment>
      <Typography>Users Child</Typography>
      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell>type</TableCell>
            <TableCell>First reward</TableCell>
            <TableCell>Water reward</TableCell>
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
          {strictValidObjectWithKeys(billingUserChild) &&
            billingUserChild.billingUserChild.result.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.first_reward}</TableCell>
                <TableCell>{row.water_reward}</TableCell>
              </TableRow>
            ))}
        </TableBody>
        )}
      </Table>
      <TablePagination
        rowsPerPageOptions={false}
        component="div"
        count={
          strictValidObjectWithKeys(billingUserChild) &&
          validValue(billingUserChild.success)
            ? billingUserChild.billingUserChild.count
            : 0
        }
        rowsPerPage={10}
        page={page}
        onPageChange={handleChangePage}
      />
    </React.Fragment>
  );
}
