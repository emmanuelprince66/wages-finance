import React from "react";
import { useState } from "react";

import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import mOne from "../../assets/member-profile/m-1.svg";
import mTwo from "../../assets/member-profile/m-2.svg";
import mThree from "../../assets/member-profile/m-3.svg";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import mSeven from "../../assets/member-profile/m-7.svg";
import CustomCard from "../../components/CustomCard";
import { Grid, Typography, Switch, CircularProgress } from "@mui/material";

import avatar from "../../assets/member-profile/avatar.png";

const LoanProfile = () => {
  return (
    <div className="flex items-start w-full flex-col gap-3 mt-4">
      {/*  */}
      <div className="flex items-center gap-3">
        <div
          className="flex items-center gap-1 cursor-pointer hover:underline"
          onClick={() => setShowComp("members")}
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
        <WestOutlinedIcon sx={{ color: "#919191", pt: "2px" }} />
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
              <span className="flex gap-2 cursor-pointer items-center text-primary_green font-[500] text-[16px]">
                view more <ChevronRightOutlinedIcon sx={{ fontSize: "16px" }} />
              </span>
            </div>
          </div>
        </div>
      </CustomCard>
      {/* card 1 */}
    </div>
  );
};

export default LoanProfile;
