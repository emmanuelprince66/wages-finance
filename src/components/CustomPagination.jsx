import React from "react";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { Button } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

const PageNumberPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  setCurrentPage,
}) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  console.log("total", totalPages);
  const handlePageClick = (pageNumber) => {
    // onPageChange(pageNumber);
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageClick(pageNumber)}
          style={{
            padding: "8px",
            borderRadius: "4px",
            fontSize: "14px",
            background: currentPage === pageNumber ? "#FEF2E6" : "transparent",
            color: currentPage === pageNumber ? "#F78105" : "#667085",
            fontWeight: currentPage === pageNumber ? "bold" : "normal",
          }}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};
const CustomPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  nextPageLink,
  prevPageLink,
  setCurrentPage,
}) => {
  const handleNext = () => {
    if (nextPageLink) {
      setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
    }
  };

  const handleBack = () => {
    if (prevPageLink) {
      setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    }
  };

  return (
    <div className="flex items-center w-full justify-between mt-5">
      <Button
        onClick={handleBack}
        disabled={!prevPageLink}
        sx={{
          background: "transparent",
          borderRadius: "8px",
          width: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: "15px",
          border: "1px solid #5E5E5E",
          color: "#5E5E5E",
          "&:hover": {
            backgroundColor: "#FAFAFA",
          },
          textTransform: "capitalize",
          fontWeight: "400",
        }}
      >
        <KeyboardBackspaceRoundedIcon />
        Back
      </Button>
      <PageNumberPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        onPageChange={(page) => onPageChange(page)}
      />
      <Button
        onClick={handleNext}
        disabled={!nextPageLink}
        sx={{
          background: "transparent",
          borderRadius: "8px",
          width: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: "15px",
          border: "1px solid #5E5E5E",
          color: "#5E5E5E",
          "&:hover": {
            backgroundColor: "#FAFAFA",
          },
          textTransform: "capitalize",
          fontWeight: "400",
        }}
      >
        Next
        <EastRoundedIcon />
      </Button>
    </div>
  );
};

export default CustomPagination;
