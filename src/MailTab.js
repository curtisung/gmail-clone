import React from "react";
import "./MailTab.css";

export default function MailTab({ Icon, title, color, isSelected}) {
    return (
        <div className="mailTab" style={{
            borderBottom: `3px solid ${color}`,
            color: `${isSelected && color}`
        }}>
            <div className="mailTab__icon">
                <Icon/>
            </div>
            <h4>{title}</h4>
        </div>
    );
}