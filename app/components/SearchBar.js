"use client";

import React from "react";
import { useSearch } from "../context/SearchContext";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

export default function SearchBar({ onSearch, searchInputRef }) {
  const { query, handleSearch } = useSearch();

  return (
    <div className="flex relative items-center w-72 h-9">
      <input
        ref={searchInputRef}
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search"
        className="
          px-3
          rounded-full
          bg-[#FEFEE2]
          w-full
          h-full
          text-sm
          focus:outline-none
          focus:ring-1
        focus:ring-slate-300
          focus:ring-inset
          focus:ring-offset-1
          "
      />
      <MagnifyingGlassIcon className="absolute w-5 h-5 right-3 bottom-[9px] text-gray-400" />
    </div>
  );
}
