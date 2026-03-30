type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionIntroProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-3xl space-y-4 ${alignment}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--primary)] sm:text-4xl">
        {title}
      </h2>
      <p className="prose-copy text-base sm:text-lg">{description}</p>
    </div>
  );
}
