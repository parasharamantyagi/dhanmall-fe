import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useApi from "../../hooks/useApi";
import { Skeleton, colors } from "@mui/material";
import {
  formatNewDateTime,
  getLastEightWords,
  strictValidObjectWithKeys,
} from "../../utils/common-utils";

export default function OrderList() {
  const { data, loading } = useApi("/order", "GET");
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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
          data.data.map((order, index) => (
            <Accordion
              expanded={expanded === order._id}
              onChange={handleChange(order._id)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  {strictValidObjectWithKeys(order.details)
                    ? order.details.game_date + order.details.game_period
                    : "N/A"}
                </Typography>
                <Typography
                  sx={{ width: "33%", flexShrink: 0, color: (order.status) ? (order.status === 1) ? "green" : 'red' : "orange" }}
                  color="textPrimary"
                >
                  {(order.status) ? (order.status === 1) ? "Success" : 'Fail' : "Waiting"}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {formatNewDateTime(order.date, "DD-MM-YYYY, HH:mm")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <span className="bold-text">Price</span>: {order.price}
                </Typography>
                <Typography>
                  <span className="bold-text">contract_money</span>:{" "}
                  {strictValidObjectWithKeys(order)
                    ? order.contract_money
                    : "N/A"}
                </Typography>
                <Typography>
                  <span className="bold-text">contract_type</span>:{" "}
                  {strictValidObjectWithKeys(order)
                    ? order.contract_type
                    : "N/A"}
                </Typography>
                <Typography>
                  <span className="bold-text">contract_number</span>:{" "}
                  {strictValidObjectWithKeys(order)
                    ? order.contract_number
                    : "N/A"}
                </Typography>
                <Typography>
                  <span className="bold-text">type</span>:{" "}
                  {strictValidObjectWithKeys(order) ? order.type : "N/A"}
                </Typography>
                <Typography>
                  <span className="bold-text">pick</span>:{" "}
                  {strictValidObjectWithKeys(order) ? order.pick : "N/A"}
                </Typography>
                <Typography>
                  <span className="bold-text">delivery</span>:{" "}
                  {strictValidObjectWithKeys(order) ? order.delivery : "N/A"}
                </Typography>
                <Typography>
                  <span className="bold-text">fee</span>:{" "}
                  {strictValidObjectWithKeys(order) ? order.fee : "N/A"}
                </Typography>
                <Typography>
                  <span className="bold-text">status</span>:{" "}
                  {strictValidObjectWithKeys(order) ? order.status : "N/A"}
                </Typography>
                <Typography>
                  <span className="bold-text">goods_id</span>:{" "}
                  {strictValidObjectWithKeys(order) ? order.goods_id : "N/A"}
                </Typography>
                <Typography>
                  <span className="bold-text">price</span>:{" "}
                  {strictValidObjectWithKeys(order) ? order.price : "N/A"}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
    </>
  );
}
