import React from "react";
import "./MailRow.css";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

import { IconButton } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

import Checkbox from "@mui/material/Checkbox";

export default function MailRow({ id, subject, title, description, time }) {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectMail({id, title, subject, description, time,}));
    navigate("/mail");
  }

  return (
    <div className="mailRow">
      <div className="mailRow__options">
        <Checkbox />
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <div onClick={openMail} className="mailRow__mailContent">
        <div className="mailRow__title">
          <h4>{title}</h4>
        </div>
        <div className="mailRow__message">
          <h4>
            <span className="mailRow__subject">{subject}</span>
            <span className="mailRow__description">- {description}</span>
          </h4>
        </div>
        <div className="mailRow__time">{time}</div>
      </div>
    </div>
  );
}
