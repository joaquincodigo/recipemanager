import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function PaginationArrow({ direction }) {
  return (
    <div className="flex w-7 h-7 rounded text-slate-500 bg-transparent hover:bg-slate-100">
      {direction === "right" ? (
        <ChevronRightIcon className="stroke-[2.5]" />
      ) : (
        <ChevronLeftIcon className="stroke-[2.5]" />
      )}
    </div>
  );
}
