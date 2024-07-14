import React, { useState } from "react";
import { CalendarMonthOutlined } from "@mui/icons-material";
import { DateRangePicker } from "react-date-range";
import { Box, Button, Typography } from "@mui/material";
import { useDateContext } from "../utils/DateContext";
import { parse } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const SelectDate = () => {
  const { selectedDates, setSelectedDates } = useDateContext();

  const formatString = "MM/dd/yyyy";

  const convertToLocaleDateString = (date) => {
    if (typeof date === "string") {
      return date;
    }
    return date.toLocaleDateString();
  };

  const convertedStartDate = parse(
    convertToLocaleDateString(selectedDates.startDate),
    formatString,
    new Date()
  );
  const convertedEndDate = parse(
    convertToLocaleDateString(selectedDates.endDate),
    formatString,
    new Date()
  );

  const [dateVisible, setDateVisible] = useState(false);
  const [selectedRange, setSelectedRange] = useState({
    startDate: convertedStartDate,
    endDate: convertedEndDate,
    key: "selection",
    color: "#02981D",
  });

  function handleSelect(ranges) {
    const dateRange = {
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: "selection",
      color: "#02981D",
    };
    setSelectedRange(dateRange);
    console.log("Selected Date Range:", ranges);
  }

  const modStartDate = convertToLocaleDateString(selectedDates.startDate);
  const modEndDate = convertToLocaleDateString(selectedDates.endDate);

  function openDateRange() {
    setDateVisible(!dateVisible);
  }

  function handleDateChange() {
    setSelectedDates({
      startDate: selectedRange.startDate.toLocaleDateString(),
      endDate: selectedRange.endDate.toLocaleDateString(),
    });
    setDateVisible(false);
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          marginLeft: "auto",
          justifyContent: "flex-end",
          width: "fit-content",
          gap: "1em",
          alignItems: "center",
        }}
      >
        <div className="border flex ml-auto border-grey_1 w-fit rounded-[8px]">
          <Button
            sx={{ color: "#4F4F4F" }}
            startIcon={<CalendarMonthOutlined />}
            onClick={openDateRange}
          >
            {modStartDate} - {modEndDate}
          </Button>
        </div>
        {dateVisible && (
          <div className="absolute flex flex-col bg-white z-[2] shadow-lg p-2 rounded-[8px] top-[140px]">
            <DateRangePicker ranges={[selectedRange]} onChange={handleSelect} />
            <button
              onClick={handleDateChange}
              className="bg-primary_green hover:bg-primary_red_3 p-2 w-1/5 ml-auto rounded-[8px] text-[#fff]"
            >
              Done
            </button>
          </div>
        )}
      </Box>
    </div>
  );
};

export default SelectDate;
