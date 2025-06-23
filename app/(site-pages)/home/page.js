"use client";

import { useEffect, useState, useRef } from "react";
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
import NonLoggedModal from "@/app/components/modals/NonLoggedModal";
import LoggedModal from "@/app/components/modals/LoggedModal";

export default function HomePage() {
  const { query } = useSearch();
  const { recipes, error, loading } = useFetchRecipes(query);
  const router = useRouter();
  const { userId, loggedIn } = useAuth();
  const { isLiked, toggleLike } = useLikeRecipe(userId);
  const {
    paginatedRecipes,
    currentPage,
    setCurrentPage,
    paginationControlsArray,
    totalPages,
  } = usePagination(recipes);
  const [showNonLoggedModal, setShowNonLoggedModal] = useState(false);
  const [showLoggedModal, setShowLoggedModal] = useState(false);

  // Handling displaying of NON-LOGGED modal. It must be shown only once per session.
  useEffect(() => {
    if (!loggedIn) {
      const hasSeen = sessionStorage.getItem("seenNonLoggedModal");
      if (!hasSeen) {
        setShowNonLoggedModal(true);
        sessionStorage.setItem("seenNonLoggedModal", "true");
      }
    }
  }, [loggedIn]);

  // Handling displaying of LOGGED modal. It must be shown only once per session.
  useEffect(() => {
    if (loggedIn) {
      const hasSeen = sessionStorage.getItem("seenLoggedModal");
      if (!hasSeen) {
        setShowLoggedModal(true);
        sessionStorage.setItem("seenLoggedModal", "true");
      }
    }
  }, [loggedIn]);

  // Scroll to the top of the page when the user switches pages
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const handleLike = (recipeId) => {
    if (!userId) {
      router.push("/login");
      return;
    }
    toggleLike(recipeId);
  };

  let content;

  // LOADING
  if (loading) {
    content = (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  // NO MATCHES
  else if (recipes.length === 0) {
    content = (
      <div className="flex flex-col justify-center items-center h-full">
        <XCircleIcon className="text-slate-600 w-10 h-10 mb-1" />
        <p className="text-lg text-slate-600">No matches found</p>
      </div>
    );
  }

  // NORMAL RESULTS
  else {
    const pageContents = paginatedRecipes[currentPage];
    content = (
      <>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(4,250px)] gap-y-4 md:gap-x-2">
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
    <div className="mt-3 flex-grow w-screen md:w-max px-3 md:mx-auto">
      {!loggedIn && showNonLoggedModal && <NonLoggedModal />}
      {loggedIn && showLoggedModal && <LoggedModal/>}

      {content}
    </div>
  );
}
