import PaginationArrow from "./PaginationArrow";
import PaginationNumber from "./PaginationNumber";
import usePagination from "@/app/hooks/usePagination";

export default function PaginationControls() {
  const testData = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  const { paginationControlsArray, currentPage, setCurrentPage } =
    usePagination(testData);
  console.log("im currentPage:", currentPage);
  console.log("page contents:", paginationControlsArray[currentPage - 1]);

  return (
    <div className="flex gap-x-1">
      <PaginationArrow direction="left" />

      {paginationControlsArray.map((page, index) =>
        page === "..." ? (
          <PaginationNumber key={index} />
        ) : (
          <PaginationNumber
            key={index}
            number={index + 1} // Use index + 1 to display the page number
            isActive={index + 1 === currentPage} // Compare page number to currentPage
            onClick={() => {
              setCurrentPage(index + 1); // Set currentPage to the actual page number
            }}
          />
        )
      )}

      <PaginationArrow direction="right" />
    </div>
  );
}
