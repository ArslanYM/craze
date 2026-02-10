import { supabaseAdmin } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("Testing Supabase Admin connection...");
    
    // Attempt to insert a dummy user or just query to check connection
    // We'll try to list users to see if we have permissions, or just check if client is initialized
    
    // Let's try to fetch user with a non-existent ID just to check connection
    const { data, error } = await supabaseAdmin.from("users").select("count").limit(1);

    if (error) {
      console.error("Supabase Admin Test Error:", error);
      return NextResponse.json({ success: false, error: error.message, details: error }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Supabase Admin connection successful", data }, { status: 200 });
  } catch (error) {
    console.error("Supabase Admin Test Exception:", error);
    return NextResponse.json({ success: false, error: "Unexpected error" }, { status: 500 });
  }
}
