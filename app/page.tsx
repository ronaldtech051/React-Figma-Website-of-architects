import About from "@/components/About";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="h-[3000px] w-full bg-white xl:px-[135px]">
      <Hero />
      <About/>
      <Mission/>
      <Projects/>
    </main>
  );
}
