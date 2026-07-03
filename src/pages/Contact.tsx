import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Github, ExternalLink, Send, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function Contact() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const links = [
    {
      icon: Github,
      title: t("contact.githubTitle"),
      text: t("contact.githubText"),
      href: "https://github.com/shykain/mrpack-to-zip",
      label: "GitHub",
    },
    {
      icon: ExternalLink,
      title: t("contact.modrinthTitle"),
      text: t("contact.modrinthText"),
      href: "https://modrinth.com",
      label: "Modrinth",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <span className="section-eyebrow">
                <span className="w-1.5 h-1.5 rounded-sm sprite-grass" />
                Contact
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight heading-gradient">
                {t("contact.title")}
              </h1>
              <p className="mt-3 text-base text-cream-200/60 max-w-xl mx-auto">
                {t("contact.subtitle")}
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-6">
              {/* Contact links */}
              <div className="lg:col-span-2 space-y-4">
                <div className="pixel-card pixel-card-corners p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-md bg-grass-500/15 border border-grass-400/30 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-grass-300" />
                    </div>
                    <h3 className="font-semibold text-cream-100">
                      {t("contact.emailTitle")}
                    </h3>
                  </div>
                  <p className="text-sm text-cream-200/60 mb-2">
                    {t("contact.emailText")}
                  </p>
                  <a
                    href="mailto:hello@mrpacktozip.cc"
                    className="text-sm text-grass-300 hover:text-grass-200 transition-colors"
                  >
                    hello@mrpacktozip.cc
                  </a>
                </div>

                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.title}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixel-card pixel-card-corners pixel-card-hover p-5 flex items-start gap-3 block"
                    >
                      <div className="w-10 h-10 rounded-md bg-ember-500/15 border border-ember-400/30 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-ember-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-cream-100">
                          {link.title}
                        </h3>
                        <p className="mt-1 text-sm text-cream-200/60">
                          {link.text}
                        </p>
                        <span className="mt-2 inline-flex items-center gap-1 text-xs text-grass-300">
                          {link.label}
                          <ExternalLink className="w-3 h-3" />
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Contact form */}
              <div className="lg:col-span-3">
                <div className="pixel-card pixel-card-corners p-6 sm:p-8">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <CheckCircle2 className="w-12 h-12 text-grass-400 mb-4" />
                      <h3 className="text-lg font-bold text-cream-100">
                        {t("contact.form.success")}
                      </h3>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-cream-200/80 mb-1.5">
                          {t("contact.form.name")}
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-ink-900/60 border border-grass-500/30 text-cream-50 placeholder:text-cream-200/40 focus:outline-none focus:border-grass-500/60 focus:ring-1 focus:ring-grass-500/40 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-cream-200/80 mb-1.5">
                          {t("contact.form.email")}
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-ink-900/60 border border-grass-500/30 text-cream-50 placeholder:text-cream-200/40 focus:outline-none focus:border-grass-500/60 focus:ring-1 focus:ring-grass-500/40 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-cream-200/80 mb-1.5">
                          {t("contact.form.message")}
                        </label>
                        <textarea
                          rows={5}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-ink-900/60 border border-grass-500/30 text-cream-50 placeholder:text-cream-200/40 focus:outline-none focus:border-grass-500/60 focus:ring-1 focus:ring-grass-500/40 transition-all resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full btn-primary flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        {t("contact.form.send")}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
