import Hero from "@/app/sections/Hero/Hero";
import SummaryCards from "@/components/SummaryCards";
import Programs from "./sections/Programs/Programs";


export default function Home() {
  return (
    <main>
      <Hero />
      <SummaryCards/>
      <Programs/>
    </main>
  );
}
