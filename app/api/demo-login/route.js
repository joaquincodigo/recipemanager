import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";

export async function POST(req) {
  try {
    // Parse request body
    const { email, password } = await req.json();
    console.log("Login attempt:", email, password);

    // Initialize Supabase client
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_KEY
    );

    // Query the user
    const { data, error } = await supabase
      .from("demousers")
      .select("*")
      .eq("email", email)
      .eq("password", password)
      .single();

    console.log("Query result:", { data, error });

    // Handle query errors or invalid credentials
    if (error || !data) {
      return Response.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Set cookie and respond
    cookies().set("demoToken", data.id, { httpOnly: true, path: "/" });
    return Response.json({ message: "Logged in" });
    
  } catch (error) {
    // Log and handle unexpected errors
    console.error("Server error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}