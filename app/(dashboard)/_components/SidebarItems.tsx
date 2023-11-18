"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SidebarItems = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  // const isActive = pathname === href;

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-black/60 text-sm font-[500] pl-6 transition-all hover:text-yellow-800 hover:bg-black/10 hover:transition duration-1000",
        isActive &&
          "text-[#312ECB] bg-yellow-300/20 hover:text-black hover:transition-all"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn(
            "text-yellow-600",

            isActive && "text-black"
          )}
        />
        {label}
      </div>
      <div
        className={cn(
          " h-full ml-auto opacity-0 border-2 border-[#312ECB] transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
};
