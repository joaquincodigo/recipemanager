"use client";

import { useEffect, useRef } from "react";
import useLikedRecipes from "@/app/hooks/useLikedRecipes";
import { useAuth } from "@/app/context/AuthContext";
import RecipeCard from "@/app/components/RecipeCard";
import Footer from "@/app/components/Footer";
import usePagination from "@/app/hooks/usePagination";
import PaginationControls from "@/app/components/pagination/PaginationControls";
import Spinner from "@/app/components/Spinner";
import useLikeRecipe from "@/app/hooks/useLikeRecipe";
import { XCircleIcon } from "@heroicons/react/24/outline";

export default function LikedRecipes() {
  const containerRef = useRef(null);
  const { userId } = useAuth();
  const { likedRecipes, error, loading } = useLikedRecipes(userId);
  const { isLiked, toggleLike } = useLikeRecipe(userId);

  useEffect(() => {
    console.log("Loading state changed:", loading);
  }, [loading]);

  const {
    paginatedRecipes,
    currentPage,
    setCurrentPage,
    paginationControlsArray,
    totalPages,
  } = usePagination(likedRecipes);
  const pageContents = paginatedRecipes[currentPage];

  useEffect(() => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  let content;

  // LOADING
  if (loading) {
    content = (
      <div className="flex justify-center items-center h-full">
        <Spinner />
      </div>
    );
    // ERROR
  } else if (error) {
    content = (
      <div className="flex justify-center items-center h-full">
        <p>An error has occurred.</p>
        <p>{error}</p>
      </div>
    );
    // EMPTY LIST
  } else if (likedRecipes.length === 0) {
    content = (
      <div className="flex flex-col justify-center items-center h-full pb-20">
        <XCircleIcon className="text-slate-600 w-10 h-10 mb-1" />
        <p className="text-lg text-slate-600">
          You didn't give a like to any recipe yet
        </p>
      </div>
    );
  } else {
    // LIKED RECIPES LIST
    content = (
      <>
        <div className="grid grid-cols-1 w-full gap-4 justify-items-center">
          {pageContents.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isLiked={isLiked(recipe.id)}
              onToggleLike={() => toggleLike(recipe.id)}
            />
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <PaginationControls
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            paginationControlsArray={paginationControlsArray}
            totalPages={totalPages}
          />
        </div>
      </>
    );
  }

  return (
    <div
      ref={containerRef}
      className="p-3 h-screen overflow-y-auto scroll-pt-16"
    >
      {content}
      <Footer />
    </div>
  );
}
