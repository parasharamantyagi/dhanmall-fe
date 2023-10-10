import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CardHeader from "../../header/header-card";
import Footer from "../../footer";

const ContectUs = () => {
  const renderSubtitle = (text) => {
    return (
      <Typography mt={2} variant="p4">
        {text}
      </Typography>
    );
  };
  const renderMainHeader = (text) => {
    return (
      <Typography mt={1} variant="h2">
        {text}
      </Typography>
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <CardHeader title="Contact Us" />
      <Box p={1} flexDirection="column" display="flex">
        {renderMainHeader("Contact Us")}
        {/* {renderHeader("Interpretation")} */}
        {renderSubtitle(
          "If you have any questions about this Privacy Policy, You can contact us: +916239463839"
        )}
        {renderSubtitle(
          "For comunicate with us please join our telegram group https://t.me/luckydhanmall"
        )}
        {/* {renderSubtitle(
          ""
        )} */}

        <Box
          sx={{
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
          }}
        >
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <TextField
                margin="normal"
                required
                fullWidth
                id="type"
                label="Type"
                name="type"
                autoComplete="type"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="whatsApp"
                label="WhatsApp"
                name="whatsApp"
                autoComplete="whatsApp"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="description"
                label="description"
                name="description"
                autoComplete="Description"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 7 }}
              >
                Sign In
              </Button>
            </CardContent>
          </Card>
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
};

export default ContectUs;
