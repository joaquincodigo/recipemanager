"use client";

import React from "react";
import { useSearch } from "../context/SearchContext";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ onSearch }) {
  const { query, handleSearch } = useSearch();

  return (

    <div className="relative flex items-center w-72 h-7">
      <input
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search"
        className="pl-3 pb-0.5 pr-3 rounded-full bg-white w-full h-full text-sm focus:ring-2 focus:outline"
      />
      <FaSearch className="absolute right-3 text-gray-400" />
    </div>
  );
}
