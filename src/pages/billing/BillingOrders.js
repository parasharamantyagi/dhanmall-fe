import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { Cards } from '../../components/cards';
import { useGamesContribution } from './actions';
import { useBillingGameNowList } from '../../hooks/useBillingApi';

export default function BillingOrders() {
 const { gamesContribution } = useGamesContribution(
   '/billing/games-contribution',
   'GET',
 );
  const { billingGame } = useBillingGameNowList('billing/current-game', 'GET');
  console.log('billingGame: ', billingGame);

 console.log(gamesContribution, 'gamesContribution');
  const colors = {
    black: '#000',
    financeTextBlue: '#0d5656',
    financeTextDarkBlue: '#162574',
    financeTextYellow: '#46470d',
    financeTextBrown: '#5b3f14',
  };
  return (
    <React.Fragment>
      <Typography>Welcome</Typography>
      <Box sx={{ display: 'flex', mt: 4 }}>
        <Cards
          text="My Balance"
          subtitle="200"
          backgroundColor={colors.black}
        />
        <Cards
          text="Withdrawls"
          subtitle="200"
          backgroundColor={colors.black}
        />
        <Cards
          text="Received Balance"
          subtitle="200"
          backgroundColor={colors.black}
        />
      </Box>
      <Box sx={{ display: 'flex', my: 4 }}>
        <Cards
          text="Current Game"
          isAmount={false}
          subtitle={
            billingGame.billingGame.game_id.date +
            billingGame.billingGame.game_id.period
          }
          backgroundColor={colors.black}
        />
        <Cards
          text="Current Game Amount"
          subtitle="200"
          backgroundColor={colors.black}
        />
        <Cards text="On Red" subtitle="200" backgroundColor={colors.black} />
        <Cards text="On Green" subtitle="200" backgroundColor={colors.black} />
      </Box>
    </React.Fragment>
  );
}
