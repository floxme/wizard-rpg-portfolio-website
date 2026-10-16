import Link from "next/link";
import { notFound } from "next/navigation";

import { EntryFrame } from "@/components/entry-frame";
import { isLocale } from "@/i18n/locales";
import { messages } from "@/i18n/messages";

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const text = messages[locale];

  return (
    <EntryFrame status={text.status}>
      <h1 className="mt-3 text-3xl font-semibold text-arcane-gold sm:text-4xl">
        {text.heading}
      </h1>
      <p className="mt-5 text-arcane-muted">{text.description}</p>
      <p className="mt-4 text-sm text-arcane-muted">{text.worldStatus}</p>
      <nav
        aria-label={text.languageNavigation}
        className="mt-8 flex flex-wrap gap-x-6 gap-y-4 text-arcane-cyan"
      >
        <Link
          href="/de-DE/"
          hrefLang="de"
          lang="de"
          aria-current={locale === "de-DE" ? "page" : undefined}
          className="underline underline-offset-4"
        >
          Deutsch
        </Link>
        <Link
          href="/en-EN/"
          hrefLang="en"
          lang="en"
          aria-current={locale === "en-EN" ? "page" : undefined}
          className="underline underline-offset-4"
        >
          English
        </Link>
        <Link href="/" className="underline underline-offset-4">
          {text.home}
        </Link>
      </nav>
    </EntryFrame>
  );
}
