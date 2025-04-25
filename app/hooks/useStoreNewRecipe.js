import { supabase } from "@/lib/supabase";

const useStoreNewrecipe = () => {
  const isValidData = (data) => {
    const {
      title,
      description,
      difficulty,
      category,
      ingredients,
      preparation_steps,
      servings,
      author,
    } = data;

    if (typeof title !== "string" || title.trim() === "") return false;

    if (typeof description !== "string" || description.trim() === "")
      return false;

    if (!["easy", "medium", "hard"].includes(difficulty)) return false;

    if (typeof category !== "string" || category.trim() === "") return false;

    if (
      !Array.isArray(ingredients) ||
      ingredients.length === 0 ||
      !ingredients.every((i) => typeof i === "string")
    )
      return false;

    if (
      !Array.isArray(preparation_steps) ||
      preparation_steps.length === 0 ||
      !preparation_steps.every((s) => typeof s === "string")
    )
      return false;

    if (!Number.isInteger(servings) || servings <= 0) return false;

    if (typeof author !== "string" || author.trim() === "") return false;

    return true;
  };

  const recordNewRecipe = async (formData) => {
    if (!isValidData(formData)) {
      return { success: false, error: "Invalid form data" };
    }

    const { error } = await supabase.from("recipes").insert([formData]);
    return { success: !error, error };
  };

  return { recordNewRecipe };
};

export default useStoreNewrecipe;
