import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function PaginationArrow({ direction }) {
  return (
    <div className="flex w-10 h-10 rounded text-slate-500 bg-transparent hover:bg-slate-100">
      {direction === "right" ? (
        <ChevronRightIcon className="stroke-[2]" />
      ) : (
        <ChevronLeftIcon className="stroke-[2]" />
      )}
    </div>
  );
}
