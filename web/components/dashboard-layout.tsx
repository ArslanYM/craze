"use client";

import React from "react";
import { Sidebar } from "./sidebar";
import { DashboardHeader } from "./dashboard-header";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 dark:from-black dark:via-purple-950/20 dark:to-blue-950/20">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-indigo-300 opacity-20 blur-[100px] dark:bg-indigo-900 -translate-x-1/2"></div>
        <div className="absolute right-0 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-purple-300 opacity-20 blur-[120px] dark:bg-purple-900"></div>
        <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-blue-300 opacity-20 blur-[100px] dark:bg-blue-900"></div>
      </div>
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <DashboardHeader />
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="container mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
