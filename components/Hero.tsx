import React from "react";
import Image from "next/image";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <div className="mx-4 flex flex-col justify-between gap-6 md:mx-16 md:w-full md:flex-row lg:mx-0 md:mt-0 pt-4">
      <div className="flex flex-col justify-end">
        <h1 className="text-[46px] leading-[46px] lg:w-[278px] lg:text-[64px] lg:leading-[64px]">
          <span className="font-light text-woa-white-400">PROJECT</span>{" "}
          <span className="font-bold text-woa-black-700">Lorum</span>
        </h1>
        <div className="md:h-[140px] lg:h-[280px] xl:h-[361px]"></div>
      </div>
      <div>
        <CarouselItem
          imageUrl="/projects/item1.jpg"
          alt="..."
          slug="some-slug"
        />
      </div>
    </div>
  );
}

function CarouselItem({
  slug,
  imageUrl,
  alt,
}: {
  slug: string;
  imageUrl: string;
  alt: string;
}) {
  return (
    <div className="relative h-[410px] md:w-[410px]  lg:h-[580px] lg:w-[580px] xl:h-[829px] xl:w-[770px] ">
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className="object-cover"
        sizes="70vw"
      />
      <Button absolute variant="white">
        VIEW PROJECT &rarr;
      </Button>
    </div>
  );
}
