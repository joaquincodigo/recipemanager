import { useEffect, useState } from "react";

export default function ScrollColorChange() {
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setBgColor("lightblue");
      } else {
        // Scrolling up
        setBgColor("lightcoral");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed", // Keeps the element fixed on the screen
        top: "20px", // Adjust the top position as needed
        left: "20px", // Adjust the left position as needed
        padding: "10px",
        backgroundColor: bgColor,
        zIndex: 1000, // Ensures it stays on top of other content
      }}
    >
      Scroll to change the color!
    </div>
  );
}
