import React from "react";
// import Image from "next/image";

export default function ProfileAvatar() {
  return (
		// <Image
		// The Next.js Image component can absolutely be used for images with a URL as their source. You simply need to allow the domain hosting the image in your next.config.js file.
		<img
      src="https://placehold.co/50x50/800080/FFF"
      width={30}
      height={30}
      alt="Picture of the author"
			className="rounded-full"
    />
  );
}
