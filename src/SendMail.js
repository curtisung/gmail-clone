import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import {useForm} from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp} from "firebase/firestore";

function SendMail() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    const data = {
      to: formData.to, 
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
    };

    const docRef = addDoc(collection(db, "emails"), data);
    console.log(formData);
    console.log(docRef.id);

    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" onClick={() => dispatch(closeSendMessage())}/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="to" type="email" placeholder="To" {...register("to", {required:true,})}/>
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
