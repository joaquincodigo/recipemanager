import Link from "next/link";
import React from "react";

import { ClockIcon } from "@heroicons/react/24/outline";
import { TagIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartFilledIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RecipeCard({ recipe, isLiked, onToggleLike }) {
  const [animateLike, setAnimateLike] = useState(false);

  const handleLike = (e) => {
    setAnimateLike(true);
    console.log("im clicked");
    e.preventDefault(); // prevent the Link wrapper behavior
    onToggleLike();
  };

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
        <p className="text mb-3">{recipe.description}</p>

        {/* FOOTER */}
        <div className="w-full flex justify-aroundx text-sm border-t pt-3 pb-1">
          {/* LIKE */}
          <button
            className="flex-1 flex justify-center items-center"
            onClick={handleLike}
          >
            {isLiked ? (
              <div className="relative">
                <motion.div
                  className="absolute inset-0 items-center justify-center"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  onAnimationComplete={() => {
                    setAnimateLike(false);
                  }}
                >
                  <HeartFilledIcon className="w-6 h-6 text-red-500 me-0.5 cursor-pointer" />
                </motion.div>
                <HeartFilledIcon className="w-6 h-6 text-red-500 me-0.5 cursor-pointer" />
              </div>
            ) : (
              <HeartIcon className="w-6 h-6 text-slate-500 me-0.5 cursor-pointer" />
            )}
            <p className="font-semibold text-slate-500 leading-none ms-2">
              Like
            </p>
          </button>

          {/* PREP TIME */}
          <div className="flex-1 flex justify-center items-center">
            <ClockIcon className="w-6 h-6 text-slate-500 me-1" />
            <p className="font-semibold text-slate-500 leading-none">
              {recipe.preparation_time}'
            </p>
          </div>

          {/* CATEGORY */}
          <div className="flex-1 flex justify-center items-center">
            <TagIcon className="w-6 h-6 text-slate-500 me-1" />
            <p className="font-semibold text-slate-500 leading-none">
              {recipe.category}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
