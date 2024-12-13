"use client";

import React from "react";
import SearchBar from "./SearchBar";
import TopBanner from "./TopBanner";
import SearchButton from "./SearchButton";
import ProfileAvatar from "./ProfileAvatar";
import useViewport from "../hooks/useViewport";
import { useState } from "react";

export default function Header() {
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
  const isMobile = useViewport();

  const toggleSearchInput = () => {
    setIsSearchInputOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-[#7FC37E] flex justify-between h-9 md:h-12 px-3 py-0.5 items-center">
      {/* MOBILE */}
      {isMobile ? (
        // WITH SEARCHBAR OPEN
        isSearchInputOpen ? (
          <div className="w-full flex gap-2 justify-center">
            <SearchBar />
            <button onClick={toggleSearchInput} className="text-white">
              Cancel
            </button>
          </div>
        ) : (
          // WITH SEARCHBAR CLOSED
          <div className="w-full flex justify-between">
            <TopBanner />
            <div className="flex gap-1">
              <SearchButton handleClick={toggleSearchInput} />
              <ProfileAvatar />
            </div>
          </div>
        )
      ) : (
        // DESKTOP
        <>
          <TopBanner />
          <SearchBar />
          <ProfileAvatar />
        </>
      )}
    </header>
  );
}
