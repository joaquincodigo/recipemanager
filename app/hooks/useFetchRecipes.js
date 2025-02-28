import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const useFetchRecipes = (query) => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setError(null); // Reset error before fetching

      let request = supabase.from("recipes").select("*");

      if (query) {
        // Remove extra wrapping parentheses
        request = request.or(`title.ilike.%${query}%,description.ilike.%${query}%`);
      }
      
      const { data, error } = await request;

      if (error) {
        setError(error.message);
      } else {
        setRecipes(data);
      }
    };

    fetchRecipes();
  }, [query]);

  return { recipes, error };
};

export default useFetchRecipes;
