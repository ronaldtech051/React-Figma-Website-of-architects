import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

import image1 from "@/public/about/image1.jpg";
import image2 from "@/public/about/image2.jpg";
import image3 from "@/public/about/image3.jpg";

export default function About() {
  return (
    <section className="mx-4 mt-[60px] flex h-auto gap-[30px] bg-woa-white-100 md:p-8 p-4 md:mx-16 md:h-[380px] lg:mx-0 lg:h-[435px] xl:mt-[120px] xl:p-[30px]">
      <div className="relative hidden grid-flow-col grid-cols-2 grid-rows-2 gap-6 md:grid lg:gap-[30px] xl:pl-[70px]">
        <Image src={image1} width={270} height={265} alt="..." />
        <Image
          src={image3}
          width={270}
          height={140}
          className="mt-0 lg:mt-[50px] xl:mt-[95px]"
          alt="..."
        />
        <Image
          src={image2}
          width={270}
          height={345}
          className="md:mt-[30px]"
          alt="..."
        />
      </div>
      <div className="w-full md:w-1/2 xl:w-[400px] xl:pr-[10px]">
        <h2 className="pb-4 text-6xl text-[46px] font-light leading-none text-woa-white-400 lg:text-[64px]">
          About
        </h2>
        <p className="line-clamp-6 text-base font-light leading-[25px] text-black lg:line-clamp-none">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <Button variant="white" className="mt-6 xl:mt-[48px]">
          READ MORE &rarr;
        </Button>
      </div>
    </section>
  );
}
