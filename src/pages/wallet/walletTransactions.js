import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import CardHeader from "../header/header-card";
import Paper from "@mui/material/Paper";
import Footer from "../footer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function WalletTransactions() {
  const renderSubtitle = (text) => {
    return (
      <Typography mt={2} variant="p4">
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
      <CardHeader title="Transactions" />
      <Box p={1} flexDirection="column" display="flex">
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <Item>
                <Grid container justifyContent="space-between">
                  <Grid item xs={0}>
                    <Typography variant="p4" style={{ flex: 12 }}>₹ 10.00</Typography>
                    <br />
                    <Typography variant="p4">Place Order</Typography>
                    <br />
                    <Typography variant="p4">2023-09-11 16:42</Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={7}
                    alignItems="flex-end"
                    direction="column"
                  >
                    <Grid item>
                      <Typography variant="p4">₹ 16.49</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="p4">₹ 6.49</Typography>
                    </Grid>
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
