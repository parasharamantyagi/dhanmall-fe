import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";
import { dashboardService } from "../actions";
import { resultByUnit } from "../../../utils/constant";

const getResult = (number) => {
  let values = resultByUnit[number];
  return (
    <div style={{ flexDirection: "row", display: "flex" }}>
      {values.map((res) => {
        return (
          <Box
            sx={{
              height: 20,
              width: 20,
              background: res,
              borderRadius: 20,
              ml: 0.2,
            }}
          />
        );
      })}
    </div>
  );
};

export default function GamesTable() {
  const [page, setPage] = React.useState(0);
  const [gameDatas, setGameDatas] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  React.useEffect(() => {
    const callapi = async () => {
      let response = await dashboardService();
      setGameDatas(response.data.game_history);
    };
    callapi();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table size="small" stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Period</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gameDatas
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell align="left">{row.period}</TableCell>
                    <TableCell align="left">{row.price}</TableCell>
                    <TableCell align="left">{row.unit}</TableCell>
                    <TableCell align="left">{getResult(row.unit)}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={false}
        component="div"
        count={gameDatas.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
