import { useState } from "react";

const usePagination = (recipes) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 8;
  const paginationControlsMaxNumbers = 5;

  const paginateArray = (recipes, recipesPerPage) => {
    return recipes.reduce(
      (acc, _, index) => {
        if (index % recipesPerPage === 0) {
          acc.push(recipes.slice(index, index + recipesPerPage));
        }
        return acc;
      },
      [null] // Initialize with [null] so index 0 is null for easy operations in <PaginationControls/>. Pages start at 1.
    );
  };

  const paginatedRecipes = paginateArray(recipes, recipesPerPage);

  return { paginatedRecipes, currentPage, setCurrentPage, paginationControlsMaxNumbers };
};

export default usePagination;
