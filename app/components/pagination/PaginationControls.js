import PaginationArrow from "./PaginationArrow";
import PaginationNumber from "./PaginationNumber";

export default function PaginationControls({
  currentPage,
  setCurrentPage,
  paginationControlsArray,
  totalPages,
}) {

  return (
    <div className="flex gap-x-1 mt-2 justify-center items-center">
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
            onClick={(e) => {
              setCurrentPage(page)
              console.log("Clicked number, sending you to page:", page);
            }}
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
