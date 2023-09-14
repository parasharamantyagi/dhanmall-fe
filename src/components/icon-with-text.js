import React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const IconWithText = ({ icon, text, to, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      style={{
        textDecoration: "none",
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconButton size="medium" color="primary">
        {icon}
      </IconButton>
      <Typography variant="p4">{text}</Typography>
    </Link>
  );
};

export default IconWithText;
