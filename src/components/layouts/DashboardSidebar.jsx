import React from "react";
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { HiChartPie } from "react-icons/hi";
import { VscHome } from "react-icons/vsc";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import LogoutIcon from "@/assets/svg/LogoutIcon";
import userPhoto from "/src/assets/userPhoto.png";
import { NavLink, Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="pr-4 w-fit h-full">
      <div className="w-fit h-full sidebar rounded-2xl flex flex-col justify-between">
        <Sidebar
          aria-label="Sidebar with multi-level dropdown example"
          className="text-center h-full">
          <SidebarItems className="h-full flex flex-col justify-between">
            {/* Top items */}
            <SidebarItemGroup className="border-none">
              <SidebarItem>
                <img
                  src={userPhoto}
                  alt="userPhoto.png"
                  className="w-14 m-auto"
                />
              </SidebarItem>
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `flex items-center justify-center mt-3 py-4 px-1.5 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-white text-[#5e5eee]"
                      : "text-white hover:bg-white hover:text-[#5e5eee]"
                  }`
                }>
                <VscHome className="text-4xl" />
              </NavLink>

              <NavLink
                to="chats"
                className={({ isActive }) =>
                  `flex items-center justify-center mt-3 py-4 px-1.5 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-white text-[#5e5eee]"
                      : "text-white hover:bg-white hover:text-[#5e5eee]"
                  }`
                }>
                <IoChatbubbleEllipsesOutline className="text-4xl" />
              </NavLink>

              <NavLink
                to="notifications"
                className={({ isActive }) =>
                  `flex items-center justify-center mt-3 py-4 px-1.5 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-white text-[#5e5eee]"
                      : "text-white hover:bg-white hover:text-[#5e5eee]"
                  }`
                }>
                <IoMdNotificationsOutline className="text-4xl" />
              </NavLink>

              <NavLink
                to="settings"
                className={({ isActive }) =>
                  `flex items-center justify-center mt-3 py-4 px-1.5 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-white text-[#5e5eee]"
                      : "text-white hover:bg-white hover:text-[#5e5eee]"
                  }`
                }>
                <FiSettings className="text-4xl" />
              </NavLink>
            </SidebarItemGroup>

            {/* Bottom item (logout) */}
            <SidebarItemGroup className="border-none">
              <Link to={"/"}>
                <SidebarItem>
                  <LogoutIcon />
                </SidebarItem>
              </Link>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </div>
    </div>
  );
};

export default DashboardSidebar;
