import Image from "next/image";
import Link from "next/link";
import React from "react";

const navIcons = [
  { src: "/assets/icons/search.svg", alt: "search" },
  { src: "/assets/icons/black-heart.svg", alt: "heart" },
  { src: "/assets/icons/user.svg", alt: "user" },
];
const NavBar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          {/* <Image
            src="/assets/icons/logo.png"
            width={25}
            height={25}
            alt="logo"
            className="object-contain"
          /> */}
          <Image src="/assets/icons/costbold.png" width={120} height={120} alt="costlyzer"/>
          {/* <p className="nav-logo tracking-tight">COSTLYZER </p> */}
        </Link>
        <div className="flex items-center gap-5">
          {/* link */}
          {navIcons.map((o, i) => (
            <Image
              className="cursor-pointer object-contain"
              key={i}
              src={o.src}
              width={25}
              height={25}
              alt={o.alt}
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
