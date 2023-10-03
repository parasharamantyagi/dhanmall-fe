import React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Box, Divider } from "@mui/material";
const IconWithText = ({ icon, text, to, onClick, open, collapse = false }) => {
  return (
    <>
    <Link
      to={to}
      onClick={onClick}
      style={{
        textDecoration: "none",
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 10,
      }}
    >
      <Box>
        <IconButton sx={{color:'#000'}} size="medium" color="primary">
          {icon}
        </IconButton>
        <Typography variant="p4">{text}</Typography>
      </Box>
      {collapse && <Box>{open ? <ExpandLess /> : <ExpandMore />}</Box>}
    </Link>
    <Divider />
    </>
  );
};

export default IconWithText;
