"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { heroStats, siteConfig } from "@/content/site";

const heroSlides = [
  {
    src: "/images/zoeh1.jpg",
    alt: "Mentorship participants during a session",
  },
  {
    src: "/images/about.jpg",
    alt: "Audience during a mentorship event",
  },
  {
    src: "/images/zoeh2.jpg",
    alt: "Learners gathered during an activity",
  },
];

export default function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="dark-section relative isolate min-h-[78vh] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 dark-overlay" />
      <div className="hero-accent absolute inset-0" />

      <Container className="relative z-10 flex min-h-[78vh] flex-col items-center justify-center py-20 text-center">
        <div className="max-w-4xl space-y-6">
          <span className="section-eyebrow">{siteConfig.tagline}</span>
          <h1 className="text-5xl font-semibold leading-tight text-[var(--white)] sm:text-6xl lg:text-7xl">
            Mentorship that shapes disciplined, resilient, future-ready leaders.
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-8 text-[var(--text-on-dark-muted)] sm:text-lg">
            ZOE MENTORSHIP ENDEAVORS partners with schools and communities to deliver mentorship,
            leadership, and wellbeing experiences that stay with people long after the session ends.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link className="button-primary" href={siteConfig.secondaryCta.href}>
            {siteConfig.secondaryCta.label}
            <ArrowRight size={18} />
          </Link>
          <Link className="button-secondary" href={siteConfig.contactCta.href}>
            {siteConfig.contactCta.label}
          </Link>
        </div>

        <div className="mt-12 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--hero-stat-bg)] px-5 py-5 shadow-lg"
            >
              <p className="text-3xl font-semibold text-[var(--primary)]">{stat.value}</p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
