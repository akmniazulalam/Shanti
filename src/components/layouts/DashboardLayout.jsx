import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 h-screen p-4">
        <DashboardSidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-[130px] p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
