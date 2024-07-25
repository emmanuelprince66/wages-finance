import React, { useState } from "react";
import AllLoans from "./AllLoans";
import LoanProfile from "./LoanProfile";

const Repayments = () => {
  const [showLoans, setShowLoans] = useState(true);
  return (
    <>
      {showLoans && <AllLoans />}
      {!showLoans && <LoanProfile />}
    </>
  );
};

export default Repayments;
