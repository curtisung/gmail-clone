import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import {useForm} from "react-hook-form";

function SendMail() {
  const {register, handleSubmit, watch, formState: {errors}} = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="to" type="text" placeholder="To" {...register("to", {required:true,})}/>
        {errors.to && <p className="sendMail__error">Please enter a recipient.</p>}

        <input name="subject" type="text" placeholder="Subject" {...register("subject", {required:true,})}/>
        {errors.subject && <p className="sendMail__error">Please enter a subject.</p>}
        
        <input name="message" type="text" placeholder="Message..." className="sendMail__message" {...register("message", {required:true,})}/>
        {errors.message && <p className="sendMail__error">Please enter a message.</p>}

        <div className="sendmail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
