"use client";

import { useRef, useState } from "react";
import React, { useEffect } from "react";

import SearchBar from "./SearchBar";
import TopBanner from "./TopBanner";
import SearchButton from "./SearchButton";
import ProfileAvatar from "./ProfileAvatar";
import useViewport from "../hooks/useViewport";

export default function Header({ toggleDrawer }) {
  // Different headers for mobile and desktop
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
  const isMobile = useViewport();

  // Header hiding when scrolling down and re-appearing when scrolling up
  const [isVisible, setIsVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
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

  // Handling the hide-unhide bevahior of the header
  useEffect(() => {
    let timeoutId; // To store the timeout ID for debouncing

    const handleScroll = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const currentScroll = window.scrollY;
        const scrollThreshold = 10; // Minimum scroll distance to hide/show header

        if (Math.abs(currentScroll - lastScroll) > scrollThreshold) {
          if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
            setIsVisible(false);
          } else {
            // Show the header when scrolling up
            setIsVisible(true);
          }

          setLastScroll(currentScroll);
        }
      }, 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

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
      sticky
      top-0
      z-10
      ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* MOBILE */}
      {isMobile ? (
        // WITH SEARCHBAR OPEN
        isSearchInputOpen ? (
          <div className="w-full flex gap-2 justify-center items-center">
            <SearchBar searchInputRef={searchInputRef} />
            <button onClick={toggleSearchInput} className="text-white">
              Cancel
            </button>
          </div>
        ) : (
          // WITH SEARCHBAR CLOSED
          <div className="w-full flex justify-between items-center">
            <TopBanner />
            <div className="flex gap-4">
              <SearchButton handleClick={handleSearchButtonClick} />
              <ProfileAvatar onClick={toggleDrawer} size={7} />
            </div>
          </div>
        )
      ) : (
        // DESKTOP
        <>
          <TopBanner />
          <SearchBar />
          <ProfileAvatar onClick={toggleDrawer} size={7} />
        </>
      )}
    </header>
  );
}
