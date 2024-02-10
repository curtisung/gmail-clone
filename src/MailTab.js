import React, { useState } from "react";

import "./MailTab.css";

export default function MailTab({ Icon, title, color, isSelected }) {
  const [isActive, setIsActive] = useState(isSelected);

  return (
    <div
      className={`mailTab ${isSelected && "mailTab--active"}`}
      style={{
        borderBottomColor: `${isActive && color}`,
        color: isActive || isSelected ? color : null,
      }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="mailTab__icon">
        <Icon />
      </div>
      <h4>{title}</h4>
    </div>
  );
}
