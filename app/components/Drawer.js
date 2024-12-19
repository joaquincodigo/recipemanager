"use client";

import { AiOutlineClose } from "react-icons/ai";

export default function Drawer({ closeDrawer, isDrawerOpen }) {
  return (
    <>
      {/* Black Overlay */}
      <div
        onClick={closeDrawer}
        className={`
          fixed inset-0
          bg-black
          h-screen
          bg-opacity-50
          z-40
          transition-opacity
          duration-300
          ${
            isDrawerOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      ></div>

      {/* Drawer Container */}
      <div
        className={`
          p-2.5
          fixed
          top-0
          right-0
          h-screen
          w-64
          bg-white
          shadow-lg
          z-50
          transform
          transition-transform
          ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer Contents */}

        {/* Close Button */}
        <button onClick={closeDrawer} className="p-1 rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out">
          <AiOutlineClose className="w-6 h-6 text-gray-600 hover:text-black transition-colors duration-300 ease-in-out" />
        </button>

        {/* Rest of the content */}
        <div className="">
          <h2 className="text-lg font-bold">User Options</h2>
        </div>

      </div>
    </>
  );
}
