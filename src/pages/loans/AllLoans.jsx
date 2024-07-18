import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Button } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import {
  Table,
  Box,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Grid,
  Container,
  TextField,
  TablePagination,
  ToggleButtonGroup,
  ToggleButton,
  Card,
  Typography,
  Modal,
} from "@mui/material";
import { useState } from "react";

const AllLoans = () => {
  const dummy = [
    {
      id: 1,
      user: "Arlene McCoy",
      lAmt: "500,000",
      date: "30th June, 2024 • 9:43 AM",
      status: "Approved",
    },
    {
      id: 2,
      user: "Arlene McCoy",
      lAmt: "500,000",
      date: "30th June, 2024 • 9:43 AM",
      status: "Pending",
    },
    {
      id: 3,
      user: "Arlene McCoy",
      lAmt: "500,000",
      date: "30th June, 2024 • 9:43 AM",
      status: "Declined",
    },
    {
      id: 4,
      user: "Arlene McCoy",
      lAmt: "500,000",
      date: "30th June, 2024 • 9:43 AM",
      status: "Declined",
    },
    {
      id: 5,
      user: "Arlene McCoy",
      lAmt: "500,000",
      date: "30th June, 2024 • 9:43 AM",
      status: "Pending",
    },
    {
      id: 6,
      user: "Arlene McCoy",
      lAmt: "500,000",
      date: "30th June, 2024 • 9:43 AM",
      status: "Approved",
    },
  ];

  const [requestFilter, setRequestFilter] = useState("all");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  return (
    <>
      <div className="w-full mt-4 flex flex-col gap-4 bg-text_white border-[#E3E3E3] rounded-md p-3 items-start">
        <div className="bg-white border-[#E3E3E3] border-[1px]  w-[40%] py-2 px-2 flex items-center gap-2 rounded-md">
          <SearchOutlinedIcon sx={{ color: "#757575" }} />
          <input
            type="text"
            placeholder="Search member , ID"
            className="bg-transparent border-none focus:outline-none outline-none  w-full"
          />
        </div>

        {/* filter start */}
        <div className="flex items-center gap-3 w-[60%]">
          <Button
            onClick={() => setRequestFilter("all")}
            sx={{
              background: requestFilter === "all" ? "#FAFAFA" : "#fff",
              borderRadius: "8px",
              width: "100%",
              px: "15px",
              border:
                requestFilter === "all"
                  ? "1px solid #02981D"
                  : "1px solid #C8C8C8",
              color: requestFilter === "all" ? "#02981D" : "#5E5E5E",
              "&:hover": {
                backgroundColor:
                  requestFilter === "all" ? "#FAFAFA" : "transparent",
              },
              textTransform: "capitalize",
              fontWeight: "900",
            }}
          >
            All Requests
          </Button>
          <Button
            onClick={() => setRequestFilter("pending")}
            sx={{
              background: requestFilter === "pending" ? "#FAFAFA" : "#fff",
              borderRadius: "8px",
              width: "100%",
              px: "15px",
              border:
                requestFilter === "pending"
                  ? "1px solid #02981D"
                  : "1px solid #C8C8C8",
              color: requestFilter === "pending" ? "#02981D" : "#5E5E5E",
              "&:hover": {
                backgroundColor:
                  requestFilter === "pending" ? "#FAFAFA" : "transparent",
              },
              textTransform: "capitalize",
              fontWeight: "900",
            }}
          >
            Pending
          </Button>
          <Button
            onClick={() => setRequestFilter("approved")}
            sx={{
              background: requestFilter === "approved" ? "#FAFAFA" : "#fff",
              borderRadius: "8px",
              width: "100%",
              px: "15px",
              border:
                requestFilter === "approved"
                  ? "1px solid #02981D"
                  : "1px solid #C8C8C8",
              color: requestFilter === "approved" ? "#02981D" : "#5E5E5E",
              "&:hover": {
                backgroundColor:
                  requestFilter === "approved" ? "#FAFAFA" : "transparent",
              },
              textTransform: "capitalize",
              fontWeight: "900",
            }}
          >
            Approved
          </Button>
          <Button
            onClick={() => setRequestFilter("declined")}
            sx={{
              background: requestFilter === "declined" ? "#FAFAFA" : "#fff",
              borderRadius: "8px",
              width: "100%",
              px: "15px",
              border:
                requestFilter === "declined"
                  ? "1px solid #02981D"
                  : "1px solid #C8C8C8",
              color: requestFilter === "declined" ? "#02981D" : "#5E5E5E",
              "&:hover": {
                backgroundColor:
                  requestFilter === "declined" ? "#FAFAFA" : "transparent",
              },
              textTransform: "capitalize",
              fontWeight: "900",
            }}
          >
            Declined
          </Button>
        </div>
        {/* filter end */}

        {/* table  */}
        <Box className="w-full mt-4">
          <TableContainer>
            <Table sx={{ minWidth: 100, padding: "8px" }}>
              <TableHead
                sx={{
                  background: "#F8F8F8",
                }}
              >
                <TableRow>
                  <TableCell>S/N</TableCell>
                  <TableCell> User</TableCell>
                  <TableCell>Loan Amount(N) </TableCell>
                  <TableCell>Date Due</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {!dummy ? (
                  <CircularProgress
                    size="4.2rem"
                    sx={{
                      color: "#DC0019",
                      marginLeft: "auto",
                      padding: "1em",
                    }}
                  />
                ) : dummy && Array.isArray(dummy) && dummy.length > 0 ? (
                  dummy.map((item, i) => (
                    <TableRow key={item.id}>
                      <TableCell>{page * rowsPerPage + i + 1}</TableCell>
                      <TableCell>
                        <Typography
                          sx={{
                            fomtWeight: "400",
                            fontSize: "16px",
                            color: "#828282",
                          }}
                        >
                          {item?.user}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          sx={{
                            fomtWeight: "400",
                            fontSize: "16px",
                            color: "#828282",
                          }}
                        >
                          {item?.lAmt}
                        </Typography>
                      </TableCell>
                      <TableCell>{item?.date}</TableCell>
                      <TableCell>
                        {item?.status === "Pending" && (
                          <span className="flex gap-1 items-center  justify-center px-1 py-1 rounded-md bg-[#FFF9E6] text-[14px] text-[#997404]">
                            <AccessTimeOutlinedIcon sx={{ fontSize: "14px" }} />
                            {item?.status}
                          </span>
                        )}
                        {item?.status === "Approved" && (
                          <span className="flex gap-1 items-center justify-center  px-1 py-1 rounded-md  bg-[#E9F6EC] text-[14px] text-[#208637]">
                            <AccessTimeOutlinedIcon sx={{ fontSize: "14px" }} />
                            {item?.status}
                          </span>
                        )}
                        {item?.status === "Declined" && (
                          <span className="flex gap-1 items-center  px-1 py-1 justify-center rounded-md   bg-[#FBEBEC] text-[14px] text-[#E52929]">
                            <AccessTimeOutlinedIcon sx={{ fontSize: "14px" }} />
                            {item?.status}
                          </span>
                        )}
                      </TableCell>
                      <TableCell
                        sx={{
                          display: "flex",
                          gap: "5px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          sx={{
                            textTransform: "capitalize",
                            display: "flex",
                            gap: "4px",
                            width: "100px",
                            alignItems: "center",
                            color: "#02981d",
                            fontWeight: "400",
                            fontSize: "10px",
                            border: "1px solid #02981d",
                            "&:hover": {
                              backgroundColor: "#fafafa",
                              border: "1px solid #E0E0E0",
                            },
                            // lineHeight: "26.4px",
                          }}
                        >
                          ...View More
                        </Button>
                        <Button
                          variant="outlined"
                          sx={{
                            textTransform: "capitalize",
                            display: "flex",
                            gap: "4px",
                            width: "100px",
                            alignItems: "center",
                            color: "#02981d",
                            fontWeight: "400",
                            fontSize: "10px",
                            border: "1px solid #02981d",
                            "&:hover": {
                              backgroundColor: "#fafafa",
                              border: "1px solid #E0E0E0",
                            },
                            // lineHeight: "26.4px",
                          }}
                        >
                          <PersonOutlineOutlinedIcon
                            sx={{ fontSize: "14px" }}
                          />
                          Profile
                        </Button>
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

          <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={dummy?.totalCount || 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(event, newPage) => setPage(newPage)}
            // onRowsPerPageChange is removed as the number of rows per page is fixed
          />
        </Box>
        {/* table end */}
      </div>
    </>
  );
};

export default AllLoans;
