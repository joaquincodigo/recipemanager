"use client";

import { useState } from "react";
import { useSearch } from "../context/SearchContext";
import { usePathname } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar({ onSearch, searchInputRef }) {
  const { query, handleSearch } = useSearch();
  const [inputLength, setInputLength] = useState(0);
  const pathname = usePathname();

  return (
    <div
      className={`${
        pathname === "/home" ? "flex" : "hidden"
      }  relative items-center w-72 h-9 md:h-7`}
    >
      <input
        ref={searchInputRef}
        type="text"
        onChange={(e) => {
          handleSearch(e.target.value);
          setInputLength(e.target.value.length);
        }}
        placeholder="Search"
        className="
        placeholder-
          px-3
          rounded-full
          bg-white
          w-full
          h-full
          flex
          focus:outline-none
          focus:ring-1
        focus:ring-slate-300
          focus:ring-inset
          focus:ring-offset-1
          md:text-sm
          "
      />
      {/* Hide the magnifiying icon to prevent overlap if the input is too long (rare) */}
      <MagnifyingGlassIcon
        className={`
        absolute
        right-3
        w-6 md:w-5
        h-6 md:h-5
        bottom-[7px] md:bottom-[5px]
        text-gray-400
        transition-opacity duration-500 ease-in-out ${
          inputLength < 30 ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
