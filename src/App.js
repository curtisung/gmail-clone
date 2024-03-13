import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import MailList from "./MailList";
import SendMail from "./SendMail";
import Login from "./Login";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {selectSendMessageIsOpen} from "./features/mailSlice";
import { selectUser } from "./features/userSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect( () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        const loginData = {
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
    
        dispatch(login(loginData));
      }
    })
  }, [])

  return (
      <BrowserRouter>
      {!user ? (
        <Login/>
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<MailList />} />
              <Route path="/mail" element={<Mail />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}   
      </BrowserRouter>
  );
}

export default App;
