import React from "react";
import { useState, useEffect } from "react";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import {
  Table,
  Button,
  Box,
  TableBody,
  TableCell,
  TableContainer,
  CircularProgress,
  TableHead,
  TableRow,
  Divider,
  Paper,
  Grid,
  Container,
  TextField,
  TablePagination,
  ToggleButtonGroup,
  ToggleButton,
  Card,
  Typography,
  Modal,
  Skeleton,
} from "@mui/material";
import { AuthAxios } from "../../helpers/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../utils/cookieAuth";
import FormattedPrice from "../../utils/FormattedPrice";
import { useNavigate } from "react-router-dom";
import { useToast } from "react-toastify";
import CustomModal from "../../components/CustomModal";
import CustomLinearProgress from "../../components/CustomLinearProgress";
const ParticipantsSavings = ({ event, setShowComp }) => {
  const { title, link, id, img } = event;
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filterValue, setFilterValue] = useState("");

  const [participantId, setParticipantId] = useState("");

  const navigate = useNavigate();
  const [showParticipantModal, setShowParticipantModal] = useState(false);
  const closeParticipantModal = () => setShowParticipantModal(false);

  const token = getCookie("authToken");

  const apiUrl = `/admin/savings/${id}/`;
  const getParticipantModalUrl = `/admin/single_savings/${participantId}/`;

  const handleShowParticipantModal = (id) => {
    setShowParticipantModal(true);
    setParticipantId(id);
  };

  //

  const fetchParticipantModalData = async (url) => {
    try {
      const response = await AuthAxios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch customer data");
    }
  };

  const {
    data: participantModalData,
    error: modalError,
    isLoading: modalLoading,
  } = useQuery({
    queryKey: ["fetchParticipantModalData", getParticipantModalUrl],
    queryFn: () => fetchParticipantModalData(getParticipantModalUrl),
    keepPreviousData: true,
    staleTime: 5000, // Cache data for 5 seconds
  });

  useEffect(() => {
    fetchParticipantModalData();
  }, [participantId]);

  const fetchSavingsParticipants = async (url) => {
    try {
      const response = await AuthAxios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch customer data");
    }
  };
  const {
    data: participantsData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["fetchSavingsParticipants", apiUrl],
    queryFn: () => fetchSavingsParticipants(apiUrl),
    keepPreviousData: true,
    staleTime: 5000, // Cache data for 5 seconds
  });

  console.log(participantModalData);

  // useEffect(() => {

  // }, [id]);

  return (
    <div className="flex w-full flex-col items-start gap-4">
      <div className="flex gap-3 items-center mb-3">
        <div
          className="flex gap-1 items-center cursor-pointer"
          onClick={() => {
            setShowComp("corporate");
          }}
        >
          <img src="" alt="" />
          <p className="text-general text-[14px] hover:underline">Savings</p>
        </div>
        <ChevronRightOutlinedIcon
          sx={{ color: "#3F3767", fontSize: "16px", mt: "1px" }}
        />
        <div
          className="flex gap-1 items-center cursor-pointer"
          onClick={() => {
            setShowComp("target");
          }}
        >
          <img src="" alt="" />
          <p className="text-general text-[14px] hover:underline">
            Target Savings
          </p>
        </div>

        <ChevronRightOutlinedIcon
          sx={{ color: "#3F3767", fontSize: "16px", mt: "1px" }}
        />

        <div className="flex gap-1 items-center">
          <img src="" alt="link" />
          <p className="text-general text-[14px]">{title}</p>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <p className="text-general text-[20px] font-[600]">{title}</p>
      </div>

      <div className="w-full">
        <Box className="w-full">
          <TableContainer sx={{ background: "white" }}>
            <Table sx={{ minWidth: 100, padding: "8px" }}>
              <TableHead
                sx={{
                  background: "#F8F8F8",
                }}
              >
                <TableRow>
                  <TableCell>S/N</TableCell>
                  <TableCell> Name</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Email Address</TableCell>
                  <TableCell>Amount Saved(N)</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {!participantsData || isLoading ? (
                  <CircularProgress
                    size="4.2rem"
                    sx={{
                      color: "#02981D",
                      marginLeft: "auto",
                      padding: "1em",
                    }}
                  />
                ) : participantsData &&
                  Array.isArray(participantsData?.results) &&
                  participantsData?.results?.length > 0 ? (
                  participantsData?.results?.map((item, i) => (
                    <TableRow key={item.id}>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>
                        <Typography
                          sx={{
                            fontWeight: "400",
                            fontSize: "16px",
                            color: "#828282",
                          }}
                        >
                          {item?.name}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          sx={{
                            fontWeight: "400",
                            fontSize: "16px",
                            color: "#828282",
                          }}
                        >
                          {item?.phone}
                        </Typography>
                      </TableCell>
                      <TableCell>{item?.email}</TableCell>
                      <TableCell>
                        <FormattedPrice amount={item?.saved} />
                      </TableCell>
                      <TableCell>
                        <Button
                          onClick={() => handleShowParticipantModal(item?.id)}
                          variant="outlined"
                          sx={{
                            textTransform: "capitalize",
                            display: "flex",
                            gap: "4px",
                            width: "100px",
                            alignItems: "center",
                            color: "#02981d",
                            fontWeight: "400",
                            fontSize: "10px",
                            border: "1px solid #02981d",
                            "&:hover": {
                              backgroundColor: "#fafafa",
                              border: "1px solid #E0E0E0",
                            },
                            // lineHeight: "26.4px",
                          }}
                        >
                          View More
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan="7">No data found</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>

      {/* partucipant modal start */}
      <CustomModal open={showParticipantModal}>
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="flex items-center justify-between w-full mb-3">
            <p className="text-general font-[500] text-[20px] ">
              Personal Savings Details
            </p>

            <ClearRoundedIcon
              onClick={closeParticipantModal}
              sx={{ color: "#1E1E1  E", cursor: "pointer" }}
            />
          </div>

          <div className="flex gap-2 items-center">
            <p className="text-primary_green font-[500] text-[18px]">{title}</p>
          </div>

          {modalLoading || !participantModalData ? (
            <Skeleton variant="rounded" width="100%" height={220} />
          ) : (
            <div className="flex flex-col items-start gap-2 w-full mt-3">
              <div className="rounded-md w-full border-[1px] bg-[#F9F8FF] border-[#E3E3E3] p-2 flex flex-col items-start">
                <div className="w-full flex justify-between mt-1">
                  <p className="text-[14px] text-primary_grey_2">
                    Description:
                  </p>
                  <p className="text-[14px] text-general font-[500]">
                    Savings Plans
                  </p>
                </div>
                <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

                <div className="w-full flex justify-between">
                  <p className="text-[14px] text-primary_grey_2">User:</p>
                  <p className="text-[14px] text-general font-[500]">
                    {participantModalData?.user}
                  </p>
                </div>

                <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

                <div className="w-full flex justify-between">
                  <p className="text-[14px] text-primary_grey_2">
                    Target Amount:
                  </p>
                  <p className="text-[14px] text-general font-[500]">
                    <FormattedPrice amount={participantModalData?.amount} />
                  </p>
                </div>
                <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

                <div className="w-full flex justify-between">
                  <p className="text-[14px] text-primary_grey_2">
                    Amount Saved:
                  </p>
                  <p className="text-[14px] text-general font-[500]">
                    <FormattedPrice amount={participantModalData?.saved} />
                  </p>
                </div>
                <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

                <div className="w-full flex justify-between">
                  <p className="text-[14px] text-primary_grey_2">
                    Frequency of Savings:
                  </p>
                  <p className="text-[14px] text-general font-[500]">
                    {participantModalData?.frequency}
                  </p>
                </div>
                <Divider sx={{ color: "#E3E3E3", width: "100%", my: "8px" }} />

                <div className="w-full flex justify-between">
                  <p className="text-[14px] text-primary_grey_2">
                    Expected Amount Per Saving:
                  </p>
                  <p className="text-[14px] text-general font-[500]">
                    <FormattedPrice
                      amount={participantModalData?.amount_per_savings}
                    />
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="flex w-full items-center justify-between">
            {modalLoading || !participantModalData ? (
              <Skeleton variant="rounded" width="100%" height={30} />
            ) : (
              <CustomLinearProgress
                startDate={participantModalData?.start_date}
                endDate={participantModalData?.end_date}
              />
            )}
          </div>
        </div>
      </CustomModal>
      {/* partucipant modal end */}
    </div>
  );
};

export default ParticipantsSavings;
