import React, { useEffect } from "react";
import { useState } from "react";
import ParticipantsSavings from "./ParticipantsSavings";
import TargetSavings from "./TargetSavings";
import CorporateSavings from "./CorporateSavings";
import { Button } from "@mui/material";

const Savings = () => {
  const [showComp, setShowComp] = useState("corporate");
  const [event, setEvent] = useState(null);

  const handleShowParticipants = (link) => {
    setEvent(link);
    setShowComp("participants");
  };

  return (
    <>
      {showComp !== "participants" && (
        <div className="mb-4">
          <p className="font-[600] text-[20px] text-general mb-4">Savings</p>

          <div className="flex w-1/2 gap-3  items-center">
            <Button
              onClick={() => setShowComp("corporate")}
              sx={{
                background: showComp === "corporate" ? "#FAFAFA" : "#fff",
                borderRadius: "8px",
                width: "100%",
                px: "15px",
                border:
                  showComp === "corporate"
                    ? "1px solid #3F3767"
                    : "1px solid #C8C8C8",
                color: showComp === "corporate" ? "#3F3767" : "#C8C8C8",
                "&:hover": {
                  backgroundColor:
                    showComp === "corporate" ? "#FAFAFA" : "#fff",
                },
                textTransform: "capitalize",
                fontWeight: "400",
              }}
            >
              Cooperative Savings
            </Button>
            <Button
              onClick={() => setShowComp("target")}
              sx={{
                background: showComp === "active" ? "#FAFAFA" : "#fff",
                borderRadius: "8px",
                width: "100%",
                px: "15px",
                border:
                  showComp === "active"
                    ? "1px solid #02981D"
                    : "1px solid #5E5E5E",
                color: showComp === "active" ? "#02981D" : "#5E5E5E",
                "&:hover": {
                  backgroundColor: showComp === "active" ? "#FAFAFA" : "#fff",
                },
                textTransform: "capitalize",
                fontWeight: "400",
              }}
            >
              Target Savings
            </Button>
          </div>

          {/*  */}
        </div>
      )}
      {showComp === "corporate" && (
        <CorporateSavings setShowComp={setShowComp} showComp={showComp} />
      )}
      {showComp === "participants" && (
        <ParticipantsSavings event={event} setShowComp={setShowComp} />
      )}
      {showComp === "target" && (
        <TargetSavings handleShowParticipants={handleShowParticipants} />
      )}
    </>
  );
};

export default Savings;
