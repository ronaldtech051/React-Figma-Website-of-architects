import React, { ReactNode } from "react";
import Image from "next/image";
import logoBlack from "@/public/logo-black.png";
export default function Nav() {
  return (
    <nav className="flex h-[102px] w-full items-center bg-white">
      <Image
        src={logoBlack}
        width={logoBlack.width}
        height={logoBlack.height}
        className="xl:ml-[135px]"
        alt="Black logo"
      />
      <ul className="flex gap-[46px] xl:ml-[330px]">
        <NavListItem>MAIN</NavListItem>
        <NavListItem>GALLERY</NavListItem>
        <NavListItem>PROJECTS</NavListItem>
        <NavListItem>CERTIFICATIONS</NavListItem>
        <NavListItem>CONTACTS</NavListItem>
      </ul>
    </nav>
  );
}

function NavListItem({ children }: { children: ReactNode }) {
  return (
    <li className="border-y border-y-woa-black-700 px-[14px] py-1 text-xs">
      {children}
    </li>
  );
}
