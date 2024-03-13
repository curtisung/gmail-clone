import React from "react";
// import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Mail.css";

import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArchiveIcon from "@mui/icons-material/Archive";
import ReportIcon from "@mui/icons-material/Report";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSelector } from "react-redux";
import { selectSelectedMail } from "./features/mailSlice";

export default function Mail() {
  const navigate = useNavigate();
  const currentSelectedMail = useSelector(selectSelectedMail);

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <div className="mail__toolsLeft1">
            <IconButton
              onClick={() => navigate("/")}
              className="mail__toolsLeftMargin"
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton className="mail__toolsLeftMargin">
              <ArchiveIcon />
            </IconButton>
            <IconButton className="mail__toolsLeftMargin">
              <ReportIcon />
            </IconButton>
            <IconButton className="mail__toolsLeftMargin">
              <DeleteIcon />
            </IconButton>
          </div>

          <div className="mail__toolsLeft2">
            <IconButton>
              <MarkEmailUnreadIcon />
            </IconButton>
            <IconButton>
              <AccessTimeIcon />
            </IconButton>
            <IconButton>
              <AddTaskIcon />
            </IconButton>
          </div>
          <div className="mail__toolsLeft3">
            <IconButton>
              <DriveFileMoveOutlinedIcon />
            </IconButton>
            <IconButton>
              <LabelOutlinedIcon />
            </IconButton>
            <IconButton>
              <MoreVertOutlinedIcon />
            </IconButton>
          </div>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{currentSelectedMail?.subject}</h2>
          <LabelOutlinedIcon />
          <p>{currentSelectedMail?.title}</p>
          <p className="mail__time">{currentSelectedMail?.time}</p>
        </div>
        <div className="mail__message">
          <p>{currentSelectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
}
