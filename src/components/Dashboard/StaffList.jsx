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
      <div className="font-bold text-xl mb-4">Staff List</div>

      <div className="overflow-y-auto max-h-64 scrollbar-thin scrollbar-hidden hover:scrollbar-visible">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className=" text-left text-gray-700 font-semibold">
              <th className="px-4 py-2 text-sm">S/N</th>
              <th className="px-4 py-2 text-sm">Staff Name</th>
              <th className="px-4 py-2 text-sm">Staff Role</th>
              <th className="px-4 py-2 text-sm">Designation</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((staff, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 text-sm">{index + 1}</td>
                <td className="px-4 py-2 text-sm">{staff.name}</td>
                <td className="px-4 py-2 text-sm">{staff.role}</td>
                <td className="px-4 py-2 text-sm">{staff.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StaffList;
