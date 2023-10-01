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
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import CardHeader from "../header/header-card";
import Paper from "@mui/material/Paper";
import Footer from "../footer";
import {
  strictValidString,
  validObjectWithParameterKeys,
} from "../../utils/common-utils";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Link } from "react-router-dom";
const buttonAmmount = [
  { id: 1, ammount: "100" },
  { id: 1, ammount: "500" },
  { id: 1, ammount: "750" },
  { id: 1, ammount: "1000" },
  { id: 1, ammount: "1500" },
  { id: 1, ammount: "2000" },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function WalletRecharge() {
  const [objVal, setObjVal] = React.useState({});
  const [is_show, setIsShow] = React.useState(0);
  const [transactionId, setTransactionId] = useState();
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
    // window.location.href = `https://securegw-stage.paytm.in/theia/processTransaction?orderid=${paymentData.ORDER_ID}`;
    // console.log({ recharge_amount: data.get("recharge_amount") });
    // console.log("type", type);
    if (type === "upipay") {
      window.location.href = `https://pay.upilink.in/pay/parasharamantyagi-2@oksbi?am=${data.get(
        "recharge_amount"
      )}`;
    }
    // toast.success("Recharge add successfully");
  };
  const handleChange = (e) => {
    // upipay
    setIsShow(
      e.target.name === "qrcode" ? 1 : e.target.name === "upipay" ? 2 : 0
    );
    setType(e.target.name);
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
                  Your Balance: ₹ 6.49
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
                    autoFocus
                    onChange={(e) => {
                      setObjVal({
                        recharge_amount: e.target.value,
                      });
                    }}
                  />
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  {buttonAmmount.map((object) => (
                    <Grid item xs={4}>
                      <Button
                        variant="contained"
                        sx={{ width: "80%", py: 1, mt: 1, mb: 1 }}
                        onClick={() => {
                          setObjVal({ recharge_amount: object.ammount });
                        }}
                      >
                        ₹ {object.ammount}
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
                    // justifyContent="center"
                    // alignItems="center"
                    item
                    xs={2}
                  >
                    <Typography mt={1} variant="h2" align="left">
                      Payment Mode
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
                    // justifyContent="center"
                    // alignItems="center"
                    item
                    xs={8}
                  >
                    {is_show === 1 && (
                      <>
                        <Typography mt={1} variant="h2" align="left">
                          By using this Link, you can recharge the amount and
                          submit the page with the correct transaction ID.
                        </Typography>
                        <CardMedia
                          component="img"
                          sx={{ width: 300, height: 350, margin: "-5px" }}
                          image="/vani-paytm.jpeg"
                        />
                        <TextField
                          placeholder="Transaction ID"
                          label="Transaction ID"
                          variant="outlined"
                          onChange={(e) => setTransactionId(e.target.value)}
                          value={transactionId}
                          sx={{ mt: 2, width: "30%" }}
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                        <TextField
                          placeholder="Transaction ID"
                          label="Remarks"
                          variant="outlined"
                          onChange={(e) => setTransactionId(e.target.value)}
                          value={transactionId}
                          sx={{ mt: 2, width: "30%" }}
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          // disabled={
                          //   !type || !strictValidString(objVal.recharge_amount)
                          // }
                          sx={{ width: "30%", py: 1, mt: 1, mb: 4 }}
                        >
                          Recharge
                        </Button>
                      </>
                    )}
                    {is_show === 2 && (
                      <>
                        <Typography mt={1} variant="h2" align="left">
                          By using this QR code or UPI ID, you can recharge the
                          amount and submit the page with the correct
                          transaction ID.
                        </Typography>
                        <TextField
                          placeholder="Transaction ID"
                          label="Transaction ID"
                          type="button"
                          variant="outlined"
                          onChange={(e) => setTransactionId(e.target.value)}
                          value={transactionId}
                          sx={{ mt: 2, width: "30%" }}
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                        <TextField
                          placeholder="Transaction ID"
                          label="Transaction ID"
                          variant="outlined"
                          onChange={(e) => setTransactionId(e.target.value)}
                          value={transactionId}
                          sx={{ mt: 2, width: "30%" }}
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                        <TextField
                          placeholder="Transaction ID"
                          label="Remarks"
                          variant="outlined"
                          onChange={(e) => setTransactionId(e.target.value)}
                          value={transactionId}
                          sx={{ mt: 2, width: "30%" }}
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          // disabled={
                          //   !type || !strictValidString(objVal.recharge_amount)
                          // }
                          sx={{ width: "30%", py: 1, mt: 1, mb: 4 }}
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
