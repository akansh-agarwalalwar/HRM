import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBriefcase,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import StaffList from "./StaffList";
import PaymentVoucher from "./PaymentVoucher";

function Dashboard() {
  const Data = [
    {
      number: "120",
      title: "Total Staff",
      subtitle: "12 percent data",
      icons: <FontAwesomeIcon icon={faUsers} size="lg" />,
      color: "bg-blue-100",
    },
    {
      number: "75",
      title: "Total Applications",
      subtitle: "45 percent progress",
      icons: <FontAwesomeIcon icon={faBriefcase} size="lg" />,
      color: "bg-blue-100",
    },
    {
      number: "50",
      title: "Open Positions",
      icons: <FontAwesomeIcon icon={faChartBar} size="lg" />,
      color: "bg-green-100",
    },
  ];

  return (
    <div className="w-full p-2">
      <div className="flex justify-between gap-8">
        {Data.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-around p-6 bg-white rounded-xl border border-gray-200 shadow-md transition-transform duration-200 ease-in-out transform hover:scale-105 w-full"
          >
            <div className="flex items-center justify-center w-1/4 mb-2">
              <span className="text-2xl font-bold bg-gray-200 p-3 rounded-xl">
                {item.number}
              </span>
            </div>
            <div className="flex flex-col w-2/4">
              <h3 className="text-l font-bold text-gray-900 ">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500">{item.subtitle}</p>
            </div>
            <div
              className={`w-1/6 ${item.color} p-2 rounded-xl flex items-center justify-center`}
            >
              {item.icons}
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-[90%] justify-around mt-10 gap-10">
      <StaffList />
      <PaymentVoucher />
      </div>
    </div>
  );
}

export default Dashboard;
