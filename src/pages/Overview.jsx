import React from "react";
import SelectDate from "../components/SelectDate";
import { Button } from "@mui/material";
import CustomCard from "../components/CustomCard";
import oOne from "../assets/overview/o-1.svg";
import oTwo from "../assets/overview/o-2.svg";
import oThree from "../assets/overview/o-3.svg";

const Overview = () => {
  return (
    <div className="w-full flex items-center flex-col ">
      <div className="flex w-full justify-between items-center">
        <p className="font-[600] text-[20px] text-general ">Overview</p>
        <SelectDate />
      </div>

      <div className="w-full flex items-center justify-between gap-9 mt-7">
        <CustomCard color="#F6FFF8" style="w-full">
          <div className="w-full flex-col items-start gap-3">
            <div className="flex gap-3   items-center">
              <img src={oOne} alt="0-1" />
              <p className="text-general text-[14px] font-[500]">
                Total Revenue
              </p>
            </div>

            <div className="flex-col flex items-start gap-2 mt-5">
              <p className="text-[14px] text-primary_grey_2">All-time:</p>
              <p className="text-[24px] font-[600] text-general">N1555,3300</p>
            </div>
            <div className="flex-col flex items-start gap-2 mt-5">
              <p className="text-[14px] text-primary_grey_2">By Filter:</p>
              <p className="text-[24px] font-[600] text-general">N1555,3300</p>
            </div>
          </div>
        </CustomCard>
        <CustomCard color="#FCF5FF" style="w-full">
          <div className="w-full flex-col items-start gap-3">
            <div className="flex gap-3   items-center">
              <img src={oTwo} alt="0-1" />
              <p className="text-general text-[14px] font-[500]">
                Total Savings
              </p>
            </div>

            <div className="flex-col flex items-start gap-2 mt-5">
              <p className="text-[14px] text-primary_grey_2">All-time:</p>
              <p className="text-[24px] font-[600] text-general">N1555,3300</p>
            </div>
            <div className="flex-col flex items-start gap-2 mt-5">
              <p className="text-[14px] text-primary_grey_2">By Filter:</p>
              <p className="text-[24px] font-[600] text-general">N1555,3300</p>
            </div>
          </div>
        </CustomCard>
        <CustomCard color="#FFF7E8" style="w-full">
          <div className="w-full flex-col items-start gap-3">
            <div className="flex gap-3   items-center">
              <img src={oThree} alt="0-1" />
              <p className="text-general text-[14px] font-[500]">
                Registered Users
              </p>
            </div>

            <div className="flex-col flex items-start gap-2 mt-5">
              <p className="text-[14px] text-primary_grey_2">All-time:</p>
              <p className="text-[24px] font-[600] text-general">N1555,3300</p>
            </div>
            <div className="flex-col flex items-start gap-2 mt-5">
              <p className="text-[14px] text-primary_grey_2">By Filter:</p>
              <p className="text-[24px] font-[600] text-general">N1555,3300</p>
            </div>
          </div>
        </CustomCard>
      </div>
    </div>
  );
};

export default Overview;
