import React from "react";
import { useState } from "react";
import SelectDate from "../../components/SelectDate";
import { useDateContext } from "../../utils/DateContext";
import CustomCard from "../../components/CustomCard";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../utils/cookieAuth";
import { AuthAxios } from "../../helpers/axiosInstance";
import { CircularProgress } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IconButton } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Button } from "@mui/material";
import AllInvestments from "./AllInvestments";
import InvestmentDetails from "./InvestmentDetails";
import AddInvestment from "./AddInvestment";
import FormattedPrice from "../../utils/FormattedPrice";
const Investment = () => {
  const [showComp, setShowComp] = useState("all");
  const { selectedDates } = useDateContext();
  const token = getCookie("authToken");
  const [showCash, setShowCash] = useState(false);
  const handleClickShowCash = () => setShowCash((show) => !show);
  const handleMouseDownCash = (event) => {
    event.preventDefault();
  };

  const apiUrl = `/admin/investment_stats/`;
  // fetch investment data for card

  const fetchInvestmentListData = async (url) => {
    try {
      const response = await AuthAxios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response?.data;
    } catch (error) {
      throw new Error("Failed to fetch corporative data");
    }
  };

  const {
    data: investmentListData,
    error: investmentListError,
    isLoading: investmentListLoading,
  } = useQuery({
    queryKey: ["fetchInvestmentListData", apiUrl],
    queryFn: () => fetchInvestmentListData(apiUrl),
    keepPreviousData: true,
    staleTime: 5000, // Cache data for 5 seconds
  });

  //

  return (
    <>
      <div className="w-full flex-col gap-3 items-start">
        {showComp === "all" && (
          <>
            <div className="flex justify-between items-center">
              <p className="font-[600] text-[20px] text-general ">Investment</p>
              {showComp !== "add" && (
                <>
                  <div className="gap-5 flex items-center">
                    <SelectDate />

                    <Button
                      onClick={() => setShowComp("add")}
                      variant="contained"
                      sx={{
                        color: "#fff",
                        background: "#02981D",
                        display: "flex",
                        alignItem: "center",
                        gap: "5px",
                        padding: ".6em",
                        fontFamily: "Montserrat",
                        boxShadow: "none",
                        "&:hover": {
                          background: "#02981d",
                        },
                      }}
                    >
                      <AddRoundedIcon />
                      New Investment Plan
                    </Button>
                  </div>
                </>
              )}
            </div>

            <CustomCard style="w-full mt-6">
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-start gap-3">
                  <div className="flex gap-4 items-center">
                    <p className="text-[14px]  text-[#17171]">
                      Total Amount Invested By Members:
                    </p>
                    <IconButton
                      aria-label="toggle cash visibility"
                      onClick={handleClickShowCash}
                      onMouseDown={handleMouseDownCash}
                      edge="end"
                    >
                      {showCash ? (
                        <VisibilityOffOutlinedIcon
                          sx={{ color: "#02981D", fontSize: "15px" }}
                        />
                      ) : (
                        <VisibilityOutlinedIcon
                          sx={{ color: "#02981D", fontSize: "15px" }}
                        />
                      )}
                    </IconButton>
                  </div>
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-primary_grey text-[14px]">All - Time:</p>
                    <p className="text-general text-[16px]">
                      {showCash ? (
                        <p>
                          {investmentListLoading || !investmentListData ? (
                            <CircularProgress
                              sx={{
                                color: "#02981D",
                              }}
                              size="1rem"
                            />
                          ) : (
                            <FormattedPrice
                              amount={investmentListData?.total_investments}
                            />
                          )}
                        </p>
                      ) : (
                        "***********"
                      )}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-primary_grey text-[14px]">By Filter:</p>
                    <p className="text-general text-[16px]">
                      {showCash ? (
                        <p>
                          {investmentListLoading || !investmentListData ? (
                            <CircularProgress
                              sx={{
                                color: "#02981D",
                              }}
                              size="1rem"
                            />
                          ) : (
                            <FormattedPrice
                              amount={investmentListData?.count_by_filter}
                            />
                          )}
                        </p>
                      ) : (
                        "***********"
                      )}
                    </p>
                  </div>
                </div>
                <div className="min-h-[8rem] w-[1px] bg-[#E3E3E3]" />

                <div className="flex flex-col items-start gap-3">
                  <div className="flex gap-4 items-center">
                    <p className="text-[14px]  text-[#17171]">
                      Total Number Of Investors :
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-3">
                    <p className="text-primary_grey text-[14px]">All - Time:</p>
                    <p className="text-general text-[16px]">
                      {investmentListLoading || !investmentListData ? (
                        <CircularProgress
                          sx={{
                            color: "#02981D",
                          }}
                          size="1rem"
                        />
                      ) : (
                        investmentListData?.count_of_investors
                      )}
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-3">
                    <p className="text-primary_grey text-[14px]">By Filter:</p>
                    <p className="text-general text-[16px]">
                      {investmentListLoading || !investmentListData ? (
                        <CircularProgress
                          sx={{
                            color: "#02981D",
                          }}
                          size="1rem"
                        />
                      ) : (
                        investmentListData?.total_by_filter
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </CustomCard>
          </>
        )}

        {showComp === "all" || showComp === "details" ? (
          <AllInvestments
            investmentPlans={investmentListData?.plans || []}
            setShowComp={setShowComp}
            investmentListLoading={investmentListLoading}
          />
        ) : null}

        {showComp === "add" && <AddInvestment setShowComp={setShowComp} />}
      </div>
    </>
  );
};

export default Investment;
