import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  let searchPlaceholderText = "Search mail";
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt="gmail"
        />
      </div>
      <div className="header__middle">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder={searchPlaceholderText}></input>
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>
      <div classname="header__right"></div>
    </div>
  );
}

export default Header;
