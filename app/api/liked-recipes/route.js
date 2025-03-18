import { supabase } from "@/lib/supabase";

export async function GET(request) {
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId");

  if (!userId) {
    return new Response(JSON.stringify({ error: "userId is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Fetch the user's liked recipe IDs
    const { data: userData, error: userError } = await supabase
      .from("demousers")
      .select("liked_recipes")
      .eq("id", userId)
      .single();

    if (userError) throw userError;

    const likedRecipeIds = userData?.liked_recipes || [];

    if (likedRecipeIds.length === 0) {
      return new Response(JSON.stringify({ likedRecipes: [] }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Fetch full recipe details
    const { data: recipes, error: recipesError } = await supabase
      .from("recipes")
      .select("id, title,image, description, preparation_time, category")
      .in("id", likedRecipeIds);

    if (recipesError) throw recipesError;

    return new Response(JSON.stringify({ likedRecipes: recipes }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching liked recipes:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
