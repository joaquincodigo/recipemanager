import { useState } from "react";

const usePagination = (recipes) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 8;
  const paginationControlsMaxNumbers = 5;

  const paginateArray = (recipes, recipesPerPage) => {
    if (!recipes.length) return [];

    return recipes.reduce((acc, _, index) => {
      if (index % recipesPerPage === 0) {
        acc.push(recipes.slice(index, index + recipesPerPage));
      }
      return acc;
    }, []);
  };

  const paginatedRecipes = paginateArray(recipes, recipesPerPage);

  // Add a null at the beginning if there are pages to match your 1-indexed approach
  const adjustedPaginatedRecipes =
    paginatedRecipes.length > 0 ? [null, ...paginatedRecipes] : [];

  const getPaginationControlsArray = (totalPages, currentPage, maxVisible) => {

    // Safety checks
    if (totalPages === undefined || totalPages === null || totalPages <= 0) {
      console.log("Total pages invalid:", totalPages);
      return [];
    }

    if (currentPage === undefined || currentPage === null || currentPage <= 0) {
      console.log("Current page invalid:", currentPage);
      return [];
    }

    if (maxVisible === undefined || maxVisible === null || maxVisible <= 0) {
      console.log("Max visible invalid:", maxVisible);
      return [];
    }

    if (totalPages <= maxVisible) {
      const result = Array.from({ length: totalPages }, (_, i) => i + 1);
      return result;
    }

    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end === totalPages) {
      start = Math.max(1, totalPages - maxVisible + 1);
    }

    const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

    if (pages.length > 0 && pages[pages.length - 1] < totalPages) {
      // Add ellipsis if needed, but check array bounds first
      if (pages.length >= 2 && pages[pages.length - 2] !== totalPages - 1) {
        pages.splice(-1, 0, null);
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const paginationControlsArray = getPaginationControlsArray(
    paginatedRecipes.length,
    currentPage,
    paginationControlsMaxNumbers
  );

  const totalPages = paginatedRecipes.length


  return {
    paginatedRecipes: adjustedPaginatedRecipes,
    currentPage,
    setCurrentPage,
    paginationControlsArray,
    // totalPages
  };
};

export default usePagination;
