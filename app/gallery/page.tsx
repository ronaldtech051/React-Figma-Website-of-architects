import PageTitle from "@/components/ui/PageTitle";
import React from "react";
import Image from "next/image";

const images = [
  {
    imageUrl: "/gallery/Rectangle 22.jpg",
  },
  {
    imageUrl: "/gallery/Rectangle 23.jpg",
  },
  {
    imageUrl: "/gallery/Rectangle 24.jpg",
  },
  {
    imageUrl: "/gallery/Rectangle 25.jpg",
  },
  {
    imageUrl: "/gallery/Rectangle 26.jpg",
  },
  {
    imageUrl: "/gallery/Rectangle 27.jpg",
  },
  {
    imageUrl: "/gallery/Rectangle 28.jpg",
  },
  {
    imageUrl: "/gallery/Rectangle 29.jpg",
  },
  {
    imageUrl: "/gallery/Rectangle 30.jpg",
  },
  {
    imageUrl: "/gallery/Rectangle 31.jpg",
  },

  {
    imageUrl: "/gallery/Rectangle 22.jpg",
  },
  {
    imageUrl: "/gallery/Rectangle 23.jpg",
  },
  {
    imageUrl: "/gallery/Rectangle 24.jpg",
  },
  {
    imageUrl: "/gallery/Rectangle 25.jpg",
  },
  {
    imageUrl: "/gallery/Rectangle 26.jpg",
  },
  {
    imageUrl: "/gallery/Rectangle 27.jpg",
  },
  {
    imageUrl: "/gallery/Rectangle 28.jpg",
  },
  {
    imageUrl: "/gallery/Rectangle 29.jpg",
  },
  {
    imageUrl: "/gallery/Rectangle 30.jpg",
  },
  {
    imageUrl: "/gallery/Rectangle 31.jpg",
  },
];

export default function Gallery() {
  return (
    <main className="w-full bg-white pb-[120px] pt-[64px] xl:px-[135px]">
      <PageTitle>Photo Gallery</PageTitle>
      <div className="mt-[64px] grid grid-cols-5 grid-rows-2 gap-[30px]">
        <>
          {images.map((item, index) => {
            return (
              <Image
                key={index}
                src={item.imageUrl}
                width={210}
                height={260}
                alt="..."
              />
            );
          })}
        </>
      </div>
    </main>
  );
}
