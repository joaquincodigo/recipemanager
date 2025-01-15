import React from "react";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

export default function SearchButton({handleClick}) {
  return (
    <>
      <button onClick={handleClick} className="flex items-center justify-center md:hidden rounded-full w-7 h-7 ">
        <MagnifyingGlassIcon strokeWidth={3.3} className="right-3 text-white font-bold text-2xl hover:text-[#619460]" />
      </button>
    </>
  );
}
