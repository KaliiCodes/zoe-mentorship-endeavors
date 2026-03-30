import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import { contactMethods, siteConfig } from "@/content/site";

export const metadata: Metadata = {
 
  description:
    "Contact ZOE MENTORSHIP ENDEAVORS to plan a mentorship session, leadership workshop, or school-wide engagement.",
};

const iconMap = {
  mail: Mail,
  map: MapPin,
  phone: Phone,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start the conversation with ZOE MENTORSHIP ENDEAVORS."
        description="Tell us about your school, group, or mentorship need and we will help you plan the right next step."
        imageSrc="/images/contactus.jpg"
        imageAlt="Contact ZOE MENTORSHIP ENDEAVORS"
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <div className="surface-card rounded-4xl p-6 sm:p-8">
              <span className="section-eyebrow">Contact Details</span>
              <h2 className="mt-4 text-3xl font-semibold text-(--primary)">
                We would love to hear from you.
              </h2>
              <p className="mt-4 prose-copy text-sm sm:text-base">
                Reach out if you are planning a mentorship day, a leadership workshop, or a wellbeing-centered
                conversation for students and educators.
              </p>

              <div className="mt-8 space-y-4">
                {contactMethods.map((method) => {
                  const Icon = iconMap[method.icon];

                  return (
                    <a
                      key={method.title}
                      href={method.href}
                      className="flex items-start gap-4 rounded-[1.25rem] border border-(--border) bg-(--white) p-4 transition hover:bg-(--secondary-soft) hover:border-(--secondary) hover:shadow-sm"
                      rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-(--secondary-soft) text-(--secondary)">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-(--primary)">{method.title}</p>
                        <p className="mt-1 text-sm text-(--text-muted)">{method.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="surface-card rounded-4xl p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-(--secondary-soft) text-(--secondary)">
                  <Clock3 size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-(--primary)">Office hours</h3>
                  <p className="text-sm text-(--text-muted)">We respond as quickly as we can during the week.</p>
                </div>
              </div>

              <div className="mt-5 space-y-3 text-sm text-(--text-muted)">
                {siteConfig.contact.hours.map((entry) => (
                  <p key={entry}>{entry}</p>
                ))}
              </div>
            </div>
          </div>

          <ContactForm />
        </Container>
      </section>

      <section className="pb-6">
        <Container>
          <div className="surface-card overflow-hidden rounded-4xl">
            <iframe
              title="ZOE Mentorship Location"
              src="https://www.google.com/maps?q=Nairobi,Kenya&output=embed"
              width="100%"
              height="420"
              className="border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
