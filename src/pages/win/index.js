import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import GamesTable from "./games";
import Header from "../header";
import { Divider } from "@mui/material";
import CurrentGame from "./current-game";
import { gameNowService } from "./actions";

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
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Header />
      <Divider />
      <CurrentGame gameNow={gameNow} apiCall={callapi} />
      <Divider />
      <GamesTable />
      <Footer />
    </Box>
  );
}
