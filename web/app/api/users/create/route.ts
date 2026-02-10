import { supabaseAdmin } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { user_id, email, name } = await req.json();

    if (!user_id || !email) {
      return NextResponse.json(
        { error: "Missing user_id or email" },
        { status: 400 },
      );
    }

    // Check if user already exists
    const { data: existingUser } = await supabaseAdmin
      .from("users")
      .select("*")
      .eq("user_id", user_id)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 200 },
      );
    }

    // Create user
    const { data, error } = await supabaseAdmin
      .from("users")
      .insert({
        user_id,
        email,
        name: name || "",
      })
      .select();

    if (error) {
      console.error("Error creating user:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: "User created", data },
      { status: 200 },
    );
  } catch (error) {
    console.error("Exception:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 },
    );
  }
}
