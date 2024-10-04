import Navbar from "@/components/common/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
import wavesImg from "@/assets/images/waves.svg";
export const MainLayout = () => {
  return (
    <div className="bg-[#2782FF] h-full relative">
      <Navbar />
      <div className="h-[calc(100vh-100px)]">
        <img
          src={wavesImg}
          alt="waves"
          className="absolute left-0 right-0 w-full"
        />
        <Outlet />
      </div>
    </div>
  );
};
