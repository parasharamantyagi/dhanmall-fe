import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import usePromotionApi from "../../../hooks/usePromotionApi";
import {
  getLastEightWords,
  strictValidObjectWithKeys,
} from "../../../utils/common-utils";

export default function PromotionLavel1({ pageType, totalPeople }) {
  const [page, setPage] = React.useState(0);
  const { promotionData } = usePromotionApi(
    `/children?type=${pageType}&page=${page}`,
    "GET"
  );
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  React.useEffect(() => {
    if (strictValidObjectWithKeys(promotionData)) {
      totalPeople(promotionData.data.total_people);
    }
  }, [promotionData,totalPeople]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table size="small" stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Water reward</TableCell>
              <TableCell>First reward</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {promotionData &&
              promotionData.data &&
              promotionData.data.children
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      <TableCell variant="body2" align="left">
                        {getLastEightWords(row._id)}
                      </TableCell>
                      <TableCell variant="body2" align="left">
                        {strictValidObjectWithKeys(row.childrens_id)
                          ? row.childrens_id.mobile
                          : "N/A"}
                      </TableCell>
                      <TableCell variant="body2" align="left">
                        {row.water_reward}
                      </TableCell>
                      <TableCell variant="body2" align="left">
                        {row.first_reward}
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={false}
        component="div"
        count={
          strictValidObjectWithKeys(promotionData)
            ? promotionData.data.totalPeopleWithType
            : 0
        }
        rowsPerPage={10}
        page={page}
        onPageChange={handleChangePage}
      />
    </Paper>
  );
}
