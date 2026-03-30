import type { Metadata } from "next";
import Accordion from "@/components/Accordion";
import PageHero from "@/components/sections/PageHero";
import ValuesGrid from "@/components/sections/ValuesGrid";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import { aboutSections } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how ZOE MENTORSHIP ENDEAVORS approaches mentorship, leadership development, and whole-person growth.",
};

export default function AboutPage() {
  const accordionItems = aboutSections.map((section) => ({
    title: section.title,
    content: <p>{section.content}</p>,
  }));

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Mentorship with structure, warmth, and clear outcomes."
        description="ZOE MENTORSHIP ENDEAVORS exists to help learners, leaders, and communities grow into disciplined, resilient, future-ready people."
        imageSrc="/images/about.jpg"
        imageAlt="Participants listening during a mentorship session"
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <SectionIntro
              eyebrow="Our Story"
              title="A clearer narrative for visitors and partner schools."
              description="The site now mirrors the heart of the organization more closely: mentorship that is practical, values-led, and responsive to the real needs of young people."
            />
            <p className="prose-copy text-base">
              We focus on helping participants discover purpose, strengthen leadership habits, build emotional
              resilience, and make healthy decisions that shape their future well.
            </p>
          </div>

          <Accordion items={accordionItems} />
        </Container>
      </section>

      <ValuesGrid />
    </>
  );
}
