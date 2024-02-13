import React from "react";
import "./MailRow.css";
import { IconButton } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

import Checkbox from "@mui/material/Checkbox";

export default function MailRow({ id, subject, title, description, time }) {
  return (
    <div className="mailRow">
      <div className="mailRow_options">
        <Checkbox />
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <div className="mailRow_title">
        <h4>{title}</h4>
      </div>
      <div className="mailRow_message">
        <h4>
          <span className="mailRow_subject">{subject}</span>
          <span className="mailRow_description">- {description}</span>
        </h4>
      </div>
      <div className="mailRow_time">{time}</div>
    </div>
  );
}
