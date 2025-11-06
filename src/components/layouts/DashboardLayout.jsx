import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Dashboard />

      <div className="flex-1 p-6 bg-gray-50 dark:bg-gray-900">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
