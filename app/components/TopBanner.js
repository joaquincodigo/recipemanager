"use client";
import Image from "next/image";
import React from "react";

export default function TopBanner() {
  return (
    <>
      <Image
        src={"/images/top-banner-mobile.gif"}
        width={150}
        height={150}
        alt="Top Banner"
        className="md:hidden"
      />
      <Image
        src={"/images/top-banner-pc.gif"}
        width={125}
        height={125}
        alt="Top Banner"
        className="hidden md:inline"
      />
    </>
  );
}
