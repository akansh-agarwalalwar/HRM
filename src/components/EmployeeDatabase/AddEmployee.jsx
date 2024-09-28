import React, { useState } from "react";
import { IoCameraOutline } from "react-icons/io5";
function AddEmployee() {
  const [employeeData, setEmployeeData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    employeeID: "",
    phoneNumber: "",
    role: "",
    designation: "",
    joinedDate: "",
    officailEmail:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee Data:", employeeData);
  };

  return (
    <div className="w-[90%] flex flex-col overflow-hidden">
      <div className="flex justify-between mb-4">
        <p className="font-serif font-semibold text-gray-700 text-xl">
          / Employee Database / Add New Employee
        </p>
      </div>
      <div className="bg-white shadow-md p-6 rounded-lg flex justify-between gap-10">
        <div className="w-[35%] justify-between flex flex-col">
          <div className="flex flex-col justify-center items-center border-2 mb-10 rounded-lg">
            <div className="mt-10  border-5 border-dashed ">
              <div className="bg-gray-100 h-52 w-52 rounded-full justify-center flex items-center flex-col">
                <IoCameraOutline size={24} />
                <p className="text-l">Upload Photo</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-5 ">
              <div className="text-center text-sm">
                <p>Allowed Format</p>
                <p className="font-semibold">JPEG, PNG, or GIF</p>
              </div>
              <div className="text-center">
                <p>Max File Size</p>
                <p className="font-semibold">2 MB</p>
              </div>
            </div>
          </div>
          <button className="p-3 bg-cyan-500 text-white rounded-md">
            Add New Employee
          </button>
        </div>
        <div className="flex flex-col gap-6 w-full text-sm">
          <div className="flex flex-row gap-10">
            <div className="flex flex-col w-full">
              <label className="mb-2">First Name</label>
              <input
                name="firstName"
                value={employeeData.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
                className="border-2 p-3 rounded-xl"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2">Last Name</label>
              <input
                name="lastName"
                value={employeeData.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
                className="border-2 p-3 rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col w-full">
              <label className="mb-2">Email Address</label>
              <input
                name="emailAddress"
                value={employeeData.emailAddress}
                onChange={handleChange}
                placeholder="Enter Email Address"
                className="border-2 p-3 rounded-xl"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2">Phone Number</label>
              <input
                name="phoneNumber"
                value={employeeData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className="border-2 p-3 rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col w-full">
              <label className="mb-2">Gender</label>
              <select
                name="gender"
                value={employeeData.gender}
                onChange={handleChange}
                className="border-2 p-3 rounded-xl"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2">Phone Number</label>
              <input
                name="phoneNumber"
                value={employeeData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className="border-2 p-3 rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col w-full">
              <label className="mb-2">Role</label>
              <select
                name="role"
                value={employeeData.role}
                onChange={handleChange}
                className="border-2 p-3 rounded-xl"
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="staff">Staff</option>
                <option value="intern">Intern</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2">Designation</label>
              <select
                name="designation"
                value={employeeData.designation}
                onChange={handleChange}
                className="border-2 p-3 rounded-xl"
              >
                <option value="">Select Designation</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="analyst">Analyst</option>
                <option value="hr">HR</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col w-full">
              <label className="mb-2">Employee ID</label>
              <div className="w-full bg-gray-100 justify-center items-center h-12 flex rounded-lg border-2">
              <p>Employee ID</p>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2">Official email</label>
              <div className="w-full bg-gray-100 justify-center items-center h-12 flex rounded-lg border-2">
              <p>Officail Email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;