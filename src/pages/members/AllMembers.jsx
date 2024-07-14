import React from "react";
import CustomCard from "../../components/CustomCard";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Button } from "@mui/material";
import { useState } from "react";
import {
  Table,
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
const AllMembers = ({ setShowComp }) => {
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);

  const dummy = [
    {
      id: 1,
      name: "Arlene McCoy",
      phone: "(SOS)555-554",
      email: "michael.mitc@example.com",
    },
    {
      id: 2,
      name: "Arlene McCoy",
      phone: "(SOS)555-554",
      email: "michael.mitc@example.com",
    },
    {
      id: 3,
      name: "Arlene McCoy",
      phone: "(SOS)555-554",
      email: "michael.mitc@example.com",
    },
    {
      id: 4,
      name: "Arlene McCoy",
      phone: "(SOS)555-554",
      email: "michael.mitc@example.com",
    },
    {
      id: 5,
      name: "Arlene McCoy",
      phone: "(SOS)555-554",
      email: "michael.mitc@example.com",
    },
    {
      id: 6,
      name: "Arlene McCoy",
      phone: "(SOS)555-554",
      email: "michael.mitc@example.com",
    },
  ];
  return (
    <>
      <div className="w-full flex items-start gap-3 flex-col justify-center">
        <div className="flex items-center gap-2">
          <p className=" text-[#171717] font-[600] text-[20px] ">Members</p>
          <div className="flex items-center gap-1">
            (
            <div className="flex gap-1">
              <span className="font-[500] text-[#171717] text-[14px]  ">
                1,9970
              </span>
              <p className="font-normal text-[#171717] text-[14px]">Total</p>
            </div>
            <div className="flex gap-1">
              <span className="font-[500] text-[#171717] text-[14px]  ">
                1,9970
              </span>
              <p className="font-normal text-[#171717] text-[14px]">Total</p>
            </div>
            )
          </div>
        </div>

        {/* card */}
        <CustomCard style="w-full">
          <div className="w-full flex items-start gap-4 flex-col gap-2">
            {/* search */}

            <div className="bg-white border-[#E3E3E3] border-[1px] w-[40%] py-2 px-2 flex items-center gap-2 rounded-md">
              <SearchOutlinedIcon sx={{ color: "#757575" }} />
              <input
                type="text"
                placeholder="Search member , ID"
                className="bg-transparent border-none focus:outline-none outline-none  w-full"
              />
            </div>
            {/* search */}

            {/* filter */}

            <div className="flex items-center gap-5 w-1/2">
              <Button
                onClick={() => setFilter("all")}
                sx={{
                  background: filter === "all" ? "#FAFAFA" : "#fff",
                  borderRadius: "8px",
                  width: "100%",
                  px: "15px",
                  border:
                    filter === "all"
                      ? "1px solid #02981D"
                      : "1px solid #5E5E5E",
                  color: filter === "all" ? "#02981D" : "#5E5E5E",
                  "&:hover": {
                    backgroundColor: filter === "all" ? "#FAFAFA" : "#fff",
                  },
                  textTransform: "capitalize",
                  fontWeight: "400",
                }}
              >
                All Members
              </Button>
              <Button
                onClick={() => setFilter("active")}
                sx={{
                  background: filter === "active" ? "#FAFAFA" : "#fff",
                  borderRadius: "8px",
                  width: "100%",
                  px: "15px",
                  border:
                    filter === "active"
                      ? "1px solid #02981D"
                      : "1px solid #5E5E5E",
                  color: filter === "active" ? "#02981D" : "#5E5E5E",
                  "&:hover": {
                    backgroundColor: filter === "active" ? "#FAFAFA" : "#fff",
                  },
                  textTransform: "capitalize",
                  fontWeight: "400",
                }}
              >
                Active
              </Button>
              <Button
                onClick={() => setFilter("inactive")}
                sx={{
                  background: filter === "inactive" ? "#FAFAFA" : "#fff",
                  borderRadius: "8px",
                  width: "100%",
                  px: "15px",
                  border:
                    filter === "inactive"
                      ? "1px solid #02981D"
                      : "1px solid #5E5E5E",
                  color: filter === "inactive" ? "#02981D" : "#5E5E5E",
                  "&:hover": {
                    backgroundColor: filter === "inactive" ? "#FAFAFA" : "#fff",
                  },
                  textTransform: "capitalize",
                  fontWeight: "400",
                }}
              >
                Inactive
              </Button>
            </div>
            {/* filter */}

            {/* Table */}

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
                      <TableCell>Membership Status</TableCell>
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
                          <TableCell>
                            <Typography
                              sx={{
                                color: "#1E1E1E",
                                fontWeight: "500",
                                fontSize: "12px",
                                background: "#EBFFF3",
                                py: "5px",
                                color: "#1E854A",
                                borderRadius: "10px",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                justifyContent: "center",
                                width: "80px",
                              }}
                            >
                              <span className="w-[10px] h-[10px] rounded-full  bg-primary_green" />
                              Active
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Button
                              onClick={() => setShowComp("profile")}
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
            {/* Table */}
          </div>
        </CustomCard>
        {/* card */}
      </div>
    </>
  );
};

export default AllMembers;
