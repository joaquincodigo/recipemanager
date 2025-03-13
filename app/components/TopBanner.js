"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function TopBanner() {
  return (
    <>
      <Link className="md:hidden" href="/">
        <Image
          src={"/images/RecipesHavenLogoGreenBg.svg"}
          width={1}
          height={1}
          style={{ height: "55px", width: "auto" }}
          alt="Top Banner"
          sizes="55px"
          priority
        />
      </Link>
    </>
  );
}
