import { Typography, Box, styled } from '@mui/material';
import { defaultCurrencyFormat } from '../utils/common-utils';

const Card = styled(Box)(({ theme, background }) => ({
  cursor: 'pointer',
  margin: theme.spacing(0, 2, 0, 0),
  background: background,
}));

const CardHeader = styled(Typography)(({ theme, textColor }) => ({
  color: textColor,
  margin: theme.spacing(0, 0, 1.5, 0),
}));

export const Cards = ({ isAmount=true, text, subtitle, backgroundColor }) => {
  const changeRoute = (cardText) => {};
  return (
    <Card
      boxShadow={2}
      width={260}
      height={100}
      sx={{ mr: 4 }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius={5}
      onClick={() => {
        changeRoute(text);
      }}
      background={backgroundColor}
    >
      <CardHeader textAlign="center" variant="h6" textColor={'#fff'}>
        {text}
      </CardHeader>
      <Typography variant="p6" color={'#fff'}>
        {isAmount ? defaultCurrencyFormat(subtitle) : subtitle}
      </Typography>
    </Card>
  );
};
