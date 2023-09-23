import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddIcon from "@mui/icons-material/Add";
import IconWithText from "../../components/icon-with-text";
import { strictValidObjectWithKeys } from "../../utils/common-utils";

export default function BankCardList({ bankCardData }) {


  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid item xs={12} sm container>
          {strictValidObjectWithKeys(bankCardData) && bankCardData.bankCardList.map((object) => (
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <CreditCardIcon />
                <Typography variant="body2" gutterBottom>
                  {object.actual_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: {object.bank_account}
                </Typography>
              </Grid>
              {/* <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid> */}
            </Grid>
          ))}
          <Grid item>
            <Typography variant="subtitle1" component="div">
              <IconWithText
                icon={<AddIcon fontSize="large" />}
                to="/addbankcard"
              />
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
