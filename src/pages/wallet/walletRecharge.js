import {
  Box,
  Button,
  CardActions,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import CardHeader from "../header/header-card";
import Paper from "@mui/material/Paper";
import DoneIcon from "@mui/icons-material/Done";
import Footer from "../footer";
import { validObjectWithParameterKeys } from "../../utils/common-utils";

const buttonAmmount = [
  { id: 1, ammount: 100 },
  { id: 1, ammount: 500 },
  { id: 1, ammount: 750 },
  { id: 1, ammount: 1000 },
  { id: 1, ammount: 1500 },
  { id: 1, ammount: 2000 },
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
    console.log(data);
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
                    label="Select recharge amount"
                    name="recharge_amount"
                    autoComplete="recharge_amount"
                    value={
                      validObjectWithParameterKeys(objVal, ["recharge_amount"])
                        ? objVal.recharge_amount
                        : ""
                    }
                    autoFocus
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
                        sx={{ width: "50%", py: 1, mt: 1, mb: 4 }}
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
                    Payment mode
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{ BackgroundPositionX: "left", textAlign: "left" }}
                  >
                    <CardActions>
                      <DoneIcon /> <Typography variant="p4"> EkPay </Typography>
                    </CardActions>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{ BackgroundPositionX: "left", textAlign: "left" }}
                  >
                    <CardActions>
                      <DoneIcon />{" "}
                      <Typography variant="p4"> WinPay </Typography>
                    </CardActions>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{ BackgroundPositionX: "left", textAlign: "left" }}
                  >
                    <CardActions>
                      <DoneIcon />{" "}
                      <Typography variant="p4"> Wowpay </Typography>
                    </CardActions>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
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
