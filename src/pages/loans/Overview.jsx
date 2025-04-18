import React from "react";
import { useState } from "react";
import Statistics from "./Statistics";
import Requests from "./Requests";
import LoanProfile from "./LoanProfile";

const Overview = ({ loanType }) => {
  const [showStatistics, setShowStatistics] = useState("statistics");
  const [memberLoanDetails, setMemberLoanDetails] = useState(null);

  const handleCloseShowStatatistics = (str) => setShowStatistics(str);
  const [statTitle, setStatTitle] = useState("");

  return (
    <>
      {showStatistics === "statistics" && (
        <Statistics
          loanType={loanType}
          setStatTitle={setStatTitle}
          handleCloseShowStatatistics={handleCloseShowStatatistics}
        />
      )}

      {showStatistics === "request" && (
        <Requests
          statTitle={statTitle}
          setShowStatistics={setShowStatistics}
          setMemberLoanDetails={setMemberLoanDetails}
          loanType={loanType}
        />
      )}

      {showStatistics === "profile" && (
        <LoanProfile
          setShowStatistics={setShowStatistics}
          loanType={loanType}
          memberLoanDetails={memberLoanDetails}
        />
      )}
    </>
  );
};

export default Overview;
