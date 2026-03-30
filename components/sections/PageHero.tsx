import Image from "next/image";
import Container from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <section className="dark-section relative isolate overflow-hidden">
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-22"
          />
          <div className="absolute inset-0 dark-overlay" />
        </>
      ) : (
        <div className="hero-accent absolute inset-0" />
      )}

      <Container className="relative z-10 py-18 sm:py-22 lg:py-26">
        <div className="max-w-3xl space-y-5">
          <span className="section-eyebrow">{eyebrow}</span>
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--white)] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[var(--text-on-dark-muted)] sm:text-lg">{description}</p>
        </div>
      </Container>
    </section>
  );
}
