import Carousel from "./ui/Carousel";

export default function Hero() {
  return (
    <div className="mx-4 flex flex-col justify-between gap-6 pt-4 md:mx-16 md:mt-0 md:flex-row lg:mx-0 lg:w-full">
      <div className="flex flex-col justify-end">
        <h1 className="text-[46px] leading-[46px] lg:w-[278px] lg:text-[64px] lg:leading-[64px] md:w-auto w-0">
          <span className="font-light text-woa-white-400">PROJECT</span>{" "}
          <span className="font-bold text-woa-black-700">Lorum</span>
        </h1>
        <div className="md:h-[140px] lg:h-[280px] xl:h-[380px] h-[120px]"></div>
      </div>
      <Carousel />
    </div>
  );
}
