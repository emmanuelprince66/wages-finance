import React from 'react'
import {
  Table,
  Box,
  TableBody,
  TableCell,
  TableContainer,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  Button,
  TableHead,
  TableRow,
  CircularProgress,
  Typography,
  Divider,
} from "@mui/material";
import CustomPagination from '../../components/CustomPagination';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import { useState } from 'react';

const ReferralTable = () => {
 const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);



    const dummy = [
        {
            id:1,
            ref:"Ochigbo Emmanuel",
            ct:"6",
            amt:"2000000",
        },
        {
            id:2,
            ref:"Ochigbo Emmanuel",
            ct:"6",
            amt:"2000000",
        },
        {
            id:3,
            ref:"Ochigbo Emmanuel",
            ct:"6",
            amt:"2000000",
        },
        {
            id:4,
            ref:"Ochigbo Emmanuel",
            ct:"6",
            amt:"2000000",
        },
        {
            id:5,
            ref:"Ochigbo Emmanuel",
            ct:"6",
            amt:"2000000",
        },
    ]
  return (
    <div className='w-full'>
             {/* table */}
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
                    <TableCell> Referral</TableCell>
                    <TableCell>Referral Count</TableCell>
                    <TableCell>Total Amount Earned(N)</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {!dummy ||
                  !dummy ? (
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
                      <TableRow key={item.id}>
                        <TableCell>{page * rowsPerPage + i + 1}</TableCell>
                        <TableCell>
                          <Typography
                            sx={{
                              fontWeight: "400",
                              fontSize: "16px",
                              color: "#5E5E5E",
                            }}
                          >
                            {item?.ref}
                          </Typography>
                        </TableCell>
                        <TableCell>{item?.ct}</TableCell>
                        <TableCell>{item?.amt}</TableCell>
                        <TableCell>
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
                            textTransform: "capitalize",
                            fontWeight: "600",
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                        >
                        <Groups2OutlinedIcon/>    
                        View Referees
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
          {/* table end */}
          {/* <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
            nextPageLink={transactionsData?.links?.next}
            prevPageLink={transactionsData?.links?.previous}
          /> 
       */}
    </div>
  )
}

export default ReferralTable
