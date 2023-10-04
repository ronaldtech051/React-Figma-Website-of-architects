import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

import image1 from "@/public/about/image1.jpg"
import image2 from "@/public/about/image2.jpg"
import image3 from "@/public/about/image3.jpg"

export default function About() {
  return (
    <section className="flex bg-woa-white-100 xl:mt-[120px] xl:h-[435px] xl:p-[30px] gap-[30px]">
      <div className="grid grid-flow-col grid-rows-2 grid-cols-2 gap-[30px] relative">
        <Image src={image1} width={270} height={265} alt="..."/>
        <Image src={image3} width={270} height={140}  className="xl:mt-[95px]" alt="..."/>
        <Image src={image2} width={270} height={345} alt="..."/>
      </div>
      <div className="w-[400px]">
        <h2 className="font-light text-woa-white-400 xl:text-[64px]">
          About
        </h2>
        <p className="text-base font-light leading-[25px] text-black">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <Button variant="white" className="xl:mt-[30px]">
          READ MORE &rarr;
        </Button>
      </div>
    </section>
  );
}
