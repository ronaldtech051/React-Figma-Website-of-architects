"use client";

import PageButtons from "@/components/ui/PageButtons";
import PageTitle from "@/components/ui/PageTitle";
import { getPaginationInfo, paginate } from "@/lib/utils";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

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
    imageUrl: "/gallery/Rectangle 31.jpg",
  },
  {
    imageUrl: "/gallery/Rectangle 30.jpg",
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
    imageUrl: "/gallery/Rectangle 30.jpg",
  },
  {
    imageUrl: "/gallery/Rectangle 22.jpg",
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
    imageUrl: "/gallery/Rectangle 29.jpg",
  },
];

export default function Gallery() {
  const searchParams = useSearchParams();
  let p = searchParams.get("p") ?? 1;
  p = Number(p);

  const PER_PAGE = 10;
  const totalPages = Math.ceil(images.length / PER_PAGE);
  const { prevPage, nextPage } = getPaginationInfo(p, images.length, PER_PAGE);

  const gallery = paginate(images, p, PER_PAGE);
  return (
    <main className="w-full bg-white px-4 lg:pb-[120px] pb-[60px] lg:pt-[64px] xl:px-[135px] lg:px-16 md:px-12 pt-[32px]">
      <PageTitle>Photo Gallery</PageTitle>
      <div className="mt-[32px] grid grid-cols-2 border-t border-t-black/10 pt-[32px] lg:grid-cols-5 lg:grid-rows-2 lg:gap-[30px] md:grid-cols-3 md:gap-[54px]">
        <>
          {gallery.map((item, index) => {
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
      <PageButtons {...{ nextPage, prevPage, p, totalPages, url: "gallery" }} />
    </main>
  );
}
