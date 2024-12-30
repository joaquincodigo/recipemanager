import Link from "next/link";
import React from "react";
import { IoIosTimer } from "react-icons/io";
import { BiCategory } from "react-icons/bi";

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

        {/* DESCRIPTION */}
        <h2 className="mb-0.5 font-semibold">{recipe.title}</h2>
        <p className="text-sm mb-3">{recipe.description}</p>

        {/* FOOTER */}
        <div className="w-full flex items-center gap-5">
          {/* PREPARATION TIME */}
          <div className="flex">
            <IoIosTimer className="text-2xl text-slate-500 me-0.5" />
            <p className="font-semibold text-slate-500">
              {recipe.preparation_time}'
            </p>
          </div>

          {/* CATEGORY */}
          <div className="flex">
            <BiCategory className="text-slate-500 font-thin text-2xl me-0.5" />
            <p className="font-semibold text-slate-500">
              {recipe.category}
            </p>
          </div>


        </div>
      </div>
    </Link>
  );
}
