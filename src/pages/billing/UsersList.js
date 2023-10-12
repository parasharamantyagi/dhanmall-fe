import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Button,
  CardContent,
  Grid,
  TablePagination,
  TextField,
  Typography,
} from "@mui/material";
import {
  strictValidObjectWithKeys,
  unixformatDateTime,
  validValue,
} from "../../utils/common-utils";
import { useUsersList } from "./actions";
import { defaultCurrencyFormat } from "../../utils/common-utils";

export default function UsersList() {
  const [page, setPage] = React.useState(0);
  const [mobile, setMobile] = React.useState({});
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const [searchVal, setSearchVal] = React.useState("");
  const { usersList } = useUsersList("/billing/users?page=" + page, "POST", mobile);

  const searchClick = () => {
    setMobile({mobile: searchVal});
  };

  return (
    <React.Fragment>
      <Typography>Users list</Typography>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}></Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              margin="normal"
              required
              id="outlined-basic"
              label="Seacrh user"
              name="actual_name"
              onChange={(event) => setSearchVal(event.target.value)}
            />
          </Grid>
          <Grid item xs={1}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 0, background: "#000000" }}
              onClick={() => searchClick()}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </CardContent>
      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell>Mobile</TableCell>
            <TableCell>Nickname</TableCell>
            <TableCell>Money</TableCell>
            <TableCell>Commission</TableCell>
            <TableCell>First payment</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {strictValidObjectWithKeys(usersList) &&
            validValue(usersList.success) &&
            usersList.usersList.result.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.mobile}</TableCell>
                <TableCell>{row.nickname}</TableCell>
                <TableCell>{defaultCurrencyFormat(row.money)}</TableCell>
                <TableCell>{defaultCurrencyFormat(row.commission)}</TableCell>
                <TableCell>{row.first_payment}</TableCell>
                <TableCell>{unixformatDateTime(row.createdAt)}</TableCell>
                <TableCell><Button
                    // disabled={row.status === "processing" ? false : true}
                    variant="contained"
                    sx={{ background: "#000" }}
                    // onClick={() => handleClickOpen(row._id)}
                  >
                    Approve
                  </Button></TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={false}
        component="div"
        count={
          strictValidObjectWithKeys(usersList) && validValue(usersList.success)
            ? usersList.usersList.count
            : 0
        }
        rowsPerPage={10}
        page={page}
        onPageChange={handleChangePage}
      />
    </React.Fragment>
  );
}
