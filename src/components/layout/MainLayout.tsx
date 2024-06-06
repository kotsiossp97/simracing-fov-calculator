import TopBar from "@/components/layout/TopBar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <div className="px-20 p-5 flex-1 max-md:px-5">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
