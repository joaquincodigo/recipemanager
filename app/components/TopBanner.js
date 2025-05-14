"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function TopBanner() {
  return (
    <>
      <Link href="/home">
        <Image
          src={"/images/RecipesHavenLogoGreenBg.svg"}
          width={1}
          height={1}
          className="h-[55px] md:h-[40px] w-auto"
          alt="Top Banner"
          sizes="55px"
          priority
        />
      </Link>
    </>
  );
}
