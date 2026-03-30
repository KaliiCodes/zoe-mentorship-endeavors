import { Award, Heart, Shield, Sparkles, Star, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import { coreValues } from "@/content/site";

const iconMap = {
  award: Award,
  heart: Heart,
  shield: Shield,
  sparkles: Sparkles,
  star: Star,
  users: Users,
};

export default function ValuesGrid() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionIntro
          eyebrow="Core Values"
          title="The tone of the work matters as much as the content."
          description="These values shape how we show up, how we teach, and how we want participants to experience each session."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {coreValues.map((value) => {
            const Icon = iconMap[value.icon];

            return (
              <article key={value.title} className="surface-card rounded-[1.75rem] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--secondary-soft)] text-[var(--secondary)]">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-[var(--primary)]">{value.title}</h3>
                <p className="mt-4 prose-copy text-sm">{value.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
