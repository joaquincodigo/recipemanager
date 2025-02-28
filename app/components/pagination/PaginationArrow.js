import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function PaginationArrow({
  direction,
  setCurrentPage,
  currentPage,
  totalPages,
}) {

  const previousPage = () => {
    if (currentPage !== 1) {
      console.log("Previos Page function");
      console.log("currentPage is", currentPage);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== totalPages) {
      console.log("Next Page function");
      console.log("currentPage is", currentPage);
      console.log("totalPages is", totalPages);
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="flex w-10 h-10 rounded text-slate-500 bg-transparent hover:bg-slate-100">
      {direction === "right" ? (
        <ChevronRightIcon className="stroke-[2]" onClick={nextPage} />
      ) : (
        <ChevronLeftIcon className="stroke-[2]" onClick={previousPage} />
      )}
    </div>
  );
}
