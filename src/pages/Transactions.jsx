import React, { useState } from "react";
import SelectDate from "../components/SelectDate";
import CustomCard from "../components/CustomCard";
import { useForm, Controller } from "react-hook-form";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import tOne from "../assets/transactions/t-1.svg";
import tTwo from "../assets/transactions/t-2.svg";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import {
  Table,
  Box,
  TableBody,
  TableCell,
  TableContainer,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  Button,
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
  Divider,
} from "@mui/material";
import CustomModal from "../components/CustomModal";
import CustomSuccessRequestModal from "../components/CustomSuccessRequestModal";
import CustomSuccessModal from "../components/CustomSuccessModal";

const Transactions = () => {
  const {
    handleSubmit,
    control,
    watch,
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "all" });
  const status = watch("status", "Pending");
  const statusOptions = ["Pending", "Successfull", "Failed"];
  const dummy = [
    {
      id: 1,
      name: "Emmanuel Ochigbo",
      des: "wallet credit",
      amt: "2000",
      status: "successfull",
    },
    {
      id: 2,
      name: "Emmanuel Ochigbo",
      des: "wallet credit",
      amt: "2000",
      status: "successfull",
    },
    {
      id: 3,
      name: "Emmanuel Ochigbo",
      des: "wallet credit",
      amt: "2000",
      status: "successfull",
    },
    {
      id: 4,
      name: "Emmanuel Ochigbo",
      des: "wallet credit",
      amt: "2000",
      status: "successfull",
    },
    {
      id: 5,
      name: "Emmanuel Ochigbo",
      des: "wallet credit",
      amt: "2000",
      status: "successfull",
    },
    {
      id: 6,
      name: "Emmanuel Ochigbo",
      des: "wallet credit",
      amt: "2000",
      status: "successfull",
    },
  ];
  const [trxFilter, setTrxFilter] = useState("all");
  const [openTrxModal, setOpenTrxModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [openWTrxModal, setWOpenTrxModal] = useState(false);
  const [openRequestModal, setOpenRequestModal] = useState(false);

  const closeOpenRequestModal = () => setOpenRequestModal(false);
  const closeTrxModal = () => setOpenTrxModal(false);
  const closeSuccessModal = () => setOpenSuccessModal(false);
  const closeWTrxModal = () => setWOpenTrxModal(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  return (
    <div className="w-full flex flex-col items-start  gap-3">
      <div className="w-full flex items-center justify-between mb-3">
        <p className="font-[600] text-[20px] text-general ">Transactions</p>

        <SelectDate />
      </div>
      <CustomCard style="w-full">
        <div className="flex items-start gap-4 flex-col">
          <div className="w-full flex items-center justify-between">
            <div className="bg-white border-[#E3E3E3] border-[1px] w-[50%] py-2 px-2 flex items-center gap-2 rounded-md">
              <SearchOutlinedIcon sx={{ color: "#757575" }} />
              <input
                type="text"
                placeholder="Search member , ID"
                className="bg-transparent border-none focus:outline-none outline-none  w-full"
              />
            </div>

            <Button
              sx={{
                background: "#FAFAFA",
                borderRadius: "8px",
                width: "13%",
                px: "15px",
                border: "1px solid #C8C8C8",
                color: "#02981D",
                "&:hover": {
                  backgroundColor: "#FAFAFA",
                },
                textTransform: "capitalize",
                fontWeight: "600",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img src={tOne} alt="export-icn" />
              Export
            </Button>
          </div>

          <div className="flex w-[70%] gap-3  items-center">
            <Button
              onClick={() => setTrxFilter("all")}
              sx={{
                background: trxFilter === "all" ? "#FAFAFA" : "#fff",
                borderRadius: "8px",
                width: "100%",
                px: "15px",
                border:
                  trxFilter === "all"
                    ? "1px solid #3F3767"
                    : "1px solid #C8C8C8",
                color: trxFilter === "all" ? "#3F3767" : "#C8C8C8",
                "&:hover": {
                  backgroundColor: trxFilter === "all" ? "#FAFAFA" : "#fff",
                },
                textTransform: "capitalize",
                fontWeight: "400",
              }}
            >
              All Transactions
            </Button>
            <Button
              onClick={() => setTrxFilter("wallet")}
              sx={{
                background: trxFilter === "wallet" ? "#FAFAFA" : "#fff",
                borderRadius: "8px",
                width: "100%",
                px: "15px",
                border:
                  trxFilter === "wallet"
                    ? "1px solid #02981D"
                    : "1px solid #5E5E5E",
                color: trxFilter === "wallet" ? "#02981D" : "#5E5E5E",
                "&:hover": {
                  backgroundColor: trxFilter === "wallet" ? "#FAFAFA" : "#fff",
                },
                textTransform: "capitalize",
                fontWeight: "400",
              }}
            >
              Wallet Credit
            </Button>
            <Button
              onClick={() => setTrxFilter("dpurchase")}
              sx={{
                background: trxFilter === "dpurchase" ? "#FAFAFA" : "#fff",
                borderRadius: "8px",
                width: "100%",
                px: "15px",
                border:
                  trxFilter === "dpurchase"
                    ? "1px solid #02981D"
                    : "1px solid #5E5E5E",
                color: trxFilter === "dpurchase" ? "#02981D" : "#5E5E5E",
                "&:hover": {
                  backgroundColor:
                    trxFilter === "dpurchase" ? "#FAFAFA" : "#fff",
                },
                textTransform: "capitalize",
                fontWeight: "400",
              }}
            >
              Data Purchase
            </Button>
            <Button
              onClick={() => setTrxFilter("withdrawal")}
              sx={{
                background: trxFilter === "withdrawal" ? "#FAFAFA" : "#fff",
                borderRadius: "8px",
                width: "100%",
                px: "15px",
                border:
                  trxFilter === "withdrawal"
                    ? "1px solid #02981D"
                    : "1px solid #5E5E5E",
                color: trxFilter === "withdrawal" ? "#02981D" : "#5E5E5E",
                "&:hover": {
                  backgroundColor:
                    trxFilter === "withdrawal" ? "#FAFAFA" : "#fff",
                },
                textTransform: "capitalize",
                fontWeight: "400",
              }}
            >
              Withdrawal
            </Button>
          </div>

          {/* table */}
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
                    <TableCell> User</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Amount(N)</TableCell>
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
                              color: "#5E5E5E",
                            }}
                          >
                            {item?.name}
                          </Typography>
                        </TableCell>
                        <TableCell>{item?.des}</TableCell>
                        <TableCell>{item?.amt}</TableCell>
                        <TableCell>
                          <Typography
                            sx={{
                              color: "#1E1E1E",
                              fontWeight: "500",
                              width: "200px",
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
                            <CheckCircleOutlineOutlinedIcon
                              sx={{ color: "#02981D", fontSize: "15px" }}
                            />
                            {item.status}
                          </Typography>
                        </TableCell>

                        <TableCell>
                          <Button
                            variant="outlined"
                            sx={{
                              textTransform: "capitalize",
                              display: "flex",
                              gap: "4px",
                              width: "100px",
                              alignItems: "center",
                              color: "#3F3767",
                              fontWeight: "400",
                              fontSize: "10px",
                              border: "1px solid #3F3767",
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
          {/* table end */}
        </div>
      </CustomCard>
      {/* All transactions modal */}
      <CustomModal open={openTrxModal} closeModal={closeTrxModal}>
        <div className="w-full flex flex-col items-start gap-2">
          <div className="flex items-center justify-between w-full mb-3">
            <p className="text-general font-[500] text-[20px] ">Transactions</p>

            <ClearRoundedIcon sx={{ color: "#1E1E1E", cursor: "pointer" }} />
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-general font-[500] text-[14px] ">USER DETAILS</p>
            <Button
              sx={{
                background: "#FAFAFA",
                borderRadius: "8px",
                px: "15px",
                border: "1px solid #C8C8C8",
                color: "#02981D",
                "&:hover": {
                  backgroundColor: "#FAFAFA",
                },
                fontWeight: "600",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              Go to profile
            </Button>
          </div>

          <div className="rounded-md w-full border-[1px] border-[#E3E3E3] p-2 flex flex-col items-start">
            <div className="w-full flex justify-between mt-1">
              <p className="text-[14px] text-primary_grey_2">User:</p>
              <p className="text-[14px] text-general font-[500]">
                Ronald Richards
              </p>
            </div>
            <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

            <div className="w-full flex justify-between">
              <p className="text-[14px] text-primary_grey_2">Email:</p>
              <p className="text-[14px] text-general font-[500]">
                Ronald@gmail.com
              </p>
            </div>

            <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

            <div className="w-full flex justify-between">
              <p className="text-[14px] text-primary_grey_2">Phone Number:</p>
              <p className="text-[14px] text-general font-[500]">08168465081</p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 w-full mt-3">
            <p className="text-general font-[500] text-[14px] ">
              TRANSACTION DETAILS
            </p>

            <div className="rounded-md w-full border-[1px] border-[#E3E3E3] p-2 flex flex-col items-start">
              <div className="w-full flex justify-between mt-1">
                <p className="text-[14px] text-primary_grey_2">Description:</p>
                <p className="text-[14px] text-general font-[500]">
                  Wallet Credit
                </p>
              </div>
              <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

              <div className="w-full flex justify-between">
                <p className="text-[14px] text-primary_grey_2">Amount:</p>
                <p className="text-[14px] text-general font-[500]">N100,000</p>
              </div>

              <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

              <div className="w-full flex justify-between">
                <p className="text-[14px] text-primary_grey_2">Status:</p>
                <p className="text-[14px] text-general font-[500]">
                  Successfull
                </p>
              </div>
              <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

              <div className="w-full flex justify-between">
                <p className="text-[14px] text-primary_grey_2">Date:</p>
                <p className="text-[14px] text-general font-[500]">
                  30th June, 2024 • 9:43 AM
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end w-full mt-3">
            <Button
              variant="contained"
              type="submit"
              sx={{
                color: "#fff",
                width: "13%",
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
        </div>
      </CustomModal>
      {/* All transactions modal */}
      {/* update transactios modal */}
      <CustomModal open={openWTrxModal} closeModal={closeWTrxModal}>
        <div className="w-full flex flex-col items-start gap-2">
          <div className="flex items-center justify-between w-full mb-3">
            <p className="text-general font-[500] text-[20px] ">Transactions</p>

            <ClearRoundedIcon sx={{ color: "#1E1E1E", cursor: "pointer" }} />
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-general font-[500] text-[14px] ">USER DETAILS</p>
            <Button
              sx={{
                background: "#FAFAFA",
                borderRadius: "8px",
                px: "15px",
                border: "1px solid #C8C8C8",
                color: "#02981D",
                "&:hover": {
                  backgroundColor: "#FAFAFA",
                },
                fontWeight: "600",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              Go to profile
            </Button>
          </div>

          <div className="rounded-md w-full border-[1px] border-[#E3E3E3] p-2 flex flex-col items-start">
            <div className="w-full flex justify-between mt-1">
              <p className="text-[14px] text-primary_grey_2">User:</p>
              <p className="text-[14px] text-general font-[500]">
                Ronald Richards
              </p>
            </div>
            <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

            <div className="w-full flex justify-between">
              <p className="text-[14px] text-primary_grey_2">Email:</p>
              <p className="text-[14px] text-general font-[500]">
                Ronald@gmail.com
              </p>
            </div>

            <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

            <div className="w-full flex justify-between">
              <p className="text-[14px] text-primary_grey_2">Phone Number:</p>
              <p className="text-[14px] text-general font-[500]">08168465081</p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 w-full mt-3">
            <p className="text-general font-[500] text-[14px] ">
              TRANSACTION DETAILS
            </p>

            <div className="rounded-md w-full border-[1px] border-[#E3E3E3] p-2 flex flex-col items-start">
              <div className="w-full flex justify-between mt-1">
                <p className="text-[14px] text-primary_grey_2">Description:</p>
                <p className="text-[14px] text-general font-[500]">
                  Wallet Credit
                </p>
              </div>
              <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

              <div className="w-full flex justify-between">
                <p className="text-[14px] text-primary_grey_2">Amount:</p>
                <p className="text-[14px] text-general font-[500]">N100,000</p>
              </div>

              <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

              <div className="w-full flex justify-between">
                <p className="text-[14px] text-primary_grey_2">Status:</p>
                <p className="text-[14px] text-general font-[500]">
                  Successfull
                </p>
              </div>
              <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

              <div className="w-full flex justify-between">
                <p className="text-[14px] text-primary_grey_2">Date:</p>
                <p className="text-[14px] text-general font-[500]">
                  30th June, 2024 • 9:43 AM
                </p>
              </div>
            </div>
          </div>
          {/* form radio buttons */}

          <div className="flex flex-col items-start gap-2 mt-2">
            <p className="text-general font-[500] text-[14px] ">STATUS</p>

            <div>
              <Controller
                name="subscription"
                control={control}
                defaultValue="Pending"
                render={({ field }) => (
                  <FormControl component="fieldset">
                    <RadioGroup
                      row
                      {...field}
                      onChange={(e) => field.onChange(e.target.value)}
                    >
                      {statusOptions?.map((label) => (
                        <div
                          key={label}
                          className={`rounded-md border-2 p-1 px-2 mr-3 ${
                            statusOptions === label
                              ? "border-[#02981D]"
                              : "border-[#E6F5E8]"
                          }`}
                        >
                          <FormControlLabel
                            value={label}
                            control={
                              <Radio
                                sx={{
                                  color: "#02981D",
                                  "&.Mui-checked": {
                                    color: "#02981D",
                                  },
                                }}
                              />
                            }
                            label={label}
                          />
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                )}
              />
            </div>
          </div>

          {/* form radio buttons */}

          <div className="w-full bg-[#FFF9E6] flex mt-3 py-4 gap-3 items-center rounded-md border-[1px] border-[#FFE69C] p-2">
            <img src={tTwo} alt="t-2" />
            <p className="text-[14px] text-[#CC9A06] ">
              This is a longer text describing the alert heading.
            </p>
          </div>
          <Button
            variant="contained"
            type="submit"
            disabled
            sx={{
              color: "#fff",
              my: "1rem",
              background: "#02981D",
              padding: ".6em",
              boxShadow: "none",
              "&:hover": {
                background: "#02981d",
              },
            }}
          >
            Update Status
          </Button>
        </div>
      </CustomModal>
      {/* update transactios modal */}
      {/* success request modal */}
      <CustomModal open={openRequestModal}>
        <CustomSuccessRequestModal
          close={closeOpenRequestModal}
          titleOne="Sure to Update Transaction Status?"
          titleTwo=" User will be notified of this action."
          btnText="Update Status"
        />
      </CustomModal>
      {/* success request modal */}s{/* success modal */}
      <CustomModal open={openSuccessModal}>
        <CustomSuccessModal
          close={closeSuccessModal}
          textOne="Transaction status has been updated."
        />
      </CustomModal>
      {/* success modal */}
    </div>
  );
};

export default Transactions;
