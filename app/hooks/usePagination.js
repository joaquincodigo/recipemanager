import { useState } from "react";

const usePagination = (recipes) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 8;
  const paginationControlsMaxNumbers = 5;

  const paginateArray = (recipes, recipesPerPage) => {
    return recipes.reduce((acc, _, index) => {
      if (index % recipesPerPage === 0) {
        acc.push(recipes.slice(index, index + recipesPerPage));
      }
      return acc;
    }, []);
  };

  const allPages = paginateArray(recipes, recipesPerPage);

  const generatePaginationControlsArray = (allPages) => {
    if (allPages <= paginationControlsMaxNumbers) {
      return allPages;
    } else {
      return [
        allPages[0],
        allPages[1],
        allPages[2],
        "...",
        allPages[allPages.length - 1],
      ];
    }
  };

  const paginationControlsArray = generatePaginationControlsArray(allPages)

  return { paginationControlsArray, currentPage, setCurrentPage };
};

export default usePagination;
