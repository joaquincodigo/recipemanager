import { cookies } from "next/headers";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Query user data
    const { data, error } = await supabase
      .from("demousers")
      .select("id, email, password") // Avoid exposing unnecessary data
      .eq("email", email)
      .eq("password", password) // (Still insecure but fine for a demo)
      .single();

    if (error || !data) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
      });
    }

    // Set a simple session cookie
    cookies().set("demoToken", data.id, { httpOnly: true, path: "/" });

    return new Response(JSON.stringify({ message: "Logged in" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Server error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
