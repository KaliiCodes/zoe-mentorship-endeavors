import type { Metadata } from "next";
import ActivitiesGrid from "@/components/sections/ActivitiesGrid";
import HighlightsSection from "@/components/sections/HighlightsSection";
import HomeHero from "@/components/sections/HomeHero";
import ProgramGrid from "@/components/sections/ProgramGrid";
import ValuesGrid from "@/components/sections/ValuesGrid";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Mentorship, leadership, and wellbeing programs for schools and communities through ZOE MENTORSHIP ENDEAVORS.",
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HighlightsSection />
      <ProgramGrid limit={3} />
      <ActivitiesGrid />
      <ValuesGrid />
    </>
  );
}
