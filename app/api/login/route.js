import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Query user data
    const { data, error } = await supabase
      .from("demousers")
      .select("id, email, password")
      .eq("email", email)
      .eq("password", password)
      .single();

    if (error || !data) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
      });
    }

    // Send the user ID back to the client instead of setting a cookie here
    return new Response(JSON.stringify({ message: "Logged in", userId: data.id }), {
      status: 200,
    });
  } catch (error) {
    console.error("Server error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}


