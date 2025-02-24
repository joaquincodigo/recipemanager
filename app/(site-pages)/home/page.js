"use client";

import { useEffect, useState } from "react";
import { useSearch } from "../../context/SearchContext";

import Footer from "@/app/components/Footer";
import RecipeCard from "@/app/components/RecipeCard";
import Spinner from "@/app/components/Spinner";
import PaginationControls from "@/app/components/pagination/PaginationControls";
import useFetchRecipes from "@/app/hooks/useFetchRecipes";
import usePagination from "@/app/hooks/usePagination";

export default function HomePage() {
  // const [recipes, setRecipes] = useState([]);
  // const [filteredRecipes, setFilteredRecipes] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const { query } = useSearch();

  // useEffect(() => {
  //   const loadRecipes = async () => {
  //     const response = await fetch("/api/recipes");
  //     const data = await response.json();
  //     setRecipes(data.recipes);
  //     setIsLoading(false);
  //   };
  //   loadRecipes();
  // }, []);

  // useEffect(() => {
  //   if (query == "") {
  //     setFilteredRecipes(recipes);
  //     return;
  //   }
  //   const cleanQuery = query
  //     .trim()
  //     .toLowerCase()
  //     .replace(/[^\w\s]/g, "");
  //   http: query
  //     ? setFilteredRecipes(
  //         recipes.filter((recipe) =>
  //           recipe.title?.toLowerCase().includes(cleanQuery)
  //         )
  //       )
  //     : setFilteredRecipes(recipes);
  // }, [query, recipes]);

  // TODO FIX SEARCH!

  const {currentPage} = usePagination()
  const { recipes, areRecipesLoading, recipesError } = useFetchRecipes(currentPage);

  return (
    <div className="p-3">
      <div className="grid grid-cols-1 w-full gap-4 justify-items-center">
        {areRecipesLoading ? (
          <div className="w-full min-h-screen flex items-center justify-center">
            <Spinner />
          </div>
        ) : (
          recipes.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.id} />
          ))
        )}
      </div>

      <div className="flex justify-center align-items mt-6">
        <PaginationControls />
      </div>

      <Footer />
    </div>
  );
}
