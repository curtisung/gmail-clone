import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

function SendMail() {
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" />
      </div>
      <form>
        <input type="text" placeholder="To:" />
        <input type="text" placeholder="Subject:" />
        <input type="text" placeholder="Message:" />

        <div className="sendmail__options">
          <Button>Send</Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
