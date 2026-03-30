import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { navigationItems, siteConfig } from "@/content/site";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-[var(--border)] bg-[var(--primary)] text-[var(--text-on-dark)]">
      <Container className="grid gap-10 py-12 lg:grid-cols-[1.2fr_.8fr_.8fr]">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-[var(--white)]">{siteConfig.organization}</h2>
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--secondary)]">{siteConfig.tagline}</p>
          <p className="max-w-xl text-sm leading-7 text-[var(--text-on-dark-muted)] sm:text-base">
            {siteConfig.description}
          </p>
          <Link
            className="inline-flex items-center gap-2 font-semibold text-[var(--secondary)] transition hover:text-[var(--white)]"
            href={siteConfig.contactCta.href}
          >
            Contact the team
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[var(--white)]">Explore</h3>
          <div className="flex flex-col gap-3 text-sm text-[var(--text-on-dark-muted)]">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[var(--secondary)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[var(--white)]">Contact</h3>
          <div className="space-y-3 text-sm text-[var(--text-on-dark-muted)]">
            <a className="flex items-center gap-3 transition hover:text-[var(--secondary)]" href={siteConfig.contact.emailHref}>
              <Mail size={16} className="text-[var(--secondary)]" />
              {siteConfig.contact.email}
            </a>
            <a className="flex items-center gap-3 transition hover:text-[var(--secondary)]" href={siteConfig.contact.phoneHref}>
              <Phone size={16} className="text-[var(--secondary)]" />
              {siteConfig.contact.phoneDisplay}
            </a>
            <a
              className="flex items-center gap-3 transition hover:text-[var(--secondary)]"
              href={siteConfig.contact.locationHref}
              rel="noreferrer"
              target="_blank"
            >
              <MapPin size={16} className="text-[var(--secondary)]" />
              {siteConfig.contact.locationLabel}
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-[var(--secondary-border)]">
        <Container className="flex flex-col gap-3 py-4 text-sm text-[var(--text-on-dark-subtle)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            {currentYear} {siteConfig.organization}. All rights reserved.
          </p>
          <p>{siteConfig.tagline}</p>
        </Container>
      </div>
    </footer>
  );
}
