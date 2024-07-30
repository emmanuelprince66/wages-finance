import React from "react";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import tTwo from "../../assets/transactions/t-2.svg";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import mOne from "../../assets/member-profile/m-1.svg";
import mTwo from "../../assets/member-profile/m-2.svg";
import mThree from "../../assets/member-profile/m-3.svg";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import mSeven from "../../assets/member-profile/m-7.svg";
import CustomCard from "../../components/CustomCard";
import Lfour from "../../assets/loan/Lfour";

import {
  Grid,
  Typography,
  Switch,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  CircularProgress,
  CardContent,
  Button,
} from "@mui/material";
import { Divider } from "@mui/material";

import avatar from "../../assets/member-profile/avatar.png";
import CustomModal from "../../components/CustomModal";
import CustomSuccessModal from "../../components/CustomSuccessModal";
import CustomSuccessRequestModal from "../../components/CustomSuccessRequestModal";
import FormattedPrice from "../../utils/FormattedPrice";
import formattedDate from "../../utils/formattedDate";

const LoanProfile = ({
  memberLoanDetails,
  setShowLoans,
  showLoans,
  setShowStatistics,
}) => {
  const {
    handleSubmit,
    control,
    watch,
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "all" });

  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  const [selectedStatus, setSelectedStatus] = useState(
    capitalizeFirstLetter(memberLoanDetails?.status) || ""
  );

  const status = watch("status", "Pending");
  const statusOptions = ["Pending", "Approved", "Declined"];
  const [openLoanSuccessModal, setOpenLoanSuccessModal] = useState(false);
  const closeLoanSuccessModal = () => setOpenLoanSuccessModal(false);
  const handleChange = (event) => {
    setStatusValue(event.target.value);
  };
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };
  const handleBack = () => {
    showLoans === undefined
      ? setShowStatistics("request")
      : setShowLoans((prev) => !prev);
  };

  return (
    <div className="flex items-start w-full flex-col gap-3 mt-4">
      {/*  */}
      <div className="flex items-center gap-3">
        <div
          className="flex items-center gap-1 cursor-pointer hover:underline"
          onClick={handleBack}
        >
          <img src={mSeven} alt="" />
          <p className="text-[14px]  text-[#17171]">Loan Requests</p>
        </div>
        <ChevronRightOutlinedIcon sx={{ color: "#919191", pt: "2px" }} />
        <div className="flex items-center gap-1">
          <img src={mOne} alt="" className="w-[12px] h-[12px]" />
          <p className="text-[14px]  text-[#17171]">Loan Request Details</p>
        </div>
      </div>
      {/*  */}

      <div className="flex gap-2 items-center">
        <WestOutlinedIcon
          onClick={handleBack}
          sx={{ color: "#919191", pt: "2px", cursor: "pointer" }}
        />
        <p className="text-[#171717] text-[20px] font-[600]">
          Loan Request Details
        </p>
      </div>

      {/* card 1 */}
      <CustomCard style="w-full">
        <div className="w-full bg-white">
          <div className="flex gap-4 items-end ">
            <div className="flex flex-col items-start gap-6">
              <p className="text-general font-[500] text-[16px] ">
                User's Personal Details
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
                  <p className="text-general text-[16px] ">
                    {memberLoanDetails?.lastname}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src={mOne} alt="" />
                <div className="flex flex-col items-start gap-1">
                  <p className="text-primary_grey_2 text-[12px]">First Name</p>
                  <sp className="text-general text-[16px] ">
                    {memberLoanDetails?.firstname}
                  </sp>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src={mTwo} alt="" />
                <div className="flex flex-col items-start gap-1">
                  <p className="text-primary_grey_2 text-[12px] ">
                    Phone Number
                  </p>
                  <p className="text-general text-[16px] ">
                    {memberLoanDetails?.phone}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src={mThree} alt="" />
                <div className="flex flex-col items-start gap-1">
                  <p className="text-primary_grey_2 text-[12px] ">Email</p>
                  <p className="text-general text-[16px] ">
                    {memberLoanDetails?.email}
                  </p>
                </div>
              </div>
              <span className="flex gap-2 cursor-pointer items-center text-primary_green font-[500] text-[16px]">
                view more <ChevronRightOutlinedIcon sx={{ fontSize: "16px" }} />
              </span>
            </div>
          </div>
        </div>
      </CustomCard>
      {/* card 1 */}

      {/* Grid */}

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CustomCard>
            <div className="w-full flex-col items-start gap-3 flex">
              <p className="text-general font-[500] text-[16px]">
                Request Details
              </p>

              <div className="rounded-md w-full border-[1px] bg-text_white border-[#E3E3E3] p-2 flex flex-col items-start">
                <div className="w-full flex justify-between mt-1">
                  <p className="text-[14px] text-primary_grey_2">Amount:</p>
                  <p className="text-[14px] text-general font-[500]">
                    <FormattedPrice amount={memberLoanDetails?.amount} />
                  </p>
                </div>
                <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

                <div className="w-full flex justify-between">
                  <p className="text-[14px] text-primary_grey_2">
                    Loan Period:
                  </p>
                  <p className="text-[14px] text-general font-[500]">
                    {memberLoanDetails?.duration_in_months} Month
                  </p>
                </div>

                <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

                <div className="w-full flex justify-between">
                  <p className="text-[14px] text-primary_grey_2">Interest:</p>
                  <p className="text-[14px] text-general font-[500]">
                    {memberLoanDetails?.interest_rate} per month
                  </p>
                </div>
                <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />
                <div className="w-full flex justify-between">
                  <p className="text-[14px] text-primary_grey_2">
                    Total Repayment:
                  </p>
                  <p className="text-[14px] text-general font-[500]">null</p>
                </div>
                <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />
                <div className="w-full flex justify-between">
                  <p className="text-[14px] text-primary_grey_2">
                    Date of Repayment:
                  </p>
                  <p className="text-[14px] text-general font-[500]">
                    {formattedDate(memberLoanDetails?.date_requested)}
                  </p>
                </div>
                <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

                <div className="w-full flex justify-between">
                  <p className="text-[14px] text-primary_grey_2">
                    Date of Approved/Declined:
                  </p>
                  <p className="text-[14px] text-general font-[500]">
                    {formattedDate(memberLoanDetails?.date_approved)}
                  </p>
                </div>
                <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

                <div className="w-full flex justify-between">
                  <p className="text-[14px] text-primary_grey_2">
                    Date Due for Repayment:
                  </p>
                  <p className="text-[14px] text-general font-[500]">null </p>
                </div>
              </div>

              {/* radio */}
              <div className="flex items-start gap-2 flex-col">
                <p className="text-general font-[500] text-[16px]">Status</p>

                <div>
                  <FormControl component="fieldset">
                    <RadioGroup
                      row
                      value={selectedStatus}
                      onChange={handleStatusChange}
                    >
                      {statusOptions?.map((label) => (
                        <div
                          key={label}
                          className={`rounded-md border-2 p-1 px-2 mr-3 ${
                            selectedStatus === label
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
                </div>
              </div>
              {/* radio */}

              <div className="w-full bg-[#FFF9E6] flex mt-3 py-4 gap-3 items-center rounded-md border-[1px] border-[#FFE69C] p-2">
                <img src={tTwo} alt="t-2" />
                <p className="text-[14px] text-[#CC9A06] ">
                  When you approve a loan request, user’s main wallet will be
                  credited with the requested loan amount.
                </p>
              </div>

              <div className="flex w-full justify-start">
                <Button
                  variant="contained"
                  type="submit"
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
            </div>
          </CustomCard>
        </Grid>

        <Grid item xs={6}>
          <CustomCard>
            <div className="w-full flex-col items-start gap-3 flex">
              <p className="text-general font-[500] text-[16px]">
                Guarantor's Detail
              </p>

              {memberLoanDetails?.guarantors?.map((item, i) => {
                return (
                  <div className="rounded-md w-full border-[1px] bg-text_white border-[#E3E3E3] p-2 flex flex-col items-start">
                    <div className="flex w-full items-center justify-between mt-2 mb-4">
                      <div className=" items-center flex  gap-2">
                        <p className="text-general   font-[500] text-[16px]">
                          {` Guarantor ${i + 1}`}
                        </p>

                        {!item?.status ? (
                          <div className=" bg-[#FFF9E6] flex  gap-1 items-center rounded-md border-[1px] border-[#FFE69C] py-1 px-2">
                            <Lfour color="#CC9A06" />
                            <p className="text-[14px] text-[#CC9A06] ">
                              Pending Approval
                            </p>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>

                      <span className="flex gap-2 cursor-pointer items-center text-primary_green font-[500] text-[16px]">
                        view more{" "}
                        <ChevronRightOutlinedIcon sx={{ fontSize: "16px" }} />
                      </span>
                    </div>

                    <div className="w-full flex justify-between ">
                      <p className="text-[14px] text-primary_grey_2">Name:</p>
                      <p className="text-[14px] text-general font-[500]">
                        {item?.name}
                      </p>
                    </div>
                    <Divider
                      sx={{ color: "#E3E3E3", width: "100%", my: "8px" }}
                    />

                    <div className="w-full flex justify-between">
                      <p className="text-[14px] text-primary_grey_2">Email:</p>
                      <p className="text-[14px] text-general font-[500]">
                        {item?.email}
                      </p>
                    </div>
                    <Divider
                      sx={{ color: "#E3E3E3", width: "100%", my: "8px" }}
                    />

                    <div className="w-full flex justify-between">
                      <p className="text-[14px] text-primary_grey_2">Phone:</p>
                      <p className="text-[14px] text-general font-[500]">
                        {item?.phone}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CustomCard>
        </Grid>
      </Grid>
      {/* Grid */}

      {/* Loan success modal */}
      <CustomModal open={openLoanSuccessModal}>
        <CustomSuccessRequestModal
          close={closeLoanSuccessModal}
          titleOne="Sure to Approved Loan Request?"
          titleTwo=" User's main wallet will be credited with the requested loan amount"
          btnText="Approved Loan Request"
        ></CustomSuccessRequestModal>
      </CustomModal>

      {/* Loan success modal */}
    </div>
  );
};

export default LoanProfile;
