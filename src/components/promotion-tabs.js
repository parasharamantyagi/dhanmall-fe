import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import PromotionLavel1 from "../pages/promotion/lavel_1";
import {
  defaultCurrencyFormat,
  strictValidObjectWithKeys,
} from "../utils/common-utils";
import { Button, TextField } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#fff",
  },
});

const StyledTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(16),
  color: "rgba(255, 255, 255)",
  "&.Mui-selected": {
    color: "#fff",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs({ myProfile }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [totalPeople, setTotalPeople] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(
        strictValidObjectWithKeys(myProfile)
          ? `http://luckydhanmall.com/register?r_code=${myProfile.promotion_code}`
          : '',
      )
      .then(() => {
        alert('copied to clipboard');
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        margin: 1,
      }}
    >
      <Typography variant="h2" align="center" margin={3} gutterBottom>
        Bonus: ₹{" "}
        {strictValidObjectWithKeys(myProfile)
          ? myProfile.commission
          : 0}
      </Typography>
      <Box py={3} display="flex" justifyContent="space-evenly">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography gutterBottom variant="h3">
            Total People
          </Typography>
          <Typography variant="p4">{totalPeople}</Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography gutterBottom variant="h3">
            Contribution
          </Typography>
          <Typography variant="p4">
            {strictValidObjectWithKeys(myProfile)
              ? defaultCurrencyFormat(myProfile.contribution)
              : defaultCurrencyFormat(0)}
          </Typography>
        </Box>
      </Box>
      <Box py={3}>
        <Box display="flex" flexDirection="column">
          <TextField
            placeholder="My Promotion Code"
            label="My Promotion Code"
            variant="outlined"
            value={
              strictValidObjectWithKeys(myProfile)
                ? myProfile.promotion_code
                : ""
            }
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            placeholder="My Promotion Link"
            label="My Promotion Link"
            variant="outlined"
            value={
              strictValidObjectWithKeys(myProfile)
                ? `https://luckydhanmall.com/register?r_code=${myProfile.promotion_code}`
                : ""
            }
            sx={{ mt: 2 }}
            multiline
            rows={3}
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          onClick={copyToClipboard}
          variant="contained"
          sx={{ width: "80%", py: 1, mt: 1, mb: 1, background: "#000000" }}
        >
          Copy Link
        </Button>
      </Box>
      <AppBar sx={{ background: "#000" }} position="static">
        <StyledTabs
          variant="scrollable"
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="full width tabs example"
        >
          <StyledTab label="Level 1" {...a11yProps(0)} />
          <StyledTab label="Level 2" {...a11yProps(1)} />
          <StyledTab label="Level 3" {...a11yProps(2)} />
          <StyledTab label="Level 4" {...a11yProps(3)} />
          <StyledTab label="Level 5" {...a11yProps(4)} />
        </StyledTabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <PromotionLavel1 pageType="lavel_1" totalPeople={setTotalPeople} />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <PromotionLavel1 pageType="lavel_2" totalPeople={setTotalPeople} />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <PromotionLavel1 pageType="lavel_3" totalPeople={setTotalPeople} />
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <PromotionLavel1 pageType="lavel_4" totalPeople={setTotalPeople} />
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
        <PromotionLavel1 pageType="lavel_5" totalPeople={setTotalPeople} />
      </TabPanel>
    </Box>
  );
}
