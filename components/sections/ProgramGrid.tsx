import { BookCheck, Brain, HeartHandshake, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import { mentorshipTopics, programs } from "@/content/site";

const iconMap = {
  book: BookCheck,
  brain: Brain,
  handshake: HeartHandshake,
  users: Users,
};

type ProgramGridProps = {
  limit?: number;
  showTopics?: boolean;
};

export default function ProgramGrid({ limit, showTopics = false }: ProgramGridProps) {
  const visiblePrograms = typeof limit === "number" ? programs.slice(0, limit) : programs;

  return (
    <section className="py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionIntro
          eyebrow="Programs"
          title="Structured sessions built for real growth."
          description="These programs are designed to meet students and leaders where they are, while still pushing them toward maturity, discipline, and healthy vision."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {visiblePrograms.map((program) => {
            const Icon = iconMap[program.icon];

            return (
              <article
                key={program.title}
                className="surface-card rounded-[1.75rem] border-t-4 border-[var(--secondary)] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--secondary-soft)] text-[var(--secondary)]">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-[var(--primary)]">{program.title}</h3>
                <p className="mt-4 prose-copy text-sm">{program.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--text-muted)]">
                  {program.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--secondary)]" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {showTopics ? (
          <div className="surface-card rounded-[2rem] p-8">
            <SectionIntro
              eyebrow="School Topics"
              title="The mentorship themes that carry across our sessions."
              description="We repeat the big ideas that schools ask for most often so the growth is practical, memorable, and easy to reinforce after the event."
            />
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {mentorshipTopics.map((topic) => (
                <div
                  key={topic}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--white)] px-4 py-4 text-sm font-medium text-[var(--text-primary)]"
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
