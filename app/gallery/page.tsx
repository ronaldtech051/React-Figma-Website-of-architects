"use client";

import PageTitle from "@/components/ui/PageTitle";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
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
];

function paginate(array: Array<any>, p: number, perPage: number) {
  const start = (p - 1) * perPage;
  const end = start + perPage;

  // Slice the array to get the desired page
  const paginatedItems = array.slice(start, end);

  return paginatedItems;
}

function getPaginationInfo(
  currentPage: number,
  totalItems: number,
  perPage: number,
) {
  const totalPages = Math.ceil(totalItems / perPage);

  // Calculate previous and next page numbers
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return { prevPage, nextPage };
}

export default function Gallery() {
  const searchParams = useSearchParams();
  let p = searchParams.get("p") ?? 1;
  p = Number(p);

  const PER_PAGE = 10;
  const totalPages = Math.round(images.length / PER_PAGE);
  const { prevPage, nextPage } = getPaginationInfo(p, images.length, PER_PAGE);
  console.log({ prevPage, nextPage });

  const gallery = paginate(images, p, PER_PAGE);
  return (
    <main className="w-full bg-white pb-[120px] pt-[64px] xl:px-[135px]">
      <PageTitle>Photo Gallery</PageTitle>
      <div className="mt-[64px] grid grid-cols-5 grid-rows-2 gap-[30px]">
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
      <div className="mt-[60px] flex gap-6">
        <p className="flex items-center gap-8 text-[24px]">
          <span className="text-[#333]">{String(p).padStart(2, "0")}</span>
          <span className="text-5xl font-extralight text-[#e0e0e0]">/</span>
          <span className="text-woa-white-400">
            {String(totalPages).padStart(2, "0")}
          </span>
        </p>
        <Link
          className={cn(
            "h-[53px] w-[53px] border border-woa-white-300 bg-white p-[14px]",
            { "cursor-not-allowed bg-[#f9f9f9]": !prevPage },
          )}
          href={prevPage ? `/gallery/?p=${prevPage}` : ""}
          scroll={false}
        >
          &larr;
        </Link>
        <Link
          className={cn(
            "h-[53px] w-[53px] border border-woa-white-300 bg-white p-[14px]",
            { "cursor-not-allowed bg-[#f9f9f9]": !nextPage },
          )}
          href={nextPage ? `/gallery/?p=${nextPage}` : ""}
          scroll={false}
        >
          &rarr;
        </Link>
      </div>
    </main>
  );
}
