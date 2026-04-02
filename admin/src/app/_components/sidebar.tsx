"use client";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar className="font-display">
      <SidebarHeader />
      <SidebarContent className="flex items-center gap-5">
        <img className="w-[165px] h-[44px]" src="../Logo.svg" alt="" />
        <Link
          href={"/foods"}
          className={` py-2 px-10 rounded-2xl  ${pathname === "/foods" ? "bg-black text-white" : ""}`}
        >
          Foods
        </Link>
        <Link
          href={"/orders"}
          className={` py-2 px-10 rounded-2xl  ${pathname === "/orders" ? "bg-black text-white" : ""}`}
        >
          Orders
        </Link>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
