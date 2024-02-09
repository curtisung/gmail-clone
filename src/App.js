import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import MailList from "./MailList";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />

        <Routes>
          <Route path="/" element={<MailList/>}>
            
          </Route>
          
          <Route path="/mail" element={<Mail/>}>

          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
