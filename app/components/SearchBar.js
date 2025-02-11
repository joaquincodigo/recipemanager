"use client";

import { useState } from "react";
import { useSearch } from "../context/SearchContext";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar({ onSearch, searchInputRef }) {
  const { query, handleSearch } = useSearch();
  const [inputLength, setInputLength] = useState(0);

  return (
    <div className="flex relative items-center w-72 h-9">
      <input
        ref={searchInputRef}
        type="text"
        onChange={(e) => {
          handleSearch(e.target.value);
          setInputLength(e.target.value.length);
        }}
        placeholder="Search"
        className="
          px-3
          rounded-full
          bg-white
          w-full
          h-full
          text-sm
          flex
          focus:outline-none
          focus:ring-1
        focus:ring-slate-300
          focus:ring-inset
          focus:ring-offset-1
          "
      />
      {/* Hide the magnifiying icon to prevent overlap if the input is too long (rare) */}
      <MagnifyingGlassIcon
        className={`
        absolute
        right-3
        w-6
        h-6
        bottom-[7px]
        text-gray-400
        transition-opacity duration-500 ease-in-out ${
          inputLength < 30 ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
