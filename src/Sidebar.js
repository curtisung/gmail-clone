import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";
import InboxIcon from "@mui/icons-material/Inbox";

function Sidebar() {
  let inboxTitle = "Inbox";
  let inboxQuantity = 64;
  return (
    <>
      <div className="sidebar">
        <Button
          startIcon={<CreateIcon className="sidebar__createIcon" />}
          className="sidebar__compose"
        >
          <span className="sidebar__span">Compose</span>
        </Button>
        <SidebarOption
          Icon={InboxIcon}
          title={inboxTitle}
          quantity={inboxQuantity}
        />
      </div>
    </>
  );
}

export default Sidebar;
