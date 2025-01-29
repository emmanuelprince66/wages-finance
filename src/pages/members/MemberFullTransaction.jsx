import React from "react";
import { Box, Button } from "@mui/material";
import Transactions from "../Transactions";

const MemberFullTransaction = ({ setShowFullUserTransactions, memberId }) => {
  return (
    <Box
      sx={{
        padding: "1rem",
        mt: "2rem",
        width: "100%",
      }}
    >
      <div className="flex flex-col items-start gap-3">
        <Button
          sx={{
            color: "#fff",
            backgroundColor: "#02981D",
            "&:hover": {
              backgroundColor: "#02981D",
            },
          }}
          onClick={() => setShowFullUserTransactions(false)}
        >
          Go Back to Profile
        </Button>

        <Box width={"100%"}>
          <Transactions memberId={memberId} />
        </Box>
      </div>
    </Box>
  );
};

export default MemberFullTransaction;
