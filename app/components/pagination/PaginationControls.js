import PaginationArrow from "./PaginationArrow";
import PaginationNumber from "./PaginationNumber";
import { useEffect } from "react";

export default function PaginationControls({
  currentPage,
  setCurrentPage,
  paginationControlsArray,
  totalPages,
}) {
  console.log("PaginationControls received in PAGINATION CONTROLS:", {
    currentPage,
    paginationControlsArray,
    totalPages,
  });

  return (
    <div className="flex gap-x-1">
      <PaginationArrow
        direction={"left"}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      {paginationControlsArray
        ? paginationControlsArray.map((page, i) => (
            <PaginationNumber
              number={page || "..."}
              isActive={page === currentPage}
              key={i}
            />
          ))
        : "No pages"}
      <PaginationArrow
        direction={"right"}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
