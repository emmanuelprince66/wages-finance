import React from "react";
import { useState } from "react";
import mSeven from "../../assets/member-profile/m-7.svg";
import mOne from "../../assets/member-profile/m-1.svg";
import mTwo from "../../assets/member-profile/m-2.svg";
import mThree from "../../assets/member-profile/m-3.svg";
import mFour from "../../assets/member-profile/m-4.svg";
import mFive from "../../assets/member-profile/m-5.svg";
import mSix from "../../assets/member-profile/m-6.svg";
import mTen from "../../assets/member-profile/m-10.svg";
import mEl from "../../assets/member-profile/m-11.svg";
import mEight from "../../assets/member-profile/m-8.svg";
import mNine from "../../assets/member-profile/m-9.svg";
import avatar from "../../assets/member-profile/avatar.png";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import CustomCard from "../../components/CustomCard";
import { Grid, Typography, Switch, CircularProgress } from "@mui/material";
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
  TextField,
  TablePagination,
  ToggleButtonGroup,
  ToggleButton,
  Card,
  Modal,
} from "@mui/material";

const MemberProfile = ({ setShowComp }) => {
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const dummy = [
    {
      id: 1,
      amt: "70,0000",
      type: "Credit",
      des: "Loan",
      date: "5/30/24 | 10:44 AM",
    },
    {
      id: 2,
      amt: "70,0000",
      type: "Credit",
      des: "Loan",
      date: "5/30/24 | 10:44 AM",
    },
    {
      id: 3,
      amt: "70,0000",
      type: "Credit",
      des: "Loan",
      date: "5/30/24 | 10:44 AM",
    },
    {
      id: 4,
      amt: "70,0000",
      type: "Credit",
      des: "Loan",
      date: "5/30/24 | 10:44 AM",
    },
    {
      id: 5,
      amt: "70,0000",
      type: "Credit",
      des: "Loan",
      date: "5/30/24 | 10:44 AM",
    },
    {
      id: 6,
      amt: "70,0000",
      type: "Credit",
      des: "Loan",
      date: "5/30/24 | 10:44 AM",
    },
  ];
  return (
    <div className="flex items-start flex-col gap-3">
      {/*  */}
      <div className="flex items-center gap-3">
        <div
          className="flex items-center gap-1 cursor-pointer hover:underline"
          onClick={() => setShowComp("members")}
        >
          <img src={mSeven} alt="" />
          <p className="text-[14px]  text-[#17171]">Members</p>
        </div>
        <ChevronRightOutlinedIcon sx={{ color: "#919191", pt: "2px" }} />
        <div className="flex items-center gap-1">
          <img src={mOne} alt="" className="w-[12px] h-[12px]" />
          <p className="text-[14px]  text-[#17171]">Ronald Richards</p>
        </div>
      </div>
      {/*  */}

      <div className="flex gap-2 items-center">
        <WestOutlinedIcon sx={{ color: "#919191", pt: "2px" }} />
        <p className="text-[#171717] text-[20px] font-[600]">Ronald Richards</p>
      </div>

      {/* card 1 */}
      <CustomCard style="w-full">
        <div className="w-full bg-white">
          <div className="flex gap-4 items-end ">
            <div className="flex flex-col items-start gap-6">
              <p className="text-general font-[500] text-[16px] ">
                Personal Details
              </p>

              <div>
                <img src={avatar} alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start">
              <div className="flex gap-3 items-center">
                <img src={mOne} alt="" />
                <div className="flex flex-col items-start gap-1">
                  <p className="text-primary_grey_2 text-[12px] ">
                    Surname / Lastname
                  </p>
                  <p className="text-general text-[16px] ">Richards</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src={mOne} alt="" />
                <div className="flex flex-col items-start gap-1">
                  <p className="text-primary_grey_2 text-[12px] ">First Name</p>
                  <sp className="text-general text-[16px] ">Ronald</sp>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src={mTwo} alt="" />
                <div className="flex flex-col items-start gap-1">
                  <p className="text-primary_grey_2 text-[12px] ">
                    Phone Number
                  </p>
                  <p className="text-general text-[16px] ">Richards</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src={mThree} alt="" />
                <div className="flex flex-col items-start gap-1">
                  <p className="text-primary_grey_2 text-[12px] ">Email</p>
                  <p className="text-general text-[16px] ">
                    ronaldrichards@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomCard>
      {/* card 1 */}

      {/* card 2 */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CustomCard style="w-full h-full">
            <div className="bg-text_white">
              <div className="flex flex-col items-start gap-4">
                <p className="text-general font-[500] text-[16px] ">
                  Account Information{" "}
                </p>

                <div className="flex flex-col gap-3 items-start">
                  <div className="flex gap-3 items-center mb-2">
                    <img src={mNine} alt="" />
                    <div className="flex flex-col items-start gap-2">
                      <p className="text-primary_grey_2 text-[12px] ">
                        Wallet Balance
                      </p>
                      <p className="text-general text-[16px]">&#8358;17,000</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center mb-2">
                    <img src={mFour} alt="" />
                    <div className="flex flex-col items-start gap-2">
                      <p className="text-primary_grey_2 text-[12px] ">
                        Cooperative Membership: Status:
                      </p>
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
                    </div>
                  </div>
                  <div className="flex gap-3 items-center mb-2">
                    <img src={mFour} alt="" />
                    <div className="flex flex-col items-start gap-2">
                      <p className="text-primary_grey_2 text-[12px] ">
                        Membership ID:
                      </p>
                      <p className="text-general text-[16px] ">WF-12345678</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img src={mFive} alt="" />
                    <div className="flex flex-col items-start gap-2 mb-2">
                      <p className="text-primary_grey_2 text-[12px] ">
                        KYC Level
                      </p>
                      <p className="text-general text-[16px] ">Tier 1</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center mb-2">
                    <img src={mSix} alt="" />
                    <div className="flex flex-col items-start gap-2 mb-2">
                      <p className="text-primary_grey_2 text-[12px] ">
                        Date Joined
                      </p>
                      <p className="text-general text-[16px] ">
                        01/04/2024 at 11:02 am
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img src={mSix} alt="" />
                    <div className="flex flex-col items-start gap-1">
                      <p className="text-primary_grey_2 text-[12px] ">
                        Date Cancelled
                      </p>
                      <p className="text-general text-[16px] ">-</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img src={mEight} alt="" />
                    <div className="flex  items-center gap-1">
                      <p className="text-primary_red text-[16px] ">
                        Disable Account
                      </p>

                      <Switch
                        sx={{
                          "& .MuiSwitch-switchBase.Mui-checked": {
                            color: "#fff",
                            // "&:hover": {
                            //   backgroundColor: alpha(
                            //     pink[600],
                            //     theme.palette.action.hoverOpacity
                            //   ),
                            // },
                          },
                          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                            {
                              backgroundColor: "#E52929",
                            },
                        }}
                        defaultChecked
                        color="default"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CustomCard>
        </Grid>
        <Grid item xs={6}>
          <div className="h-full w-full flex items-center flex-col gap-2">
            <CustomCard style="w-full h-full">
              <div className="w-full flex items-start flex-col gap-2">
                <p className="text-general font-[500] text-[16px] mb-3">
                  Savings, Investment & Loan Portfolio
                </p>

                <div className="w-full flex justify-between items-center">
                  <div className="flex-col flex items-start gap-1">
                    <p className="text-[14px] text-primary_grey_2">
                      Total Savings :
                    </p>
                    <p className="text-general font-[600] text-[24px] ">
                      ₦443,000.00
                    </p>
                    <span className="flex gap-3 items-center cursor-pointer">
                      <p className="text-primary_green text-[12px] font-[500]">
                        View Savings Plans
                      </p>

                      <ChevronRightOutlinedIcon sx={{ color: "#02981D" }} />
                    </span>
                  </div>
                  <div className="min-h-[5rem] w-[1px] bg-[#E3E3E3]"></div>
                  <div className="flex-col flex items-start gap-1">
                    <p className="text-[14px] text-primary_grey_2">
                      Total Investment Value :
                    </p>
                    <p className="text-general font-[600] text-[24px] ">
                      ₦443,000.00
                    </p>
                    <span className="flex gap-3 items-center cursor-pointer">
                      <p className="text-primary_green text-[12px] font-[500]">
                        See Details
                      </p>

                      <ChevronRightOutlinedIcon sx={{ color: "#02981D" }} />
                    </span>
                  </div>
                </div>
                <div className="flex-col flex items-start gap-1 mt-4">
                  <p className="text-[14px] text-primary_grey_2">
                    Outstanding Loan: :
                  </p>
                  <p className="text-primary_red font-[600] text-[24px] ">
                    ₦-443,000.00
                  </p>
                  <span className="flex gap-3 items-center cursor-pointer">
                    <p className="text-primary_green text-[12px] font-[500]">
                      Loan History
                    </p>

                    <ChevronRightOutlinedIcon sx={{ color: "#02981D " }} />
                  </span>
                </div>
              </div>
            </CustomCard>
            <CustomCard style="w-full h-full">
              <div className="w-full flex items-start flex-col gap-2">
                <p className="text-general font-[500] text-[16px] mb-3">
                  Rewards
                </p>
                <div className="flex gap-9 items-center">
                  <div className="flex items-start gap-3 flex-col">
                    <div className="flex gap-3 items-center">
                      <img src={mTen} alt="" />
                      <div className="flex flex-col items-start gap-1">
                        <p className="text-primary_grey_2 text-[12px] ">
                          Accumulated Wage Points:
                        </p>
                        <p className="text-general text-[16px] font-[600] ">
                          8,55500
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <img src={mEl} alt="" />
                      <div className="flex flex-col items-start gap-1">
                        <p className="text-primary_grey_2 text-[12px] ">
                          Total Referral Bonus Earned:
                        </p>
                        <p className="text-general text-[16px] font-[600] ">
                          ₦14,000.00
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <img src={mSeven} alt="" className="w-[20px] h-[20px]" />
                      <div className="flex flex-col items-start gap-1">
                        <p className="text-primary_grey_2 text-[12px] ">
                          Accumulated Wage Points:
                        </p>
                        <p className="text-general text-[16px] font-[600] ">
                          8,55500
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex flex-col items-start gap-1">
                      <p className="text-primary_grey_2 text-[12px] ">
                        Unclaimed Referral Bonus:
                      </p>
                      <p className="text-general text-[16px] font-[600] ">
                        ₦14,000.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CustomCard>
          </div>
        </Grid>
        <Grid item xs={12}>
          <CustomCard style="w-full h-full">
            <div className="bg-text_white">
              <div className="flex flex-col items-center">
                <div className="flex w-full mb-6 justify-between items-center">
                  <p className="text-general text-[16px] font-[500] ">
                    Recent Transactions
                  </p>

                  <span className="flex gap-3 items-center cursor-pointer">
                    <p className="text-primary_green text-[12px] font-[500]">
                      See Full Transaction History
                    </p>

                    <ChevronRightOutlinedIcon sx={{ color: "#02981D " }} />
                  </span>
                </div>

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
                          <TableCell> Amount(N)</TableCell>
                          <TableCell>Type</TableCell>
                          <TableCell>Description</TableCell>
                          <TableCell>Date & Time</TableCell>
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
                        ) : dummy &&
                          Array.isArray(dummy) &&
                          dummy.length > 0 ? (
                          dummy.map((item, i) => (
                            <TableRow key={item.id}>
                              <TableCell>
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
                                  {item?.amt}
                                </Typography>
                              </TableCell>

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
                                  {item.type}
                                </Typography>
                              </TableCell>
                              <TableCell>{item?.des}</TableCell>
                              <TableCell>{item?.date}</TableCell>
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
            </div>
          </CustomCard>
        </Grid>
      </Grid>

      {/* card 2 */}
    </div>
  );
};

export default MemberProfile;
