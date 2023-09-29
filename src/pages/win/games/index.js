import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';
import { resultByUnit } from '../../../utils/constant';
import { strictValidArrayWithLength } from '../../../utils/common-utils';

const getResult = (number) => {
  let values = resultByUnit[number];
  return (
    <div style={{ flexDirection: 'row', display: 'flex' }}>
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

export default function GamesTable({data}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
            {strictValidArrayWithLength(data) &&
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      <TableCell variant="body2" align="left">
                        {row.date + row.period}
                      </TableCell>
                      <TableCell variant="body2" align="left">
                        {row.price}
                      </TableCell>
                      <TableCell variant="body2" align="left">
                        {row.unit}
                      </TableCell>
                      <TableCell variant="body2" align="left">
                        {getResult(row.unit)}
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={false}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
