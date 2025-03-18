"use client"

import { useState, useEffect } from "react";

const useLikedRecipes = (userId) => {
  const [likedRecipes, setLikedRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    const fetchLikedRecipes = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/liked-recipes?userId=${userId}`);
        const data = await res.json();

        if (res.ok) {
          setLikedRecipes(data.likedRecipes);
        } else {
          setError(data.error || "An error occurred");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLikedRecipes();
  }, [userId]);

  return { likedRecipes, error, loading };
};

export default useLikedRecipes;
