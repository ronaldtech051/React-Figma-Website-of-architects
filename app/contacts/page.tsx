import Button from "@/components/ui/Button";
import PageTitle from "@/components/ui/PageTitle";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("../../components/ui/Map"), {
  ssr: false,
});

export default function page() {
  return (
    <main className="relative flex w-full flex-col overflow-hidden bg-white pb-[120px] pt-[64px] xl:h-[700px] xl:flex-row xl:px-[135px]">
      <section className="flex flex-col gap-8 xl:mt-[64px]">
        <PageTitle>Contact Information</PageTitle>
        <p className="text-base font-light first-line:text-[18px] first-line:font-bold">
          Company Name<br></br>
          1234 Sample Street Austin Texas 76401
        </p>
        <p className="text-[18px] font-bold">512.333.2222</p>
        <p className="font-light">sampleemail@gmail.com</p>
        <Button variant="black">CONTACT US</Button>
      </section>
      <section className="right-0 h-[504px] w-[790px] overflow-hidden border border-black xl:absolute">
        <MapComponent />
      </section>
    </main>
  );
}
