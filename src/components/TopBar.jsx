import React from "react";
import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import avatar from "../assets/tobbar/avatar.png";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function logOut() {
    navigate("/");
    Cookies.remove("authToken");
    Cookies.remove("refreshToken");
  }
  return (
    <div className="w-full p-3 ">
      <div className="w-full flex items-center justify-between">
        <div className="bg-white border-[#E3E3E3] border-[1px] w-[50%] py-2 px-2 flex items-center gap-2 rounded-md">
          <SearchOutlinedIcon sx={{ color: "#757575" }} />
          <input
            type="text"
            placeholder="Search member , ID"
            className="bg-transparent border-none focus:outline-none outline-none  w-full"
          />
        </div>

        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <div className="flex items-center gap-2">
              <img src={avatar} alt="avatar" />
              <KeyboardArrowDownRoundedIcon sx={{ color: "#757575" }} />
            </div>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={logOut}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
