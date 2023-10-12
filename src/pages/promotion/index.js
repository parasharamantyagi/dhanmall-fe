import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import Header from "../header";
import FullWidthTabs from "../../components/promotion-tabs";
import { strictValidObjectWithKeys } from "../../utils/common-utils";
import { useSelector } from "react-redux";

export default function Promotion() {
  const profile = useSelector((state) => state.profile.data);
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <Header
        amount={
          strictValidObjectWithKeys(profile)
            ? profile.money
            : 0
        }
      />
      <FullWidthTabs myProfile={profile} />
      <Footer />
    </Box>
  );
}
