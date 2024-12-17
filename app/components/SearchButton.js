import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchButton({handleClick}) {
  return (
    <>
      <button onClick={handleClick} className="flex items-center justify-center md:hidden rounded-full w-7 h-7 ">
        <FaSearch className="right-3 text-white text-2xl hover:text-[#619460]" />
      </button>
    </>
  );
}
