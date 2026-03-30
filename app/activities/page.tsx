import type { Metadata } from "next";
import ActivitiesGrid from "@/components/sections/ActivitiesGrid";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "See the interactive activities and learning formats ZOE MENTORSHIP ENDEAVORS uses to make mentorship practical and memorable.",
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Activities"
        title="Interactive formats that move people from listening to action."
        description="Our activities are built to keep learners engaged, reflective, and ready to apply what they have heard."
        imageSrc="/images/zoeh2.jpg"
        imageAlt="Learners gathered during an activity session"
      />
      <ActivitiesGrid />
      <section className="pb-6">
        <Container>
          <div className="surface-card rounded-4xl px-6 py-8 text-center">
            <p className="text-lg font-semibold text-(--primary) sm:text-xl">
              Pair these activities with a program for stronger follow-through and better engagement.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
