import * as React from "react";
import { Box, CardMedia, Paper, Typography } from "@mui/material";
import IconWithText from "../../components/icon-with-text";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export default function CardHeader({ pageNo, title }) {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        background: "#000",
        px: 1,
        py: 3,
      }}
    >
      <Box display="flex" alignItems="center">
        {!pageNo && (
          <IconWithText
            icon={<ArrowBackIcon sx={{ color: "#fff" }} fontSize="small" />}
            onClick={() => {
              navigate(-1);
            }}
          />
        )}
        <>
          <CardMedia
            component="img"
            sx={{
              width: 25,
              height: 25,
              margin: 0.5,
              // align: "center",
              borderRadius: 1
            }}
            image="/small-logo.png"
          />
          <Typography color="white" variant="h5">
            {title}
          </Typography>
        </>
      </Box>
    </Paper>
  );
}
