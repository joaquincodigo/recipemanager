"use client";

import React from "react";
import { useSearch } from "../context/SearchContext";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ onSearch, searchInputRef }) {
  const { query, handleSearch } = useSearch();

  return (
    <div className="flex relative items-center w-72 h-7">
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
      <FaSearch className="absolute right-3 text-gray-400" />
    </div>
  );
}
