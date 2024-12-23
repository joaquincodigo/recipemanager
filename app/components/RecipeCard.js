import React from "react";
import { IoIosTimer } from "react-icons/io";


export default function RecipeCard({ recipe }) {
  return (
    <div className="p-2 w-full h-full border rounded-lg bg-white">

      <div className="relative w-full aspect-[5/4] overflow-hidden rounded-lg mb-3">
        <img src={recipe.image} alt="Image" className="absolute inset-0 h-full w-full object-cover" />
      </div>
      
      <h2
        className="mb-0.5 font-semibold">
        {recipe.title}
      </h2>

      <p className="text-sm mb-2">
        {recipe.description}
      </p>

      <div>
        {/* {recipe-preptime} */}
        <IoIosTimer className="text-4xl text-slate-500" />
      </div>

    </div>
  );
}
