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
  strictValidObjectWithKeys,
} from "../../../utils/common-utils";
import { useBillingUserChild } from "./../actions";
import { useParams } from "react-router-dom";

export default function UserChildList() {
  const [page, setPage] = React.useState(0);
  const { id } = useParams();
  const [pageloder, setPageloder] = React.useState(true);
  const handleChangePage = (event, newPage) => {
    setPageloder(true);
    setPage(newPage);
  };
  const { billingUserChild } = useBillingUserChild(
    "/billing/user-child/"+id+"?page=" + page,
    "GET"
  );

  return (
    <React.Fragment>
      <Typography>Users Child</Typography>
      
      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell>water_reward</TableCell>
            <TableCell>first_reward</TableCell>
          </TableRow>
        </TableHead>
        {pageloder ?
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
                <TableCell>{row.water_reward}</TableCell>
                <TableCell>{row.first_reward}</TableCell>
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
