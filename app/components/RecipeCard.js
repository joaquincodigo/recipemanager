import React from "react";

export default function RecipeCard({ recipe }) {
  return (
    <div className="p-4 border rounded-lg bg-red-400">
      <h2 className="text-xl font-semibold">{recipe.title}</h2>
      <p>{recipe.description}</p>
      <img src={recipe.image} />
    </div>
  );
}
