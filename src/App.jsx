import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/HRM/Navbar/Navbar";
import Homepage from "./components/HRM/Home/Homepage";
import AccountHome from "./components/AccountFinance/Home/AccountHome";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import PhoneLogin from "./components/Auth/PhoneLogin";
import AddingMulti from "./components/Auth/Multifactor/AddingMulti";

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/mfa" &&
        location.pathname !== "/ad" &&
        <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ad" element={<AddingMulti />} />
        <Route path="/mfa" element={<PhoneLogin />} />
        <Route path="/hrm/*" element={<Homepage />} />
        <Route path="/sales/*" element={<AccountHome />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
