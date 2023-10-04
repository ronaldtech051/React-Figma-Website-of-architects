import About from "@/components/About";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";

export default function Home() {
  return (
    <main className="h-[2000px] w-full bg-white xl:px-[135px]">
      <Hero />
      <About/>
      <Mission/>
    </main>
  );
}
