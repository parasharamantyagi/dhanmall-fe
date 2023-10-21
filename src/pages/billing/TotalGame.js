import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TablePagination, Typography } from '@mui/material';
import {
  strictValidObjectWithKeys,
  validValue,
} from '../../utils/common-utils';
import { useGamesContribution, useTotalGame } from './actions';

export default function TotalGame() {
  const [page, setPage] = React.useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const { gamesContribution } = useGamesContribution(
    '/billing/games-contribution',
    'GET',
  );
  
  const { totalGames } = useTotalGame(
    '/billing/games?page=' + page,
    'GET',
  );

  return (
    <React.Fragment>
      <Typography>All Games</Typography>
      <Typography>Invest price - {gamesContribution.gamesContribution.invest_price}</Typography>
      <Typography>Delivery price - {gamesContribution.gamesContribution.delivery_price}</Typography>
      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell>Game</TableCell>
            <TableCell>Unit</TableCell>
            <TableCell>Color</TableCell>
            <TableCell>invest_price</TableCell>
            <TableCell>delivery_price</TableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {strictValidObjectWithKeys(totalGames) &&
            validValue(totalGames.success) &&
            totalGames.totalGames.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.date + row.period}</TableCell>
                <TableCell>{row.unit ? row.unit : "N/A"}</TableCell>
                <TableCell>{row.color ? row.color : "N/A"}</TableCell>
                <TableCell>{row.invest_price}</TableCell>
                <TableCell>{row.delivery_price}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={false}
        component="div"
        count={600}
        rowsPerPage={10}
        page={page}
        onPageChange={handleChangePage}
      />
    </React.Fragment>
  );
}
