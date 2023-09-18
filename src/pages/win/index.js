import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import GamesTable from "./games";
import Header from "../header";
import { Divider, Typography } from "@mui/material";
import CurrentGame from "./current-game";
import { gameNowService } from "./actions";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function Win() {
  const [gameNow, setGameNow] = React.useState({ period: 0, time: 180 });

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
        <Header />
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
        <GamesTable />
      </Box>
      <Footer />
    </>
  );
}
