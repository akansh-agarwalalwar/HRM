import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import EmployeeDatabase from "./components/EmployeeDatabase/EmployeeDatabase";
import Jobposting from "./components/Recruitment/Jobposting";
import InterviewSchedul from "./components/Recruitment/InterviewSchedul";
import Onboarding from "./components/Recruitment/Onboarding";
import Navbar from "./components/Navbar/Navbar";
import AddEmployee from "./components/EmployeeDatabase/AddEmployee";

const App = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <Router>
      <div className="flex flex-col">
        <Navbar /> {/* Full-width Navbar */}
        <div className="flex flex-grow mt-16">
          <Sidebar onPageChange={handlePageChange} />
          <main className="flex-grow ml-72 p-4 bg-gray-100 overflow-y-auto h-screen">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employee-database" element={<EmployeeDatabase />} />
              <Route path="/new-hire" element={<Jobposting />} />
              <Route path="/documentation" element={<InterviewSchedul />} />
              <Route path="/orientation" element={<Onboarding />} />
              <Route path="/add-employee" element={<AddEmployee />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
