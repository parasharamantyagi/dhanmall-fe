import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  List,
  ListItem,
  ListItemText,
  Skeleton,
  TablePagination,
} from "@mui/material";
import {
  strictValidObjectWithKeys,
  unixformatDateTime,
} from "../../utils/common-utils";

export default function OrderList({ data, loading, setOder }) {
  const [page, setPage] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangePage = (event, newPage) => {
    setOder(newPage);
    setPage(newPage);
  };

  const renderList = (title, subtitle, isColor) => {
    const isEven = subtitle % 2 === 0;
    const buttonColor = isEven ? "red" : "green";
    const defaultColor = subtitle === "green" || subtitle === "red";
    const color = defaultColor ? subtitle : buttonColor;
    return (
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        aria-label="contacts"
      >
        <ListItem disablePadding>
          <ListItemText sx={{ width: 500 }} primary={title} />
          <ListItemText
            primary={
              <Typography
                variant={isColor ? "h4" : "body2"}
                style={{ color: isColor ? color : "#000" }}
              >
                {subtitle}
              </Typography>
            }
            sx={{ width: 500 }}
          />
        </ListItem>
      </List>
    );
  };

  return (
    <>
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
      <div>
        {data &&
          data.data.order_data.map((order, index) => (
            <Accordion
              expanded={expanded === order._id}
              onChange={handleChange(order._id)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: 90, flexShrink: 0 }}>
                  {strictValidObjectWithKeys(order.details)
                    ? order.details.game_date + order.details.game_period
                    : "N/A"}
                </Typography>
                <Typography
                  sx={{
                    ml: 3,
                    width: 100,
                    textAlign: "center",
                    flexShrink: 0,
                    color: order.status
                      ? order.status === 1
                        ? "green"
                        : "red"
                      : "orange",
                  }}
                  color="textPrimary"
                >
                  {order.status
                    ? order.status === 1
                      ? "Success"
                      : "Fail"
                    : "Waiting"}
                </Typography>
                <Typography
                  sx={{
                    ml: 3,
                    color: order.status
                      ? order.status === 1
                        ? "green"
                        : "red"
                      : "orange",
                  }}
                >
                  {/* {formatNewDateTime(order.date, "DD-MM-YYYY, HH:mm")} */}
                  {order.status
                    ? order.status === 1
                      ? order.amount
                      : ""
                    : ""}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="p4" sx={{ color: "green" }}>
                  Period Detail
                </Typography>
                {renderList(
                  "Period",
                  order.details.game_date + order.details.game_period
                )}
                {renderList("Contract Money", order.contract_money)}
                {renderList("Contract Count", order.contract_number)}
                {renderList("Delivery", order.status ? order.amount : 'Waiting')}
                {renderList("Fee", order.fee)}
                {renderList("Open Price", order.price)}
                {renderList("Unit", order.status ? order.unit : "Waiting")}
                {renderList(
                  "Result",
                  order.color ? order.color : "Waiting",
                  order.color ? true : false
                )}
                {renderList("Select", order.pick, true)}
                {renderList(
                  "Create Time",
                  unixformatDateTime(order.date)
                )}
                {renderList("Type", "Parity")}
              </AccordionDetails>
            </Accordion>
          ))}
        <TablePagination
          rowsPerPageOptions={false}
          component="div"
          count={data && data.data.order_page}
          rowsPerPage={10}
          page={page}
          onPageChange={handleChangePage}
        />
        {renderList("", "", "")}
        {renderList("", "", "")}
        {renderList("", "", "")}
      </div>
    </>
  );
}
