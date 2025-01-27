"use client";

import Link from "next/link";
import ProfileAvatar from "./ProfileAvatar";
import { useAuth } from "../context/AuthContext";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";

export default function Drawer({ closeDrawer, isDrawerOpen }) {
  const { supabase, user } = useAuth();

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
          w-48
          bg-white
          bg-opacity-95
          text-black
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
          <XMarkIcon className="w-7 h-7 text-gray-600 hover:text-black transition-colors duration-300 ease-in-out" />
        </button>

        {/* User Header */}
        <div className=" flex flex-col items-center gap-y-2">
          <ProfileAvatar size={20} />
          <h2 className="text-lg font-bold mb-12">
            Hello {user ? user.email : "usuario"}!
          </h2>
        </div>

        {/* Option List */}
        <ul className="flex flex-col mx-auto w-max gap-y-6">
          <li className="flex items-center" onClick={closeDrawer}>
            <span className="me-3">
              <BookOpenIcon className="w-6 h-6" />
            </span>

            <Link className="font-semibold" href="/my-recipes">
              My recipes
            </Link>
          </li>

          <li className="flex items-center" onClick={closeDrawer}>
            <span className="me-3">
              <HeartIcon className="w-6 h-6" />
            </span>

            <Link className="font-semibold" href="/">
              Favorites list
            </Link>
          </li>

          <li className="flex items-center" onClick={closeDrawer}>
            <span className="me-3">
              <Cog8ToothIcon className="w-6 h-6" />
            </span>

            <Link className="font-semibold" href="/settings">
              Settings
            </Link>
          </li>

          <li
            className="flex items-center"
            onClick={() => {
              supabase.auth.signOut();
              closeDrawer();
            }}
          >
            <span className="me-3">
              <ArrowLeftStartOnRectangleIcon className="w-6 h-6" />
            </span>

            <Link className="font-semibold" href="/home">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
