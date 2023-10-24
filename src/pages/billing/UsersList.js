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
  Skeleton,
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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from 'react-router-dom';
// import AddAmountDialog from "../../components/addAmountDialog";

export default function UsersList() {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  // const [open, setOpen] = React.useState(false);
  // const [userAmount, setUserAmount] = React.useState(0);
  const [mobile, setMobile] = React.useState({});
  const [pageloder, setPageloder] = React.useState(true);
  const handleChangePage = (event, newPage) => {
    setPageloder(true);
    setPage(newPage);
  };
  const [searchVal, setSearchVal] = React.useState("");
  const { usersList } = useUsersList(
    "/billing/users?page=" + page,
    "POST",
    mobile
  );

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open_menu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    if(strictValidObjectWithKeys(usersList)){
      setPageloder(false);
    }
  }, [usersList]);

  const addAmount = (input,user_id) => {
    console.log(input);
    console.log(user_id);
    navigate(`/billing/users/${input}/${user_id}`);
    // setOpen(true);
    // setAnchorEl(null);
  };
  // const handleCancelled = () => {
  //   setOpen(false);
  // };
  // const handleAgree = () => {
  //   setOpen(false);
  // };

  

  const searchClick = () => {
    setPageloder(true);
    setMobile({ mobile: searchVal });
  };

  return (
    <React.Fragment>
      <Typography>Users list</Typography>
      {/* <AddAmountDialog
        open={open}
        handleCancelled={handleCancelled}
        handleAgree={handleAgree}
        setUserAmount={setUserAmount}
        title="Select and add an ammount .?"
        description="Please make sure before approve this payment becouse this payment will not be revert after approve .?"
      /> */}
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
            <TableCell>interest</TableCell>
            <TableCell>First payment</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Action</TableCell>
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
          {strictValidObjectWithKeys(usersList) &&
            validValue(usersList.success) &&
            usersList.usersList.result.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.mobile}</TableCell>
                <TableCell>{row.nickname}</TableCell>
                <TableCell>{defaultCurrencyFormat(row.money)}</TableCell>
                <TableCell>{defaultCurrencyFormat(row.commission)}</TableCell>
                <TableCell>{defaultCurrencyFormat(row.interest)}</TableCell>
                <TableCell>{row.first_payment}</TableCell>
                <TableCell>{unixformatDateTime(row.createdAt)}</TableCell>
                <TableCell>
                  <Button
                    id="basic-button"
                    aria-controls={open_menu ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open_menu ? "true" : undefined}
                    onClick={handleClick}
                  >
                    action
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open_menu}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    {/* <MenuItem onClick={() => addAmount('addamount',row._id)}>ADD amount</MenuItem> */}
                    <MenuItem onClick={() => addAmount('childList',row._id)}>Child list</MenuItem>
                    {/* <MenuItem onClick={() => addAmount('gameList',row._id)}>Game list</MenuItem> */}
                    <MenuItem onClick={() => addAmount('rechargeList',row._id)}>Recharge list</MenuItem>
                    {/* <MenuItem onClick={() => addAmount('withdrawalList',row._id)}>Withdrawal list</MenuItem> */}
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        )}
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
