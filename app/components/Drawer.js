"use client";

import { AiOutlineClose } from "react-icons/ai";
import { FaGear } from "react-icons/fa6";
import ProfileAvatar from "./ProfileAvatar";
import { LuCookingPot } from "react-icons/lu";

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
          bg-[#FEFEE2]
          ${isDrawerOpen ? "shadow-lg" : "shadow-none"}
          ${isDrawerOpen ? "shadow-black" : "shadow-none"}
          z-50
          transform
          transition-transform
          ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer Contents */}

        {/* Close Button */}
        <button
          onClick={closeDrawer}
          className="p-1 rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out"
        >
          <AiOutlineClose className="w-6 h-6 text-gray-600 hover:text-black transition-colors duration-300 ease-in-out" />
        </button>

        {/* User Header */}
        <div className=" flex flex-col items-center gap-y-2">
          <ProfileAvatar size={20} />
          <h2 className="text-lg font-bold mb-12">Hello User!</h2>
        </div>

        {/* Option List */}
        <ul className="flex flex-col mx-auto w-max gap-y-6">
          <li className="flex items-center">
            <span className="me-3">
              <LuCookingPot />
            </span>
            <p className="font-semibold">My Recipes</p>
          </li>

          <li className="flex items-center">
            <span className="me-3">
              <FaGear />
            </span>
            <p className="font-semibold">Settings</p>
          </li>
        </ul>
      </div>
    </>
  );
}
