import { useTranslation } from "react-i18next";
import { ShieldCheck, Lock, Server, BarChart3, FileText, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function Privacy() {
  const { t } = useTranslation();

  const sections = [
    {
      icon: Lock,
      title: t("privacy.localProcessingTitle"),
      text: t("privacy.localProcessingText"),
    },
    {
      icon: ShieldCheck,
      title: t("privacy.dataCollectionTitle"),
      text: t("privacy.dataCollectionText"),
    },
    {
      icon: Server,
      title: t("privacy.thirdPartyTitle"),
      text: t("privacy.thirdPartyText"),
    },
    {
      icon: BarChart3,
      title: t("privacy.analyticsTitle"),
      text: t("privacy.analyticsText"),
    },
    {
      icon: FileText,
      title: t("privacy.changesTitle"),
      text: t("privacy.changesText"),
    },
    {
      icon: Mail,
      title: t("privacy.contactTitle"),
      text: t("privacy.contactText"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="container max-w-3xl">
            <div className="text-center mb-12">
              <span className="section-eyebrow">
                <span className="w-1.5 h-1.5 rounded-sm sprite-grass" />
                Privacy
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight heading-gradient">
                {t("privacy.title")}
              </h1>
              <p className="mt-3 text-sm text-cream-200/50">
                {t("privacy.lastUpdated", { date: new Date().toLocaleDateString() })}
              </p>
            </div>

            <div className="pixel-card pixel-card-corners p-6 sm:p-8 mb-8">
              <p className="text-base text-cream-200/70 leading-relaxed">
                {t("privacy.intro")}
              </p>
            </div>

            <div className="space-y-4">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <div
                    key={section.title}
                    className="pixel-card pixel-card-corners p-5 sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-md bg-grass-500/15 border border-grass-400/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-grass-300" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-cream-100 mb-2">
                          {section.title}
                        </h2>
                        <p className="text-sm text-cream-200/60 leading-relaxed">
                          {section.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
