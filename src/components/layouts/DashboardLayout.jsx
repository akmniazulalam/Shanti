import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <DashboardSidebar />

      <div className="flex-1 p-6 bg-gray-50 dark:bg-gray-900">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
