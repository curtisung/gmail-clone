import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";


function Sidebar() {
  let inboxTitle = "Inbox";
  let starredTitle = "Starred";
  let snoozedTitle = "Snoozed";
  let sentTitle = "Sent";
  let draftsTitle = "Drafts";
  let moreTitle = "More";

  let inboxQuantity = 64;
  let starredQuantity = 3;
  let snoozedQuantity = 8;
  let draftsQuantity = 3;
  
  return (
    <>
      <div className="sidebar">
        <Button
          startIcon={<CreateIcon className="sidebar__createIcon" />}
          className="sidebar__compose"
        >
          <span className="sidebar__span">Compose</span>
        </Button>
        
        <SidebarOption Icon={InboxIcon} title={inboxTitle} quantity={inboxQuantity} isSelected={true}/>
        <SidebarOption Icon={StarIcon} title={starredTitle} quantity={starredQuantity} isSelected={false}/>
        <SidebarOption Icon={AccessTimeIcon} title={snoozedTitle} quantity={snoozedQuantity} isSelected={false}/>
        <SidebarOption Icon={LabelImportantIcon} title={starredTitle} quantity={starredQuantity} isSelected={false}/>
        <SidebarOption Icon={SendIcon} title={sentTitle} quantity={null} isSelected={false}/>
        <SidebarOption Icon={NoteIcon} title={draftsTitle} quantity={draftsQuantity} isSelected={false}/>
        <SidebarOption Icon={ExpandMoreIcon} title={moreTitle} quantity={null} isSelected={false}/>

        <div className="sidebar__footer">
          <div className="sidebar__footerIcons">
            <IconButton>
              <PersonIcon/>
            </IconButton>
            <IconButton>
              <DuoIcon/>
            </IconButton>
            <IconButton>
              <PhoneIcon/>
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
