"use client";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useAuth } from "@/app/context/AuthContext";

export default function ProfileAvatar({ onClick, size }) {
  const { user } = useAuth();

  return user ? (
    // USER LOGGED (profile pic)
    <img
      src="/images/profile-dummy.jpg"
      alt="Profile Picture"
      onClick={onClick}
      className={`
        rounded-full
        object-cover
        ring-1 ring-[#FEFEE2] ring-offset-1 ring-offset-[#7FC37E]
        cursor-pointer
      `}
      style={{ width: `${size * 0.25}rem`, height: `${size * 0.25}rem` }} // Convert size to rem units
    />
  ) : (
    // USER NOT LOGGED (empty user icon)
      <button onClick={onClick} className="flex items-center justify-center md:hidden rounded-full ">
      <UserCircleIcon
        strokeWidth={2.6}
        style={{ width: `${size * 0.25}rem`, height: `${size * 0.25}rem` }}
        className="right-3 text-white font-bold text-2xl hover:text-[#619460]"
      />
    </button>
  );
}
