import PaginationArrow from "./PaginationArrow";
import PaginationNumber from "./PaginationNumber";
// TESTING-TESTING-TESTING-TESTING-TESTING-TESTING
import { useEffect } from "react";
// TESTING-TESTING-TESTING-TESTING-TESTING-TESTING

export default function PaginationControls({
  paginatedRecipes,
  currentPage,
  setCurrentPage,
  paginationControlsMaxNumbers,
}) {
  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  return (
    <div className="flex gap-x-1">
      <PaginationArrow direction="left" />
      {paginatedRecipes <= paginationControlsMaxNumbers ? (
        paginatedRecipes.map((_, index) => (
          <PaginationNumber key={index} number={index} />
        ))
      ) : (
        <>
          <PaginationNumber
            number={currentPage}
            onClick={() => {
              setCurrentPage(currentPage);
            }}
          />
          <PaginationNumber
            number={currentPage + 1}
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          />
          <PaginationNumber
            number={currentPage + 2}
            onClick={() => {
              setCurrentPage(currentPage);
            }}
          />
          <PaginationNumber />
          <PaginationNumber
            number={paginatedRecipes.length - 1}
            onClick={() => {
              setCurrentPage(paginatedRecipes.length - 1);
            }}
          />
        </>
      )}

      <PaginationArrow direction="right" />
    </div>
  );
}
