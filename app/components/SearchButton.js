import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchButton({ handleClick }) {
  return (
    <>
      <button
        onClick={handleClick}
        className="
          flex
          items-center
          justify-center
          md:hidden
          w-8
          h-8
          "
      >
        <MagnifyingGlassIcon
          strokeWidth={2.9}
          className="right-3 w-8 h-8 text-white font-bold text-2xl hover:text-[#619460]"
        />
      </button>
    </>
  );
}
