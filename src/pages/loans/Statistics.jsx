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

const Statistics = ({ handleCloseShowStatatistics, setStatTitle }) => {
  const handleOpenRequest = (text) => {
    setStatTitle(text);
    handleCloseShowStatatistics();
  };
  return (
    <div className="flex flex-col items-start gap-4 w-full mt-5">
      <p className="font-[600] text-[16px] text-general">Statistics </p>
      <div className="flex w-full justify-between gap-4 items-center ">
        <CustomCard style="w-full">
          <LoanCustomCardContent
            textOne="Total Approved Loan amount:"
            icon={bankNotes}
            textTwo="22,000"
            textThree="300"
          />
        </CustomCard>
        <CustomCard style="w-full">
          <LoanCustomCardContent
            textOne="Interest From Loans:"
            icon={lFive}
            textTwo="22,000"
            textThree="300"
          />
        </CustomCard>
        <CustomCard style="w-full">
          <LoanCustomCardContent
            textOne="Loan Beneficiaries:"
            icon={user}
            textTwo="22,000"
            textThree="300"
          />
        </CustomCard>
      </div>
      {/*  */}
      <p className="font-[600] text-[16px] text-general mt-3">
        Request Summary{" "}
      </p>
      <div className="flex w-full justify-between gap-4 items-center ">
        <CustomCard style="w-full">
          <LoanCustomCardContent
            textOne="Approved Request"
            icon={lSeven}
            textTwo="22,000"
            textThree="300"
            status="Approved"
          />
        </CustomCard>
        <CustomCard style="w-full">
          <LoanCustomCardContent
            textOne="Pending Request"
            icon={lFour}
            textTwo="22,000"
            textThree="300"
            status="Pending"
          />
        </CustomCard>
        <CustomCard style="w-full">
          <LoanCustomCardContent
            textOne="Declined Requests"
            icon={lSix}
            textTwo="22,000"
            textThree="300"
            status="Declined"
          />
        </CustomCard>
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
        <CustomCard style="min-h-[14.9rem] w-[33%]">
          <LoanCustomCardContent
            textOne="Total Repayment"
            icon={bankNotes}
            textTwo="22,000"
            textThree="300"
          />
        </CustomCard>
        <CustomCard style="w-[33%]">
          <LoanCustomCardContent
            textOne="Overdue Repayments"
            icon={lTwo}
            textTwo="22,000"
            textThree="300"
            status="Overdue"
          />
        </CustomCard>
      </div>
      {/*  */}
    </div>
  );
};

export default Statistics;
