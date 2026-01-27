"use client";
import { useState, useEffect } from "react";

export default function useLikeRecipe(userId) {
  const [likedRecipes, setLikedRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch liked recipes on mount
  useEffect(() => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    async function fetchLikedRecipes() {
      try {
        const response = await fetch(`/api/likes?userId=${userId}`);

        if (!response.ok) {
          throw new Error("Failed to fetch liked recipes");
        }
        
        const data = await response.json();
        setLikedRecipes(data.likedRecipes || []);
        setIsLoading(false);

      } catch (err) {
        console.error("Error fetching liked recipes:", err);
        setError(err.message);
        setIsLoading(false);
      }
    }

    fetchLikedRecipes();
  }, [userId]);

  // Toggle like function
  const toggleLike = async (recipeId) => {
    if (!userId) return;

    try {
      // Optimistic update
      const isCurrentlyLiked = likedRecipes.includes(recipeId);

      // Update local state immediately
      if (isCurrentlyLiked) {
        setLikedRecipes((prev) => prev.filter((id) => id !== recipeId));
      } else {
        setLikedRecipes((prev) => [...prev, recipeId]);
      }

      // Send update to server
      const response = await fetch("/api/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          recipeId,
          action: isCurrentlyLiked ? "unlike" : "like",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update like status");
      }

      // Server confirmed the update, no need to do anything else
    } catch (err) {
      console.error("Error toggling like:", err);

      // Revert optimistic update on error
      const isCurrentlyLiked = likedRecipes.includes(recipeId);
      if (isCurrentlyLiked) {
        setLikedRecipes((prev) => [...prev, recipeId]);
      } else {
        setLikedRecipes((prev) => prev.filter((id) => id !== recipeId));
      }

      setError(err.message);
    }
  };

  // Check if a recipe is liked
  const isLiked = (recipeId) => {
    return likedRecipes.includes(recipeId);
  };

  return { likedRecipes, isLiked, toggleLike, isLoading, error };
}
