import { useState, useEffect } from "react";

const useFetchRecipes = (query) => {
  console.log("use fetch recipes called");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `/api/recipes${query ? `?q=${encodeURIComponent(query)}` : ""}`
        );

        if (!res.ok) throw new Error("Fetch failed");

        const data = await res.json();
        if (!ignore) setRecipes(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchRecipes();
    return () => (ignore = true);
  }, [query]);

  return { recipes, error, loading };
};

export default useFetchRecipes;
