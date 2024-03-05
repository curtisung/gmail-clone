import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import MailList from "./MailList";
import SendMail from "./SendMail";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
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
      <SendMail />
    </div>
  );
}

export default App;
