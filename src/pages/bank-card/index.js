import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import BankCardList from "./list";
import CardHeader from "../header/header-card";
import useBankCardApi from "../../hooks/useBankCardApi";
import { Skeleton } from "@mui/material";

export default function BankCard() {
  const { bankCardList, loading } = useBankCardApi("/bank-card", "GET");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        <CardHeader title="Bank Card" />
        {loading &&
          [1, 2, 3, 4, 5, 6].map((res) => {
            return (
              <Skeleton
                sx={{ height: 50, mt: 1 }}
                animation="wave"
                variant="rectangular"
              />
            );
          })}
        <BankCardList bankCardData={bankCardList} />
        <Footer />
      </Box>
    </>
  );
}
