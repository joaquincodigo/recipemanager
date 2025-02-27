import PaginationArrow from "./PaginationArrow";
import PaginationNumber from "./PaginationNumber";
import { useEffect } from "react";

export default function PaginationControls({
  currentPage,
  setCurrentPage,
  paginationControlsArray,
}) {

  console.log("PaginationControls received in COMPONENTS:", {
    currentPage,
    paginationControlsArray,
  });

  return (
    <div className="flex gap-x-1">
      {paginationControlsArray
        ? paginationControlsArray.map((page, i) => (
            <li key={i}>{page || "..."}</li>
          ))
        : "No pages"}
    </div>
  );
}