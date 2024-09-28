import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faUsers,
  faBriefcase,
  faUserPlus,
  faFileAlt,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { PiArrowElbowDownRight } from "react-icons/pi";

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("/");

  const handleClick = (item) => {
    setActiveItem(item);
    navigate(item);
  };

  return (
    <aside className="bg-white w-64 min-h-screen fixed top-16 left-0 z-10">
      <ul className="py-4">
        <li
          className={`px-6 py-3 hover:bg-gray-100 flex items-center cursor-pointer ${activeItem === "/" ? "bg-gray-100 rounded-l-lg" : ""}`}
          onClick={() => handleClick("/")}
        >
          <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />
          <span className="text-sm font-semibold">Dashboard</span>
        </li>

        <li
          className={`px-6 py-3 hover:bg-gray-100 flex items-center cursor-pointer ${activeItem === "/employee-database" ? "bg-gray-100 rounded-l-lg" : ""}`}
          onClick={() => handleClick("/employee-database")}
        >
          <FontAwesomeIcon icon={faUsers} className="mr-3" />
          <span className="text-sm font-semibold">Employee Database</span>
        </li>

        <li className="px-6 py-3 hover:bg-gray-100 flex items-center">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faBriefcase} className="mr-3" />
            <span className="text-sm font-semibold">Recruitment & Onboarding</span>
          </div>
        </li>
        <ul className="ml-8 gap-4">
          <li
            className={`px-6 py-2 hover:bg-gray-100 flex items-center cursor-pointer ${activeItem === "/new-hire" ? "bg-gray-100 rounded-l-lg" : ""}`}
            onClick={() => handleClick("/new-hire")}
          >
            <PiArrowElbowDownRight size={36} className="mr-3" />
            <span className="text-sm" >Job Posting & Applicant Tracking</span>
          </li>
          <li
            className={`px-6 py-2 hover:bg-gray-100 flex items-center cursor-pointer ${activeItem === "/documentation" ? "bg-gray-100 rounded-l-lg" : ""}`}
            onClick={() => handleClick("/documentation")}
          >
            <PiArrowElbowDownRight size={24} className="mr-3" />
            <span className="text-sm">Interview Scheduling</span>
          </li>
          <li
            className={`px-6 py-2 hover:bg-gray-100 flex items-center cursor-pointer ${activeItem === "/orientation" ? "bg-gray-100 rounded-l-lg" : ""}`}
            onClick={() => handleClick("/orientation")}
          >
            <PiArrowElbowDownRight size={24} className="mr-3" />
            <span className="text-sm">Onboarding Process</span>
          </li>
        </ul>
      </ul>
    </aside>
  );
};

export default Sidebar;