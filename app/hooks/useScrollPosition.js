// app/hooks/useScrollPosition.js
"use client";

import { useState, useEffect } from 'react';

/**
 * A custom hook that tracks scroll position and direction
 * @returns {Object} An object containing scrollY position and scroll direction
 */
export default function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      
      // Update state
      setScrollY(currentScrollY);
      setLastScrollY(currentScrollY);
    };
    
    // Try different ways to detect scrolling
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    
    // Use a ResizeObserver as a fallback to detect potential layout shifts
    const resizeObserver = new ResizeObserver(() => {
      const currentScrollY = window.scrollY;
      if (currentScrollY !== lastScrollY) {
        handleScroll();
      }
    });
    
    resizeObserver.observe(document.body);
    
    // Initialize
    setScrollY(window.scrollY);
    setLastScrollY(window.scrollY);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
    };
  }, [lastScrollY]);

  return { scrollY, scrollDirection };
}