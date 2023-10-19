import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import BankCardHeader from "../header/header-card";
import TextField from "@mui/material/TextField";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { saveBankCardApi, useBankCardWithIdApi } from "./hooke";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router-dom";
import { strictValidObjectWithKeys } from "../../utils/common-utils";
import { validValue } from "../../utils/common-utils";

export default function Addbankcard() {
  const navigate = useNavigate();
  const [objectForm, setObjectForm] = React.useState({
    actual_name: "",
    type: "",
    bank_name: "",
    ifsc_code: "",
    bank_account: "",
    state: "",
    city: "",
    address: "",
    mobile_number: "",
    email: "",
  });
  const [searchParams] = useSearchParams();
  let { bankCardDetail } = useBankCardWithIdApi(
    "bank-card",
    "GET",
    searchParams.get("id")
  );

  React.useEffect(() => {
    if (
      validValue(searchParams.get("id")) &&
      strictValidObjectWithKeys(bankCardDetail) &&
      bankCardDetail.success
    ) {
      if(validValue(bankCardDetail.bankCardDetail.ifsc_code)){
        bankCardDetail.bankCardDetail.type = 'bank';
      }
      setObjectForm(bankCardDetail.bankCardDetail);
    }
  }, [searchParams, bankCardDetail]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let obj = {
      actual_name: data.get("actual_name"),
      ifsc_code: data.get("ifsc_code"),
      bank_name: data.get("bank_name"),
      bank_account: data.get("bank_account"),
      state: data.get("state"),
      city: data.get("city"),
      address: data.get("address"),
      mobile_number: data.get("mobile_number"),
      email: data.get("email"),
      password: data.get("password"),
      type: objectForm.type,
    };
    if (
      validValue(searchParams.get("id")) &&
      strictValidObjectWithKeys(bankCardDetail) &&
      bankCardDetail.success
    ) {
      let result = await saveBankCardApi(
        "PUT",
        "/bank-card/" + bankCardDetail.bankCardDetail._id,
        obj
      );
      if (result.success) {
        toast.success(result.message);
        navigate("/bank-card");
      } else {
        toast.error(result.message);
      }
    } else {
      let result = await saveBankCardApi("POST", "/bank-card", obj);
      if (result.success) {
        toast.success(result.message);
        navigate("/bank-card");
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
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <BankCardHeader title="Add Bank Detail" />
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Grid item xs={12} sm container>
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
            <FormControl>
              <RadioGroup name="set_number">
              <FormControlLabel
                  control={<Radio />}
                  value={"upi"}
                  label={"Upi id"}
                  checked={objectForm.type === 'upi' ? true : false}
                  onClick={() =>
                    setObjectForm({
                      ...objectForm,
                      ...{ type: "upi" },
                    })
                  }
                />
                <FormControlLabel
                  control={<Radio />}
                  value={"bank"}
                  label={"Bank account"}
                  checked={objectForm.type === 'bank' ? true : false}
                  onClick={() =>
                    setObjectForm({
                      ...objectForm,
                      ...{ type: "bank" },
                    })
                  }
                />
              </RadioGroup>
            </FormControl>
            {objectForm.type === "bank" ? (
              <>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="outlined-basic"
                  label="Bank name"
                  name="bank_name"
                  value={objectForm.bank_name}
                  onChange={(event) =>
                    setObjectForm({
                      ...objectForm,
                      ...{ bank_name: event.target.value },
                    })
                  }
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="outlined-basic"
                  label="Bank account"
                  type="number"
                  name="bank_account"
                  value={objectForm.bank_account}
                  onChange={(event) =>
                    setObjectForm({
                      ...objectForm,
                      ...{ bank_account: event.target.value },
                    })
                  }
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="outlined-basic"
                  label="IFSC Code"
                  name="ifsc_code"
                  value={objectForm.ifsc_code}
                  onChange={(event) =>
                    setObjectForm({
                      ...objectForm,
                      ...{ ifsc_code: event.target.value },
                    })
                  }
                />
              </>
            ) : (
              <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="Upi Id"
              name="bank_account"
              value={objectForm.bank_account}
              onChange={(event) =>
                setObjectForm({
                  ...objectForm,
                  ...{ bank_account: event.target.value },
                })
              }
            />
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="State"
              name="state"
              value={objectForm.state}
              onChange={(event) =>
                setObjectForm({
                  ...objectForm,
                  ...{ state: event.target.value },
                })
              }
            />
            {console.log(objectForm)}
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="City"
              name="city"
              value={objectForm.city}
              onChange={(event) =>
                setObjectForm({
                  ...objectForm,
                  ...{ city: event.target.value },
                })
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="Address"
              name="address"
              value={objectForm.address}
              onChange={(event) =>
                setObjectForm({
                  ...objectForm,
                  ...{ address: event.target.value },
                })
              }
            />
            <TextField
              margin="normal"
              fullWidth
              id="outlined-basic"
              label="Email"
              name="email"
              value={objectForm.email}
              onChange={(event) =>
                setObjectForm({
                  ...objectForm,
                  ...{ email: event.target.value },
                })
              }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 7, background: "#000000" }}
            >
              Continue
            </Button>
          </Grid>
        </CardContent>
      </Card>
      <Footer />
    </Box>
  );
}
