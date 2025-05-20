import { cookies } from "next/headers";
import { supabase } from "@/lib/supabase";
import CardsList from "@/app/components/my-recipes/CardsList";

async function getUserRecipes() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) throw new Error("No user ID in cookie");

  const { data, error } = await supabase
    .from("recipes")
    .select("*")
    .eq("author", userId);

  if (error) throw new Error("Failed to fetch recipes");

  return data;
}

const styles = {
  container: "flex flex-col w-screen px-3 md:w-max  md:mx-auto",
  heading: "text-xl font-bold mt-3",
  subheading: "text-lg mb-5",
};

export default async function RecipesPage() {
  const recipes = await getUserRecipes();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Your Recipes</h1>
      <h2 className={styles.subheading}>Explore your own creations</h2>
      <CardsList recipes={recipes} />
    </div>
  );
}
