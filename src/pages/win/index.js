import * as React from 'react';
import Box from '@mui/material/Box';
import Footer from '../footer';
import GamesTable from './games';
import Header from '../header';
import {
  Backdrop,
  Button,
  CircularProgress,
  Divider,
  Typography,
} from '@mui/material';
import CurrentGame from './current-game';
import { dashboardService, gameNowService } from './actions';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import OrderList from '../orders/OrderList';
import { useNavigate } from 'react-router-dom';
import { strictValidObjectWithKeys } from '../../utils/common-utils';
import useApi from '../../hooks/useApi';

export default function Win() {
  const [gameNow, setGameNow] = React.useState({ period: 0, time: 180 });
  const navigate = useNavigate();
  const [loader, setloader] = React.useState(false);
  const [dashboard, setDashboard] = React.useState([]);
  const { data, loading, recallApi} = useApi('/order', 'GET');

  const dashboardApi = async () => {
    let response = await dashboardService();
    setDashboard(response.data?.game_history || []);
  };

  const callapi = async () => {
    setloader(true);
    let game_now = await gameNowService();
    if (game_now.success) {
      setloader(false);
      setGameNow(game_now.data);
    } else {
      setloader(false);
    }
  };


  React.useEffect(() => {
    callapi();
    dashboardApi();
  }, []);

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box
        sx={{
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
          zIndex: 0,
        }}
      >
        <Header
          amount={strictValidObjectWithKeys(gameNow) ? gameNow.ammount : 0}
        />
        <Divider />
        <CurrentGame
          gameNow={gameNow}
          apiCall={() => {
            dashboardApi();
            callapi();
            recallApi();
          }}
        />
        <Divider />
        <Box
          py={1.5}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <EmojiEventsIcon />
          <Typography>Parity Record</Typography>
        </Box>
        <Divider />
        <GamesTable data={dashboard} />
        <Divider />
        <Box
          py={1.5}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <ReceiptLongIcon />
          <Typography>My Record</Typography>
        </Box>
        <Divider />
        <OrderList data={data} loading={loading} />
        <Box
          py={1.5}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          // paddingTop={6}
          paddingBottom={10}
        >
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => navigate('/orders')}
          >
            My Orders
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
