import { CalendarDays, Mic2, School, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import { activities } from "@/content/site";

const iconMap = {
  calendar: CalendarDays,
  mic: Mic2,
  school: School,
  sparkles: Sparkles,
};

export default function ActivitiesGrid() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionIntro
          eyebrow="Activities"
          title="Programs become memorable when people get to participate."
          description="These activities create movement, conversation, and accountability so the message does not end when the session closes."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {activities.map((activity) => {
            const Icon = iconMap[activity.icon];

            return (
              <article key={activity.title} className="surface-card rounded-[1.75rem] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--secondary-soft)] text-[var(--secondary)]">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-[var(--primary)]">{activity.title}</h3>
                <p className="mt-4 prose-copy text-sm">{activity.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
