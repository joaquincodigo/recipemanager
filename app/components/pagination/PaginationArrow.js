import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function PaginationArrow({
  direction,
  setCurrentPage,
  currentPage,
  totalPages,
}) {
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className={"flex w-10 h-10 text-slate-500 bg-transparent"}>
      {direction === "right" ? (
        <ChevronRightIcon
          className={`${
            currentPage === totalPages
              ? "text-slate-200"
              : "cursor-pointer hover:bg-slate-100"
          } stroke-[2] rounded-md`}
          onClick={nextPage}
        />
      ) : (
        <ChevronLeftIcon
          className={`${
            currentPage === 1
              ? "text-slate-200"
              : "cursor-pointer hover:bg-slate-100"
          } stroke-[2] rounded-md`}
          onClick={previousPage}
        />
      )}
    </div>
  );
}
