"use client";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useAuth } from "@/app/context/AuthContext";

export default function ProfileAvatar({ onClick }) {
  const { user } = useAuth();

  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center md:hidden rounded-full"
    >
      {user ? (
        <img
          src="/images/profile-dummy.jpg"
          alt="Profile Picture"
          onClick={onClick}
          className="rounded-full object-cover ring-1 ring-[#FEFEE2] ring-offset-1 ring-offset-[#7FC37E] cursor-pointer"
        />
      ) : (
        <UserCircleIcon
          strokeWidth={2.6}
          className="right-3 w-8 h-8 text-white font-bold text-2xl hover:text-[#619460]"
        />
      )}
    </button>
  );
}
