"use client";

import { useSearch } from "@/app/context/SearchContext";
import Footer from "@/app/components/Footer";
import usePagination from "@/app/hooks/usePagination";
import useFetchRecipes from "@/app/hooks/useFetchRecipes";
import PaginationControls from "@/app/components/pagination/PaginationControls";
import RecipeCard from "@/app/components/RecipeCard";
import Spinner from "@/app/components/Spinner";

export default function HomePage() {
  const { query } = useSearch();
  const { recipes, error } = useFetchRecipes(query);
  const {
    paginatedRecipes,
    currentPage,
    setCurrentPage,
    paginationControlsArray,
  } = usePagination(recipes);
  console.log(
    "HomePage received paginationControlsArray:",
    paginationControlsArray
  );

  const pageContents = paginatedRecipes[currentPage];

  return (
    <div className="p-3 h-screen">
      {pageContents ? (
        <>
          <div className="grid grid-cols-1 w-full gap-4 justify-items-center">
            {pageContents.map((recipe) => (
              <RecipeCard recipe={recipe} key={recipe.id} />
            ))}
          </div>

          <div className="flex justify-center align-items mt-6">
            <PaginationControls
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              paginationControlsArray={paginationControlsArray}
            />
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <Spinner />
        </div>
      )}

      <Footer />
    </div>
  );
}
