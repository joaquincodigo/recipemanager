"use client";

import useLikedRecipes from "@/app/hooks/useLikedRecipes";
import { useAuth } from "@/app/context/AuthContext";
import RecipeCard from "@/app/components/RecipeCard";

export default function LikedRecipes() {
  const { userId } = useAuth();
  const { likedRecipes, error, loading } = useLikedRecipes(userId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h3>Liked Recipes:</h3>
      <ul>
        {likedRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isLiked={likedRecipes.contains}
            onToggleLike={() => toggleLike(recipe.id)}
          />
        ))}
      </ul>
    </div>
  );
}
