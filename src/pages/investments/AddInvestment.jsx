import React from "react";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import iOne from "../../assets/investment/i-1.svg";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
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

const AddInvestment = () => {
  const [preview, setPreview] = useState("");
  const {
    handleSubmit,
    control,
    watch,
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "all" });
  const selectedSubscription = watch("subscription", "3 months");
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
          <p className="text-[14px]  text-[#17171]">
            Create New Investment Plan
          </p>
        </div>
      </div>
      {/*  */}

      <div className="flex gap-2 items-center">
        <WestOutlinedIcon sx={{ color: "#919191", pt: "2px" }} />
        <p className="text-[#171717] text-[20px] font-[600]">
          Create New Investment Plan
        </p>
      </div>

      {/*  */}

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
                  {preview === "" ? (
                    <div className="w-full min-h-[13rem] rounded-md bg-[#f1f1f1]"></div>
                  ) : (
                    <img
                      src=""
                      alt="banner"
                      className="object-fill w-full h-full"
                    />
                  )}
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
                            className={`rounded-md border-2 p-1 mr-2 ${
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
                  disabled
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
                  <AddRoundedIcon />
                  Create New Investment Plan
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default AddInvestment;
