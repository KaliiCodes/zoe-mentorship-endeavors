import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import { homeHighlights } from "@/content/site";

export default function HighlightsSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionIntro
          eyebrow="What We Do"
          title="Clear pathways for schools, leaders, and communities."
          description="The site works best when it mirrors the same clarity as the programs. These quick pathways make it easier for visitors to understand where to go next."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {homeHighlights.map((highlight) => (
            <article key={highlight.title} className="surface-card rounded-[1.75rem] p-7">
              <h3 className="text-2xl font-semibold text-[var(--primary)]">{highlight.title}</h3>
              <p className="mt-4 prose-copy text-sm sm:text-base">{highlight.description}</p>
              <Link
                href={highlight.href}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--primary)] transition hover:text-[var(--secondary)]"
              >
                Learn more
                <ArrowUpRight size={18} />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
