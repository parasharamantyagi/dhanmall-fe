import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import Header from "../header";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { orderService } from "./actions";
import useApi from "../../hooks/useApi";
import { Skeleton } from "@mui/material";

export default function Orders() {
  const { data, loading, error } = useApi("/order", "GET");

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Header />
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
                  {order._id}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {order.date}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <span className="bold-text">Price</span>: {order.price}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
      <Footer />
    </Box>
  );
}
