import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function PageButtons({
  p,
  totalPages,
  prevPage,
  nextPage,
  url,
  scroll = false,
}: {
  p: number;
  totalPages: number;
  prevPage: number | null;
  nextPage: number | null;
  url: string;
  scroll?: boolean;
}) {
  return (
    <div className="mt-[60px] flex gap-6">
      <p className="flex items-center gap-8 text-[24px]">
        <span className="text-[#333]">{String(p).padStart(2, "0")}</span>
        <span className="text-5xl font-extralight text-[#e0e0e0]">/</span>
        <span className="text-woa-white-400">
          {String(totalPages).padStart(2, "0")}
        </span>
      </p>
      <Link
        className={cn(
          "h-[53px] w-[53px] border border-woa-white-300 bg-white p-[14px]",
          { "cursor-not-allowed bg-[#f9f9f9]": !prevPage },
        )}
        href={prevPage ? `/${url}/?p=${prevPage}` : ""}
        scroll={false}
      >
        &larr;
      </Link>
      <Link
        className={cn(
          "h-[53px] w-[53px] border border-woa-white-300 bg-white p-[14px]",
          { "cursor-not-allowed bg-[#f9f9f9]": !nextPage },
        )}
        href={nextPage ? `/${url}/?p=${nextPage}` : ""}
        scroll={scroll}
      >
        &rarr;
      </Link>
    </div>
  );
}
