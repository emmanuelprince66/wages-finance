import React from "react";
import LoanCustomCardContent from "../../components/LoanCustomCardContent";
import lTwo from "../../assets/loan/l-2.svg";
import lOne from "../../assets/loan/l-1.svg";
import lFive from "../../assets/loan/l-5.svg";
import lFour from "../../assets/loan/l-4.svg";
import lSix from "../../assets/loan/l-6.svg";
import lSeven from "../../assets/loan/l-7.svg";
import bankNotes from "../../assets/loan/banknotes.svg";
import user from "../../assets/loan/user.svg";
import CustomCard from "../../components/CustomCard";
import Lfour from "../../assets/loan/Lfour";
import { AuthAxios } from "../../helpers/axiosInstance";
import { getCookie } from "../../utils/cookieAuth";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@mui/material";

const Statistics = ({ handleCloseShowStatatistics, setStatTitle }) => {
  const token = getCookie("authToken");
  const apiUrl = "/admin/loan_dashboard/";

  // fetch loan statistics

  const fetchLoanStatistics = async (url) => {
    try {
      const response = await AuthAxios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response?.data;
    } catch (error) {
      throw new Error("Error fetching investment loans");
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["fetchLoanStatistics"],
    queryFn: () => fetchLoanStatistics(apiUrl),
    keepPreviousData: true,
    staleTime: 5000, // Cache data for 5 seconds
    onError: (error) => {
      console.log(error);
    },
  });

  const handleOpenRequest = (text) => {
    setStatTitle(text);
    handleCloseShowStatatistics();
  };
  return (
    <div className="flex flex-col items-start gap-4 w-full mt-5">
      <p className="font-[600] text-[16px] text-general">Statistics </p>
      <div className="flex w-full justify-between gap-4 items-center ">
        {isLoading || !data ? (
          <Skeleton variant="rounded" width="100%" height={210} />
        ) : (
          <CustomCard style="w-full">
            <LoanCustomCardContent
              textOne="Total Approved Loan amount:"
              icon={bankNotes}
              textTwo={data?.total_amount}
              textThree={data?.total_amount_filter}
            />
          </CustomCard>
        )}

        {isLoading || !data ? (
          <Skeleton variant="rounded" width="100%" height={210} />
        ) : (
          <CustomCard style="w-full">
            <LoanCustomCardContent
              textOne="Interest From Loans:"
              icon={lFive}
              textTwo="22,000"
              textThree="300"
            />
          </CustomCard>
        )}

        {isLoading || !data ? (
          <Skeleton variant="rounded" width="100%" height={210} />
        ) : (
          <CustomCard style="w-full">
            <LoanCustomCardContent
              textOne="Interest From Loans:"
              icon={lFive}
              textTwo={data?.approved_request}
              textThree={data?.approved_filter}
            />
          </CustomCard>
        )}
        {isLoading || !data ? (
          <Skeleton variant="rounded" width="100%" height={210} />
        ) : (
          <CustomCard style="w-full">
            <LoanCustomCardContent
              textOne="Loan Beneficiaries:"
              icon={user}
              textTwo={data?.loan_beneficiary}
              textThree={data?.loan_beneficiary_filter}
            />
          </CustomCard>
        )}
      </div>
      {/*  */}
      <p
        onClick={() => handleOpenRequest("Overdue Repayments")}
        className="font-[600] text-[16px] text-general mt-3"
      >
        Request Summary{" "}
      </p>
      <div className="flex w-full justify-between gap-4 items-center ">
        {isLoading || !data ? (
          <Skeleton variant="rounded" width="100%" height={210} />
        ) : (
          <CustomCard style="w-full">
            <LoanCustomCardContent
              textOne="Approved Request"
              icon={lSeven}
              textTwo={data?.approved_request}
              textThree={data?.approved_filter}
              status="Approved"
            />
          </CustomCard>
        )}
        {isLoading || !data ? (
          <Skeleton variant="rounded" width="100%" height={210} />
        ) : (
          <CustomCard style="w-full">
            <LoanCustomCardContent
              textOne="Pending Request"
              icon={lFour}
              textTwo={data?.pending_request}
              textThree={data?.pending_request_filter}
              status="Pending"
            />
          </CustomCard>
        )}

        {isLoading || !data ? (
          <Skeleton variant="rounded" width="100%" height={210} />
        ) : (
          <CustomCard style="w-full">
            <LoanCustomCardContent
              textOne="Declined Requests"
              icon={lSix}
              textTwo={data?.rejected_request}
              textThree={data?.rejected_request_filter}
              status="Declined"
            />
          </CustomCard>
        )}
      </div>
      {/*  */}
      {/*  */}
      <p
        className="font-[600] text-[16px] text-general mt-3"
        onClick={() => handleOpenRequest("Overdue Repayments")}
      >
        Repayment Summary{" "}
      </p>
      <div className="flex w-full  gap-4 items-center ">
        {isLoading || !data ? (
          <Skeleton variant="rounded" width="100%" height={210} />
        ) : (
          <CustomCard style="min-h-[14.9rem] w-[33%]">
            <LoanCustomCardContent
              textOne="Total Repayment"
              icon={bankNotes}
              textTwo="22,000"
              textThree="300"
            />
          </CustomCard>
        )}

        {isLoading || !data ? (
          <Skeleton variant="rounded" width="100%" height={210} />
        ) : (
          <CustomCard style="w-[33%]">
            <LoanCustomCardContent
              textOne="Overdue Repayments"
              icon={lTwo}
              textTwo="22,000"
              textThree="300"
              status="Overdue"
            />
          </CustomCard>
        )}
      </div>
      {/*  */}
    </div>
  );
};

export default Statistics;
