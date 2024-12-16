"use client";

import { useState } from "react";
import React, { useEffect } from "react";
import { FaRegClock } from "react-icons/fa";

import SearchBar from "./SearchBar";
import TopBanner from "./TopBanner";
import SearchButton from "./SearchButton";
import ProfileAvatar from "./ProfileAvatar";
import useViewport from "../hooks/useViewport";

export default function Header() {
  // Different headers for mobile and desktop
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
  const isMobile = useViewport();

  // Header hiding when scrolling down and re-appearing when scrolling up
  const [isVisible, setIsVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const toggleSearchInput = () => {
    setIsSearchInputOpen((prevState) => !prevState);
  };

  useEffect(() => {
    let timeoutId; // To store the timeout ID for debouncing

    const handleScroll = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const currentScroll = window.scrollY;
        const scrollThreshold = 50; // Minimum scroll distance to hide/show header

        if (Math.abs(currentScroll - lastScroll) > scrollThreshold) {
          // If the scroll distance is larger than the threshold
          if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
            // Hide the header when scrolling down
            setIsVisible(false);
          } else {
            // Show the header when scrolling up
            setIsVisible(true);
          }

          setLastScroll(currentScroll);
        }
      }, 10); // Delay in ms (adjust this value as needed)
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  return (
    <header
      className={`bg-[#7FC37E] flex justify-between h-8 md:h-9 px-3 py-0.5 items-center transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } sticky top-0 z-10`}
    >
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
