import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddIcon from '@mui/icons-material/Add';
import { strictValidObjectWithKeys } from '../../utils/common-utils';
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

export default function BankCardList({ bankCardData }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 275 }}>
      <Grid my={1} ml={2} justifyContent="flex-end" display="flex" item>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          onClick={() => navigate('/addbankcard')}
        >
          Add Card
        </Button>
      </Grid>
      <CardContent>
        <Grid item xs={12} sm container>
          {strictValidObjectWithKeys(bankCardData) &&
            bankCardData.bankCardList.map((object) => (
              <ListItem
                key={object.bank_account}
                disableGutters
                secondaryAction={
                  <>
                    <Tooltip title={'Edit Account'}>
                      <IconButton aria-label="comment">
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={'Delete Account'}>
                      <IconButton aria-label="comment">
                        <DeleteIcon color="error" />
                      </IconButton>
                    </Tooltip>
                  </>
                }
              >
                <ListItem>
                  <ListItemIcon>
                    <CreditCardIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={object.actual_name}
                    secondary={` ID: ${object.bank_account}`}
                  />
                </ListItem>
              </ListItem>
            ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
