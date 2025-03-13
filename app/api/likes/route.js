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
    const { data, error } = await supabase
      .from("demousers")
      .select("liked_recipes")
      .eq("id", userId)
      .single();

    if (error) throw error;

    return new Response(
      JSON.stringify({ likedRecipes: data?.liked_recipes || [] }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error fetching liked recipes:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request) {
  const body = await request.json();
  const { userId, recipeId, action } = body;

  console.log("IM POST HANDLER IN API");
  console.log("USER ID, RECIPE ID, ACTION ARE:", userId, recipeId, action);

  if (!userId || !recipeId || !action) {
    return new Response(
      JSON.stringify({ error: "userId, recipeId, and action are required" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    // Get current liked recipes
    const { data: userData, error: fetchError } = await supabase
      .from("demousers")
      .select("liked_recipes")
      .eq("id", userId)
      .single();

    if (fetchError) throw fetchError;

    // Update the liked_recipes array
    let liked_recipes = userData?.liked_recipes || [];

    if (action === "like" && !liked_recipes.includes(recipeId)) {
      liked_recipes.push(recipeId);
    } else if (action === "unlike") {
      liked_recipes = liked_recipes.filter((id) => id !== recipeId);
    }

    // Save the updated array
    const { error: updateError } = await supabase
      .from("demousers")
      .update({ liked_recipes })
      .eq("id", userId);

    if (updateError) throw updateError;

    return new Response(
      JSON.stringify({ success: true, likedRecipes: liked_recipes }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error updating liked recipes:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
