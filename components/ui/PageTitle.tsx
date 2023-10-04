import React, { ReactNode } from "react";

export default function PageTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="w-0 overflow-visible leading-none first-line:font-light first-line:text-woa-white-400 xl:text-[64px] font-bold">
      {children}
    </h1>
  );
}
