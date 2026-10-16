import type { ReactNode } from "react";

type EntryFrameProps = {
  status: string;
  children: ReactNode;
};

export function EntryFrame({ status, children }: EntryFrameProps) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 sm:py-20">
      <p className="mb-4 text-sm font-semibold tracking-wide text-arcane-cyan">
        {status}
      </p>
      <p className="text-sm text-arcane-gold">The Arcane Tower</p>
      {children}
    </main>
  );
}
