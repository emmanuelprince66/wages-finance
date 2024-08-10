import React from 'react'
import CustomCard from '../../components/CustomCard'
import FormattedPrice from '../../utils/FormattedPrice'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import tOne from "../../assets/transactions/t-1.svg";
import { Button } from '@mui/material';
import ReferralTable from './ReferralTable';


const Referrals = () => {

      // referral card
  const CustomReferralCard = ({text , amt}) => {
    return (
      <CustomCard style="w-full">
        <div className="w-full flex flex-col items-start gap-4">
          <p className="text-[14px] font-[400] text-primary_grey_2">{text}</p>
          <p className="text-[20px] font-[600] text-general">{amt}</p>
        </div>
      </CustomCard>
    )
  }
  return (
    <div className='w-full flex items-start flex-col gap-5'>
    <div className='w-full flex justify-between gap-3 mt-3'>
            <CustomReferralCard
      text="Total Referral Count(All-Time)"
      amt="200"
/>
      <CustomReferralCard
      text="Total Referral Count(By-Filter)"
      amt="500"
/>
      <CustomReferralCard
      text="Total Amount Paid To Referral"
      amt={<FormattedPrice amount={20000}/>}
/>
    </div>

          <p className="text-[16px] font-[600] text-general">Referral Breakdown</p>

          <div className='flex w-full items-center justify-between'>
             <div className="bg-white border-[#E3E3E3] border-[1px] w-[50%] py-2 px-2 flex items-center gap-2 rounded-md">
          <SearchOutlinedIcon sx={{ color: "#757575" }} />
          <input
            type="text"
            placeholder="Search....."
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

            <ReferralTable/>
    </div>
  )
}

export default Referrals
