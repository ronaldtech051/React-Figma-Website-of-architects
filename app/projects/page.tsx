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
    <main className="w-full bg-white pb-[120px] pt-[64px] xl:px-[135px]">
      <PageTitle>Our Projects</PageTitle>
      <section className="border-t border-t-black/10 pt-[32px] mt-[32px] flex flex-col gap-[60px]">
        <>
          {paginatedProjects.map((item, index) => {
            return (
              <div key={index} className="flex flex-col xl:flex-row">
                <div className="relative xl:h-[435px] xl:w-[670px] ">
                  <Image src={item.imageUrl} alt={item.title} fill />
                </div>
                <div className="flex flex-col bg-woa-white-100 p-[30px] xl:gap-[64px]">
                  <h2 className="text-[40px] font-light text-woa-white-400">
                    {item.title}
                  </h2>
                  <p className="font-light xl:w-[400px]">{item.textPreview}</p>
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
