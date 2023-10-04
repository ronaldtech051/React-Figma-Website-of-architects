import { cn } from "@/lib/utils";
import React from "react";

export default function Mission() {
  return (
    <section className="xl:mt-[120px]">
      <h2 className="text-[64px] font-light text-woa-white-400 leading-normal">
        Main Focus/Mission Statement
      </h2>
      <div className="grid grid-cols-2 xl:mt-[62px] content-start">
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
    <p className="flex h-[140px] items-center  gap-[30px]">
      <span className="text-[200px] font-[900] text-woa-white-300">
        {missionNumber}
      </span>
      <span className={cn({ "xl:w-[279px]": tight }, "text-[20px] leading-9")}>
        {text}
      </span>
    </p>
  );
}
