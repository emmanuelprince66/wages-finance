import React from "react";
import { useState } from "react";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import {
  Table,
  Button,
  Box,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
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
const ParticipantsSavings = ({ event , setShowComp }) => {
  const { title, link } = event;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);

  const dummy = [
    {
      id: 1,
      name: "Arlene McCoy",
      phone: "(SOS)555-554",
      email: "michael.mitc@example.com",
      amt: "270,000000",
    },
    {
      id: 2,
      name: "Arlene McCoy",
      phone: "(SOS)555-554",
      email: "michael.mitc@example.com",
      amt: "270,000000",
    },
    {
      id: 3,
      name: "Arlene McCoy",
      phone: "(SOS)555-554",
      email: "michael.mitc@example.com",
      amt: "270,000000",
    },
    {
      id: 4,
      name: "Arlene McCoy",
      phone: "(SOS)555-554",
      email: "michael.mitc@example.com",
      amt: "270,000000",
    },
    {
      id: 5,
      name: "Arlene McCoy",
      phone: "(SOS)555-554",
      email: "michael.mitc@example.com",
      amt: "270,000000",
    },
    {
      id: 6,
      name: "Arlene McCoy",
      phone: "(SOS)555-554",
      email: "michael.mitc@example.com",
      amt: "270,000000",
    },
  ];
  return (
    <div className="flex w-full flex-col items-start gap-4">
      <div className="flex gap-3 items-center mb-3">
        <div
          className="flex gap-1 items-center cursor-pointer"
          onClick={() => {
            setShowComp("corporate");
          }}
        >
          <img src="" alt="" />
          <p className="text-general text-[14px] hover:underline">Savings</p>
        </div>
        <ChevronRightOutlinedIcon
          sx={{ color: "#3F3767", fontSize: "16px", mt: "1px" }}
        />
        <div
          className="flex gap-1 items-center cursor-pointer"
          onClick={() => {
            setShowComp("target");
          }}
        >
          <img src="" alt="" />
          <p className="text-general text-[14px] hover:underline">
            Target Savings
          </p>
        </div>

        <ChevronRightOutlinedIcon
          sx={{ color: "#3F3767", fontSize: "16px", mt: "1px" }}
        />

        <div className="flex gap-1 items-center">
          <img src="" alt="link" />
          <p className="text-general text-[14px]">{title}</p>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <p className="text-general text-[20px] font-[600]">{title}</p>
      </div>

      <div className="w-full">
        <Box className="w-full">
          <TableContainer>
            <Table sx={{ minWidth: 100, padding: "8px" }}>
              <TableHead
                sx={{
                  background: "#F8F8F8",
                }}
              >
                <TableRow>
                  <TableCell>S/N</TableCell>
                  <TableCell> Name</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Email Address</TableCell>
                  <TableCell>Amount Saved(N)</TableCell>
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
                          {item?.name}
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
                          {item?.phone}
                        </Typography>
                      </TableCell>
                      <TableCell>{item?.email}</TableCell>
                      <TableCell>{item?.amt}</TableCell>
                      <TableCell>
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
                          View More
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
      </div>
    </div>
  );
};

export default ParticipantsSavings;
