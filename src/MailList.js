import React from "react";
import "./MailList.css";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function MailList() {
    return (
        <div className="mailList">
            <Checkbox/>
            <IconButton>
                <ArrowDropDownIcon/>
            </IconButton>
            <IconButton>
                <RedoIcon/>
            </IconButton>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        </div>
    );
}