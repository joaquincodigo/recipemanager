import Link from "next/link";
import React from "react";

import { ClockIcon } from "@heroicons/react/24/outline";
import { TagIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartFilledIcon } from "@heroicons/react/24/solid";

export default function RecipeCard({ recipe, isLiked, onToggleLike }) {
  const handleLike = (e) => {
    e.preventDefault() // prevent the Link wrapper behavior
    onToggleLike()
  }

  return (
    <Link className="w-full" href={`/recipe/${recipe.id}`}>
      {/* IMAGE */}
      <div className="p-2 h-full shadow-md border rounded-lg bg-white">
        <div className="relative w-full aspect-[5/4] overflow-hidden rounded-lg mb-3">
          <img
            src={recipe.image}
            alt="Image"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* TITLE */}
        <h2 className="mb-0.5 font-semibold">
          {recipe?.title
            .split(" ") // Split the title into individual words
            .map(
              (word) =>
                // Check if the word is entirely uppercase (e.g., "BBQ")
                word === word.toUpperCase()
                  ? word // If it is, keep the word as is
                  : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Otherwise, capitalize the first letter and make the rest lowercase
            )
            .join(" ")}{" "}
          {/* Join the words back together into a single string */}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-sm mb-3">{recipe.description}</p>

        {/* FOOTER */}
        <div className="w-full flex items-center gap-5">
          {/* PREPARATION TIME */}
          <div className="flex">
            <ClockIcon className="w-6 h-6 text-slate-500 me-0.5" />
            <p className="font-semibold text-slate-500">
              {recipe.preparation_time}'
            </p>
          </div>

          {/* CATEGORY */}
          <div className="flex">
            <TagIcon className="w-6 h-6 text-slate-500 me-0.5" />
            <p className="font-semibold text-slate-500">{recipe.category}</p>
          </div>

          {/* LIKE BUTTON */}
          <div className="flex">
            {isLiked ? (
              <HeartFilledIcon
                onClick={handleLike}
                className="w-6 h-6 text-red-500 me-0.5 cursor-pointer"
              />
            ) : (
              <HeartIcon
                onClick={handleLike}
                className="w-6 h-6 text-slate-500 me-0.5 cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
