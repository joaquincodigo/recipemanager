import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const useFetchRecipes = (page) => {
  const [recipes, setRecipes] = useState([]);
  const [recipesError, setRecipesError] = useState(null);
  const [areRecipesLoading, setAreRecipesLoading] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      setAreRecipesLoading(true);
      setRecipesError(null);

      const itemsPerPage = 10;
      const start = (page - 1) * itemsPerPage;
      const end = page * itemsPerPage - 1;

      const { data, error } = await supabase
        .from("recipes")
        .select("*")
        .range(start, end);

      if (error) {
        setRecipesError(new Error("Failed to fetch recipes"));
        setRecipes([]);
      } else if (data.length === 0) {
        setRecipesError(new Error("No recipes found"));
      } else {
        setRecipes(data);
      }

      setAreRecipesLoading(false);
    };

    fetchRecipes();
  }, [page]);

  return { recipes, areRecipesLoading, recipesError };
};

export default useFetchRecipes;
