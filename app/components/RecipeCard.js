import React from "react";

export default function RecipeCard({ recipe }) {
  return (
    <div className="p-2 w-full h-full border rounded-lg bg-white">

      <div className="relative w-full aspect-[5/4] overflow-hidden rounded-lg">
        <img src={recipe.image} alt="Image" className="absolute inset-0 h-full w-full object-cover" />
      </div>
      
      <h2
        className="mt-3 font-semibold">
        {recipe.title}
      </h2>

      <p className="text-sm mt-0.5">
        {recipe.description}
      </p>
    </div>
  );
}
