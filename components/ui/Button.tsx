import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function Button({
  className,
  children,
  absolute,
  variant,
}: {
  className?: string;
  children: ReactNode;
  absolute?: boolean;
  variant: "white" | "black";
}) {
  const localClassName = cn(
    { "absolute bottom-0 left-0": absolute },
    { "bg-white  text-woa-black-700": variant === "white" },
    { "text-white  bg-woa-black-700": variant === "black" },
    "flex items-center justify-center text-xs tracking-[.25em]  xl:h-[71px] xl:w-[222px]",
  );
  return (
    <button className={cn(className, localClassName)}>
      {children}
    </button>
  );
}
