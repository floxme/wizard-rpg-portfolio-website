export const locales = ["de-DE", "en-EN"] as const;
export type Locale = (typeof locales)[number];

// Public URL segments are project decisions, separate from HTML language tags.
export const languages: Record<Locale, string> = {
  "de-DE": "de",
  "en-EN": "en",
};

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}
