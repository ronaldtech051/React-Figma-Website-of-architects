"use client";

import Button from "@/components/ui/Button";
import PageTitle from "@/components/ui/PageTitle";
import React from "react";
import Image from "next/image";
import { getPaginationInfo, paginate } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import PageButtons from "@/components/ui/PageButtons";

const projects = [
  {
    slug: "sample-project-1",
    title: "Sample Project 1",
    textPreview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo eum quam, totam beatae voluptatem voluptas aspernatur ab, numquam obcaecati saepe illum? Doloribus, assumenda nobis perspiciatis accusantium nemo laboriosam laborum magnam.",
    imageUrl: "/projects/items/image 30.jpg",
  },
  {
    slug: "sample-project-2",
    title: "Sample Project 2",
    textPreview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo eum quam, totam beatae voluptatem voluptas aspernatur ab, numquam obcaecati saepe illum? Doloribus, assumenda nobis perspiciatis accusantium nemo laboriosam laborum magnam.",
    imageUrl: "/projects/items/image 33.jpg",
  },
  {
    slug: "sample-project-3",
    title: "Sample Project 3",
    textPreview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo eum quam, totam beatae voluptatem voluptas aspernatur ab, numquam obcaecati saepe illum? Doloribus, assumenda nobis perspiciatis accusantium nemo laboriosam laborum magnam.",
    imageUrl: "/projects/items/image 32.jpg",
  },
  {
    slug: "sample-project-4",
    title: "Sample Project 4",
    textPreview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo eum quam, totam beatae voluptatem voluptas aspernatur ab, numquam obcaecati saepe illum? Doloribus, assumenda nobis perspiciatis accusantium nemo laboriosam laborum magnam.",
    imageUrl: "/projects/items/image 32.jpg",
  },
  {
    slug: "sample-project-5",
    title: "Sample Project 5",
    textPreview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo eum quam, totam beatae voluptatem voluptas aspernatur ab, numquam obcaecati saepe illum? Doloribus, assumenda nobis perspiciatis accusantium nemo laboriosam laborum magnam.",
    imageUrl: "/projects/items/image 32.jpg",
  },
  {
    slug: "sample-project-6",
    title: "Sample Project 6",
    textPreview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo eum quam, totam beatae voluptatem voluptas aspernatur ab, numquam obcaecati saepe illum? Doloribus, assumenda nobis perspiciatis accusantium nemo laboriosam laborum magnam.",
    imageUrl: "/projects/items/image 32.jpg",
  },
  {
    slug: "sample-project-7",
    title: "Sample Project 7",
    textPreview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo eum quam, totam beatae voluptatem voluptas aspernatur ab, numquam obcaecati saepe illum? Doloribus, assumenda nobis perspiciatis accusantium nemo laboriosam laborum magnam.",
    imageUrl: "/projects/items/image 33.jpg",
  },
  {
    slug: "sample-project-8",
    title: "Sample Project 8",
    textPreview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo eum quam, totam beatae voluptatem voluptas aspernatur ab, numquam obcaecati saepe illum? Doloribus, assumenda nobis perspiciatis accusantium nemo laboriosam laborum magnam.",
    imageUrl: "/projects/items/image 33.jpg",
  },
  {
    slug: "sample-project-9",
    title: "Sample Project 9",
    textPreview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo eum quam, totam beatae voluptatem voluptas aspernatur ab, numquam obcaecati saepe illum? Doloribus, assumenda nobis perspiciatis accusantium nemo laboriosam laborum magnam.",
    imageUrl: "/projects/items/image 33.jpg",
  },
  {
    slug: "sample-project-10",
    title: "Sample Project 10",
    textPreview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo eum quam, totam beatae voluptatem voluptas aspernatur ab, numquam obcaecati saepe illum? Doloribus, assumenda nobis perspiciatis accusantium nemo laboriosam laborum magnam.",
    imageUrl: "/projects/items/image 30.jpg",
  },
];

export default function Page() {
  const searchParams = useSearchParams();
  let p = searchParams.get("p") ?? 1;
  p = Number(p);

  const PER_PAGE = 3;
  const totalPages = Math.ceil(projects.length / PER_PAGE);
  const { prevPage, nextPage } = getPaginationInfo(
    p,
    projects.length,
    PER_PAGE,
  );

  const paginatedProjects = paginate(projects, p, PER_PAGE);
  return (
    <main className="w-full bg-white px-4 pb-[120px] pt-[32px] lg:px-[135px] lg:pt-[64px] ">
      <PageTitle>Our Projects</PageTitle>
      <section className="mt-[32px] flex flex-col xl:gap-[60px] gap-[32px] border-t border-t-black/10 pt-[32px]">
        <>
          {paginatedProjects.map((item, index) => {
            return (
              <div key={index} className="flex flex-col md:flex-row">
                <div className="relative h-[218px] md:h-[320px] md:w-1/2 xl:h-[435px] lg:h-[360px] lg:w-[670px] ">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col gap-4 bg-woa-white-100 p-4 md:w-1/2 md:p-[30px] xl:gap-[64px] ">
                  <h2 className="text-[40px] font-light leading-none text-woa-white-400 xl:leading-normal">
                    {item.title}
                  </h2>
                  <p className="line-clamp-5 font-light xl:w-[400px]">
                    {item.textPreview}
                  </p>
                  <Button
                    variant="white"
                    type="link"
                    href={`/projects/${item.slug}`}
                  >
                    VIEW MORE &rarr;
                  </Button>
                </div>
              </div>
            );
          })}
        </>
      </section>
      <PageButtons
        {...{
          prevPage,
          nextPage,
          totalPages,
          p,
          url: "projects",
          scroll: true,
        }}
      ></PageButtons>
    </main>
  );
}
