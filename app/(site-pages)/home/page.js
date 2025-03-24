"use client";

import { useEffect, useRef } from "react";
import { useSearch } from "@/app/context/SearchContext";
import Footer from "@/app/components/Footer";
import usePagination from "@/app/hooks/usePagination";
import useFetchRecipes from "@/app/hooks/useFetchRecipes";
import PaginationControls from "@/app/components/pagination/PaginationControls";
import RecipeCard from "@/app/components/RecipeCard";
import Spinner from "@/app/components/Spinner";
import { useAuth } from "@/app/context/AuthContext";
import useLikeRecipe from "@/app/hooks/useLikeRecipe";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const containerRef = useRef(null);
  const { query } = useSearch();
  const { recipes, error, loading } = useFetchRecipes(query);
  const router = useRouter();
  const { userId } = useAuth();
  const { isLiked, toggleLike } = useLikeRecipe(userId);
  const [animateLike, setAnimateLike] = useState(false)
   

  const {
    paginatedRecipes,
    currentPage,
    setCurrentPage,
    paginationControlsArray,
    totalPages,
  } = usePagination(recipes);

  const handleLike = (recipeId) => {
    if (!userId) {
      router.push("/login");
      return;
    }
    toggleLike(recipeId);
  };

  useEffect(() => {
    // Scroll the container to top on page change
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Determine what to render
  let content;
  if (loading) {
    content = (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  } else if (recipes.length === 0) {
    content = (
      <div className="flex flex-col justify-center items-center h-full">
        <XCircleIcon className="text-slate-600 w-10 h-10 mb-1" />
        <p className="text-lg text-slate-600">No matches found</p>
      </div>
    );
  } else {
    const pageContents = paginatedRecipes[currentPage];
    content = (
      <>
        <div className="grid grid-cols-1 w-full gap-4 justify-items-center">
          {pageContents.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isLiked={isLiked(recipe.id)}
              onToggleLike={() => handleLike(recipe.id)}
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
    <div ref={containerRef} className="p-3">
      {content}
      <Footer />
    </div>
  );
}
