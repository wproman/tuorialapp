import { ReactNode } from "react";
import { Sidebar } from "./_components/Sidebar";
import { Navbar } from "./_components/navbar";

const dashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed z-10 inset-y-0">
        <Sidebar />
      </div>
      <main className="md:ml-56 h-full pt-[80px]"> {children}</main>
    </div>
  );
};

export default dashboardLayout;
