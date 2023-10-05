import Button from "@/components/ui/Button";
import PageTitle from "@/components/ui/PageTitle";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("../../components/ui/Map"), {
  ssr: false,
});

export default function page() {
  return (
    <main className="relative flex w-full flex-col overflow-hidden bg-white lg:pb-[120px] pb-[64px] lg:pt-[64px] pt-[32px] lg:h-[700px] lg:flex-row lg:px-[135px]">
      <section className="flex flex-col lg:gap-8 gap-4 lg:mt-[64px] px-4 pb-8">
        <PageTitle>Contact Information</PageTitle>
        <p className="text-base font-light first-line:text-[18px] first-line:font-bold">
          Company Name<br></br>
          1234 Sample Street Austin Texas 76401
        </p>
        <p className="text-[18px] font-bold">512.333.2222</p>
        <p className="font-light">sampleemail@gmail.com</p>
        <Button variant="black">CONTACT US</Button>
      </section>
      <section className="right-0 h-[504px] w-[790px] overflow-hidden border border-black lg:absolute">
        <MapComponent />
      </section>
    </main>
  );
}
