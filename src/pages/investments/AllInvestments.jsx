import { Button, Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CustomCard from "../../components/CustomCard";
import CustomInvestmentCard from "../../components/CustomInvestmentCard";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import InvestmentDetails from "./InvestmentDetails";
<CustomInvestmentCard status="available" title="Available" />;
const AllInvestments = ({ setShowComp }) => {
  const [filtered, setFiltered] = useState("all");
  const [showDetails, setShowDetails] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShowDetails = () => {
    setShowDetails(true);
    setShowComp("details");
  };

  return (
    <>
      {!showDetails && (
        <>
          <div className="w-full flex flex-col gap-3 items-start mt-4">
            <div className="flex gap-4 w-1/2 justify-start">
              <Button
                onClick={() => setFiltered("all")}
                sx={{
                  background: filtered === "all" ? "#FAFAFA" : "#fff",
                  borderRadius: "8px",
                  width: "100%",
                  px: "15px",
                  border:
                    filtered === "all"
                      ? "1px solid #02981D"
                      : "1px solid #5E5E5E",
                  color: filtered === "all" ? "#02981D" : "#5E5E5E",
                  "&:hover": {
                    backgroundColor: filtered === "all" ? "#FAFAFA" : "#fff",
                  },
                  textTransform: "capitalize",
                  fontWeight: "400",
                }}
              >
                All Investment Plans
              </Button>
              <Button
                onClick={() => setFiltered("av")}
                sx={{
                  background: filtered === "av" ? "#FAFAFA" : "#fff",
                  borderRadius: "8px",
                  width: "50%",
                  px: "15px",
                  border:
                    filtered === "av"
                      ? "1px solid #02981D"
                      : "1px solid #5E5E5E",
                  color: filtered === "av" ? "#02981D" : "#5E5E5E",
                  "&:hover": {
                    backgroundColor: filtered === "av" ? "#FAFAFA" : "#fff",
                  },
                  textTransform: "capitalize",
                  fontWeight: "400",
                }}
              >
                Available
              </Button>
              <Button
                onClick={() => setFiltered("sold")}
                sx={{
                  background: filtered === "sold" ? "#FAFAFA" : "#fff",
                  borderRadius: "8px",
                  width: "50%",
                  px: "15px",
                  border:
                    filtered === "sold"
                      ? "1px solid #02981D"
                      : "1px solid #5E5E5E",
                  color: filtered === "sold" ? "#02981D" : "#5E5E5E",
                  "&:hover": {
                    backgroundColor: filtered === "sold" ? "#FAFAFA" : "#fff",
                  },
                  textTransform: "capitalize",
                  fontWeight: "400",
                }}
              >
                Sold Out
              </Button>
            </div>

            {/*  */}
            <div className=" w-1/2">
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  display: "flex",
                  background: "transparent",
                  alignItems: "center",
                  fontSize: "14px",
                  color: "#171717",
                  gap: "5px",
                  textTransform: "capitalize",
                }}
              >
                Newest First
                <KeyboardArrowDownRoundedIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                PaperProps={{
                  style: {
                    width: 200, // set the width to 300px
                  },
                }}
              >
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                    fontWeight: "500",
                    color: "#1E1E1E",
                  }}
                >
                  <p className="text-general text-[14px]">Newest first</p>

                  <CheckRoundedIcon
                    sx={{
                      color: "#02981D",
                      fontSize: "14px",
                    }}
                  />
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                    fontWeight: "500",
                    color: "#1E1E1E",
                  }}
                >
                  <p className="text-general text-[14px]">Oldest first</p>

                  <CheckRoundedIcon
                    sx={{
                      color: "#02981D",
                      fontSize: "14px",
                    }}
                  />
                </MenuItem>
              </Menu>
            </div>

            {/*  */}

            <div className="flex flex-wrap gap-4">
              <CustomInvestmentCard status="sold" title="Sold" />
              <CustomInvestmentCard status="available" title="Available" />
              <CustomInvestmentCard status="available" title="Available" />
              <CustomInvestmentCard status="available" title="Available" />
              <CustomInvestmentCard status="available" title="Available" />

              <div className="cursor-pointer" onClick={handleShowDetails}>
                <CustomInvestmentCard status="available" title="Available" />
              </div>
            </div>

            <div className="w-[70%] mx-auto items-center justify-between mt-5 flex">
              <Button
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
              <Button
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
          </div>
        </>
      )}
      {showDetails && <InvestmentDetails />}
    </>
  );
};

export default AllInvestments;
