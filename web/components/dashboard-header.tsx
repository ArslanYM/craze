"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-white/40 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex-1">
          {/* Placeholder for search or other header content */}
        </div>
        <div className="flex items-center gap-4">
          <UserButton />
        </div>
      </div>
    </header>
  );
}
