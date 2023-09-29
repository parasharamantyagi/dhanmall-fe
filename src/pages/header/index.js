import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Paper, Typography } from '@mui/material';
import { defaultCurrencyFormat } from '../../utils/common-utils';

export default function Header({ amount }) {
  return (
    <Paper
      sx={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        background: '#000',
        p: 2,
        py: 3,
      }}
    >
      <Typography color="white" variant="h5">
        Available Balance : {defaultCurrencyFormat(amount)}
      </Typography>
      <Box mt={2}>
        <Button variant="contained" color="primary" size="small">
          Recharge
        </Button>
        <Button sx={{ color: '#fff' }} size="small">
          Trend
        </Button>
      </Box>
    </Paper>
  );
}
