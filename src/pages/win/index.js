import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import GamesTable from "./games";
import Header from "../header";
import {
  Backdrop,
  Button,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import CurrentGame from "./current-game";
import { dashboardService, gameNowService } from "./actions";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import OrderList from "../orders/OrderList";
import { useNavigate } from "react-router-dom";
import { strictValidObjectWithKeys } from "../../utils/common-utils";
import useApi from "../../hooks/useApi";

export default function Win() {
  const [orderPage, setOrderPage] = React.useState(0);
  const [gameNow, setGameNow] = React.useState({ period: 0, time: 180 });
  const navigate = useNavigate();
  const [loader, setloader] = React.useState(false);
  const [dashboard, setDashboard] = React.useState([]);
  const [game_page, setGamePage] = React.useState(1);
  const [gameOrder, setSetGameOrder] = React.useState(0);
  const { data, loading, recallApi } = useApi(
    "/order?page=" + orderPage,
    "GET"
  );

  const dashboardApi = async () => {
    let response = await dashboardService({
      project_id: 1,
      page: gameOrder,
      limit: 10,
    });
    setGamePage(response.data?.game_page || 1);
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
  }, []);

  React.useEffect(() => {
    dashboardApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameOrder]);

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
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
        <GamesTable
          data={dashboard}
          game_page={game_page}
          gameOrder={setSetGameOrder}
        />
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
        <OrderList data={data} loading={loading} setOder={setOrderPage} />
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
            onClick={() => navigate("/orders")}
            sx={{ background: "#000000" }}
          >
            My Orders
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
