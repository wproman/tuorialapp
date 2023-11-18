import React from "react";
import { MobileSidebar } from "./mobile-sidebar";
import { NavbarRoutes } from "@/components/navbar-routes";

export const Navbar = () => {
  return (
    <div className="flex p-4 border-b h-full items-center bg-white shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};
