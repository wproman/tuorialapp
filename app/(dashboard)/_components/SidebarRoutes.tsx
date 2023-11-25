"use client";
import { Layout, Compass, BarChart, List } from "lucide-react";
import { SidebarItems } from "./SidebarItems";
import { usePathname } from "next/navigation";


const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  { icon: Compass, label: "Browse", href: "/search" },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  { icon: BarChart, label: "Analytics", href: "/teacher/analytics" },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();
  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;
  return (
    <div className="flex flex-col w-full h-full">
      {routes.map((route) => (
        <SidebarItems
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
