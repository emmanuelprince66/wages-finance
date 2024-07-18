import React from "react";
import { useState } from "react";
import Statistics from "./Statistics";
import Requests from "./Requests";

const Overview = () => {
  const [showStatistics, setShowStatistics] = useState(true);

  const handleCloseShowStatatistics = () => setShowStatistics(false);
  const [statTitle, setStatTitle] = useState("");

  return (
    <>
      {showStatistics && (
        <Statistics
          setStatTitle={setStatTitle}
          handleCloseShowStatatistics={handleCloseShowStatatistics}
        />
      )}

      {!showStatistics && <Requests statTitle={statTitle} />}
    </>
  );
};

export default Overview;
