import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ReactNode } from "react";

export default function Button({
  className,
  children,
  absolute,
  variant,
  type = "button",
  href = "",
}: {
  className?: string;
  children: ReactNode;
  absolute?: boolean;
  variant: "white" | "black";
  type?: "button" | "submit" | "link";
  href?: string;
}) {
  const localClassName = cn(
    { "absolute bottom-0 left-0": absolute },
    { "bg-white  text-woa-black-700": variant === "white" },
    { "text-white  bg-woa-black-700": variant === "black" },
    "flex items-center justify-center text-xs tracking-[.25em]  xl:h-[71px] xl:w-[222px]",
  );
  return type === "button" ? (
    <button className={cn(className, localClassName)} type={type}>
      {children}
    </button>
  ) : (
    <Link className={cn(className, localClassName)} href={href}>
      {children}
    </Link>
  );
}
