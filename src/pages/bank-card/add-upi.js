import * as React from 'react';
import Box from '@mui/material/Box';
import Footer from '../footer';
import BankCardHeader from '../header/header-card';
import TextField from '@mui/material/TextField';
import { Button, Card, CardContent } from '@mui/material';
import { saveBankCardApi, useBankCardWithIdApi } from './hooke';
import { toast } from 'react-toastify';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { strictValidObjectWithKeys } from '../../utils/common-utils';
import { validValue } from '../../utils/common-utils';

export default function AddUpiId() {
  const navigate = useNavigate();
  const [objectForm, setObjectForm] = React.useState({
    actual_name: '',
    bank_name: '',
    ifsc_code: '',
    bank_account: '',
    state: '',
    city: '',
    address: '',
    mobile_number: '',
    email: '',
  });
  const [searchParams] = useSearchParams();
  let { bankCardDetail } = useBankCardWithIdApi(
    'bank-card',
    'GET',
    searchParams.get('id'),
  );

  React.useEffect(() => {
    if (
      validValue(searchParams.get('id')) &&
      strictValidObjectWithKeys(bankCardDetail) &&
      bankCardDetail.success
    ) {
      setObjectForm(bankCardDetail.bankCardDetail);
    }
  }, [searchParams, bankCardDetail]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let obj = {
      actual_name: data.get('actual_name'),
      bank_name: data.get('bank_name'),
    };
    if (
      validValue(searchParams.get('id')) &&
      strictValidObjectWithKeys(bankCardDetail) &&
      bankCardDetail.success
    ) {
      let result = await saveBankCardApi(
        'PUT',
        '/bank-card/' + bankCardDetail.bankCardDetail._id,
        obj,
      );
      if (result.success) {
        toast.success(result.message);
        navigate('/bank-card');
      } else {
        toast.error(result.message);
      }
    } else {
      let result = await saveBankCardApi('POST', '/bank-card', obj);
      if (result.success) {
        toast.success(result.message);
        navigate('/bank-card');
      } else {
        toast.error(result.message);
      }
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <BankCardHeader title="Add UPI ID" />
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <TextField
            margin="normal"
            required
            fullWidth
            id="outlined-basic"
            label="Account holder name"
            name="actual_name"
            value={objectForm.actual_name}
            onChange={(event) =>
              setObjectForm({
                ...objectForm,
                ...{ actual_name: event.target.value },
              })
            }
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="outlined-basic"
            label="UPI ID"
            name="bank_name"
            value={objectForm.bank_name}
            onChange={(event) =>
              setObjectForm({
                ...objectForm,
                ...{ bank_name: event.target.value },
              })
            }
          />

          <Button
            disabled={!objectForm.bank_name || !objectForm.actual_name}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 7, background: '#000000' }}
          >
            SAVE UPI ID
          </Button>
        </CardContent>
      </Card>
      <Footer />
    </Box>
  );
}
