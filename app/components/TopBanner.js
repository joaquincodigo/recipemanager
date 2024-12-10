"use client";
import Image from "next/image";
import React from "react";

export default function TopBanner() {
  return (
    <Image
      src={
        window.innerWidth < 768 //MD breakpoint
          ? "/images/top-banner-mobile.gif"
          : "/images/top-banner-pc.gif"
      }
      width={150}
      height={150}
      alt="Top Banner"
    />
  );
}
