"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import Container from "@/components/ui/Container";
import { navigationItems, siteConfig } from "@/content/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--white)] backdrop-blur">
      <div className="border-b border-[var(--border)] bg-[var(--white)]">
        <Container className="flex items-center justify-between gap-4 py-4 lg:py-5">
          <Link className="flex min-w-0 items-center gap-3" href="/">
            <Image
              src="/images/zoe-logo.jpg"
              alt={`${siteConfig.organization} logo`}
              width={56}
              height={56}
              className="rounded-full border-2 border-[var(--secondary)] object-cover shadow-lg"
            />
            <div className="min-w-0">
              <p className="truncate text-lg font-semibold tracking-[0.08em] text-[var(--primary)] sm:text-xl lg:text-2xl">
                {siteConfig.organization}
              </p>
              <p className="truncate text-[0.72rem] uppercase tracking-[0.3em] text-[var(--text-muted)] sm:text-xs">
                {siteConfig.tagline}
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[var(--primary)] text-[var(--white)]"
                      : "text-[var(--text-primary)] hover:bg-[var(--primary-soft)] hover:text-[var(--primary)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--primary)] text-[var(--white)] transition hover:bg-[var(--primary-dark)] lg:hidden"
            onClick={() => setIsMenuOpen((previous) => !previous)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </Container>
      </div>

      {isMenuOpen ? (
        <div className="border-b border-[var(--border)] bg-[var(--white)] lg:hidden">
          <Container className="space-y-4 py-4">
            <nav className="flex flex-col gap-2">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-base font-semibold transition ${
                      isActive
                        ? "bg-[var(--primary)] text-[var(--white)]"
                        : "text-[var(--text-primary)] hover:bg-[var(--primary-soft)] hover:text-[var(--primary)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </Container>
        </div>
      ) : null}

      <div className="bg-[var(--primary)]">
        <Container className="flex flex-col gap-3 py-3 text-sm text-[var(--text-on-dark)] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <a className="inline-flex items-center gap-2 transition hover:text-[var(--secondary)]" href={siteConfig.contact.emailHref}>
              <Mail size={16} className="text-[var(--secondary)]" />
              {siteConfig.contact.email}
            </a>
            <a className="inline-flex items-center gap-2 transition hover:text-[var(--secondary)]" href={siteConfig.contact.phoneHref}>
              <Phone size={16} className="text-[var(--secondary)]" />
              {siteConfig.contact.phoneDisplay}
            </a>
            <a
              className="inline-flex items-center gap-2 transition hover:text-[var(--secondary)]"
              href={siteConfig.contact.locationHref}
              rel="noreferrer"
              target="_blank"
            >
              <MapPin size={16} className="text-[var(--secondary)]" />
              {siteConfig.contact.locationLabel}
            </a>
          </div>
          <p className="text-[var(--text-on-dark-subtle)]">{siteConfig.contact.hours[0]}</p>
        </Container>
      </div>
    </header>
  );
}
