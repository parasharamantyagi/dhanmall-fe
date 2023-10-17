import * as React from 'react';
import Box from '@mui/material/Box';
import Footer from '../footer';
import { Button, Paper, Typography } from '@mui/material';
import AvatarWithName from '../../components/avatarname';
import { defaultCurrencyFormat, validValue } from '../../utils/common-utils';
import { withStyles, createStyles } from '@mui/styles';
import Sidebar from './sidebar';
import useMyProfileApi from '../../hooks/useMyProfileApi';
import { strictValidObjectWithKeys } from '../../utils/common-utils';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const styles = (theme) =>
  createStyles({
    root: {
      justifyContent: 'space-evenly',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'space-between',
        flexDirection: 'row', // For example, change the flex direction
        // Add any other styles you want for smaller screens
      },
      // Add more breakpoints and styles as needed
    },
  });

const Profile = (props) => {
  const navigate = useNavigate();
  useMyProfileApi();
  const { classes } = props;
  const profile = useSelector((state) => state.profile.data);
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <Paper
        sx={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          // mb:8
          height: '110vh',
        }}
      >
        <Box sx={{ backgroundColor: '#000', p: 2, py: 3 }}>
          <AvatarWithName
            name={
              strictValidObjectWithKeys(profile) &&
              validValue(profile.nickname)
                ? profile.nickname
                : 'N/A'
            }
          />
          <Typography gutterBottom color="secondary">
            Mobile Number :{' '}
            {strictValidObjectWithKeys(profile)
              ? profile.mobile
              : 'N/A'}
          </Typography>
          <Typography gutterBottom color="secondary">
            ID :{' '}
            {strictValidObjectWithKeys(profile)
              ? profile.promotion_code
              : 'N/A'}
          </Typography>
          <Box display="flex" mt={0} className={classes.root}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography gutterBottom color="secondary">
                {defaultCurrencyFormat(
                  strictValidObjectWithKeys(profile)
                    ? profile.money
                    : 0,
                )}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                onClick={() => {
                  navigate('/wallet-recharge');
                }}
              >
                Recharge
              </Button>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography gutterBottom color="secondary">
                {defaultCurrencyFormat(
                  strictValidObjectWithKeys(profile)
                    ? profile.commission
                    : 0,
                )}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                onClick={() => {
                  navigate('/promotion');
                }}
              >
                Commission
              </Button>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography gutterBottom color="secondary">
                {defaultCurrencyFormat(
                  strictValidObjectWithKeys(profile)
                    ? profile.interest
                    : 0,
                )}
              </Typography>
              <Button variant="contained" color="primary" size="medium" onClick={() => {
                  navigate('/wallet-transactions');
                }}>
                Interest
              </Button>
            </Box>
          </Box>
        </Box>
        <Sidebar />
      </Paper>

      <Footer />
    </Box>
  );
};
export default withStyles(styles)(Profile);
