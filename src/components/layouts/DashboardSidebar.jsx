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
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (

      <div className="p-4">
        <div className="w-fit h-[95vh] sidebar rounded-2xl flex flex-col justify-between">
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
                <Link to={"/dashboard"}>
                  <SidebarItem className="m-auto group hover:bg-white hover:text-[#5e5eee] mt-3 pb-4 px-1.5 pt-1 rounded-2xl transition-all duration-300">
                    <VscHome className="text-white m-auto text-4xl mt-4 group-hover:text-[#5e5eee]" />
                  </SidebarItem>
                </Link>
                <Link to={"chats"}>
                  <SidebarItem className="m-auto group hover:bg-white hover:text-[#5e5eee] mt-3 pb-4 px-1.5 pt-1 rounded-2xl transition-all duration-300">
                    <IoChatbubbleEllipsesOutline className="text-white m-auto text-4xl mt-4 group-hover:text-[#5e5eee]" />
                  </SidebarItem>
                </Link>
                <Link to={"notifications"}>
                  <SidebarItem className="m-auto group hover:bg-white hover:text-[#5e5eee] mt-3 pb-4 px-1.5 pt-1 rounded-2xl transition-all duration-300">
                    <IoMdNotificationsOutline className="text-white m-auto text-4xl mt-4 group-hover:text-[#5e5eee]" />
                  </SidebarItem>
                </Link>
                <Link to={"settings"}>
                  <SidebarItem className="m-auto group hover:bg-white hover:text-[#5e5eee] mt-3 pb-4 px-1.5 pt-1 rounded-2xl transition-all duration-300">
                    <FiSettings className="text-white m-auto text-4xl mt-4 group-hover:text-[#5e5eee]" />
                  </SidebarItem>
                </Link>
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
