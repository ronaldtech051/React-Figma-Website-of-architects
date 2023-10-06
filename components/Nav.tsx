"use client";

import React, { ReactNode, useRef } from "react";
import Image from "next/image";
import logoBlack from "@/public/logo-black.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Nav() {
  return (
    <nav className="flex h-[102px] w-full items-center bg-white pl-4 md:pl-12 lg:pl-0">
      <Link href="/" className="lg:ml-16 xl:ml-[135px]">
        <Image
          src={logoBlack}
          width={logoBlack.width}
          height={logoBlack.height}
          className=""
          alt="Black logo"
        />
      </Link>
      <NavList />
    </nav>
  );
}

function NavList() {
  const pathname = usePathname();
  const navListRef = useRef<HTMLUListElement>(null);
  function isLinkActive(url: string, pathname: string) {
    return pathname === url ? true : false;
  }

  function handleNavListToggle() {
    navListRef.current?.classList.toggle("hidden");
  }

  return (
    <>
      <button
        className="md:hidden absolute right-4 top-10 border-y border-y-woa-black-700 px-[14px] text-xs"
        onClick={handleNavListToggle}
      >
        MENU
      </button>
      <ul
        ref={navListRef}
        className="absolute right-0 top-0 z-[10000] hidden h-screen w-screen bg-white/95 pt-24 md:static md:ml-12 md:flex md:h-auto md:w-auto md:gap-[32px] md:pt-0 md:opacity-100 lg:ml-[135px] xl:ml-[330px] xl:gap-[60px]"
      >
        <button
          className="absolute right-5 top-6 px-[14px] py-1 text-4xl text-woa-black-700 md:hidden "
          onClick={handleNavListToggle}
        >
          &#10005;
        </button>
        <NavListItem href="/" active={isLinkActive("/", pathname)}>
          MAIN
        </NavListItem>
        <NavListItem
          href="/gallery"
          active={isLinkActive("/gallery", pathname)}
        >
          GALLERY
        </NavListItem>
        <NavListItem
          href="/projects"
          active={isLinkActive("/projects", pathname)}
        >
          PROJECTS
        </NavListItem>
        <NavListItem
          href="/certifications"
          active={isLinkActive("/certifications", pathname)}
        >
          CERTIFICATIONS
        </NavListItem>
        <NavListItem
          href="/contacts"
          active={isLinkActive("/contacts", pathname)}
        >
          CONTACTS
        </NavListItem>
      </ul>
    </>
  );
}

function NavListItem({
  children,
  href,
  active,
}: {
  children: ReactNode;
  href: string;
  active?: boolean;
}) {
  return (
    <li
      className={cn(
        { "border-y border-y-woa-black-700": active },
        "px-[14px] py-1 text-xs",
      )}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
}
