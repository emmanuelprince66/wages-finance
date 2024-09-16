import React from "react";
import SelectDate from "../../components/SelectDate";
import {
  Table,
  Box,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  CircularProgress,
  TextField,
  TablePagination,
  ToggleButtonGroup,
  ToggleButton,
  Card,
  Modal,
} from "@mui/material";
import { useState } from "react";
import FormattedPrice from "../../utils/FormattedPrice";
import { personalSavingsBreakdownUrl } from "../../api/endpoint";
import useFetchData from "../../hooks/useFetchData";
import { useDateContext } from "../../utils/DateContext";

const BreakdownModalData = ({ userId }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const { selectedDates } = useDateContext();

  const apiUrl = personalSavingsBreakdownUrl(userId, selectedDates);
  const queryKey = ["fetchSavingsBreakdown", apiUrl];

  const { data, error, isLoading } = useFetchData(queryKey, apiUrl);

  console.log(data);

  const dummy = [
    {
      id: 1,
      dd: "30/05/2024",
      interest: "120.2",
      bal: 102000,
    },
    {
      id: 2,
      dd: "30/05/2024",
      interest: "120.2",
      bal: 102000,
    },
    {
      id: 3,
      dd: "30/05/2024",
      interest: "120.2",
      bal: 102000,
    },
    {
      id: 4,
      dd: "30/05/2024",
      interest: "120.2",
      bal: 102000,
    },
    {
      id: 5,
      dd: "30/05/2024",
      interest: "120.2",
      bal: 102000,
    },
    {
      id: 6,
      dd: "30/05/2024",
      interest: "120.2",
      bal: 102000,
    },
    {
      id: 7,
      dd: "30/05/2024",
      interest: "120.2",
      bal: 102000,
    },
  ];
  return (
    <div className="flex w-full justify-end gap-3 flex-col">
      <SelectDate />

      {/* Table */}

      <Box className="w-full mt-3">
        <TableContainer>
          <Table sx={{ minWidth: 100, padding: "8px" }}>
            <TableHead
              sx={{
                background: "#F8F8F8",
              }}
            >
              <TableRow>
                <TableCell>S/N</TableCell>
                <TableCell> Date</TableCell>
                <TableCell>Interest(N)</TableCell>
                <TableCell>Balance(N)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!dummy ? (
                <CircularProgress
                  size="4.2rem"
                  sx={{
                    color: "#02981D",
                    marginLeft: "auto",
                    padding: "1em",
                  }}
                />
              ) : dummy && Array.isArray(dummy) && dummy?.length > 0 ? (
                dummy?.map((item, i) => (
                  <TableRow key={i + 2}>
                    <TableCell>{page * rowsPerPage + i + 1}</TableCell>
                    <TableCell>{item?.dd}</TableCell>
                    <TableCell>{item?.interest}</TableCell>

                    <TableCell>
                      <FormattedPrice amount={item?.bal} />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan="7">No data found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* <CustomPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        nextPageLink={transactionsData?.links?.next}
                        prevPageLink={transactionsData?.links?.previous}
                    /> */}
      </Box>
      {/* Table */}
    </div>
  );
};

export default BreakdownModalData;
