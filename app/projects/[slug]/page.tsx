import PageTitle from "@/components/ui/PageTitle";
import React from "react";

const htmlContent = `
<img src="/projects/project-content/image 33.jpg" alt="Full Width Image" style="width: 100%;">
<div class="clearfix">
  <img src="/projects/project-content/image 34.jpg" alt="Square Image" style="float: left; margin-right: 20px;">
  <p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.
  </p>
</div>
<img src="/projects/project-content/image 35.jpg" alt="Full Width Image" style="width: 100%;">

`;

export default function page() {
  return (
    <main className="w-full bg-white pb-[120px] pt-[64px] xl:px-[135px]">
      <PageTitle>Sample Project</PageTitle>
      <section
        className="mt-[60px] w-full flex gap-6 flex-col font-light"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></section>
    </main>
  );
}
