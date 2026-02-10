import { supabaseAdmin } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("Webhook received");
    const payload = await req.json();
    const eventType = payload.type;

    if (eventType === "user.created") {
      const { id, email_addresses, first_name, last_name, image_url } = payload.data;
      const email = email_addresses[0]?.email_address;
      const name = `${first_name || ""} ${last_name || ""}`.trim();

      console.log("--------------------------------");
      console.log("WEBHOOK: user.created");
      console.log("User Data:", { id, email, name });
      
      const { data, error } = await supabaseAdmin.from("users").insert({
        user_id: id,
        email: email,
        name: name,
        image_url: image_url,
      }).select();

      if (error) {
        console.error("SUPABASE ERROR:", JSON.stringify(error, null, 2));
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      console.log("SUPABASE SUCCESS:", data);
      return NextResponse.json({ message: "User created" }, { status: 200 });
    }

    return NextResponse.json({ message: "Webhook received" }, { status: 200 });
  } catch (error) {
    console.error("WEBHOOK EXCEPTION:", error);
    return NextResponse.json({ error: "Error handling webhook" }, { status: 500 });
  }
}
