import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { isLocale, languages, locales } from "@/i18n/locales";
import { messages } from "@/i18n/messages";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return {
    title: `The Arcane Tower · ${messages[locale].status}`,
    description: messages[locale].description,
    robots: { index: false, follow: false },
  };
}

// Separate root layouts let each exported document declare its real language.
export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={languages[locale]}>
      <body>{children}</body>
    </html>
  );
}
