"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function TopBanner() {
  return (
    <>

      <Link className="md:hidden" href="/">
        {/* MOBILE BANNER */}
        <Image
          src={"/images/top-banner-mobile.gif"}
          width={180}
          height={180}
          alt="Top Banner"
        />
      </Link>

      {/* DEKSTOP BANNER */}

      {/* MOBILE BANNER */}
      <Link className="hidden md:inline" href="/">
        <Image
          src={"/images/top-banner-pc.gif"}
          width={125}
          height={125}
          alt="Top Banner"
        />
      </Link>

    </>
  );
}
