import React, { useState } from "react";
import AllLoans from "./AllLoans";
import LoanProfile from "./LoanProfile";

const Repayments = () => {
  const [showLoans, setShowLoans] = useState(false);
  return (
    <>
      {showLoans && <AllLoans />}
      {!showLoans && <LoanProfile />}
    </>
  );
};

export default Repayments;
