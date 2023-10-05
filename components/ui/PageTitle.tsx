import React, { ReactNode } from "react";

export default function PageTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="w-0 overflow-visible font-bold leading-none first-line:font-light first-line:text-woa-white-400 lg:text-[64px] text-5xl">
      {children}
    </h1>
  );
}
