import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import {Avatar} from "@mui/material";
import { useSelector, useDispatch} from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut()
      .then(() => {
        dispatch(logout());
      });
  };

  let searchPlaceholderText = "Search mail";
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt="gmail"
        />
      </div>
      <div className="header__right">
        <div className="header__searchBar">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input placeholder={searchPlaceholderText}></input>
          <IconButton>
            <TuneIcon className="header_inputTune" />
          </IconButton>
        </div>
        <div className="header__settings">
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <AppsIcon />
          </IconButton>
          <IconButton>
            <Avatar src={user?.photoUrl} onClick={signOut}/>
          </IconButton>
        </div>
      </div>
      
    </div>
  );
}

export default Header;
