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
  strictValidString,
  validObjectWithParameterKeys,
} from "../../utils/common-utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [is_show, setIsShow] = React.useState(false);
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
    // const data = new FormData(event.currentTarget);
    toast.success("Recharge add successfully");
  };
  const handleChange = (e) => {
    console.log("target.name", e.target.name);
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
                  Balance: ₹ 6.49
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
                    item
                    xs={4}
                    sx={{
                      BackgroundPositionX: "left",
                      textAlign: "left",
                      // m: 1,
                    }}
                  >
                    <Typography>Payment Mode</Typography>
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
                              checked={type === "ek_pay"}
                              onChange={handleChange}
                              name="ek_pay"
                            />
                          }
                          label="Ek Pay"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={type === "win_pay"}
                              onChange={handleChange}
                              name="win_pay"
                            />
                          }
                          label="Win Pay"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={type === "wow_pay"}
                              onChange={handleChange}
                              name="wow_pay"
                            />
                          }
                          label="Wow Pay"
                        />
                      </FormGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={8}>
                    {is_show && (
                      <Box
                        component="span"
                        // sx={{ p: 2, border: "1px dashed grey" }}
                      >
                        <CardMedia
                          component="img"
                          sx={{ width: 151 }}
                          image="/Untitled design.png"
                          alt="Live from space album cover"
                        />
                      </Box>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={
                        !type || !strictValidString(objVal.recharge_amount)
                      }
                      sx={{ width: "50%", py: 1, mt: 1, mb: 4 }}
                    >
                      Recharge
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
