import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import MailList from "./MailList";
import SendMail from "./SendMail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import {selectSendMessageIsOpen} from "./features/mailSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<MailList />} />
            <Route path="/mail" element={<Mail />} />
          </Routes>
        </div>
      </BrowserRouter>
      {sendMessageIsOpen && <SendMail />}
    </div>
  );
}

export default App;
