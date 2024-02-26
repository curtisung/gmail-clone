import React from "react";
import "./MailList.css";

import MailTab from "./MailTab";
import MailRow from "./MailRow";

import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import InboxIcon from "@mui/icons-material/Inbox";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PeopleIcon from "@mui/icons-material/People";

export default function MailList() {
  let descriptionText =
    "Good morning, The Grand Costa Mesa, Over the upcoming weeks, A Plus Landscaping will perform tree trimming throughout the community. Tomorrow, Wednesday, February 14th, they will be trimming trees along Village way, as well as along the community drive in the areas between Buildings B, C, and D (see site map in GREEN).";
  return (
    <div className="mailList">
      <div className="mailList__settings">
        <div className="mailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mailList__settingsRight">
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
      <div className="mailList__tabs">
        <MailTab
          Icon={InboxIcon}
          title="Primary"
          color="#e86c56"
          isSelected={true}
        />
        <MailTab
          Icon={LocalOfferIcon}
          title="Promotions"
          color="green"
          isSelected={false}
        />
        <MailTab
          Icon={PeopleIcon}
          title="Social"
          color="blue"
          isSelected={false}
        />
      </div>

      <div className="mailList_list"></div>
      <div className="mailList_row">
        <MailRow
          title="Amazon AWS Services, the best services out there"
          subject="Enroll in AWS Camp, the best camp."
          description={descriptionText}
          time="11:47pm"
        />
      </div>
    </div>
  );
}
