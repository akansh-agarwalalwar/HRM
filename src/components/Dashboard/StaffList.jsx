import React from "react";

function StaffList() {
  const Data = [
    {
      name: "John Doe",
      role: "Manager",
      designation: "Senior Manager",
    },
    {
      name: "Jane Smith",
      role: "Assistant",
      designation: "Junior Assistant",
    },
    {
      name: "Michael Johnson",
      role: "Supervisor",
      designation: "Operations Supervisor",
    },
    {
      name: "Emily Davis",
      role: "HR",
      designation: "HR Manager",
    },
    {
      name: "John Doe",
      role: "Manager",
      designation: "Senior Manager",
    },
    {
      name: "Jane Smith",
      role: "Assistant",
      designation: "Junior Assistant",
    },
    {
      name: "Michael Johnson",
      role: "Supervisor",
      designation: "Operations Supervisor",
    },
    {
      name: "Emily Davis",
      role: "HR",
      designation: "HR Manager",
    },
  ];

  return (
    <div className="flex flex-col w-[50%] bg-white shadow-md rounded-xl p-4">
      <div className="font-bold text-2xl mb-4">Staff List</div>

      {/* Scrollable container with hidden scrollbar */}
      <div className="overflow-y-auto max-h-64 scrollbar-thin scrollbar-hidden hover:scrollbar-visible">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className=" text-left text-gray-700 font-semibold">
              <th className="px-4 py-2">S/N</th>
              <th className="px-4 py-2">Staff Name</th>
              <th className="px-4 py-2">Staff Role</th>
              <th className="px-4 py-2">Designation</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((staff, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{staff.name}</td>
                <td className="px-4 py-2">{staff.role}</td>
                <td className="px-4 py-2">{staff.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StaffList;
