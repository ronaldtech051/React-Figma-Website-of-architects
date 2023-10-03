import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex w-full xl:justify-between">
      <div className="flex flex-col justify-end">
        <h1 className="leading-[64px] xl:w-[278px] xl:text-[64px]">
          <span className="font-light text-woa-white-400">PROJECT</span>{" "}
          <span className="font-bold text-woa-black-700 xl:text-[64px]">
            Lorum
          </span>
        </h1>
        <div className="h-[361px]"></div>
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
    <div className="relative xl:h-[829px] xl:w-[770px]">
      <Image src={imageUrl} alt={alt} fill objectFit="cover" />
      <a
        href="#"
        className="absolute bottom-0 left-0 flex items-center justify-center bg-white text-xs text-woa-black-700 xl:h-[71px] xl:w-[222px] tracking-[.25em]"
      >
        VIEW PROJECT &rarr;
      </a>
    </div>
  );
}
