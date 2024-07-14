import React from "react";
import { Card, CardHeader, CardContent } from "@mui/material";
import mEl from "../assets/member-profile/m-11.svg";
import iOne from "../assets/investment/i-1.svg";
import banner from "../assets/investment/banner.png";
import mSeven from "../assets/member-profile/m-7.svg";

const CustomInvestmentCard = ({ status, title }) => {
  return (
    <>
      <Card sx={{ maxWidth: "300px" }}>
        <div className=" h-1/2  relative">
          <img
            src={banner}
            alt="banner"
            className="object-fill rounded-b-0 w-full h-full"
          />

          <span
            className={`py-[10px] px-[16px] rounded-[20px] ${
              status === "sold"
                ? "bg-[#FBEBEC] text-[#DC3545] "
                : "bg-[#E6F5E8]  text-[#015B11]"
            } absolute top-5 right-3 z-10 text-[14px] font-[500] `}
          >
            {title}
          </span>
        </div>

        <CardContent>
          <div className="flex flex-col items-start gap-2 ">
            <p className="text-general font -[600] text-[20px] mb-3 ">
              Stable Returns Portfolio
            </p>

            <div className="gap-3 items-center flex mb-1">
              <img src={iOne} alt="i-one" />
              <p className="flex text-[14px] gap-2">
                {" "}
                <span className="text-primary_green">14%</span>in 10 Months
              </p>
            </div>
            <div className="gap-3 items-center flex mb-1">
              <img src={mEl} alt="i-one" />
              <p className="flex text-[14px] gap-2">
                {" "}
                <span className="font-[500]">N5,000</span>per unit
              </p>
            </div>
            <div className="gap-3 items-center flex ">
              <img src={mSeven} alt="i-one" />
              <p className="flex text-[14px] gap-2"> 100/100 investors</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CustomInvestmentCard;
