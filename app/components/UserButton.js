"use client";

// import { UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ProfileAvatar from "./ProfileAvatar";
import { useAuth } from "@/app/context/AuthContext";

export default function UserButton({ onClick }) {
  const { userId, loggedIn } = useAuth();

  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center md:hidden rounded-full w-8 h-8"
    >
      {loggedIn ? (
        <ProfileAvatar size={7.2} /> // Tailwind size is 8 but the photo and the outer ring gives the appearece that the avatar is larger than it actually is
      ) : (
        // <UserCircleIcon
        //   strokeWidth={2.4}
        //   className="right-3 w-8 h-8 text-white font-bold text-2xl hover:text-[#619460]"
        // />
        <Link href={"/login"}>
          <button className="p-3 rounded text-white bg-[#7FC37E]">
            Log in
          </button>
        </Link>
      )}
    </button>
  );
}
