"use client";

import { useEffect, useState, useRef } from "react";

import Header from "../components/Header";
import Drawer from "../components/Drawer";

export default function SitePagesLayout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const startTouchX = useRef(0);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleTouchStart = (e) => {
    startTouchX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const currentTouchX = e.touches[0].clientX;
    const deltaTouchX = currentTouchX - startTouchX.current;
    if (deltaTouchX > 100) {
      closeDrawer();
    }
  };

  const handleTouchEnd = (e) => {
    startTouchX.current = 0;
  };

  // Drawer hide on slide touch
  useEffect(() => {
    document.body.addEventListener("touchstart", handleTouchStart);
    document.body.addEventListener("touchmove", handleTouchMove);
    document.body.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.body.removeEventListener("touchstart", handleTouchStart);
      document.body.removeEventListener("touchmove", handleTouchMove);
      document.body.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDrawerOpen]);

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />

      <Drawer closeDrawer={closeDrawer} isDrawerOpen={isDrawerOpen} />

      <main>{children}</main>
    </>
  );
}
