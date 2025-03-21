"use client";

import { useRef, useState, useEffect } from "react";

import { useSearch } from "@/app/context/SearchContext";
import useViewport from "@/app/hooks/useViewport";

import SearchBar from "./SearchBar";
import TopBanner from "./TopBanner";
import SearchButton from "./SearchButton";

import UserButton from "./UserButton";

export default function Header({ toggleDrawer }) {
  const isMobile = useViewport(); // Different headers for mobile an desktop
  const { handleSearch } = useSearch();
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Header hiding when scrolling down and re-appearing when scrolling up
  const searchInputRef = useRef(null);

  const toggleSearchInput = () => {
    setIsSearchInputOpen((prevState) => !prevState);
  };

  const searchbarFocus = () => {
    setTimeout(() => {
      searchInputRef.current.focus();
    }, 50);
  };

  const handleSearchButtonClick = () => {
    toggleSearchInput();
    searchbarFocus();
  };

  const clearSearch = () => {
    handleSearch("");
  };

  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollThreshold = 10; // Sensitivity

      if (Math.abs(currentScroll - lastScroll.current) > scrollThreshold) {
        if (currentScroll > lastScroll.current) {
          setIsVisible(false); // Hide on scroll down
        } else {
          setIsVisible(true); // Show on scroll up
        }

        lastScroll.current = currentScroll; // Update last scroll position
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
      className={`
      bg-[#7FC37E]
      flex
      justify-between
      h-14
      w-screen 
      px-3
      py-0.5
      items-center
      transition-transform
      duration-300
      ease-in-out
      fixed
      top-0
      z-10
      overflow-hidden
      ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* MOBILE */}
      {isMobile ? (
        // WITH SEARCHBAR OPEN
        isSearchInputOpen ? (
          <div className="w-full flex gap-2 justify-center items-center">
            <SearchBar searchInputRef={searchInputRef} />
            <button
              onClick={() => {
                toggleSearchInput();
                clearSearch();
              }}
              className="text-white font-semibold text-lg rounded-full hover:bg-[#5c9f5a] px-2 py-1"
            >
              Cancel
            </button>
          </div>
        ) : (
          // WITH SEARCHBAR CLOSED
          <div className="w-full flex justify-between items-center">
            <TopBanner />
            <div className="flex gap-3">
              <SearchButton handleClick={handleSearchButtonClick} />
              <UserButton onClick={toggleDrawer} />
            </div>
          </div>
        )
      ) : (
        // DESKTOP
        <>
          <TopBanner />
          <SearchBar />
          <UserButton onClick={toggleDrawer} />
        </>
      )}
    </header>
  );
}
