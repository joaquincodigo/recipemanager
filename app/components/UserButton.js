"use client";

import { UserCircleIcon } from "@heroicons/react/24/outline";
import ProfileAvatar from "./ProfileAvatar";
import { useAuth } from "@/app/context/AuthContext";

export default function UserButton({ onClick }) {
  const { userId, loggedIn } = useAuth();

  const styles = {
    container:
      "flex items-center justify-center md:hidden rounded-full w-8 h-8",
    annonymousUserBtn:
      "right-3 w-8 h-8 text-white font-bold text-2xl hover:text-[#619460]",
  };

  return (
    <button onClick={onClick}>
      <div className={styles.container}>
        {loggedIn ? (
          <ProfileAvatar size={7.2} /> // Tailwind size is 8 but the photo and the outer ring gives the appearece that the avatar is larger than it actually is
        ) : (
          <UserCircleIcon
            strokeWidth={2.4}
            className={styles.annonymousUserBtn}
          />
        )}
      </div>
    </button>
  );
}
