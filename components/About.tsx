import React from "react";
import Button from "./ui/Button";

export default function About() {
  return (
    <section className="flex bg-woa-white-100 xl:mt-[150px]">
      <div className="w-[400px]">
        <h2 className="font-light text-woa-white-400 xl:text-[64px]">About</h2>
        <p className="text-base font-light leading-[25px] text-black">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <Button variant="white">READ MORE &rarr;</Button>
      </div>
    </section>
  );
}
