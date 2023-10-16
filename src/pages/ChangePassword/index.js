import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
import CardHeader from '../header/header-card';
import Footer from '../footer';
import { strictValidObjectWithKeys } from '../../utils/common-utils';
import { changePasswordService } from './action';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';

export default function ChangePassword() {
  const navigate = useNavigate();
  const [error, setError] = React.useState({
    old_password: '',
    new_password: '',
    confirm_password: '',
  });
  const [objectForm, setObjectForm] = React.useState({});
  const [loading, setloading] = useState(false);
  const renderSubtitle = (text) => {
    return (
      <Typography mt={2} variant="p4">
        {text}
      </Typography>
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let object = {
      old_password: data.get('old_password'),
      new_password: data.get('new_password'),
      confirm_password: data.get('confirm_password'),
    };
    let errorValidation = {};
    if (!data.get('old_password')) {
      errorValidation.old_password = 'Please enter old password';
    }
    else if (!data.get('new_password')) {
      errorValidation.new_password = 'Please enter new password';
    }
    else if (!data.get('confirm_password')) {
      errorValidation.confirm_password = 'Please enter confirm password';
    }
    else if (data.get('old_password') === data.get('new_password')) {
      errorValidation.confirm_password =
        "You can't use the same old password as the new one";
    }
    setError(errorValidation);
    if (strictValidObjectWithKeys(errorValidation)) {
      return false;
    }
    setloading(true);
    let response = await changePasswordService(object);
    if (strictValidObjectWithKeys(response) && response.success) {
      toast.success(response.message);
      navigate('/mine');
      setloading(false);
    } else {
      toast.error(response.message);
      setloading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <CardHeader title="Reset Password" />
      <Box p={1} flexDirection="column" display="flex">
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
          }}
        >
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <TextField
                margin="normal"
                required
                fullWidth
                id="old_password"
                label="Old password"
                name="old_password"
                onChange={(event) => {
                  setObjectForm({
                    ...objectForm,
                    ...{ old_password: event.target.value },
                  });
                }}
              />
              {error && error.old_password && (
                <Typography paragraph sx={{ color: 'red' }}>
                  {error.old_password}
                </Typography>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="new_password"
                label="New password"
                name="new_password"
                onChange={(event) => {
                  setObjectForm({
                    ...objectForm,
                    ...{ new_password: event.target.value },
                  });
                }}
              />
              {error && error.new_password && (
                <Typography paragraph sx={{ color: 'red' }}>
                  {error.new_password}
                </Typography>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="confirm_password"
                label="Confirm password"
                name="confirm_password"
                onChange={(event) => {
                  setObjectForm({
                    ...objectForm,
                    ...{ confirm_password: event.target.value },
                  });
                }}
              />
              {error && error.confirm_password && (
                <Typography paragraph sx={{ color: 'red' }}>
                  {error.confirm_password}
                </Typography>
              )}
              <LoadingButton
                loading={loading}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 7, background: '#000000' }}
              >
                Update password
              </LoadingButton>
            </CardContent>
          </Card>
        </Box>

        {renderSubtitle()}
        {renderSubtitle()}
        {renderSubtitle()}
        {renderSubtitle()}
        {renderSubtitle()}
      </Box>
      <Footer />
    </Box>
  );
}
