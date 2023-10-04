import React from "react";
import Image from "next/image";
import image from "@/public/contact/image.jpg";
import Button from "./ui/Button";

export default function Contact() {
  return (
    <div className="xl:mt-[120px]">
      <h2 className="font-light leading-none text-woa-white-400 xl:text-[64px] ">
        Contact Us
      </h2>
      <div className="mt-[22px] flex gap-[30px]">
        <form action="" className="flex flex-col gap-[10px]">
          <input
            type="text"
            className="h-[46px] w-[391px] bg-woa-white-200 pl-[21px] placeholder:text-[#8d8d8d]"
            placeholder="Name"
          />
          <input
            type="text"
            className="h-[46px] w-[391px] bg-woa-white-200 pl-[21px] placeholder:text-[#8d8d8d] placeholder:first-line:text-[red]"
            placeholder="Phone Number *"
          />
          <input
            type="text"
            className="h-[46px] w-[391px] bg-woa-white-200 pl-[21px] placeholder:text-[#8d8d8d]"
            placeholder="E-mail *"
          />
          <input
            type="text"
            className="h-[46px] w-[391px] bg-woa-white-200 pl-[21px] placeholder:text-[#8d8d8d]"
            placeholder="Interested In"
          />
          <textarea
            name=""
            className="h-[147px] w-[391px] resize-none bg-woa-white-200 pl-[21px] pt-[14px]"
            placeholder="Message *"
          ></textarea>
          <Button variant="black" className="xl:mt-[77px]">
            SEND EMAIL &rarr;
          </Button>
        </form>
        <div className="relative h-[369px] w-[749px]">
          <Image
            src={image}
            alt="Guy holding a phone to his ear"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
