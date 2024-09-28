import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

function Jobposting() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);

  // State to track toggle status for each row
  const [toggles, setToggles] = useState({});

  const handleToggle = (index) => {
    setToggles((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the specific index
    }));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Data = [
    {
      title: "ABC",
      tag: "Tag",
      link: "Link",
      employeeID: "123",
      icon: <FaRegUserCircle />,
      phoneNumber: "123456",
      role: "asdf",
      designation: "sdfgh",
      action: "Action",
    },
    {
      title: "XYZ",
      tag: "Tag",
      link: "Link",
      employeeID: "124",
      icon: <FaRegUserCircle />,
      phoneNumber: "654321",
      role: "qwer",
      designation: "tyuio",
      action: "Action",
    },
    {
      title: "DEF",
      tag: "Tag",
      link: "Link",
      employeeID: "125",
      icon: <FaRegUserCircle />,
      phoneNumber: "789012",
      role: "dev",
      designation: "engineer",
      action: "Action",
    },
    {
      title: "GHI",
      tag: "Tag",
      link: "Link",
      employeeID: "126",
      icon: <FaRegUserCircle />,
      phoneNumber: "345678",
      role: "admin",
      designation: "manager",
      action: "Action",
    },
    {
      title: "JKL",
      tag: "Tag",
      link: "Link",
      employeeID: "127",
      icon: <FaRegUserCircle />,
      phoneNumber: "901234",
      role: "sales",
      designation: "executive",
      action: "Action",
    },
    {
      title: "MNO",
      tag: "Tag",
      link: "Link",
      employeeID: "128",
      icon: <FaRegUserCircle />,
      phoneNumber: "567890",
      role: "hr",
      designation: "officer",
      action: "Action",
    },
  ];

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = Data.slice(indexOfFirstEntry, indexOfLastEntry);

  const handleSelectRow = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const totalPages = Math.ceil(Data.length / entriesPerPage);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <div className="w-[90%] flex flex-col p-7">
      <div className="flex justify-between">
        <p className="font-serif font-semibold text-gray-700 text-2xl">
          / Recruitment & Onboarding / Job Posting & Applicant Tracking
        </p>
      </div>

      <div className="flex flex-row justify-end items-center w-full">
        <div className="flex flex-row items-center gap-5">
          <button className="w-20 h-10 bg-cyan-500 text-white rounded-md">
            Filter
          </button>

          <div className="relative">
            <span className="absolute left-3 top-2 text-gray-400">
              <IoIosSearch size={24} />
            </span>
            <input
              type="text"
              placeholder="Search or type a command (CTRL+G)"
              className="pl-10 pr-4 py-2 w-96 bg-white rounded-full focus:outline-none"
            />
          </div>

          <div className="relative">
            <button onClick={toggleMenu} className="text-gray-500">
              <HiOutlineDotsVertical size={30} color="black" />
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute left-5 w-40 bg-white rounded-md shadow-lg z-10">
                <ul className="py-1">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Edit
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Delete
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Alter
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Employee Table */}
      <div className="mt-10">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700 font-semibold">
              <th className="px-4 py-2 flex gap-20">
                <input type="checkbox" />
                <th className="px-4 py-2">Title</th>
              </th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Title</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((employee, index) => (
              <tr
                key={indexOfFirstEntry + index}
                className=" text-gray-700 hover:bg-gray-50"
              >
                <td className="px-4 py-2 flex flex-row items-center gap-10">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(indexOfFirstEntry + index)}
                    onChange={() => handleSelectRow(indexOfFirstEntry + index)}
                  />
                  <FaPlus className="bg-blue-800 p-1" color="white" size={25} />
                  {employee.title}
                </td>
                <td className="px-4 py-2">
                  <span className="bg-gray-200 p-2 rounded-md">
                    {employee.tag}
                  </span>
                </td>
                <td className="px-4 py-2 text-blue-700">{employee.link}</td>
                <td className="px-4 py-2">
                  <div
                    onClick={() => handleToggle(indexOfFirstEntry + index)}
                    className={`relative w-14 h-8 flex items-center rounded-full cursor-pointer ${
                      toggles[indexOfFirstEntry + index]
                        ? "bg-blue-600"
                        : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                        toggles[indexOfFirstEntry + index]
                          ? "translate-x-6"
                          : "translate-x-0"
                      }`}
                    />
                  </div>
                </td>
                <td className="px-4 py-2 flex flex-row items-center gap-2">
                  <FaRegUserCircle />
                  {employee.phoneNumber}
                </td>
                <td className="px-4 py-2 text-blue-700">{employee.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination Controls */}
        <div className=" flex justify-around items-center mt-5 absolute bottom-10 w-[70%]">
          <div className="flex items-center gap-2">
            <p>
              Showing{" "}
              <span className="font-semibold">{indexOfFirstEntry + 1}</span> to{" "}
              <span className="font-semibold">
                {Math.min(indexOfLastEntry, Data.length)}
              </span>{" "}
              of <span className="font-semibold">{Data.length}</span> entries
            </p>
            <select
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(parseInt(e.target.value));
                setCurrentPage(1);
              }}
              className="p-2 bg-white border rounded"
            >
              <option value={5}>5/page</option>
              <option value={10}>10/page</option>
              <option value={20}>20/page</option>
            </select>
          </div>

          <div className="flex gap-2 items-center">
            <MdKeyboardArrowLeft />
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={` h-8 w-8 items-center justify-center rounded-md ${
                  currentPage === i + 1 ? "bg-gray-400" : ""
                }`}
              >
                {i + 1}
              </button>
            ))}
            <MdKeyboardArrowRight />

            <div className="flex items-center gap-5">
              <p>Go to Page</p>
              <div className="bg-white items-center flex justify-center h-8 w-8 rounded-sm">
                <p>2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobposting;
