import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import {
  AppBar,
  Box,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { arrayOfObject, mergeObject } from "../utils/common-utils";
import { contractAmmount } from "../utils/constant";
import { makeGameOrderApi } from "../pages/win/actions";
import { toast } from "react-toastify";


const AlertDialog = ({ open, setOpen = () => {}, object }) => {
  const [state, setState] = React.useState({
    value: 1,
    selected: 10,
  });
  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = async () => {
    // contract_type=1&contract_number=8&type=2&pick=2&game_id=451444
    let response = await makeGameOrderApi(mergeObject(
        {
          game_id: object.game_id,
          pick: object.pick,
          type: object.type,
        },
        {
          contract_type: arrayOfObject(contractAmmount, { ammount: state.selected }, "id" ),
          contract_number: state.value,
        }));
    if(response.success){
      toast.success(response.message);
      setOpen(false);
    }else{
      toast.success(response.message);
    }
  };

  return (
    <Dialog
      open={open}
      fullWidth
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <AppBar sx={{ background: object.background, position: "relative" }}>
        <Toolbar>
          <Typography variant="p2" color="#fff">
            {object.label}
          </Typography>
        </Toolbar>
      </AppBar>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Contract Money
        </DialogContentText>
        <ButtonGroup
          disableElevation
          sx={{ mt: 2 }}
          variant="outlined"
          aria-label="outlined button group"
        >
          <Button
            onClick={() => {
              setState((prevState) => ({
                ...prevState,
                selected: 10,
              }));
            }}
            variant={state.selected === 10 ? "contained" : "outlined"}
            color="primary"
          >
            10
          </Button>
          <Button
            onClick={() => {
              setState((prevState) => ({
                ...prevState,
                selected: 100,
              }));
            }}
            variant={state.selected === 100 ? "contained" : "outlined"}
          >
            100
          </Button>
          <Button
            onClick={() => {
              setState((prevState) => ({
                ...prevState,
                selected: 1000,
              }));
            }}
            variant={state.selected === 1000 ? "contained" : "outlined"}
          >
            1000
          </Button>
          <Button
            onClick={() => {
              setState((prevState) => ({
                ...prevState,
                selected: 10000,
              }));
            }}
            variant={state.selected === 10000 ? "contained" : "outlined"}
          >
            10000
          </Button>
        </ButtonGroup>
        <DialogContentText mt={2} id="alert-dialog-description">
          Number
        </DialogContentText>
        <Box
          mt={1}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
        >
          <IconButton
            disabled={state.value === 1}
            color="primary"
            onClick={() => {
              setState((prevState) => ({
                ...prevState,
                value: state.value - 1,
              }));
            }}
          >
            <RemoveIcon />
          </IconButton>
          <Typography>{state.value}</Typography>

          <IconButton
            color="primary"
            onClick={() => {
              setState((prevState) => ({
                ...prevState,
                value: state.value + 1,
              }));
            }}
          >
            <AddIcon />
          </IconButton>
        </Box>
        <Typography>
          Total contract money is {state.selected * state.value}
        </Typography>

        <FormControl sx={{ mt: 1 }} component="fieldset" variant="standard">
          <FormControlLabel
            control={<Checkbox checked={true} name="I Agree Presale Rule" />}
            label="I Agree Presale Rule"
          />
        </FormControl>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={onSubmit} autoFocus>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default AlertDialog;
