import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function AvatarWithName({ name, avatarSrc }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();
  return (
    <Box mb={1} flexDirection="row" display="flex" alignItems="center">
      <Avatar variant="rounded" sx={{ bgcolor: "primary.main" }}>{initials}</Avatar>
      <Typography ml={2} color="#fff" variant="subtitle1">{name}</Typography>
    </Box>
  );
}

export default AvatarWithName;
