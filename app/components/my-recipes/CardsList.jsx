"use client";
import { useState } from "react";
import RecipeCard from "../RecipeCard";
import useLikeRecipe from "@/app/hooks/useLikeRecipe";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

export default function CardsList({ recipes }) {
  const { userId } = useAuth();
  const router = useRouter();
  const { isLiked, toggleLike } = useLikeRecipe(userId);

  const handleLike = (recipeId) => {
    if (!userId) {  
      router.push("/login");
      return;
    }
    toggleLike(recipeId);
  };

  const styles = {
    list: "grid grid-cols-1 md:grid-cols-[repeat(4,250px)] gap-y-4 md:gap-x-2",
  };
  return (
    <ul className={styles.list}>
      {recipes.map((recipe) => (
        <li className={styles.item} key={recipe.id}>
          <RecipeCard
            recipe={recipe}
            isLiked={isLiked(recipe.id)}
            onToggleLike={() => handleLike(recipe.id)}
          />
        </li>
      ))}
    </ul>
  );
}
