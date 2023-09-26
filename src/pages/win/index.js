import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import GamesTable from "./games";
import Header from "../header";
import { Button, Divider, Typography } from "@mui/material";
import CurrentGame from "./current-game";
import { gameNowService } from "./actions";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import OrderList from "../orders/OrderList";
import { useNavigate } from "react-router-dom";
import { strictValidObjectWithKeys } from "../../utils/common-utils";

export default function Win() {
  const [gameNow, setGameNow] = React.useState({ period: 0, time: 180 });
  const navigate = useNavigate();

  const callapi = async () => {
    let game_now = await gameNowService();
    if (game_now.success) {
      setGameNow(game_now.data);
    }
  };

  React.useEffect(() => {
    callapi();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          zIndex: 0,
        }}
      >
        <Header
          ammount={strictValidObjectWithKeys(gameNow) ? gameNow.ammount : 0}
        />
        <Divider />
        <CurrentGame gameNow={gameNow} apiCall={callapi} />
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
        <GamesTable />
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
        <OrderList />
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
          >
            My Orders
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
