import React, { useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Button } from "@mui/material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { useForm, Controller } from "react-hook-form";

import {
  Table,
  Box,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
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
import CustomModal from "../components/CustomModal";
import CustomSuccessModal from "../components/CustomSuccessModal";
const Administrators = () => {
  const {
    handleSubmit,
    control,
    watch,
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "all" });
  const dummyAdmins = [
    {
      id: 1,
      name: "Kathryn Murphy",
    },
    {
      id: 2,
      name: "Floyd Miles",
    },
    {
      id: 3,
      name: "Kathryn Murphy",
    },
    {
      id: 4,
      name: "Theresa Webb",
    },
    {
      id: 5,
      name: "Kathryn Murphy",
    },
    {
      id: 6,
      name: "Kathryn Murphy",
    },
    {
      id: 7,
      name: "Kathryn Murphy",
    },
  ];
  const [filterValue, setFilterValue] = useState("all");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [openAddAdminModal, setOpenAddAdminModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [openAdminInfo, setOpenAdminInfo] = useState(false);

  const handleCloseAdminInfo = () => setOpenAdminInfo(false);
  const handleCloseSuccessModal = () => setSuccessModal(false);
  const handleCloseAddAdminModal = () => setOpenAddAdminModal(false);

  return (
    <div className="w-full flex items-start gap-3 flex-col justify-center">
      <p className=" text-[#171717] font-[600] text-[20px] ">Adminstrator</p>

      <div className="flex w-full justify-end ">
        <Button
          // onClick={() => setShowComp("add")}
          variant="contained"
          sx={{
            color: "#fff",
            background: "#02981D",
            display: "flex",
            alignItem: "center",
            gap: "5px",
            padding: ".6em",
            fontFamily: "Montserrat",
            boxShadow: "none",
            "&:hover": {
              background: "#02981d",
            },
          }}
        >
          <AddRoundedIcon />
          Add New Admin
        </Button>
      </div>

      <div className="bg-text_white w-full border-[0.1px] border-[#E3E3E3] rounded-md p-2 gap-3 flex flex-col items-start">
        <div className="w-[70%] flex items-center gap-3 my-4">
          <Button
            onClick={() => setFilterValue("all")}
            variant="outline"
            sx={{
              color: "#fff",
              background: "transparent",
              color: filterValue === "all" ? "#02981d" : "#C8C8C8",
              border:
                filterValue === "all"
                  ? "1px solid #02981D"
                  : "1px solid #C8C8C8",
              display: "flex",
              fontWeight: "600",
              padding: ".5em",
              px: ".9em",
              alignItems: "center",
              gap: "10px",
              boxShadow: "none",
              "&:hover": {
                background: "transparent",
              },
            }}
          >
            All Admins
          </Button>
          <Button
            onClick={() => setFilterValue("active")}
            variant="outline"
            sx={{
              color: "#fff",
              background: "transparent",
              color: filterValue === "active" ? "#02981d" : "#C8C8C8",
              border:
                filterValue === "active"
                  ? "1px solid #02981D"
                  : "1px solid #C8C8C8",
              display: "flex",
              fontWeight: "600",
              padding: ".5em",
              px: ".9em",
              alignItems: "center",
              gap: "10px",
              boxShadow: "none",
              "&:hover": {
                background: "transparent",
              },
            }}
          >
            Active
          </Button>
          <Button
            onClick={() => setFilterValue("inActive")}
            variant="outline"
            sx={{
              background: "transparent",
              color: filterValue === "inActive" ? "#02981d" : "#C8C8C8",
              border:
                filterValue === "inActive"
                  ? "1px solid #02981D"
                  : "1px solid #C8C8C8",
              display: "flex",
              fontWeight: "600",
              padding: ".5em",
              px: ".9em",
              alignItems: "center",
              gap: "10px",
              boxShadow: "none",
              "&:hover": {
                background: "transparent",
              },
            }}
          >
            Inactive
          </Button>
        </div>

        <div className="w-[70%] flex flex-col border-[0.1px] border-[#E3E3E3] rounded-md p-2 items-start ">
          {/* customers  */}
          <Box className="max-h-[87vh] overflow-y-auto w-full">
            <TableContainer component={Paper}>
              <Table
                sx={{
                  minWidth: "100%",
                  padding: "8px",
                }}
              >
                <TableBody>
                  {!dummyAdmins || dummyAdmins?.length === 0 ? (
                    <CircularProgress
                      size="4.2rem"
                      sx={{
                        color: "#f78105",
                        marginLeft: "auto",
                        padding: "1em",
                      }}
                    />
                  ) : dummyAdmins &&
                    Array.isArray(dummyAdmins) &&
                    dummyAdmins?.length > 0 ? (
                    dummyAdmins?.map((item, i) => (
                      <TableRow
                        key={item.id}
                        className="cursor-pointer"
                        // onClick={() => handleOpenCustomerProfile(i)}
                      >
                        <TableCell sx={{ width: "50px" }}>
                          {page * rowsPerPage + i + 1}
                        </TableCell>
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
                          <Box
                            sx={{
                              cursor: "pointer",
                              width: "100%",
                              display: "flex",
                              justifyContent: "end",
                            }}
                          >
                            <ChevronRightOutlinedIcon />
                          </Box>
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
              count={0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(event, newPage) => setPage(newPage)}
              // onRowsPerPageChange is removed as the number of rows per page is fixed
            />
          </Box>
          {/* customers end */}
        </div>
      </div>

      {/* Add new admin modal */}
      <CustomModal open={openAddAdminModal}>
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center justify-between w-full mb-3">
            <p className="text-general font-[500] text-[20px] ">
              Add New Admin
            </p>

            <ClearRoundedIcon
              onClick={handleCloseAddAdminModal}
              sx={{ color: "#1E1E1E", cursor: "pointer" }}
            />
          </div>

          <div className="w-full">
            <form action="">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <div className="w-full flex flex-col items-start gap-1 my-2">
                    <span className="flex items-center mb-1  justify-between w-full">
                      <p className="text-[#001533] font-[500] text-[16px]">
                        FIRST NAME
                        <sup className="text-[#DC3545]">*</sup>
                      </p>
                    </span>

                    <Controller
                      name="firstName"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="Enter First Name"
                          sx={{
                            width: "100%",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderRadius: "10px",
                              },
                              "&:hover fieldset": {
                                borderColor: "#015B11",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#015B11",
                              },
                            },
                          }}

                          // error={!!errors.venturesName}
                          // helperText={
                          //   errors.venturesName && errors.venturesName.message
                          // }
                        />
                      )}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="w-full flex flex-col items-start gap-1 my-2">
                    <span className="flex items-center mb-1  justify-between w-full">
                      <p className="text-[#001533] font-[500] text-[16px]">
                        LAST NAME/SURNAME
                        <sup className="text-[#DC3545]">*</sup>
                      </p>
                    </span>

                    <Controller
                      name="lastName"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="Enter Last name/Surname"
                          sx={{
                            width: "100%",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderRadius: "10px",
                              },
                              "&:hover fieldset": {
                                borderColor: "#015B11",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#015B11",
                              },
                            },
                          }}

                          // error={!!errors.venturesName}
                          // helperText={
                          //   errors.venturesName && errors.venturesName.message
                          // }
                        />
                      )}
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="w-full flex flex-col items-start gap-1 my-2">
                    <span className="flex items-center mb-1  justify-between w-full">
                      <p className="text-[#001533] font-[500] text-[16px]">
                        EMAIL ADDRESS
                        <sup className="text-[#DC3545]">*</sup>
                      </p>
                    </span>

                    <Controller
                      name="email"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="example@domain.com"
                          sx={{
                            width: "100%",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderRadius: "10px",
                              },
                              "&:hover fieldset": {
                                borderColor: "#015B11",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#015B11",
                              },
                            },
                          }}

                          // error={!!errors.venturesName}
                          // helperText={
                          //   errors.venturesName && errors.venturesName.message
                          // }
                        />
                      )}
                    />
                  </div>
                  <div className="flex justify-end  w-[70%] gap-5 ml-auto mt-6 items-center">
                    <Button
                      onClick={handleCloseAddAdminModal}
                      variant="outlined"
                      sx={{
                        textTransform: "capitalize",
                        display: "flex",
                        gap: "4px",
                        width: "100%",
                        alignItems: "center",
                        color: "#02981D",
                        padding: ".6em",
                        border: "1px solid #02981D",
                        "&:hover": {
                          border: "1px solid #02981D",
                        },
                        // lineHeight: "26.4px",
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        color: "#fff",
                        width: "100%",
                        background: "#02981D",
                        padding: ".6em",
                        boxShadow: "none",
                        "&:hover": {
                          background: "#02981d",
                        },
                      }}
                    >
                      Add New Admin
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </CustomModal>
      {/* Add new admin modal ends */}

      {/* add admin success modal */}
      <CustomModal open={successModal}>
        <CustomSuccessModal
          close={handleCloseSuccessModal}
          textOne="Login instructions have been sent to example@domain.com."
        />
      </CustomModal>
      {/* add admin success modal ends */}

      {/* admin information modal */}
      <CustomModal open={openAdminInfo}>
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center justify-between w-full mb-3">
            <p className="text-general font-[500] text-[20px] ">
              Admin Information
            </p>

            <ClearRoundedIcon
              onClick={handleCloseAddAdminModal}
              sx={{ color: "#1E1E1E", cursor: "pointer" }}
            />
          </div>

          <div className="w-full">
            <form action="">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <div className="w-full flex flex-col items-start gap-1 my-2">
                    <span className="flex items-center mb-1  justify-between w-full">
                      <p className="text-[#001533] font-[500] text-[16px]">
                        FIRST NAME
                        <sup className="text-[#DC3545]">*</sup>
                      </p>
                    </span>

                    <Controller
                      name="firstName"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="Enter First Name"
                          sx={{
                            width: "100%",
                            "& .MuiOutlinedInput-root": {
                              "& input": {
                                backgroundColor: "#E3E3E3", // Background color of the input
                                color: "#ACACAC", // Font color of the input
                                borderRadius: "10px", // Border radius of the input
                              },
                              "& fieldset": {
                                borderRadius: "10px",
                                border: "none",
                              },
                              "&:hover fieldset": {},
                              "&.Mui-focused fieldset": {
                                border: "none",
                              },
                            },
                          }}
                        />
                      )}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="w-full flex flex-col items-start gap-1 my-2">
                    <span className="flex items-center mb-1  justify-between w-full">
                      <p className="text-[#001533] font-[500] text-[16px]">
                        LAST NAME/SURNAME
                        <sup className="text-[#DC3545]">*</sup>
                      </p>
                    </span>

                    <Controller
                      name="lastName"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="Enter Last name/Surname"
                          sx={{
                            width: "100%",
                            "& .MuiOutlinedInput-root": {
                              "& input": {
                                backgroundColor: "#E3E3E3", // Background color of the input
                                color: "#ACACAC", // Font color of the input
                                borderRadius: "10px", // Border radius of the input
                              },
                              "& fieldset": {
                                borderRadius: "10px",
                                border: "none",
                              },
                              "&:hover fieldset": {},
                              "&.Mui-focused fieldset": {
                                border: "none",
                              },
                            },
                          }}

                          // error={!!errors.venturesName}
                          // helperText={
                          //   errors.venturesName && errors.venturesName.message
                          // }
                        />
                      )}
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="w-full flex flex-col items-start gap-1 my-2">
                    <span className="flex items-center mb-1  justify-between w-full">
                      <p className="text-[#001533] font-[500] text-[16px]">
                        EMAIL ADDRESS
                        <sup className="text-[#DC3545]">*</sup>
                      </p>
                    </span>

                    <Controller
                      name="email"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="example@domain.com"
                          sx={{
                            width: "100%",
                            "& .MuiOutlinedInput-root": {
                              "& input": {
                                backgroundColor: "#E3E3E3", // Background color of the input
                                color: "#ACACAC", // Font color of the input
                                borderRadius: "10px", // Border radius of the input
                              },
                              "& fieldset": {
                                borderRadius: "10px",
                                border: "none",
                              },
                              "&:hover fieldset": {},
                              "&.Mui-focused fieldset": {
                                border: "none",
                              },
                            },
                          }}

                          // error={!!errors.venturesName}
                          // helperText={
                          //   errors.venturesName && errors.venturesName.message
                          // }
                        />
                      )}
                    />
                  </div>
                  <div className="flex justify-end  w-[70%] gap-5 ml-auto mt-6 items-center">
                    <Button
                      onClick={handleCloseAdminInfo}
                      variant="outlined"
                      sx={{
                        textTransform: "capitalize",
                        display: "flex",
                        gap: "4px",
                        width: "100%",
                        alignItems: "center",
                        color: "#02981D",
                        padding: ".6em",
                        border: "1px solid #02981D",
                        "&:hover": {
                          border: "1px solid #02981D",
                        },
                        // lineHeight: "26.4px",
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        color: "#fff",
                        width: "100%",
                        background: "#02981D",
                        padding: ".6em",
                        boxShadow: "none",
                        "&:hover": {
                          background: "#02981d",
                        },
                      }}
                    >
                      Done
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </CustomModal>
      {/* admin information modal ends */}
    </div>
  );
};

export default Administrators;
