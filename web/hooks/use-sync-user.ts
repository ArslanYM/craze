import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

export function useSyncUserToSupabase() {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && user) {
      // Sync user to Supabase
      const syncUser = async () => {
        try {
          const response = await fetch("/api/users/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              user_id: user.id,
              email: user.primaryEmailAddress?.emailAddress,
              name: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
              image_url: user.imageUrl,
            }),
          });

          if (!response.ok) {
            console.error("Failed to sync user:", await response.text());
          } else {
            console.log("User synced to Supabase");
          }
        } catch (error) {
          console.error("Error syncing user:", error);
        }
      };

      syncUser();
    }
  }, [isLoaded, user]);
}
