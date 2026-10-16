# The Arcane Tower – Wizard RPG Portfolio

Persönliches Entwicklerportfolio von Florian Metzger: freiwillige Third-Person-Fantasywelt und vollständiger HTML-Zugang. Konsolidierte Projektgrundlage vom **16.10.2026**.

## Start hier

1. [Arbeitsregeln für KI](AGENTS.md)
2. [Kontextübersicht](docs/context/README.md)
3. [Alle 29 verbindlichen Designreferenzen](docs/design/README.md)
4. [Projektphasen](docs/development/roadmap.md), [Abnahmekriterien](docs/development/acceptance-criteria.md), [offene Punkte](docs/development/open-items.md)
5. [Prompts](prompts/README.md), Einstieg mit [Phase 00](prompts/workflow/00-clarification-and-setup.md)

## Tatsächlicher Stand

Noch keine initialisierte Anwendung, kein package.json/Lockfile und keine verifizierten Start-/Build-/Testskripte. Enthalten: Kontextdateien, 29 verbindliche PNG-Referenzen und ein Magier-Prototypmodell mit strukturell nachgewiesenen Walk-/Run-Clips. Fehlende Animationen zunächst vorläufig ersetzen.

Beschlossener Stack: Next.js App Router, React, TypeScript, Three.js, React Three Fiber, Drei, Tailwind CSS, GSAP; Versionen beim Setup prüfen. Erst funktionaler Platzhalterprototyp, danach finale Assets. Kein Springen. Öffentliches Portfolio als Ziel, Quellcode zunächst privat.

## Paket übernehmen

Dieses Übergabepaket enthält keine `.git`-Metadaten und keinen installierten Abhängigkeitsordner. Im bestehenden Repository dessen `.git` und eigene Änderungen bewahren; Dateien vergleichen und gezielt übernehmen, keinen neuen Git-Stand darüber kopieren. Alte flache Promptdateien 01–13 unter prompts/ entfernen bzw. durch die neuen Versionen unter prompts/general/ ersetzen, nicht beide Stände parallel behalten. Neue Projektphasen unter prompts/workflow/.

PNG-Pfade und Original-GLB bleiben identisch zum gelieferten Projektstand. Die enthaltene `.gitignore` bietet Ausgangsregeln; bereits versionierte Dateien werden dadurch nicht rückwirkend entfernt. Keine Commits, Pushes oder Deployments durch die KI.

Änderungen und Prüfgrenzen: [revision-notes.md](docs/development/revision-notes.md). Jeder dateiverändernde Auftrag endet mit Kontext-/Prompt-Abgleich und konkretem Freigabevorschlag für zusätzliche notwendige Dokumentationsänderungen gemäß AGENTS.md.
