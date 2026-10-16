import type { Locale } from "./locales";

type Messages = {
  status: string;
  heading: string;
  description: string;
  worldStatus: string;
  home: string;
  languageNavigation: string;
};

export const messages: Record<Locale, Messages> = {
  "de-DE": {
    status: "Phase 00 · Entwicklungsplatzhalter",
    heading: "HTML-Einstieg",
    description:
      "Platzhalter für das künftige Portfolio. Persönliche Inhalte und Portfolio-Bereiche sind noch nicht umgesetzt.",
    worldStatus:
      "Die optionale 3D-Welt ist in diesem Grundgerüst noch nicht verfügbar.",
    home: "Zur Sprachauswahl",
    languageNavigation: "Sprache wechseln",
  },
  "en-EN": {
    status: "Phase 00 · Development placeholder",
    heading: "HTML entry",
    description:
      "Placeholder for the future portfolio. Personal content and portfolio sections have not been implemented yet.",
    worldStatus:
      "The optional 3D world is not available in this initial scaffold.",
    home: "Back to language selection",
    languageNavigation: "Change language",
  },
};
