import Link from "next/link";

import { EntryFrame } from "@/components/entry-frame";

export default function EntryPage() {
  return (
    <EntryFrame status="Phase 00 · Entwicklungsplatzhalter / Development placeholder">
      <h1 className="mt-3 text-3xl font-semibold text-arcane-gold sm:text-4xl">
        Sprache wählen / <span lang="en">Choose a language</span>
      </h1>
      <p className="mt-5 text-arcane-muted">
        Platzhalter für den Einstieg in das künftige Portfolio.
      </p>
      <p className="mt-2 text-arcane-muted" lang="en">
        Placeholder for the entry to the future portfolio.
      </p>
      <nav
        aria-label="Sprachauswahl / Language selection"
        className="mt-8 grid gap-4 sm:grid-cols-2"
      >
        <Link
          href="/de-DE/"
          hrefLang="de"
          lang="de"
          className="rounded border border-arcane-gold bg-arcane-panel px-6 py-5 text-lg font-semibold text-arcane-gold underline underline-offset-4 hover:text-arcane-cyan"
        >
          Deutsch öffnen
        </Link>
        <Link
          href="/en-EN/"
          hrefLang="en"
          lang="en"
          className="rounded border border-arcane-gold bg-arcane-panel px-6 py-5 text-lg font-semibold text-arcane-gold underline underline-offset-4 hover:text-arcane-cyan"
        >
          Open in English
        </Link>
      </nav>
      <p className="mt-8 text-sm text-arcane-muted">
        Die optionale 3D-Welt ist noch nicht verfügbar.
      </p>
      <p className="mt-2 text-sm text-arcane-muted" lang="en">
        The optional 3D world is not available yet.
      </p>
    </EntryFrame>
  );
}
