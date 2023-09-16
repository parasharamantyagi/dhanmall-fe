import * as React from "react";
import { Paper, Typography } from "@mui/material";
import IconWithText from "../../components/icon-with-text";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function BankCardHeader({ title }) {
  return (
    <Paper
      sx={{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        background: "#000",
        p: 2,
        py: 3,
      }}
    >
      <Typography color="white" variant="h5">
        <IconWithText
          icon={<ArrowBackIcon fontSize="small" />}
          onClick={() => {
            console.log("okkkkkkkk123");
          }}
        />
        {title}
      </Typography>
    </Paper>
  );
}
