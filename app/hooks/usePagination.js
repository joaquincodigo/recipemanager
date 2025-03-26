import { useState, useEffect } from "react";

const usePagination = (recipes) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 8;
  const paginationControlsMaxNumbers = 5;

  // RESET PAGE TO 1
  useEffect(() => {
    setCurrentPage(1);
  }, [recipes]);
 


  // recipes IS UNDEFINED 
  if (recipes === undefined) {
    return {
      currentPage,
      setCurrentPage,
      paginationControlsArray: [],
      totalPages: 0,
      paginatedRecipes: undefined,
      isLoading: true,
      isEmpty: false
    };
  }
  
  // recipes IS EMPTY 
  if (recipes.length === 0) {
    return {
      currentPage,
      setCurrentPage,
      paginationControlsArray: [],
      totalPages: 0,
      paginatedRecipes: [null, []], // 1-indexed
      isLoading: false,
      isEmpty: true
    };
  }
  
  // recipes HAS RECIPES 
  const paginateArray = (recipes, recipesPerPage) => {
    return recipes.reduce((acc, _, index) => {
      if (index % recipesPerPage === 0) {
        acc.push(recipes.slice(index, index + recipesPerPage));
      }
      return acc;
    }, []);
  };
  
  const paginatedRecipes = paginateArray(recipes, recipesPerPage);
  const adjustedPaginatedRecipes = [null, ...paginatedRecipes]; // 1-indexed
  
  const getPaginationControlsArray = (totalPages, currentPage, maxVisible) => {
    if (totalPages <= 0 || currentPage <= 0 || maxVisible <= 0) return [];
    if (totalPages <= maxVisible)
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);
    if (end === totalPages) {
      start = Math.max(1, totalPages - maxVisible + 1);
    }
    const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);
    if (pages.length && pages[pages.length - 1] < totalPages) {
      if (pages.length >= 2 && pages[pages.length - 2] !== totalPages - 1)
        pages.splice(-1, 0, null);
      pages.push(totalPages);
    }
    return pages;
  };
  
  const paginationControlsArray = getPaginationControlsArray(
    paginatedRecipes.length,
    currentPage,
    paginationControlsMaxNumbers
  );
  
  const totalPages = paginatedRecipes.length;
  
  return {
    currentPage,
    setCurrentPage,
    paginationControlsArray,
    totalPages,
    paginatedRecipes: adjustedPaginatedRecipes,
    isLoading: false,
    isEmpty: false
  };
};

export default usePagination;