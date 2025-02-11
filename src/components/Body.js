import React from "react";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const Body = () => {
 
  const location = useLocation();
  const isWatchRoute = location.pathname === '/watch';
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="flex w-full p-0 m-0" style={{height:'89vh'}}>
      <div className={`transition-all duration-300 ${!isWatchRoute ? isMenuOpen ? "w-[260px]" : "w-0" : "w-0"}`}>
        <Sidebar />
      </div>
      <div className="flex-grow overflow-y-scroll scrollbar-hide">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
