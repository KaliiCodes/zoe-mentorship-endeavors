"use client";

import { type ReactNode, useId, useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: string;
  content: ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({ title, content, isOpen, onClick }: AccordionItemProps) => {
  const panelId = useId();

  return (
    <div className="surface-card overflow-hidden rounded-[1.5rem]">
      <button
        type="button"
        className="flex w-full items-center justify-between px-5 py-4 text-left text-lg font-semibold text-[var(--primary)] transition hover:bg-[var(--primary-soft)]"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onClick}
      >
        <span>{title}</span>
        <ChevronDown
          size={20}
          className={`transition-transform ${isOpen ? "rotate-180 text-[var(--secondary)]" : "text-[var(--text-muted)]"}`}
        />
      </button>
      <div
        id={panelId}
        hidden={!isOpen}
        className="border-t border-[var(--border)] px-5 py-4 text-sm leading-7 text-[var(--text-muted)]"
      >
        {content}
      </div>
    </div>
  );
};

interface AccordionProps {
  items: {
    title: string;
    content: ReactNode;
  }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          title={item.title}
          content={item.content}
          isOpen={openIndex === idx}
          onClick={() => handleClick(idx)}
        />
      ))}
    </div>
  );
}
