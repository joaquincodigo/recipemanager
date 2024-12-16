import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchButton({handleClick}) {
  return (
    <>
      <button onClick={handleClick} className="flex items-center justify-center md:hidden rounded-full hover w-7 h-7 hover:bg-[#61a360]">
        <FaSearch className="right-3 text-white" />
      </button>
    </>
  );
}
