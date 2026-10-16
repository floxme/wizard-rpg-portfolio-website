import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "The Arcane Tower · Sprachauswahl / Language selection",
  description: "Phase 00: Entwicklungsplatzhalter / Development placeholder.",
  robots: { index: false, follow: false },
};

export default function EntryLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
