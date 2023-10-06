"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import logoBlack from "@/public/logo-black.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Nav() {
  const pathname = usePathname();

  function isLinkActive(url: string, pathname: string) {
    return pathname === url ? true : false;
  }
  return (
    <nav className="flex h-[102px] w-full items-center bg-white pl-4 md:pl-12 lg:pl-0">
      <Link href="/" className="xl:ml-[135px] lg:ml-16">
        <Image
          src={logoBlack}
          width={logoBlack.width}
          height={logoBlack.height}
          className=""
          alt="Black logo"
        />
      </Link>
      <ul className="hidden gap-[32px] lg:ml-[135px] lg:flex xl:ml-[330px] xl:gap-[60px]">
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
    </nav>
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
