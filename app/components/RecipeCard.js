import Link from "next/link";
import React from "react";
import { IoIosTimer } from "react-icons/io";

export default function RecipeCard({ recipe }) {
  return (
    <Link className="w-full" href={`/recipe/${recipe.id}`}>
      <div className="p-2 h-full border rounded-lg bg-white">
        <div className="relative w-full aspect-[5/4] overflow-hidden rounded-lg mb-3">
          <img
            src={recipe.image}
            alt="Image"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <h2 className="mb-0.5 font-semibold">{recipe.title}</h2>

        <p className="text-sm mb-2">{recipe.description}</p>

        <div className="bg-red-300 w-full">
          <IoIosTimer className="bg-blue-300 text-4xl text-slate-500" />
          <p className="bg-green-300">{recipe.preparation_time} minutes</p>
        </div>
      </div>
    </Link>
  );
}
