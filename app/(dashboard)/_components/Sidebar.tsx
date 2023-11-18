import { Logo } from "./Logo";
import { SidebarRoutes } from "./SidebarRoutes";

export const Sidebar = () => {
  return (
    <div
      className="h-full border-r flex flex-col z-50 bg-white
     overflow-y-auto shadow-sm"
    >
      <div className="p-7">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
