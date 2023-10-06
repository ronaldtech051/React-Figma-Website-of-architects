import { cn } from "@/lib/utils";
import React from "react";

export default function Mission() {
  return (
    <section className="mx-4 mt-[60px] md:mx-16 lg:mx-0 xl:mt-[120px]">
      <h2 className="text-4xl font-light md:leading-normal text-woa-white-400 md:text-[46px] lg:text-[64px]">
        Main Focus/Mission Statement
      </h2>
      <div className="grid-cols mt-[32px] grid content-start gap-8 md:grid-cols-2 md:gap-0 xl:mt-[62px]">
        <MissionItem
          missionNumber="1"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat."
          tight
        />
        <MissionItem
          missionNumber="2"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl."
        />
      </div>
    </section>
  );
}

function MissionItem({
  missionNumber,
  text,
  tight,
}: {
  missionNumber: string;
  text: string;
  tight?: boolean;
}) {
  return (
    <p className="flex h-[140px] items-center gap-4 lg:gap-[30px]">
      <span className="text-[200px] font-[900] text-woa-white-300">
        {missionNumber}
      </span>
      <span
        className={cn(
          { "w-auto lg:w-[279px]": tight },
          "line-clamp-5 text-lg leading-normal lg:line-clamp-none lg:text-xl lg:leading-9",
        )}
      >
        {text}
      </span>
    </p>
  );
}
