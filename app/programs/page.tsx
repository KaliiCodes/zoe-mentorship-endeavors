import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ProgramGrid from "@/components/sections/ProgramGrid";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore the mentorship, leadership, and wellbeing programs available through ZOE MENTORSHIP ENDEAVORS.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Mentorship programs designed for meaningful change."
        description="Each offer is built to help schools and student leaders address real challenges while building confidence, discipline, and future focus."
      />
      <ProgramGrid showTopics />
      <section className="pb-6">
        <Container>
          <div className="surface-card rounded-[2rem] px-6 py-8 text-center sm:px-10">
            <p className="text-lg font-semibold text-[var(--primary)] sm:text-xl">
              Ready to tailor a program for your school or group?
            </p>
            <a
              href={siteConfig.contact.emailHref}
              className="button-primary mt-4"
            >
              Reach out by email
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
