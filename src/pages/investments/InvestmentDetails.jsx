import React from "react";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import iOne from "../../assets/investment/i-1.svg";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useState } from "react";
import banner from "../../assets/investment/banner.png";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import CustomCard from "../../components/CustomCard";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import {
  Grid,
  IconButton,
  TextField,
  Switch,
  Box,
  InputAdornment,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
} from "@mui/material";

const InvestmentDetails = () => {
  const {
    handleSubmit,
    control,
    watch,
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "all" });
  const selectedSubscription = watch("subscription", "3 months");
  const [showCash, setShowCash] = useState(false);
  const handleClickShowCash = () => setShowCash((show) => !show);
  const handleMouseDownCash = (event) => {
    event.preventDefault();
  };
  const subscriptionOptions = ["3 months", "6 months", "9 months", "12 months"];
  return (
    <div className="flex items-start flex-col gap-3">
      {/*  */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 cursor-pointer hover:underline">
          <img src={iOne} alt="i-one" />

          <p className="text-[14px]  text-[#17171]">Investments</p>
        </div>
        <ChevronRightOutlinedIcon sx={{ color: "#919191", pt: "2px" }} />
        <div className="flex items-center gap-1">
          <p className="text-[14px]  text-[#17171]">Stable Returns Portfolio</p>
        </div>
      </div>
      {/*  */}

      <div className="flex gap-2 items-center">
        <WestOutlinedIcon sx={{ color: "#919191", pt: "2px" }} />
        <p className="text-[#171717] text-[20px] font-[600]">
          Stable Returns Portfolio
        </p>
      </div>

      {/*  */}

      <CustomCard style="w-full">
        <p className="text-[15px] font-bold  text-[#17171]">Summary</p>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-start gap-3">
            <div className="flex gap-4 items-center">
              <p className="text-[14px]  text-[#17171]">
                Total amount invested in this plan:
              </p>
              <IconButton
                aria-label="toggle cash visibility"
                onClick={handleClickShowCash}
                onMouseDown={handleMouseDownCash}
                edge="end"
              >
                {showCash ? (
                  <VisibilityOffOutlinedIcon
                    sx={{ color: "#3F3767", fontSize: "15px" }}
                  />
                ) : (
                  <VisibilityOutlinedIcon
                    sx={{ color: "#3F3767", fontSize: "15px" }}
                  />
                )}
              </IconButton>
            </div>
            <p className="text-general text-[16px]">
              {showCash ? <p> &#8358;17,000</p> : "***********"}
            </p>
          </div>
          <div className="min-h-[5rem] w-[1px] bg-[#E3E3E3]"></div>

          <div className="flex flex-col items-start gap-3">
            <div className="flex gap-4 items-center">
              <p className="text-[14px]  text-[#17171]">
                Total Number of investors:
              </p>
            </div>
            <p className="text-general text-[16px]">771</p>
          </div>
          <div className="min-h-[5rem] w-[1px] bg-[#E3E3E3]"></div>

          <div className="flex flex-col items-start gap-3">
            <div className="flex gap-4 items-center">
              <p className="text-[14px]  text-[#17171]">Number of Days left:</p>
            </div>
            <p className="text-general text-[16px]">71</p>
          </div>
        </div>
      </CustomCard>

      {/* form */}

      <div className="w-[60%] mx-auto p-2">
        <form action="" className="w-full">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div className="w-full flex flex-col items-start gap-1">
                <p className="text-[#001533] font-[500] text-[16px]">
                  BANNER
                  <sup className="text-[#DC3545]">*</sup>
                </p>

                <div className="h-full w-full">
                  <img
                    src={banner}
                    alt="banner"
                    className="object-fill w-full h-full"
                  />
                </div>

                <Box className="w-full mx-auto">
                  <p className="text-[14px] text-primary_grey my-2">
                    Upload an Image to uniquely identify this investment plan.
                  </p>
                  <TextField
                    // onChange={handleImageChange}
                    type="file"
                    accept="image/*"
                    style={{ marginBottom: "20px", width: "100%", my: "10px" }}
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderRadius: "10px",
                        },
                        "&:hover fieldset": {
                          borderColor: "#015B11",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#015B11",
                        },
                      },
                    }}
                  />
                </Box>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="w-full flex flex-col items-start gap-1 my-2">
                <span className="flex items-center justify-between w-full">
                  <p className="text-[#001533] font-[500] text-[16px]">
                    PLAY NAME
                    <sup className="text-[#DC3545]">*</sup>
                  </p>
                  <p className="text-[#001533] font-[500] text-[16px]">0/50</p>
                </span>

                <Controller
                  name="sampleName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      placeholder="Sample Name"
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderRadius: "10px",
                          },
                          "&:hover fieldset": {
                            borderColor: "#015B11",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#015B11",
                          },
                        },
                      }}

                      // error={!!errors.venturesName}
                      // helperText={
                      //   errors.venturesName && errors.venturesName.message
                      // }
                    />
                  )}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="w-full flex flex-col items-start gap-1 my-2 mb-3 ">
                <p className="text-[#001533] font-[500] text-[16px]">
                  DURATION
                  <sup className="text-[#DC3545]">*</sup>
                </p>

                <Controller
                  name="subscription"
                  control={control}
                  defaultValue="3 months"
                  render={({ field }) => (
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        {...field}
                        onChange={(e) => field.onChange(e.target.value)}
                      >
                        {subscriptionOptions?.map((label) => (
                          <div
                            key={label}
                            className={`rounded-md border-2  px-2 mr-1 ${
                              selectedSubscription === label
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
            </Grid>
            <Grid item xs={6}>
              <div className="w-full flex flex-col items-start gap-1">
                <span className="flex items-center justify-between w-full">
                  <p className="text-[#001533] font-[500] text-[16px]">
                    START DATE
                    <sup className="text-[#DC3545]">*</sup>
                  </p>
                </span>
                <Controller
                  name="startDate"
                  control={control}
                  defaultValue={null}
                  render={({ field }) => (
                    <div className="w-full flex justify-between items-center p-2 border-[1px] border-primary_grey hover:border-primary_green rounded-md">
                      <DatePicker
                        {...field}
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        className="w-full p-2 bg-transparent outline-none border-none  flex-2  rounded-lg text-black"
                        placeholderText="Select start date"
                      />

                      <KeyboardArrowDownRoundedIcon
                        sx={{ color: " E6F5E8", cursor: "pointer" }}
                      />
                    </div>
                  )}
                />
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="w-full flex flex-col items-start gap-1">
                <span className="flex items-center justify-between w-full">
                  <p className="text-[#001533] font-[500] text-[16px]">
                    END DATE
                    <sup className="text-[#DC3545]">*</sup>
                  </p>
                </span>
                <Controller
                  name="endDate"
                  control={control}
                  defaultValue={null}
                  render={({ field }) => (
                    <div className="w-full flex justify-between items-center p-2 border-[1px] border-primary_grey hover:border-primary_green rounded-md">
                      <DatePicker
                        {...field}
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        className="w-full p-2 bg-transparent outline-none border-none  flex-2  rounded-lg text-black"
                        placeholderText="Select end date"
                      />

                      <KeyboardArrowDownRoundedIcon
                        sx={{ color: " E6F5E8", cursor: "pointer" }}
                      />
                    </div>
                  )}
                />
              </div>
            </Grid>

            <Grid item xs={4}>
              <div className="w-full flex flex-col items-start gap-1 my-4">
                <span className="flex items-center justify-between w-full">
                  <p className="text-[#001533] font-[500] text-[16px]">
                    NO. OF PARTICIPANTS
                    <sup className="text-[#DC3545]">*</sup>
                  </p>
                </span>

                <Controller
                  name="np"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      placeholder="300"
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderRadius: "10px",
                          },
                          "&:hover fieldset": {
                            borderColor: "#015B11",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#015B11",
                          },
                        },
                      }}

                      // error={!!errors.venturesName}
                      // helperText={
                      //   errors.venturesName && errors.venturesName.message
                      // }
                    />
                  )}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="w-full flex flex-col items-start gap-1 my-4">
                <span className="flex items-center justify-between w-full">
                  <p className="text-[#001533] font-[500] text-[16px]">
                    INTEREST RATE(%)
                    <sup className="text-[#DC3545]">*</sup>
                  </p>
                </span>

                <Controller
                  name="interestRate"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      placeholder="300"
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderRadius: "10px",
                          },
                          "&:hover fieldset": {
                            borderColor: "#015B11",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#015B11",
                          },
                        },
                      }}

                      // error={!!errors.venturesName}
                      // helperText={
                      //   errors.venturesName && errors.venturesName.message
                      // }
                    />
                  )}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="w-full flex flex-col items-start gap-1 my-4">
                <span className="flex items-center justify-between w-full">
                  <p className="text-[#001533] font-[500] text-[16px]">
                    AMOUNT PER UNIT(N)
                    <sup className="text-[#DC3545]">*</sup>
                  </p>
                </span>

                <Controller
                  name="amt"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      placeholder="3,000"
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderRadius: "10px",
                          },
                          "&:hover fieldset": {
                            borderColor: "#015B11",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#015B11",
                          },
                        },
                      }}

                      // error={!!errors.venturesName}
                      // helperText={
                      //   errors.venturesName && errors.venturesName.message
                      // }
                    />
                  )}
                />
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="flex items-center justify-between">
                <p className="text-general text-[16px] ">
                  Set this plan as sold out
                </p>

                <Switch
                  sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: "#fff",
                      // "&:hover": {
                      //   backgroundColor: alpha(
                      //     pink[600],
                      //     theme.palette.action.hoverOpacity
                      //   ),
                      // },
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#02981D",
                    },
                  }}
                  defaultChecked
                  color="default"
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="flex items-center gap-4 w-full justify-end mt-4">
                <Button
                  variant="outline"
                  sx={{
                    color: "#fff",
                    background: "transparent",
                    color: "#02981d",
                    border: "1px solid grey",
                    padding: ".9em",
                    boxShadow: "none",
                    "&:hover": {
                      background: "transparent",
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    color: "#fff",
                    background: "#02981D",
                    padding: ".9em",
                    boxShadow: "none",
                    "&:hover": {
                      background: "#02981d",
                    },
                  }}
                >
                  Save Changes
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default InvestmentDetails;
