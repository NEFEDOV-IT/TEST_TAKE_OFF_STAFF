import React from 'react';
import './App.scss';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound";
import AddContact from "./pages/AddContact/AddContact";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<CreateAccount/>}/>
        <Route path="/add-contact" element={<AddContact/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
