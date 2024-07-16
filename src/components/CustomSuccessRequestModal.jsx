import React from "react";
import { useState } from "react";
import success from "../assets/transactions/success.png";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { Button } from "@mui/material";

const CustomSuccessRequestModal = ({ titleOne, titleTwo, btnText, close }) => {
  return (
    <div className="w-full flex flex-col gap-3 items-end">
      <ClearRoundedIcon
        onClick={close}
        sx={{ color: "#1E1E1E", cursor: "pointer" }}
      />

      <div className="w-full flex flex-col items-center justify-center gap-2 text-center">
        <img src={success} alt="success" className="object-fit" />
        <p className="font-[600] text-[24px] text-primary mt-3">{titleOne}</p>
        <p className=" text-[16px] text-primary_grey_2 mt-2">{titleTwo}</p>

        <div className="flex justify-between w-[70%] gap-5 mt-4 items-center">
          <Button
            onClick={close}
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              display: "flex",
              gap: "4px",
              width: "100%",
              alignItems: "center",
              color: "#02981D",
              padding: ".6em",
              border: "1px solid #02981D",
              "&:hover": {
                border: "1px solid #02981D",
              },
              // lineHeight: "26.4px",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            type="submit"
            sx={{
              color: "#fff",
              width: "100%",
              background: "#02981D",
              padding: ".6em",
              boxShadow: "none",
              "&:hover": {
                background: "#02981d",
              },
            }}
          >
            {btnText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomSuccessRequestModal;
