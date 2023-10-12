import {
  Box,
  Divider,
  ListItem,
  ListItemText,
  TablePagination,
  Typography,
} from "@mui/material";
import React from "react";
import CardHeader from "../header/header-card";
import Footer from "../footer";
import { useRechargeList } from "../../hooks/useBillingApi";
import {
  defaultCurrencyFormat,
  strictValidObjectWithKeys,
  unixformatDateTime,
  validValue,
} from "../../utils/common-utils";
import { capitalizeFirstLetter } from "../../utils/common-utils";
import CountdownTimer from "./example";

export default function WalletTransactions() {
  const [page, setPage] = React.useState(0);
  const { rechargeList } = useRechargeList("/recharge?page=" + page, "GET");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

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
        {strictValidObjectWithKeys(rechargeList) &&
          validValue(rechargeList.success) &&
          rechargeList.rechargeList.result.map((object) => (
            <>
              <ListItem
                key={object.bank_account}
                disableGutters
                secondaryAction={
                  <>
                    {["withdraw","recharge"].includes(object.type) ? (
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              color: object.status
                                ? object.status === "processing"
                                  ? "orange"
                                  : object.status === "success"
                                  ? "green"
                                  : "red"
                                : "",
                            }}
                          >
                            {capitalizeFirstLetter(object.status)}
                            <br />
                            {object.status === "processing" ? (
                              <CountdownTimer
                                targetDate={
                                  new Date(object.date * 1000).getTime() +
                                  12 * 60 * 60 * 1000
                                }
                              />
                            ) : null}
                          </Typography>
                        }
                        secondary={defaultCurrencyFormat(object.status === "success" ? object.ammount : 0)}
                      />
                    ) : (
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              color: object.status
                                ? object.status === "processing"
                                  ? "orange"
                                  : object.status === "success"
                                  ? "green"
                                  : "red"
                                : "",
                            }}
                          >
                            {capitalizeFirstLetter(object.status)}
                          </Typography>
                        }
                        secondary={defaultCurrencyFormat(object.status === "success" ? object.ammount : 0)}
                      />
                    )}
                  </>
                }
              >
                <ListItem>
                  <ListItemText
                    primary={defaultCurrencyFormat(object.ammount)}
                    secondary={
                      <>
                        <Typography>
                          {object.type === "recharge"
                            ? "Recharge request"
                            : object.type === "withdraw"
                            ? "Withdrawal request"
                            : "Place Order"}
                        </Typography>
                        <Typography>
                          {unixformatDateTime(object.date)}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              </ListItem>
              <Divider />
            </>
          ))}
        <TablePagination
          rowsPerPageOptions={false}
          component="div"
          count={
            strictValidObjectWithKeys(rechargeList) &&
            validValue(rechargeList.success)
              ? rechargeList.rechargeList.count
              : 0
          }
          rowsPerPage={10}
          page={page}
          onPageChange={handleChangePage}
        />
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
