import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import Header from "../header";
import FullWidthTabs from "../../components/promotion-tabs";
import useMyProfileApi from "../../hooks/useMyProfileApi";
import { strictValidObjectWithKeys } from "../../utils/common-utils";

export default function Promotion() {
  const { myProfileData } = useMyProfileApi("/profile", "GET");
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Header ammount={ strictValidObjectWithKeys(myProfileData) && strictValidObjectWithKeys(myProfileData.myProfile) ? myProfileData.myProfile.money : 0 }/>
      <FullWidthTabs myProfile={myProfileData} />
      <Footer />
    </Box>
  );
}
