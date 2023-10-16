import {
  Box,
  Button,
  CardMedia,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import CardHeader from "../header/header-card";
import Paper from "@mui/material/Paper";
import Footer from "../footer";
import {
  validValue,
  defaultCurrencyFormat,
  validObjectWithParameterKeys,
  strictValidObjectWithKeys,
} from "../../utils/common-utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { appUpiId } from "../../utils/constant";
import { addRechargeService } from "./action";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { rechargeAmmount } from "../../utils/constant";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function WalletRecharge() {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile.data);
  const [objVal, setObjVal] = React.useState({});
  const [is_show, setIsShow] = React.useState(0);
  const [type, setType] = React.useState("");

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
      transaction_id: data.get("transaction_id"),
      remarks: data.get("remarks"),
      type: type,
    };
    let result = await addRechargeService(newObj);
    if (result.success) {
      toast.success(result.message);
      navigate("/wallet-transactions");
    } else {
      toast.error(result.message);
    }
  };

  const handleChange = (e) => {
    console.log(objVal,profile);
    if (
      strictValidObjectWithKeys(objVal) &&
      validValue(objVal.recharge_amount)
    ) {
      if (
        profile.first_payment === 0 &&
        parseInt(objVal.recharge_amount) < rechargeAmmount[0].ammount
      ) {
        toast.error(
          `First payment should be minimum ${rechargeAmmount[0].ammount} rupees`
        );
        return false;
      }
      setIsShow(
        e.target.name === "qrcode" ? 1 : e.target.name === "upipay" ? 2 : 0
      );
      setType(e.target.name);
    } else {
      toast.error("Please select an amount first.");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("parasharamantyagi-2@okhdfcbank").then(() => {
      toast.success("Copied to Clipboard");
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <CardHeader title="Recharge" />
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
                  Your Balance: {defaultCurrencyFormat(profile.money)}
                </Typography>

                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="recharge_amount"
                    label="Enter or Select Recharge Amount"
                    name="recharge_amount"
                    autoComplete="recharge_amount"
                    value={
                      validObjectWithParameterKeys(objVal, ["recharge_amount"])
                        ? objVal.recharge_amount
                        : ""
                    }
                    onChange={(event) =>
                      setObjVal({
                        ...objVal,
                        ...{ recharge_amount: event.target.value },
                      })
                    }
                    autoFocus
                    // InputProps={{
                    //   readOnly: true,
                    // }}
                  />
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  {rechargeAmmount.map((object) => (
                    <Grid item xs={4}>
                      <Button
                        variant="contained"
                        sx={{
                          width: "80%",
                          py: 1,
                          mt: 1,
                          mb: 1,
                          background: "#000000",
                        }}
                        onClick={() => {
                          setObjVal({ recharge_amount: object.ammount });
                        }}
                      >
                        {defaultCurrencyFormat(object.ammount)}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
                {/*  */}
                <Grid container rowSpacing={1} mt={2} spacing={2}>
                  <Grid
                    display="flex"
                    flex={1}
                    flexDirection="column"
                    item
                    xs={12}
                  >
                    <Typography mt={1} variant="h2" align="left">
                      Select Payment Mode
                    </Typography>
                    <FormControl
                      required
                      error={!type}
                      component="fieldset"
                      variant="standard"
                    >
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={type === "qrcode"}
                              onChange={handleChange}
                              name="qrcode"
                            />
                          }
                          label="Qr Code"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={type === "upipay"}
                              onChange={handleChange}
                              name="upipay"
                            />
                          }
                          label="Upi Pay"
                        />
                      </FormGroup>
                    </FormControl>
                  </Grid>
                  <Grid
                    display="flex"
                    flex={1}
                    flexDirection="column"
                    item
                    xs={12}
                  >
                    {is_show === 1 && (
                      <>
                        <Typography
                          mt={1}
                          variant="h2"
                          align="left"
                          marginBottom={"5px"}
                        >
                          By using this QR code or UPI ID, you can recharge the
                          amount and submit the page with the correct
                          transaction ID.
                        </Typography>
                        <CardMedia
                          component="img"
                          sx={{
                            width: 300,
                            height: 300,
                            margin: 1,
                            align: "center",
                          }}
                          image="/img/11.jpeg"
                        />
                        <Typography
                          variant="body2"
                          align="left"
                          color="red"
                          gutterBottom
                        >
                          Note : You must fill in the correct Ref No.,then click
                          the button below to submit,and wait for it to arrive!
                        </Typography>
                        <TextField
                          name="transaction_id"
                          placeholder="Transaction ID"
                          label="Transaction ID"
                          variant="outlined"
                          sx={{ mt: 2, width: "100%" }}
                        />
                        <TextField
                          name="remarks"
                          placeholder="Enter Remarks if you mention in your upi"
                          label="Remarks"
                          variant="outlined"
                          sx={{ mt: 2, width: "100%" }}
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{
                            width: "100%",
                            py: 1,
                            mt: 1,
                            mb: 4,
                            background: "#000000",
                          }}
                        >
                          Recharge
                        </Button>
                      </>
                    )}
                    {is_show === 2 && (
                      <>
                        <Typography
                          gutterBottom
                          mt={1}
                          variant="h2"
                          align="left"
                        >
                          By using this Link, you can recharge the amount and
                          submit the page with the correct transaction ID.
                        </Typography>
                        <Box
                          flexDirection="row"
                          alignItems="center"
                          display="flex"
                        >
                          <TextField
                            placeholder="UPI ID"
                            label="UPI ID"
                            variant="outlined"
                            value={"parasharamantyagi-2@okhdfcbank"}
                            InputProps={{
                              readOnly: true,
                            }}
                            sx={{
                              width: "40%",
                              mt: 2,
                              mb: 2,
                            }}
                          />
                          <Button
                            onClick={copyToClipboard}
                            variant="contained"
                            sx={{
                              ml: 4,
                              background: "#000000",
                            }}
                          >
                            Copy UPI ID
                          </Button>
                        </Box>
                        {/* <center>
                          <Button
                            type="button"
                            variant="contained"
                            sx={{
                              width: 350,
                              py: 1,
                              mt: 1,
                              mb: 4,
                              background: '#000000',
                            }}
                            onClick={payAmmountWithUpi}
                          >
                            Pay with upi
                          </Button>
                        </center> */}
                        <Typography
                          variant="body2"
                          align="left"
                          color="red"
                          gutterBottom
                        >
                          Note : You must fill in the correct Ref No.,then click
                          the button below to submit,and wait for it to arrive!
                        </Typography>
                        <TextField
                          name="transaction_id"
                          placeholder="Transaction ID"
                          label="Transaction ID"
                          variant="outlined"
                          sx={{ mt: 2, width: "100%" }}
                        />
                        <TextField
                          name="remarks"
                          placeholder="Enter Remarks if you mention in your upi"
                          label="Remarks"
                          variant="outlined"
                          sx={{ mt: 2, width: "100%" }}
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{
                            width: "100%",
                            py: 1,
                            mt: 4,
                            background: "#000000",
                          }}
                        >
                          Recharge
                        </Button>
                      </>
                    )}
                    {renderSubtitle()}
                    {renderSubtitle()}
                    {renderSubtitle()}
                    {renderSubtitle()}
                    {renderSubtitle()}
                    {renderSubtitle()}
                    {renderSubtitle()}
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
