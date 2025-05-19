"use client";

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
    e.preventDefault(); // prevent the Link wrapper behavior
    onToggleLike();
  };

  return (
    <Link href={`/recipe/${recipe.id}`}>
      {/* IMAGE */}
      <div className="w-full md:w-[240px] md:h-[250] p-2 shadow-md border rounded-lg bg-white md:hover:shadow-[#7fc37e93]">
        <div className="relative w-full aspect-[5/4] overflow-hidden rounded-lg mb-3">
          <img
            src={
              recipe.image
                ? recipe.image
                : "images/recipe-placeholder-image.gif"
            }
            alt="Image"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* TITLE */}
        <h2 className="md:text-sm mb-0.5 font-semibold">
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
        <p className="md:text-sm md:min-h-12 mb-3 line-clamp-2">
          {recipe.description}
        </p>

        {/* FOOTER */}
        <div className="md:text-xs w-full flex justify-aroundx text-sm border-t md:min-h-8 md:pt-3 pb-1 ">
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
                  animate={animateLike ? { scale: 2, opacity: 0 } : {}}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  onAnimationComplete={() => {
                    setAnimateLike(false);
                  }}
                >
                  <HeartFilledIcon className="w-6 h-6 md:w-5 md:h-5 text-red-500 me-0.5 md:me-0 cursor-pointer" />
                </motion.div>
                <HeartFilledIcon className="w-6 h-6 md:w-5 md:h-5 text-red-500 me-0.5 cursor-pointer md:me-0" />
              </div>
            ) : (
              <HeartIcon className="w-6 h-6 md:w-5 md:h-5 text-slate-500 me-0.5 md:me-0 /cursor-pointer" />
            )}
            <p className="font-semibold text-slate-500 leading-none ms-0.5">
              Like
            </p>
          </button>

          {/* PREP TIME */}
          <div className="flex-1 flex justify-center items-center">
            <ClockIcon className="w-6 h-6 md:w-5 md:h-5 text-slate-500 me-1" />
            <p className="font-semibold text-slate-500 leading-none">
              {recipe.preparation_time}'
            </p>
          </div>

          {/* CATEGORY */}
          <div className="flex-1 flex justify-center items-center">
            <TagIcon className="w-6 h-6 md:w-5 md:h-5 text-slate-500 me-1" />
            <p className="font-semibold text-slate-500 leading-none">
              {/* Only first letter must be uppercase */}
              {recipe.category.charAt(0).toUpperCase() +
                recipe.category.slice(1).toLowerCase()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
