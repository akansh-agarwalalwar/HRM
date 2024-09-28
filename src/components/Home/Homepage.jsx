import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Homepage = () => {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content with Sidebar */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar onPageChange={handlePageChange} />

        {/* Page Content */}
        <div className="flex-1 p-6">
          {currentPage === "Dashboard" && <h1>Dashboard Page</h1>}
          {currentPage === "Employee Database" && (
            <h1>Employee Database Page</h1>
          )}
          {currentPage === "New Hire" && <h1>New Hire Page</h1>}
          {currentPage === "Documentation" && <h1>Documentation Page</h1>}
          {currentPage === "Orientation" && <h1>Orientation Page</h1>}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
