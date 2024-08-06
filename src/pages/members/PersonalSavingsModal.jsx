import React from 'react'
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { Grid } from '@mui/material';
import FormattedPrice from '../../utils/FormattedPrice';
import sOne from "../../assets/savings/s-1.svg";
import sTwo from "../../assets/savings/s-2.svg";
import sThree from "../../assets/savings/s-33.svg";
import sFour from "../../assets/savings/s-4.svg";
import sFive from "../../assets/savings/s-5.svg";
import CustomCard from '../../components/CustomCard';
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";


const PersonalSavingsModal = ({close}) => {
    const FirstCard = ({ titleOne, textOne, textTwo, img, color, link }) => {
        return (
          <>
            <CustomCard style="w-full h-full">
              <div className="bg-text_white flex-col items-start">
                <div className="flex gap-2 items-center ">
                  <img src={img} alt="s-1" />
                  <p className={`${color}`}>{titleOne}</p>
                </div>
    
                <div className="flex flex-col items-start gap-2 mt-5  mb-4">
                  <p className="text-[14px] text-primary_grey_2">
                    Total Number of Cycles:
                  </p>
                  <p className="text-[20px] text-general">{textOne}</p>
                </div>
    
                <div className="flex flex-col items-start gap-2 mb-4">
                  <p className="text-[14px] text-primary_grey_2">
                    Current Total Savings:
                  </p>
                  <p className="text-[20px] text-general">
                    <FormattedPrice amount={textTwo} />
                  </p>
                </div>
          
              </div>
            </CustomCard>
          </>
        );
      };
  return (
    <div className=' flex flex-col items-start gap-3 w-full'>
        <div className="flex items-center justify-between w-full mb-3">
            <p className="text-general font-[500] text-[20px] ">Personal Savings Breakdown</p>

            <ClearRoundedIcon sx={{ color: "#1E1E1E", cursor: "pointer" }}  onClick={close} />
          </div>


          {/* cards */}

          <div className='w-full'>
            <Grid container spacing={2}>
                <Grid item xs={12}>

                    <div className='w-full flex-col items-start gap-2 rounded-md border-[1px] border-[#E3E3E3] p-2'>
                     <p className='text-general font-[500] text-[15px] '>Summary</p>

                     
                    <div className='w-full flex justify-between items-center mt-3'>
                        <div className='items-start flex  gap-2 flex-col'>
                            <p className='font-[400] text-[14px] text-[#5E5E5E]'>Total Personal Savings Cycle:</p>
                            <p className='text-general font-[500] text-[20px] '>0</p>
                        </div>
                        <div className='items-start flex  gap-2 flex-col'>
                            <p className='font-[400] text-[14px] text-[#5E5E5E]'>All-Time Total Personal Savings:</p>
                            <p className='text-general font-[500] text-[20px] '><FormattedPrice amount={10}/></p>
                        </div>
                        <div className='items-start flex  gap-2 flex-col'>
                            <p className='font-[400] text-[14px] text-[#5E5E5E]'>Current Total Personal Savings:</p>
                            <p className='text-general font-[500] text-[20px] '><FormattedPrice amount={10}/></p>
                        </div>
                    </div>
                    </div>


                </Grid>

                <Grid item xs={4}>
                <FirstCard
                img={sOne}
                titleOne="Savings Towards Birthdays"
                textOne="233"
                textTwo={500}
                color="text-[#00A26B]"
                link={{ title: "Savings Towards Birthdays", val: "birth" }}
            />   
                </Grid>
                <Grid item xs={4}>
                <FirstCard
                img={sTwo}
                titleOne="Savings for Car Purchase"
                textOne="233"
                textTwo={200}
                color="text-[#E29600]"
                link={{ title: "Savings for car Purchase", val: "car" }}
            />
                </Grid>
                <Grid item xs={4}>
                <FirstCard
                img={sThree}
                titleOne="Savings for Vacation"
                textOne={ 0}
                textTwo={ 0}
                color="text-[#0090FF]"
                link={{
                  title: "Savings for Vacation",
                  val: "vacation",
                  id: "VACATION",
                }}
              />
                </Grid>
                <Grid item xs={4}>
                <FirstCard
                img={sFour}
                titleOne="Savings for Gadget purcase"
                textOne="233"
                textTwo={200}
                color="text-[#FF6D84]"
                link={{ title: "Savings for Gadget purchase", val: "Gadget" }}
            />
                </Grid>
                <Grid item xs={4}>
                <FirstCard
                img={sFive}
                titleOne="Savings For  Miscellaneous"
                textOne={
                 0
                }
                textTwo={
                 0
                }
                color="text-[#A291DE]"
                link={{
                  title: "Savings for Miscellaneous",
                  val: "mis",
                  id: "MISCELLANEOUS",
                  img: sFive,
                }}
              />
                </Grid>
            </Grid>
          </div>
    </div>
  )
}

export default PersonalSavingsModal