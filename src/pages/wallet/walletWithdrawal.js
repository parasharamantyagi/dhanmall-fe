import {
  Box,
  Button,
  CardActions,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import CardHeader from "../header/header-card";
import Paper from "@mui/material/Paper";
import Footer from "../footer";
import {
  defaultCurrencyFormat,
  strictValidObjectWithKeys,
} from "../../utils/common-utils";
import { useBankCardApi } from "../bank-card/hooke";
import { addWithdrawRequest } from "./action";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { withdrawal_fees } from "../../utils/constant";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function WalletWithdrawal() {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile.data);
  const [ammount, setAmmount] = React.useState(0);
  const { bankCardList } = useBankCardApi("/bank-card", "GET");
  const [allbankCardList, setAllbankCardList] = React.useState([]);


  React.useEffect(() => {
    if (strictValidObjectWithKeys(bankCardList)) {
      setAllbankCardList(bankCardList.bankCardList);
    }
  }, [bankCardList]);

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
    let newObj = {
      ammount: data.get("recharge_amount"),
      bank_card: data.get("bank_card"),
    };
    let result = await addWithdrawRequest(newObj);
    if (result.success) {
      toast.success(result.message);
      navigate("/wallet-transactions");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <CardHeader title="Withdrawal" />
      <Box p={1} flexDirection="column" display="flex">
        <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <Item>
                <Typography mt={1} variant="h2">
                  Balance: {defaultCurrencyFormat(profile.money)}
                </Typography>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="recharge_amount"
                    label="Enter Withdrawal amount"
                    name="recharge_amount"
                    autoComplete="recharge_amount"
                    autoFocus
                    onChange={(event) => setAmmount(event.target.value) }
                  />
                </Grid>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid
                    item
                    xs={12}
                    sx={{ BackgroundPositionX: "left", textAlign: "left" }}
                  >
                    Fee: {ammount*withdrawal_fees},to account {ammount - ammount*withdrawal_fees}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{ BackgroundPositionX: "left", textAlign: "left" }}
                  >
                    <CardActions>
                      <Typography variant="p4">
                        {" "}
                        Payout with Bankcard{" "}
                      </Typography>
                    </CardActions>
                    <Grid item xs={12}>
                      <TextField
                        margin="normal"
                        select
                        required
                        fullWidth
                        id="bank_card"
                        label="Select bank"
                        name="bank_card"
                        autoComplete="bank_card"
                        autoFocus
                      >
                        {allbankCardList.map((option) => (
                          <MenuItem key={option._id} value={option._id}>
                            {option.actual_name}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item>
                      <Link to="/bank-card" variant="body2">
                        Add bank account
                      </Link>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ width: "50%", py: 1, mt: 1, mb: 4,background:'#000000' }}
                    >
                      Withdraw
                    </Button>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          </Grid>
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
