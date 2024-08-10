import React, { useEffect, useState } from "react";
import SelectDate from "../components/SelectDate";
import CustomCard from "../components/CustomCard";
import { useForm, Controller } from "react-hook-form";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import tOne from "../assets/transactions/t-1.svg";
import tTwo from "../assets/transactions/t-2.svg";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  Button,
  Divider,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import CustomModal from "../components/CustomModal";
import CustomSuccessRequestModal from "../components/CustomSuccessRequestModal";
import CustomSuccessModal from "../components/CustomSuccessModal";
import CustomPagination from "../components/CustomPagination";
import { transactionsDataUrl } from "../api/endpoint";
import useFetchData from "../hooks/useFetchData";
import FormattedPrice from "../utils/FormattedPrice";
import TransactionTable from "./transactions/TransactionTable";
import Referrals from "./transactions/Referrals";
const Transactions = () => {
  const {
    handleSubmit,
    control,
    watch,
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "all" });
  const status = watch("status", "Pending");
  const statusOptions = ["Pending", "Successfull", "Failed"];
  const [trxFilter, setTrxFilter] = useState("all");
  const [openWalletTrxModal, setOpenWalletTrxModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [openWTrxModal, setWOpenTrxModal] = useState(false);
  const [openRequestModal, setOpenRequestModal] = useState(false);
  const [walletCreditModalData , setWalletCreditModalData] = useState(null)

  const closeOpenRequestModal = () => setOpenRequestModal(false);
  const closeWalletTrxModal = () => setOpenWalletTrxModal(false);
  const closeSuccessModal = () => setOpenSuccessModal(false);
  const closeWTrxModal = () => setWOpenTrxModal(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(0);

  const [filteredTrxData, setFilteredTrxData] = useState(null);

  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [filterValue, setFilterValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const apiUrl = transactionsDataUrl(currentPage, rowsPerPage, searchValue);
  const queryKey = ["fetchTransactionData", apiUrl];
  // fetch transaction data

  const { isLoading, data: transactionsData } = useFetchData(queryKey, apiUrl);

  const totalPages = transactionsData?.pages;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const handleOpenModal = (item) => {
    switch (item?.type) {
      case "WALLET-CREDIT":
       setWalletCreditModalData(item)
       setOpenWalletTrxModal(true) 
        break;
      default:
        break;
    }
  }
  // filter functionality

  useEffect(() => {
    const res = transactionsData?.results;

    if (res && Array.isArray(res)) {
      let filteredResult = res;

      // Filter by transaction type
      if (trxFilter !== "all") {
        filteredResult = filteredResult.filter(
          (item) => item?.type?.toLowerCase() === trxFilter
        );
      }

      // Filter by search value
      if (searchValue !== "") {
        filteredResult = filteredResult.filter(
          (item) =>
            item?.lastname
              ?.toLowerCase()
              .includes(searchValue?.toLowerCase()) ||
            item?.firstname?.toLowerCase().includes(searchValue?.toLowerCase())
        );
      }

      setFilteredTrxData(filteredResult);
    }
  }, [transactionsData, trxFilter, searchValue]);

  return (
    <div className="w-full flex flex-col items-start  gap-3">
      <div className="w-full flex items-center justify-between mb-3">
        <p className="font-[600] text-[20px] text-general ">Transactions</p>

        <SelectDate />
      </div>
      <CustomCard style="w-full">
        <div className="flex items-start gap-4 flex-col">
          <div className="w-full flex items-center justify-between">
            <div className="bg-white border-[#E3E3E3] border-[1px] w-[50%] py-2 px-2 flex items-center gap-2 rounded-md">
              <SearchOutlinedIcon sx={{ color: "#757575" }} />
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                type="text"
                placeholder="Search member , ID"
                className="bg-transparent border-none focus:outline-none outline-none  w-full"
              />
            </div>

            <Button
              sx={{
                background: "#FAFAFA",
                borderRadius: "8px",
                width: "13%",
                px: "15px",
                border: "1px solid #C8C8C8",
                color: "#02981D",
                "&:hover": {
                  backgroundColor: "#FAFAFA",
                },
                textTransform: "capitalize",
                fontWeight: "600",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img src={tOne} alt="export-icn" />
              Export
            </Button>
          </div>

          <div className="flex w-[70%] gap-3  items-center">
            <Button
              onClick={() => setTrxFilter("all")}
              sx={{
                background: trxFilter === "all" ? "#FAFAFA" : "#fff",
                borderRadius: "8px",
                width: "100%",
                px: "15px",
                border:
                  trxFilter === "all"
                    ? "1px solid #3F3767"
                    : "1px solid #C8C8C8",
                color: trxFilter === "all" ? "#3F3767" : "#C8C8C8",
                "&:hover": {
                  backgroundColor: trxFilter === "all" ? "#FAFAFA" : "#fff",
                },
                textTransform: "capitalize",
                fontWeight: "400",
              }}
            >
              All Transactions
            </Button>
            <Button
              onClick={() => setTrxFilter("wallet-credit")}
              sx={{
                background: trxFilter === "wallet-credit" ? "#FAFAFA" : "#fff",
                borderRadius: "8px",
                width: "100%",
                px: "15px",
                border:
                  trxFilter === "wallet-credit"
                    ? "1px solid #02981D"
                    : "1px solid #5E5E5E",
                color: trxFilter === "wallet-credit" ? "#02981D" : "#5E5E5E",
                "&:hover": {
                  backgroundColor:
                    trxFilter === "wallet-credit" ? "#FAFAFA" : "#fff",
                },
                textTransform: "capitalize",
                fontWeight: "400",
              }}
            >
              Wallet Credit
            </Button>
            <Button
              onClick={() => setTrxFilter("dpurchase")}
              sx={{
                background: trxFilter === "dpurchase" ? "#FAFAFA" : "#fff",
                borderRadius: "8px",
                width: "100%",
                px: "15px",
                border:
                  trxFilter === "dpurchase"
                    ? "1px solid #02981D"
                    : "1px solid #5E5E5E",
                color: trxFilter === "dpurchase" ? "#02981D" : "#5E5E5E",
                "&:hover": {
                  backgroundColor:
                    trxFilter === "dpurchase" ? "#FAFAFA" : "#fff",
                },
                textTransform: "capitalize",
                fontWeight: "400",
              }}
            >
              Data Purchase
            </Button>
            <Button
              onClick={() => setTrxFilter("withdrawal")}
              sx={{
                background: trxFilter === "withdrawal" ? "#FAFAFA" : "#fff",
                borderRadius: "8px",
                width: "100%",
                px: "15px",
                border:
                  trxFilter === "withdrawal"
                    ? "1px solid #02981D"
                    : "1px solid #5E5E5E",
                color: trxFilter === "withdrawal" ? "#02981D" : "#5E5E5E",
                "&:hover": {
                  backgroundColor:
                    trxFilter === "withdrawal" ? "#FAFAFA" : "#fff",
                },
                textTransform: "capitalize",
                fontWeight: "400",
              }}
            >
              Withdrawal
            </Button>
            <Button
              onClick={() => setTrxFilter("referral")}
              sx={{
                background: trxFilter === "referral" ? "#FAFAFA" : "#fff",
                borderRadius: "8px",
                width: "100%",
                px: "15px",
                border:
                  trxFilter === "referral"
                    ? "1px solid #02981D"
                    : "1px solid #5E5E5E",
                color: trxFilter === "referral" ? "#02981D" : "#5E5E5E",
                "&:hover": {
                  backgroundColor:
                    trxFilter === "referral" ? "#FAFAFA" : "#fff",
                },
                textTransform: "capitalize",
                fontWeight: "400",
              }}
            >
              Referral
            </Button>
          </div>

         {/*  */}
           {
            trxFilter !== "referral" && (
                 <TransactionTable isLoading={isLoading} 
                 handleOpenModal={handleOpenModal}
                 transactionsData={transactionsData}
                filteredTrxData={filteredTrxData}
                page={page}
                onPageChange={handlePageChange}
                totalPages={totalPages}
                rowsPerPage={rowsPerPage}
                currentPage={currentPage}
         />
            )
           }

           {
            trxFilter === "referral" && 
            <Referrals/>
           }
        </div>
      </CustomCard>
      {/* wallet credit transactions modal */}
      <CustomModal open={openWalletTrxModal} closeModal={closeWalletTrxModal}>
        <div className="w-full flex flex-col items-start gap-2">
          <div className="flex items-center justify-between w-full mb-3">
            <p className="text-general font-[500] text-[20px] ">Transactions</p>

            <ClearRoundedIcon onClick={closeWalletTrxModal} sx={{ color: "#1E1E1E", cursor: "pointer" }} />
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-general font-[500] text-[14px] ">USER DETAILS</p>
            <Button
              sx={{
                background: "#FAFAFA",
                borderRadius: "8px",
                px: "15px",
                border: "1px solid #C8C8C8",
                color: "#02981D",
                "&:hover": {
                  backgroundColor: "#FAFAFA",
                },
                fontWeight: "600",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              Go to profile
            </Button>
          </div>

          <div className="rounded-md w-full border-[1px] border-[#E3E3E3] p-2 flex flex-col items-start">
            <div className="w-full flex justify-between mt-1">
              <p className="text-[14px] text-primary_grey_2">User:</p>
              <p className="text-[14px] text-general font-[500]">
               {walletCreditModalData?.lastname || ""} {walletCreditModalData?.firstname || ""} 
              </p>
            </div>
            <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

            <div className="w-full flex justify-between">
              <p className="text-[14px] text-primary_grey_2">Email:</p>
              <p className="text-[14px] text-general font-[500]">
                {walletCreditModalData?.email || ""}
              </p>
            </div>

            <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

            <div className="w-full flex justify-between">
              <p className="text-[14px] text-primary_grey_2">Phone Number:</p>
              <p className="text-[14px] text-general font-[500]">
                {walletCreditModalData?.phone || ""}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 w-full mt-3">
            <p className="text-general font-[500] text-[14px] ">
              TRANSACTION DETAILS
            </p>

            <div className="rounded-md w-full border-[1px] border-[#E3E3E3] p-2 flex flex-col items-start">
              <div className="w-full flex justify-between mt-1">
                <p className="text-[14px] text-primary_grey_2">Description:</p>
                <p className="text-[14px] text-general font-[500]">
                  Wallet Credit
                </p>
              </div>
              <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

              <div className="w-full flex justify-between">
                <p className="text-[14px] text-primary_grey_2">Amount:</p>
                <p className="text-[14px] text-general font-[500]">
                  <FormattedPrice amount={walletCreditModalData?.amount}/>
                </p>
              </div>

              <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

              <div className="w-full flex justify-between">
                <p className="text-[14px] text-primary_grey_2">Status:</p>
                <p className="text-[14px] text-general font-[500]">
                  {walletCreditModalData?.status || ""}
                </p>
              </div>
              <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

              <div className="w-full flex justify-between">
                <p className="text-[14px] text-primary_grey_2">Date:</p>
                <p className="text-[14px] text-general font-[500]">
                 not sending the date
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end w-full mt-3">
            <Button
              variant="contained"
              type="submit"
              sx={{
                color: "#fff",
                width: "13%",
                background: "#02981D",
                padding: ".6em",
                boxShadow: "none",
                "&:hover": {
                  background: "#02981d",
                },
              }}
            >
              Done
            </Button>
          </div>
        </div>
      </CustomModal>
      {/* All transactions modal */}
      {/* update transactios modal */}
      <CustomModal open={openWTrxModal} closeModal={closeWTrxModal}>
        <div className="w-full flex flex-col items-start gap-2">
          <div className="flex items-center justify-between w-full mb-3">
            <p className="text-general font-[500] text-[20px] ">Transactions</p>

            <ClearRoundedIcon sx={{ color: "#1E1E1E", cursor: "pointer" }} />
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-general font-[500] text-[14px] ">USER DETAILS</p>
            <Button
              sx={{
                background: "#FAFAFA",
                borderRadius: "8px",
                px: "15px",
                border: "1px solid #C8C8C8",
                color: "#02981D",
                "&:hover": {
                  backgroundColor: "#FAFAFA",
                },
                fontWeight: "600",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              Go to profile
            </Button>
          </div>

          <div className="rounded-md w-full border-[1px] border-[#E3E3E3] p-2 flex flex-col items-start">
            <div className="w-full flex justify-between mt-1">
              <p className="text-[14px] text-primary_grey_2">User:</p>
              <p className="text-[14px] text-general font-[500]">
                Ronald Richards
              </p>
            </div>
            <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

            <div className="w-full flex justify-between">
              <p className="text-[14px] text-primary_grey_2">Email:</p>
              <p className="text-[14px] text-general font-[500]">
                Ronald@gmail.com
              </p>
            </div>

            <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

            <div className="w-full flex justify-between">
              <p className="text-[14px] text-primary_grey_2">Phone Number:</p>
              <p className="text-[14px] text-general font-[500]">08168465081</p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 w-full mt-3">
            <p className="text-general font-[500] text-[14px] ">
              TRANSACTION DETAILS
            </p>

            <div className="rounded-md w-full border-[1px] border-[#E3E3E3] p-2 flex flex-col items-start">
              <div className="w-full flex justify-between mt-1">
                <p className="text-[14px] text-primary_grey_2">Description:</p>
                <p className="text-[14px] text-general font-[500]">
                  Wallet Credit
                </p>
              </div>
              <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

              <div className="w-full flex justify-between">
                <p className="text-[14px] text-primary_grey_2">Amount:</p>
                <p className="text-[14px] text-general font-[500]">N100,000</p>
              </div>

              <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

              <div className="w-full flex justify-between">
                <p className="text-[14px] text-primary_grey_2">Status:</p>
                <p className="text-[14px] text-general font-[500]">
                  Successfull
                </p>
              </div>
              <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

              <div className="w-full flex justify-between">
                <p className="text-[14px] text-primary_grey_2">Date:</p>
                <p className="text-[14px] text-general font-[500]">
                  30th June, 2024 • 9:43 AM
                </p>
              </div>
            </div>
          </div>
          {/* form radio buttons */}

          <div className="flex flex-col items-start gap-2 mt-2">
            <p className="text-general font-[500] text-[14px] ">STATUS</p>

            <div>
              <Controller
                name="subscription"
                control={control}
                defaultValue="Pending"
                render={({ field }) => (
                  <FormControl component="fieldset">
                    <RadioGroup
                      row
                      {...field}
                      onChange={(e) => field.onChange(e.target.value)}
                    >
                      {statusOptions?.map((label) => (
                        <div
                          key={label}
                          className={`rounded-md border-2 p-1 px-2 mr-3 ${
                            statusOptions === label
                              ? "border-[#02981D]"
                              : "border-[#E6F5E8]"
                          }`}
                        >
                          <FormControlLabel
                            value={label}
                            control={
                              <Radio
                                sx={{
                                  color: "#02981D",
                                  "&.Mui-checked": {
                                    color: "#02981D",
                                  },
                                }}
                              />
                            }
                            label={label}
                          />
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                )}
              />
            </div>
          </div>

          {/* form radio buttons */}

          <div className="w-full bg-[#FFF9E6] flex mt-3 py-4 gap-3 items-center rounded-md border-[1px] border-[#FFE69C] p-2">
            <img src={tTwo} alt="t-2" />
            <p className="text-[14px] text-[#CC9A06] ">
              This is a longer text describing the alert heading.
            </p>
          </div>
          <Button
            variant="contained"
            type="submit"
            disabled
            sx={{
              color: "#fff",
              my: "1rem",
              background: "#02981D",
              padding: ".6em",
              boxShadow: "none",
              "&:hover": {
                background: "#02981d",
              },
            }}
          >
            Update Status
          </Button>
        </div>
      </CustomModal>
      {/* update transactios modal */}
      {/* success request modal */}
      <CustomModal open={openRequestModal}>
        <CustomSuccessRequestModal
          close={closeOpenRequestModal}
          titleOne="Sure to Update Transaction Status?"
          titleTwo=" User will be notified of this action."
          btnText="Update Status"
        />
      </CustomModal>
      {/* success request modal */}
      {/* success modal */}
      <CustomModal open={openSuccessModal}>
        <CustomSuccessModal
          close={closeSuccessModal}
          textOne="Transaction status has been updated."
        />
      </CustomModal>
      {/* success modal */}

      {/*  */}
    </div>
  );
};

export default Transactions;
