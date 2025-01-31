"use client";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useAuth } from "@/app/context/AuthContext";
import ProfileAvatar from "./ProfileAvatar";

export default function UserButton({ onClick }) {
  const { user } = useAuth();

  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center md:hidden rounded-full w-8 h-8"
    >
      {user ? (
        <ProfileAvatar size={7.2} /> // Tailwind size is 8 but the photo and the outer ring gives the appearece that the avatar is larger than it actually is
      ) : (
        <UserCircleIcon

          strokeWidth={2.6}
          className="right-3 w-8 h-8 text-white font-bold text-2xl hover:text-[#619460]"
        />
      )}
    </button>
  );
}
