"use client";

import { useSyncUserToSupabase } from "@/hooks/use-sync-user";

export function AppProvider({ children }: { children: React.ReactNode }) {
  useSyncUserToSupabase();
  return <>{children}</>;
}
