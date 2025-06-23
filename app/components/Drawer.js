"use client";

import Link from "next/link";
import ProfileAvatar from "./ProfileAvatar";

import { useAuth } from "@/app/context/AuthContext";
import useLogout from "@/app/hooks/useLogout";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import DrawerItem from "./DrawerItem";

export default function Drawer({ closeDrawer, isDrawerOpen }) {
  const { handleLogout } = useLogout();
  const { userId, username, loggedIn } = useAuth();

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
      {/* Blurred Drawer for non-logged users */}
      {/* Blurrer */}
      {!loggedIn && (
        <div
          className={`
          fixed
          top-0
          right-0
          h-screen
          w-60
          bg-[#ffffe5]/80
          backdrop-blur-sm
          z-[60]
          transform
          transition-transform
          ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
          {/* Login encouragment content */}
          <div className="w-full h-full flex flex-col items-center justify-center px-3 pb-20 md:text-sm">
            <p className="text-center text-xl md:text-lg mb-3">Hi there!</p>
            <p className="text-center">
              Want to see{" "}
              <span className="font-semibold">all the features</span>?
            </p>
            <p className="text-center mb-3">Just log in !</p>
            <p className="text-center mb-3">No email confirmation needed</p>
            <Link href={"/login"}>
              <button className="p-3 rounded text-white bg-[#7FC37E]">
                Log in
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Drawer Container */}
      <div
        className={`
          p-2.5
          fixed
          top-0
          right-0
          h-screen
          w-60
          bg-[#ffffe5]/95
          text-black
          ${isDrawerOpen ? "shadow-lg shadow-black" : "shadow-none"}
          z-50
          transform
          transition-transform
          ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Button */}
        <button
          onClick={closeDrawer}
          className="p-1 rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out"
        >
          <XMarkIcon className="w-7 h-7 text-gray-600 hover:text-black transition-colors duration-300 ease-in-out" />
        </button>

        <div>
          {/* User Header */}
          <div className="flex flex-col items-center gap-y-2">
            <div
              className={
                loggedIn
                  ? "ring-4 ring-[#7FC37E] rounded-full cursor-default"
                  : undefined
              }
            >
              {loggedIn ? (
                <ProfileAvatar size={20} />
              ) : (
                <UserCircleIcon
                  className="w-28 h-28 text-slate-700"
                  strokeWidth={1}
                />
              )}
            </div>

            <div className="flex justify-center max-w-40">
              <h2 className="text-center text-lg font-bold mb-12">
                {loggedIn ? `Hello ${username}` : "Anonymous"}
              </h2>
            </div>
          </div>

          {/* Option List */}
          <ul className="flex flex-col mx-auto w-max gap-y-4">
            <DrawerItem
              icon={HomeIcon}
              href="/home"
              label="Home"
              onClick={closeDrawer}
            />

            <DrawerItem
              icon={PlusCircleIcon}
              href="/create-recipe"
              label="Create recipe"
              onClick={closeDrawer}
            />

            <DrawerItem
              icon={BookOpenIcon}
              href="/my-recipes"
              label="My recipes"
              onClick={closeDrawer}
            />

            <DrawerItem
              icon={HeartIcon}
              href="/liked-recipes"
              label="Liked recipes"
              onClick={closeDrawer}
            />

            <DrawerItem
              icon={ArrowLeftStartOnRectangleIcon}
              label="Logout"
              onClick={handleLogout}
            />
          </ul>
        </div>
      </div>
    </>
  );
}
