import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

function FaqRow({ item, isOpen, onToggle }: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "pixel-card overflow-hidden transition-all",
        isOpen && "border-grass-400/50",
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-cream-100 text-sm sm:text-base">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-grass-300 shrink-0 transition-transform duration-300",
            isOpen && "rotate-180",
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm text-cream-200/60 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const { t } = useTranslation();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = t("faq.items", { returnObjects: true }) as FaqItem[];

  return (
    <Section id="faq">
      <div className="container">
        <SectionHeader
          eyebrow={t("faq.eyebrow")}
          title={t("faq.title")}
          description={t("faq.description")}
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((item, idx) => (
            <FaqRow
              key={idx}
              item={item}
              isOpen={openIdx === idx}
              onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
