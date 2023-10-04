import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="w-full bg-white xl:px-[135px] pb-[120px]">
      <Hero />
      <About />
      <Mission />
      <Projects />
      <Contact />
    </main>
  );
}
