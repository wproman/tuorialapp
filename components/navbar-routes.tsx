"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");

  return (
    <div className="flex gap-x-2 ml-auto items-center">
      <div>
        {isTeacherPage || isPlayerPage ? (
          <Link href="/">
            <Button variant="destructive">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : (
          <Link href="/teacher/courses">
            <Button size="sm" variant="link">
              TeacherMode
            </Button>
          </Link>
        )}
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
