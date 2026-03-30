"use client";

import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { contactSchema, type ContactFormValues } from "@/lib/validation/contact";

type FormErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof ContactFormValues, value: string) {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const nextErrors: FormErrors = {};

      for (const issue of result.error.issues) {
        const field = issue.path[0];

        if (typeof field === "string" && nextErrors[field as keyof ContactFormValues] === undefined) {
          nextErrors[field as keyof ContactFormValues] = issue.message;
        }
      }

      setErrors(nextErrors);
      toast.error("Please review the highlighted fields and try again.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result.data),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? "We could not send your message.");
      }

      toast.success(payload.message ?? "Message received. We will be in touch soon.");
      setFormData(initialValues);
      setErrors({});
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong while sending your message.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card rounded-[2rem] p-6 sm:p-8">
      <div className="space-y-2">
        <span className="section-eyebrow">Contact Form</span>
        <h2 className="text-3xl font-semibold text-[var(--primary)]">Tell us what you need.</h2>
        <p className="prose-copy text-sm sm:text-base">
          Share a little context and we will respond with the best next step for your school or group.
        </p>
      </div>

      <div className="mt-8 space-y-5">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-[var(--text-primary)]">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--white)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--focus-ring)]"
          />
          {errors.name ? (
            <p id="name-error" className="text-sm text-[var(--primary)]">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-[var(--text-primary)]">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--white)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--focus-ring)]"
          />
          {errors.email ? (
            <p id="email-error" className="text-sm text-[var(--primary)]">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-semibold text-[var(--text-primary)]">
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={(event) => updateField("message", event.target.value)}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--white)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--focus-ring)]"
          />
          {errors.message ? (
            <p id="message-error" className="text-sm text-[var(--primary)]">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="button-primary mt-8 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle size={18} className="animate-spin" />
            Sending your message
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}
