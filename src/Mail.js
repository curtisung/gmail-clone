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

export default function Mail() {
  const navigate = useNavigate();

  return (
    <div className="mail">
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
      <div className="mail__toolsRight"></div>
    </div>
  );
}
