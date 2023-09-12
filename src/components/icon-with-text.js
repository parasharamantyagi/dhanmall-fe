import React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const IconWithText = ({ icon, text, to }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none', flexDirection: 'row',display:'flex',alignItems:'center' }}>
      <IconButton size="large" color="primary">
        {icon}
      </IconButton>
      <Typography variant="h1">{text}</Typography>
    </Link>
  );
};

export default IconWithText;
