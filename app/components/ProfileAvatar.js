import React from "react";
// import Image from "next/image";

export default function ProfileAvatar({onClick, size}) {
  return (
		// <Image
		// The Next.js Image component can absolutely be used for images with a URL as their source. You simply need to allow the domain hosting the image in your next.config.js file.

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
  );
}
