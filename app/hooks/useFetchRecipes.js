import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const useFetchRecipes = (query) => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      // Set loading to true at the start of fetch
      setLoading(true);
      setError(null);

      try {
        let request = supabase.from("recipes").select("*");
        if (query) {
          request = request.or(
            `title.ilike.%${query}%,description.ilike.%${query}%`
          );
        }

        const { data, error } = await request;

        if (error) {
          setError(error.message);
          setRecipes([]);
        } else {
          setRecipes(data || []);
        }
      } catch (err) {
        setError(err.message);
        setRecipes([]);
      } finally {
        // Set loading to false when done
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query]);

  return { recipes, error, loading };
};

export default useFetchRecipes;
