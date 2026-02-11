"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  PlayCircle,
  BookOpen,
  CreditCard,
  Settings,
  Plus,
  LogOut,
  Crown,
  User,
  Film,
} from "lucide-react";

const navItems = [
  { label: "Series", icon: Film, href: "/dashboard" },
  { label: "Videos", icon: PlayCircle, href: "/dashboard/videos" },
  { label: "Guides", icon: BookOpen, href: "/dashboard/guides" },
  { label: "Billing", icon: CreditCard, href: "/dashboard/billing" },
  { label: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }
    return pathname.startsWith(href);
  };

  return (
    <aside
      className={`flex flex-col border-r border-white/20 bg-white/30 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Header Section with Logo and App Name */}
      <div className="border-b border-white/20 p-6 dark:border-white/10">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <Image
              src="/user-logo.png"
              alt="VidMaxx Logo"
              width={40}
              height={40}
              className="h-full w-full object-cover"
              onError={() => {
                // Fallback if image doesn't exist
              }}
            />
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                Craze
              </h1>
            </div>
          )}
        </div>

        {/* Create New Series Button */}
        <Button
          asChild
          className={`mt-4 w-full gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/20 border-0 transition-all hover:scale-105 ${
            isCollapsed ? "w-full" : ""
          }`}
        >
          <Link href="/dashboard/create">
            <Plus className="h-4 w-4" />
            {!isCollapsed && " Create New Series"}
          </Link>
        </Button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-2 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-all ${
                active
                  ? "bg-gradient-to-r from-indigo-500/30 to-purple-500/30 text-indigo-600 dark:text-indigo-300 border border-indigo-500/30 shadow-lg shadow-indigo-500/10 dark:border-indigo-400/30"
                  : "text-gray-600 hover:bg-white/40 dark:text-gray-400 dark:hover:bg-white/10 transition-all"
              }`}
              title={item.label}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer Section with Upgrade and Profile */}
      <div className="border-t border-white/20 p-4 space-y-2 dark:border-white/10">
        <Button
          className={`w-full gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg shadow-amber-500/20 border-0 transition-all hover:scale-105 ${
            isCollapsed ? "p-0 w-full flex justify-center" : ""
          }`}
          title="Upgrade"
        >
          <Crown className="h-4 w-4" />
          {!isCollapsed && "Upgrade"}
        </Button>

        <Button
          variant="outline"
          className={`w-full gap-2 border-white/20 hover:bg-white/20 dark:border-white/10 dark:hover:bg-white/10 transition-all ${
            isCollapsed ? "p-0 w-full flex justify-center" : ""
          }`}
          title="Profile Settings"
        >
          <User className="h-4 w-4" />
          {!isCollapsed && "Profile"}
        </Button>
      </div>
    </aside>
  );
}
