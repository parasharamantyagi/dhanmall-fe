import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useApi from '../../hooks/useApi';
import { List, ListItem, ListItemText, Skeleton } from '@mui/material';
import {
  formatNewDateTime,
  strictValidObjectWithKeys,
} from '../../utils/common-utils';

export default function OrderList() {
  const { data, loading } = useApi('/order', 'GET');
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderList = (title, subtitle) => {
    return (
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        aria-label="contacts"
      >
        <ListItem disablePadding>
          <ListItemText sx={{ width: 500 }} primary={title} />
          <ListItemText sx={{ width: 500 }} primary={subtitle} />
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
                <Typography sx={{ width: 90, flexShrink: 0 }}>
                  {strictValidObjectWithKeys(order.details)
                    ? order.details.game_date + order.details.game_period
                    : 'N/A'}
                </Typography>
                <Typography
                  sx={{
                    ml: 3,
                    width: 100,
                    textAlign: 'center',
                    flexShrink: 0,
                    color: order.status
                      ? order.status === 1
                        ? 'green'
                        : 'red'
                      : 'orange',
                  }}
                  color="textPrimary"
                >
                  {order.status
                    ? order.status === 1
                      ? 'Success'
                      : 'Fail'
                    : 'Waiting'}
                </Typography>
                <Typography
                  sx={{
                    ml: 3,
                    color: order.status
                      ? order.status === 1
                        ? 'green'
                        : 'red'
                      : 'orange',
                  }}
                >
                  {/* {formatNewDateTime(order.date, "DD-MM-YYYY, HH:mm")} */}
                  {order.status
                    ? order.status === 1
                      ? order.amount
                      : order.delivery
                    : ''}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="p4" sx={{ color: 'green' }}>
                  Period Detail
                </Typography>
                {renderList(
                  'Period',
                  order.details.game_date + order.details.game_period,
                )}
                {renderList('Contract Money', order.contract_money)}
                {renderList('Contract Count', order.contract_number)}
                {renderList('Delivery', order.delivery)}
                {renderList('Fee', order.fee)}
                {renderList('Open Price', order.price)}
                {renderList('Result', order.color ? order.color : 'N/A')}
                {renderList('Select', order.pick)}
                {renderList('Status', 'Success')}
                {renderList('Amount', order.amount ? order.amount : 'N/A')}
                {renderList(
                  'Create Time',
                  formatNewDateTime(order.date, 'DD-MM-YYYY, HH:mm'),
                )}
                {renderList('Type', 'Parity')}
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
    </>
  );
}
