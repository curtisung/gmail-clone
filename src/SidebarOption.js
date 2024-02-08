import React from "react";
import "./SidebarOption.css";

// import Button from "@mui/material/Button";

function SidebarOption({ Icon, title, quantity, isSelected }) {
  return (
    <>
      <div className={`sidebarOption ${isSelected && "sidebarOption--active"}`}>
        <span className="sidebarOption__icon">
          <Icon />
        </span>
        <h3>{title}</h3>
        <p>{quantity}</p>
      </div>
    </>
  );
}

export default SidebarOption;
