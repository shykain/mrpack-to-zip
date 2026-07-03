import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What is a .mrpack file?",
    answer:
      "A .mrpack file is Modrinth's modpack format for Minecraft. It contains a special index file that lists all the mods in the pack along with their metadata and download information.",
  },
  {
    question: "Why would I need to convert to ZIP?",
    answer:
      "Some Minecraft launchers or mod managers might not directly support the .mrpack format. Converting to a standard ZIP allows you to use these mods with any launcher that supports regular ZIP files.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes, all processing happens entirely in your browser. Your files are never uploaded to any server, ensuring complete privacy and security.",
  },
  {
    question: "What happens to the mod metadata?",
    answer:
      'By default, we include the original modrinth.index.json file in the output ZIP. You can choose to exclude it if you don\'t need the metadata in your converted file by toggling the "Include index file" option.',
  },
  {
    question: "Can I use this tool offline?",
    answer:
      'This web tool requires an internet connection to load initially. If you enable the "Download mod files" option, it will also need internet access to download the referenced mod files. However, basic file processing happens locally. For a fully offline solution, consider command-line tools like packwiz or specialized mod managers.',
  },
  {
    question: 'What does the "Download mod files" option do?',
    answer:
      'When enabled, this option will download all mod files referenced in the modrinth.index.json and include them in the output ZIP. This creates a complete, ready-to-use mod pack that works with launchers that don\'t support the .mrpack format. Without this option, the output ZIP will only contain files that were already in the .mrpack file (typically just configuration files and resource packs).',
  },
];

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
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <Section id="faq">
      <div className="container">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about converting MRPACK files to ZIP."
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((item, idx) => (
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
