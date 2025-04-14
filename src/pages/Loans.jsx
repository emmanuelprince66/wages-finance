import React from "react";
import { Button, Skeleton } from "@mui/material";
import { useState } from "react";
import MainIcon from "../assets/loan/MainIcon";
import Lfour from "../assets/loan/Lfour";
import oOne from "../assets/overview/o-1.svg";
import oTwo from "../assets/overview/o-2.svg";
import oThree from "../assets/overview/o-3.svg";

import SelectDate from "../components/SelectDate";

import Overview from "./loans/Overview";
import Repayments from "./loans/Repayments";
import CustomCard from "../components/CustomCard";
import FormattedPrice from "../utils/FormattedPrice";
import useFetchData from "../hooks/useFetchData";
import { loanStatisticsDataUrl } from "../api/endpoint";

const Loans = () => {
  const [showOverview, setShowOverview] = useState(true);
  const [loanType, setLoanType] = useState("quick");

  const apiUrl = loanStatisticsDataUrl();
  const queryKey = ["fetchLoanStatistics", apiUrl];

  // fetch loan statistics

  const { data, isLoading } = useFetchData(queryKey, apiUrl);

  return (
    <div className="flex w-full items-start flex-col gap-3">
      {/* LOAN TYPES */}

      <div className="flex w-full justify-between items-center mb-7">
        <div className="w-[70%] flex items-center gap-3">
          <Button
            onClick={() => setLoanType("quick")}
            variant="outline"
            sx={{
              color: "#fff",
              background: "transparent",
              color: loanType === "quick" ? "#02981d" : "#5E5E5E",
              border:
                loanType === "quick"
                  ? "1px solid #02981D"
                  : "1px solid #5E5E5E",
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
            Quick Loan
          </Button>
          <Button
            onClick={() => setLoanType("cooperative")}
            variant="outline"
            sx={{
              color: "#fff",
              background: "transparent",
              color: loanType === "cooperative" ? "#02981d" : "#5E5E5E",
              border:
                loanType === "cooperative"
                  ? "1px solid #02981D"
                  : "1px solid #5E5E5E",
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
            Cooperative Loan
          </Button>
        </div>
        <SelectDate />
      </div>

      <div className="w-full flex items-start flex-col  gap-3 ">
        <p className="font-[600] text-[20px] text-general ">Overview</p>

        <div className="w-full flex items-center gap-5 justify-between">
          {isLoading || !data ? (
            <Skeleton variant="rounded" width="100%" height={210} />
          ) : (
            <CustomCard color="#F6FFF8" style="w-full">
              <div className="w-full flex-col items-start gap-3">
                <div className="flex gap-3   items-center">
                  <img src={oOne} alt="0-1" />
                  <p className="text-general text-[14px] font-[500]">
                    Total Loan Applied
                  </p>
                </div>

                <div className="flex-col flex items-start gap-2 mt-5">
                  <p className="text-[14px] text-primary_grey_2">All-time:</p>
                  <p className="text-[24px] font-[600] text-general">
                    <FormattedPrice
                      amount={
                        loanType === "cooperative"
                          ? data?.total_amount
                          : data?.quick_loan_total_amount
                      }
                    />
                  </p>
                </div>
                <div className="flex-col flex items-start gap-2 mt-5">
                  <p className="text-[14px] text-primary_grey_2">By Filter:</p>
                  <p className="text-[24px] font-[600] text-general">
                    <FormattedPrice
                      amount={
                        loanType === "cooperative"
                          ? data?.total_amount_filter
                          : data?.quick_loan_total_amount_filter
                      }
                    />
                  </p>
                </div>
              </div>
            </CustomCard>
          )}

          {isLoading || !data ? (
            <Skeleton variant="rounded" width="100%" height={210} />
          ) : (
            <CustomCard color="#FCF5FF" style="w-full">
              <div className="w-full flex-col items-start gap-3">
                <div className="flex gap-3   items-center">
                  <img src={oTwo} alt="0-1" />
                  <p className="text-general text-[14px] font-[500]">
                    Total Loan Approved
                  </p>
                </div>

                <div className="flex-col flex items-start gap-2 mt-5">
                  <p className="text-[14px] text-primary_grey_2">All-time:</p>
                  <p className="text-[24px] font-[600] text-general">
                    <FormattedPrice
                      amount={
                        loanType === "cooperative"
                          ? data?.approved_request
                          : data?.quick_loan_approved_request
                      }
                    />
                  </p>
                </div>
                <div className="flex-col flex items-start gap-2 mt-5">
                  <p className="text-[14px] text-primary_grey_2">By Filter:</p>
                  <p className="text-[24px] font-[600] text-general">
                    <FormattedPrice
                      amount={
                        loanType === "cooperative"
                          ? data?.approved_request_filter
                          : data?.quick_loan_approved_filter
                      }
                    />
                  </p>
                </div>
              </div>
            </CustomCard>
          )}
          {isLoading || !data ? (
            <Skeleton variant="rounded" width="100%" height={210} />
          ) : (
            <CustomCard color="#FFF7E8" style="w-full">
              <div className="w-full flex-col items-start gap-3">
                <div className="flex gap-3   items-center">
                  <img src={oThree} alt="0-1" />
                  <p className="text-general text-[14px] font-[500]">
                    Total Interest From Loan
                  </p>
                </div>

                <div className="flex-col flex items-start gap-2 mt-5">
                  <p className="text-[14px] text-primary_grey_2">All-time:</p>
                  <p className="text-[24px] font-[600] text-general">
                    {loanType === "cooperative"
                      ? data?.loan_interest
                      : data?.quick_loan_interest}
                  </p>
                </div>
                <div className="flex-col flex items-start gap-2 mt-5">
                  <p className="text-[14px] text-primary_grey_2">By Filter:</p>
                  <p className="text-[24px] font-[600] text-general">
                    {loanType === "cooperative"
                      ? data?.loan_interest_filter
                      : data?.quick_loan_interest_filter}
                  </p>
                </div>
              </div>
            </CustomCard>
          )}
          {isLoading || !data ? (
            <Skeleton variant="rounded" width="100%" height={210} />
          ) : (
            <CustomCard color="#FCF5FF" style="w-full">
              <div className="w-full flex-col items-start gap-3">
                <div className="flex gap-3   items-center">
                  <img src={oThree} alt="0-1" />
                  <p className="text-general text-[14px] font-[500]">
                    Total Processing Fee From Loan
                  </p>
                </div>

                <div className="flex-col flex items-start gap-2 mt-5">
                  <p className="text-[14px] text-primary_grey_2">All-time:</p>
                  <p className="text-[24px] font-[600] text-general">{0}</p>
                </div>
                <div className="flex-col flex items-start gap-2 mt-5">
                  <p className="text-[14px] text-primary_grey_2">By Filter:</p>
                  <p className="text-[24px] font-[600] text-general">{0}</p>
                </div>
              </div>
            </CustomCard>
          )}
          {isLoading || !data ? (
            <Skeleton variant="rounded" width="100%" height={210} />
          ) : (
            <CustomCard color="#F6FFF8" style="w-full">
              <div className="w-full flex-col items-start gap-3">
                <div className="flex gap-3   items-center">
                  <img src={oThree} alt="0-1" />
                  <p className="text-general text-[14px] font-[500]">
                    Total Loan Paid
                  </p>
                </div>

                <div className="flex-col flex items-start gap-2 mt-5">
                  <p className="text-[14px] text-primary_grey_2">All-time:</p>
                  <p className="text-[24px] font-[600] text-general">{0}</p>
                </div>
                <div className="flex-col flex items-start gap-2 mt-5">
                  <p className="text-[14px] text-primary_grey_2">By Filter:</p>
                  <p className="text-[24px] font-[600] text-general">{0}</p>
                </div>
              </div>
            </CustomCard>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center w-full mt-5">
        <div className="w-[70%] flex items-center gap-3">
          <Button
            onClick={() => setShowOverview(true)}
            variant="outline"
            sx={{
              color: "#fff",
              background: "transparent",
              color: showOverview ? "#02981d" : "#5E5E5E",
              border: showOverview ? "1px solid #02981D" : "1px solid #5E5E5E",
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
            <MainIcon color={showOverview ? "#02981D" : "#5E5E5E"} />
            Overview
          </Button>
          <Button
            onClick={() => setShowOverview(false)}
            variant="outline"
            sx={{
              color: "#fff",
              background: "transparent",
              color: !showOverview ? "#02981d" : "#5E5E5E",
              border: !showOverview ? "1px solid #02981D" : "1px solid #5E5E5E",
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
            <Lfour color={!showOverview ? "#02981D" : "#5E5E5E"} />
            Loan Requests
          </Button>
        </div>
      </div>

      {showOverview && <Overview loanType={loanType} />}
      {!showOverview && <Repayments loanType={loanType} />}
    </div>
  );
};

export default Loans;
