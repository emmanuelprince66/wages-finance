import React from 'react'
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import FormattedPrice from '../../utils/FormattedPrice';
import SelectDate from '../../components/SelectDate';
import { useState } from 'react';
import {
    Table,
    Box,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Container,
    CircularProgress,
    TextField,
    TablePagination,
    ToggleButtonGroup,
    ToggleButton,
    Card,
    Modal,
  } from "@mui/material";


const CorporativeSavingsModal = ({close}) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(100);



    const dummy =[
        {
            id:1,
            dd:"30/05/2024, 6:24 PM",
            as:"10,500",
            balance:"1004,222"
        },
        {
            id:2,
            dd:"30/05/2024, 6:24 PM",
            as:"10,500",
            balance:"1004,222"
        },
        {
            id:3,
            dd:"30/05/2024, 6:24 PM",
            as:"10,500",
            balance:"1004,222"
        },
        {
            id:4,
            dd:"30/05/2024, 6:24 PM",
            as:"10,500",
            balance:"1004,222"
        },
        {
            id:5,
            dd:"30/05/2024, 6:24 PM",
            as:"10,500",
            balance:"1004,222"
        },
        {
            id:6,
            dd:"30/05/2024, 6:24 PM",
            as:"10,500",
            balance:"1004,222"
        },
    ]
  return (
    <div className='w-full flex flex-col items-start gap-3'>

<div className="flex items-center justify-between w-full mb-3">
            <p className="text-general font-[500] text-[20px] ">Corporative Savings Breakdown</p>

            <ClearRoundedIcon sx={{ color: "#1E1E1E", cursor: "pointer" }}  onClick={close} />
          </div>
<div className="flex items-center justify-between w-full mb-3">
           <div className='flex gap-1 items-center'>
            <p className='font-[400] text-[14px] text-primary_grey_2'>Total Cooperative Savings:</p>
            <p className='font-[600] text-[20px] text-general'><FormattedPrice amount={44000}/></p>
           </div>

            <SelectDate/>
          </div>


       
                  {/* Table */}

                  <Box className="w-full">
                    <TableContainer>
                      <Table sx={{ minWidth: 100, padding: "8px" }}>
                        <TableHead
                          sx={{
                            background: "#F8F8F8",
                          }}
                        >
                          <TableRow>
                            <TableCell>S/N</TableCell>
                            <TableCell> Date & Time</TableCell>
                            <TableCell>Amount Saved(N)</TableCell>
                            <TableCell>Balance(N)</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {!dummy ? (
                            <CircularProgress
                              size="4.2rem"
                              sx={{
                                color: "#02981D",
                                marginLeft: "auto",
                                padding: "1em",
                              }}
                            />
                          ) : dummy &&
                            Array.isArray(dummy) &&
                            dummy?.length > 0 ? (
                            dummy?.map((item, i) => (
                              <TableRow key={i + 2}>
                                <TableCell>
                                  {page * rowsPerPage + i + 1}
                                </TableCell>
                                <TableCell>
                              
                                    {item?.dd}
                             
                                </TableCell>

                             
                                <TableCell>
                                    <FormattedPrice amount={parseInt(item?.as)}/>
                                </TableCell>
                                <TableCell>
                                <FormattedPrice amount={parseInt(item?.balance)}/>
                                 
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

                    {/* <CustomPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        nextPageLink={transactionsData?.links?.next}
                        prevPageLink={transactionsData?.links?.previous}
                    /> */}

                  </Box>
                  {/* Table */}



    </div>
  )
}

export default CorporativeSavingsModal