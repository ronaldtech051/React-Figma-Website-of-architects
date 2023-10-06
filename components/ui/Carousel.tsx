"use client";

import { cn } from "@/lib/utils";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
  });

  return (
    <>
      <div ref={sliderRef} className="keen-slider lg:ml-[55px] xl:ml-[110px]">
        <CarouselItem
          imageUrl="/projects/item1.jpg"
          alt="..."
          slug="some-slug"
          className="keen-slider__slide"
        />
        <CarouselItem
          imageUrl="/projects/item1.jpg"
          alt="..."
          slug="some-slug"
          className="keen-slider__slide"
        />
      </div>
      <div className="absolute mt-[120px] md:mt-[290px] lg:mt-[380px] xl:mt-[540px]">
        <button
          className="h-[53px] w-[53px] border border-woa-white-300 bg-white p-[14px] "
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
        >
          &larr;
        </button>
        <button
          className="ml-6 h-[53px] w-[53px] border border-woa-white-300 bg-white p-[14px]"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
        >
          &rarr;
        </button>
        <p className="flex items-center gap-8 text-lg md:mt-6 lg:mt-16 lg:text-[24px] xl:mt-24">
          <span className="text-[#333]">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>
          <span className="text-4xl font-extralight text-[#e0e0e0] lg:text-5xl">
            /
          </span>
          <span className="text-woa-white-400">
            {String(2).padStart(2, "0")}
          </span>
        </p>
      </div>
    </>
  );
}

function CarouselItem({
  slug,
  imageUrl,
  alt,
  className,
}: {
  slug: string;
  imageUrl: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        className,
        "relative h-[410px] w-auto md:w-[410px] lg:h-[580px] lg:w-[580px] xl:h-[829px] xl:w-[770px]",
      )}
    >
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className="object-cover"
        sizes="70vw"
        priority
      />
      <Button absolute variant="white">
        VIEW PROJECT &rarr;
      </Button>
    </div>
  );
}
