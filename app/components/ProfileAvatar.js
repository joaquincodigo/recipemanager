import React from "react";
// import Image from "next/image";

export default function ProfileAvatar() {
  return (
		// <Image
		// The Next.js Image component can absolutely be used for images with a URL as their source. You simply need to allow the domain hosting the image in your next.config.js file.
		<img
      src="/images/profile-dummy.jpg"
      width={30}
      height={30}
      alt="Profile Picture"
      className="rounded-full object-cover w-7 h-7 ring-1 ring-[#FEFEE2] ring-offset-1 ring-offset-[#7FC37E]"

    />
  );
}
