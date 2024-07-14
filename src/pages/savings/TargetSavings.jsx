import React from "react";
import { Grid } from "@mui/material";
import CustomCard from "../../components/CustomCard";
import DoughnutChart from "../../components/DoughnutChart";
import sOne from "../../assets/savings/s-1.svg";
import sTwo from "../../assets/savings/s-2.svg";
import sThree from "../../assets/savings/s-33.svg";
import sFour from "../../assets/savings/s-4.svg";
import sFive from "../../assets/savings/s-5.svg";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

const TargetSavings = ({ handleShowParticipants }) => {
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
                Participating Members:
              </p>
              <p className="text-[20px] text-general">{textOne}</p>
            </div>

            <div className="flex flex-col items-start gap-2 mb-4">
              <p className="text-[14px] text-primary_grey_2">
                Total Savings By Partcipants:
              </p>
              <p className="text-[20px] text-general">{textTwo}</p>
            </div>
            <div
              className="flex  items-center gap-2 mb-4 cursor-pointer"
              onClick={() => handleShowParticipants(link)}
            >
              <p className="text-[12px] text-[#3F3767] font-[500]">
                View Participants
              </p>
              <ChevronRightOutlinedIcon
                sx={{ color: "#3F3767", fontSize: "16px", mt: "1px" }}
              />
            </div>
          </div>
        </CustomCard>
      </>
    );
  };
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  // // Dummy data
  const title = "Overview the chart";
  const labels = [
    "Savings for Birthday",
    "Savings for Car Purchase",
    "Savings for Vacation",
    "Savings for Gadget Purchase",
    "Miscellaneous",
  ];
  // const values = [300, 500, 200, 400, 100]; // Dummy values
  const colors = ["#59EDBB", "#FECC6A", "#54B3FC", "#FF8396", "#A291DE"]; // Corresponding colors
  return (
    <div className="w-full">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CustomCard style="w-full h-full">
            <div className="w-full bg-text_white flex-col items-start ">
              <p className="text-general text-[16px] font-[500] mb-3">
                Summary
              </p>

              <div className="flex flex-col items-start gap-2 mb-3 ">
                <p className="text-primary_grey_2 text-[14px] ">
                  Total Members on Target Savings:
                </p>
                <p className="text-general font-[600] text-[20px]">550</p>
              </div>
              <div className="flex flex-col items-start mb-3 gap-2 ">
                <p className="text-primary_grey_2 text-[14px] ">
                  All-Time Total Amount Saved by Users on Target Savings:
                </p>
                <p className="text-general font-[600] text-[20px]">
                  ₦104,000,550
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 ">
                <p className="text-primary_grey_2 text-[14px] ">
                  Current Total Amount Saved by Users on Target Savings:
                </p>
                <p className="text-general font-[600] text-[20px]">
                  ₦104,000,550
                </p>
              </div>
            </div>
          </CustomCard>
        </Grid>
        <Grid item xs={6}>
          <CustomCard style="w-full h-full">
            <div className="w-full flex justify-between">
              <DoughnutChart
                title={title}
                data={data}
                cx={100}
                cy={90}
                height={200}
                width={200}
                colors={colors}
              />

              <div className="flex flex-col items-start gap-5 mt-2">
                <div className="flex gap-2 items-center">
                  <div className="rounded-full bg-[#59EDBB] w-[20px] h-[20px]" />
                  <p className="text-[14px] text-primary_grey_2">
                    Savings for Birthdays
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="rounded-full bg-[#FECC6A] w-[20px] h-[20px]" />
                  <p className="text-[14px] text-primary_grey_2">
                    Savings for Car Purchase
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="rounded-full bg-[#54B3FC] w-[20px] h-[20px]" />
                  <p className="text-[14px] text-primary_grey_2">
                    Savings for Vacation
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="rounded-full bg-[#FF8396] w-[20px] h-[20px]" />
                  <p className="text-[14px] text-primary_grey_2">
                    Savings for Gadget Purchase
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="rounded-full bg-[#A291DE] w-[20px] h-[20px]" />
                  <p className="text-[14px] text-primary_grey_2">
                    Savings for Miscellaneous
                  </p>
                </div>
              </div>
            </div>
          </CustomCard>
        </Grid>

        <Grid item xs={12}>
          <div className="w-full flex gap-5 items-center">
            <FirstCard
              img={sOne}
              titleOne="Savings Towards Birthdays"
              textOne="233"
              textTwo="₦17,800,550"
              color="text-[#00A26B]"
              link={{ title: "Savings Towards Birthdays", val: "birth" }}
            />
            <FirstCard
              img={sTwo}
              titleOne="Savings for Car Purchase"
              textOne="233"
              textTwo="₦17,800,550"
              color="text-[#E29600]"
              link={{ title: "Savings for car Purchase", val: "car" }}
            />
            <FirstCard
              img={sThree}
              titleOne="Savings for Vacation"
              textOne="233"
              textTwo="₦17,800,550"
              color="text-[#0090FF]"
              link={{ title: "Savings for Vacation", val: "vacation" }}
            />
          </div>
        </Grid>

        <Grid item xs={8}>
          <div className="w-full flex gap-5">
            <FirstCard
              img={sFour}
              titleOne="Savings for Gadget purcase"
              textOne="233"
              textTwo="₦17,800,550"
              color="text-[#FF6D84]"
              link={{ title: "Savings for Gadget purchase", val: "Gadget" }}
            />
            <FirstCard
              img={sFive}
              titleOne="Savings For  Miscellaneous"
              textOne="233"
              textTwo="₦17,800,550"
              color="text-[#A291DE]"
              link={{ title: "Savings for Miscellaneous", val: "mis" }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default TargetSavings;
