# The Arcane Tower – Arbeitsregeln für KI

Stand: 17.10.2026. Eigentümer: Florian Metzger. Gilt für jede am Projekt arbeitende KI, unabhängig vom Anbieter oder Editor.

## Einstieg und Quellen

1. Lies diese Datei, `docs/context/README.md` und `docs/development/open-items.md`.
2. Prüfe den tatsächlichen Repository-Zustand und vorhandene Nutzeränderungen. Anforderungen sind kein Nachweis einer Implementierung.
3. Lies aufgabenbezogene Kontextdateien. Für visuelle Aufgaben zusätzlich `docs/design/README.md`, die zuständige Mockup-README und die tatsächlichen PNGs.
4. Arbeite in kleinen überprüfbaren Schritten; erkläre Plan und Ergebnis verständlich auf Deutsch. Frage phasenbezogen, nicht alle zukünftigen Detailfragen vor dem Setup.
5. Aktuelle ausdrückliche Nutzerentscheidungen gehen älteren Aussagen vor. Kontextdateien enthalten den Sollzustand, das Entscheidungsprotokoll die Historie. Relevante ungelöste Konflikte benennen, nicht eigenständig umdeuten.

## Dokumentationsänderungen und verpflichtender letzter Schritt

Diese Regeln gelten für AGENTS.md, README.md, alle Dateien unter docs/ und prompts/.
Eine ausdrückliche Anweisung, konkrete Dokumente im genannten Umfang zu ändern, ist bereits die Freigabe; dafür nicht nochmals fragen. Ein allgemeiner Coding-Auftrag ist keine pauschale Dokumentationsfreigabe.

**Nach jedem Auftrag mit Dateiänderungen und nach wichtigen neuen Entscheidungen ist der letzte Arbeitsschritt eine Kontext- und Prompt-Konsistenzprüfung.** Prüfe, ob tatsächliche Änderungen, Entscheidungen, Anleitungen, offene Punkte und Nachweise noch zu den Kontextdateien und betroffenen Prompts passen.

Wenn Anpassungen nötig und noch nicht konkret freigegeben sind:
- Nenne betroffene Dateien, konkreten Textvorschlag oder kurzen Diff, Nutzen und Auswirkungen auf bisherige Anforderungen.
- Bitte ausdrücklich um Bestätigung und warte vor dem Schreiben dieser Anpassungen.
- Behaupte bis dahin nicht, die Dokumentation sei aktualisiert. Unabhängige autorisierte Arbeit darf weitergehen.

Wenn nichts anzupassen ist, melde als letzten Punkt: „Kontext-/Prompt-Abgleich: keine Anpassung erforderlich.“ Wenn bereits autorisierte Dokumentationsänderungen erledigt sind, nenne sie und verbleibende Vorschläge im letzten Punkt. Keine stillen Entscheidungs-, Roadmap- oder Abnahmekriterienänderungen.

## Arbeitsgrenzen

- Keine eigenständigen Commits, Pushes, Repository-Veröffentlichungen oder Deployments; Florian übernimmt diese Schritte.
- Kein ungefragtes Backend, Datenbank, Admin, Konto, Analytics oder Tracking.
- Keine Käufe, Abos, kostenpflichtige Generierungen oder Uploads an externe Assetdienste ohne konkreten Auftrag.
- Bestehende Nutzeränderungen und Originalassets erhalten; Generatoren dürfen AGENTS.md nicht ersetzen.
- PNG-Designreferenzen und das Original-GLB nicht verändern, umbenennen oder überschreiben. Benötigte Laufzeit-Ableitungen separat und nur im beauftragten Umfang erstellen.
- Große Originalassets nicht ungefragt in Git aufnehmen; Git LFS nur nach Entscheidung. Keine Quellarchive automatisch hochladen.
- Keine zusätzlichen Funktionen aus Bildbeschriftungen oder Toolvorgaben ableiten.
- Kein Lebenslauf-Download und keine erfundenen beruflichen Angaben, Projekte, Kennzahlen oder Rechte.

## Produktgrenzen und Design

Verbindlicher Stack: Next.js App Router, React, TypeScript, Three.js, React Three Fiber, Drei, Tailwind CSS und GSAP. Konkrete Versionen und Testwerkzeuge erst beim Setup validieren. Zusatzpakete nur für begründeten Bedarf, keine spekulative Infrastruktur.

Vollständiges HTML-Portfolio auf allen Geräten; optionale Desktop-3D-Welt; kein Touch-Gameplay im ersten Release. Kein Springen, Klettern, Kampf oder Fallschaden. Erst funktionaler Prototyp, dann finale Ausarbeitung.

Bestätigte begrenzte Ausnahme: Ausschließlich notwendige visuelle HTML-Portfolio-Assets dürfen bereits während Phase 01 schrittweise vorbereitet, erstellt, freigegeben und integriert werden; maßgeblich ist [docs/context/assets.md](docs/context/assets.md#portfolio-assets-während-phase-01). Neue einzelne Assets benötigen weiterhin gesonderte Beauftragung und Freigabe. Die bisherigen Prototyp-, Entwicklungs- und Freigaberegeln bleiben bestehen; spätere finale Welt-, Charakter- und Animationsassetarbeit verbleibt in Phasen 06/07.

Alle **29 PNGs des gelieferten Projektstands** sind verbindliche visuelle Referenzen, gegliedert in Character (4), World (7), UI (7), Portfolio (11). Zuständigkeiten und vollständige Pfade: `docs/design/README.md`. Neue Bilder benötigen weiterhin ausdrückliche Freigabe. Alte nicht enthaltene Chatbilder sind keine aktuellen Referenzen. Referenzfreigabe macht Beispieltexte, Logos, Skillwerte oder erfundene Personendaten nicht wahr.

UI bleibt echtes bedienbares HTML; kein ganzes Mockup als funktionslose Oberfläche. Indigo/Blau, Gold/Messing, Cyan/Teal, warme Lichtakzente und arkane Motive bilden das gemeinsame Design. Kein globaler Pixelfilter über der 3D-Welt.

Esc schließt keine App-Oberfläche. X/Zurück folgen dem jeweiligen Einstiegskontext. Reguläre Rückkehr zur Welt ohne zusätzlichen Klick/Q; Browserkonflikte offen nachweisen und abstimmen. Zentrale Ablaufquelle: `docs/context/gameplay-and-interactions.md`.

Berufliches nur allgemein; toom Baumarkt darf genannt werden, interne Apps, Screenshots, Code, Architektur und Geschäftszahlen nicht. Keine privaten Angaben aus anderen Gesprächsthemen übernehmen.

## Nachweise statt Erfindungen

- Keine APIs, Paketfunktionen, Konfigurationen, Inhalte, Entscheidungen, Quellen, Testergebnisse oder Fortschritte erfinden.
- Offizielle Dokumentation passend zur tatsächlichen Paketversion lesen; nötigenfalls Release Notes und offizielle Issues prüfen. Suchtreffer oder Erinnerung allein reichen nicht.
- Aussagen anhand von Dateien, Paketmetadaten und tatsächlichen Ausgaben prüfen. Quellen-URL, Version und Prüfgrenze bei technischen Empfehlungen nennen.
- „Dokumentiert“, „implementiert“ und „getestet“ unterscheiden. Fehlenden Zugriff und nicht ausgeführte Tests nennen.
- Bei fehlendem Nachweis nicht raten; begrenzte überprüfbare Arbeit fortsetzen und Lücken benennen.
- Platzhalter ausdrücklich kennzeichnen. Keine nicht vorhandenen Assets, Clips oder Lizenzen behaupten.
- Regeln reduzieren Fehler, versprechen aber keine Unfehlbarkeit.

## Entwicklungsumgebungen und Testnachweise

Maßgeblicher Prozess: [Entwicklungs- und Testworkflow](docs/development/testing-workflow.md). Entwicklung und geeignete automatisierte Qualitätssicherung erfolgen im nativen Ubuntu-Checkout; Chrome ist dort bevorzugter Browser. Grafische Abnahme erfolgt durch Florian im separaten Windows-Checkout primär mit Opera. Windows-Grundeinrichtung und erster HTML-Test sind laut Florian erfolgreich; offene Devmodus- und spätere Abnahmen stehen in `docs/development/open-items.md`. Phase 01 ist nicht begonnen und braucht einen eigenen Implementierungsauftrag. VM-Grafikgrenzen nicht als Anwendungsfehler oder als Windows-Leistungsnachweis ausgeben.

Die Isolation bleibt bestehen: Codex in Ubuntu greift nicht automatisch auf Windows-Dateien zu, führt dort keine Programme aus und steuert keinen Windows-Browser fern. Keine entsprechende Schnittstelle eigenständig einrichten. Freigegebene Stände über GitHub auf `dev` austauschen; `main` bleibt geschützt. Keine parallele Bearbeitung derselben Dateien in beiden Umgebungen, keine Übernahme von `node_modules` oder anderen generierten Ausgaben zwischen Betriebssystemen. Windows-Automation später nur gesondert freigegeben und zunächst lokal durch den Nutzer startbar, ohne zusätzliche Hostberechtigungen.

**Ein erfolgreich abgeschlossener automatisierter Test beweist nicht, dass eine Animation natürlich aussieht, eine Kamerafahrt angenehm wirkt, ein Übergang optisch gelungen ist oder eine 3D-Szene den verbindlichen Mockups entspricht.** Dafür ist eine gesonderte visuelle Prüfung durch Florian erforderlich. Das gilt für Magieranimationen, Kristallpositionierung/-ausrichtung, Aktivierung, Teleport, Kamera, Welt-/HTML-Übergänge, Grafik/Licht/Effekte, Performance und Layout-/Referenzwirkung.

Implementierung, automatisierte Prüfung, tatsächlicher Browserlauf und menschliche visuelle Freigabe getrennt berichten. Status gemäß Testworkflow: automatisch geprüft, manuell geprüft, fehlgeschlagen oder noch nicht geprüft, jeweils mit Beleg und Grenze. Keine Windows-/Opera-Abnahme und keine erhaltenen Screenshots/Traces behaupten, die nicht tatsächlich vorliegen. Visuelle Befunde erst untersuchen, dann gezielt beheben und angemessene Regressionen prüfen; manuelle Freigabe nicht aus grünen Tests ableiten.

Das GitHub-Repository ist öffentlich; die Website ist noch nicht veröffentlicht. Nur bestätigte funktionierende Links, keine daraus erfundene UI-Implementierung. Testartefakte vor Veröffentlichung auf vertrauliche Inhalte prüfen; öffentliche Sichtbarkeit gibt lokale Dateien und Assets nicht automatisch frei. Keine CI, Runner, Testframeworks oder externen Dienste allein aus diesem Workflow einrichten.

## Umsetzung und Qualität

Gemeinsame typisierte Inhalte für HTML, Kristall, Schmiede und Garten. Kleine Module, klare Namen, Formatierung und Kommentare zu Gründen/Randbedingungen. Dokumentierte Patterns in Architektur, UI und Performance berücksichtigen, keine unnötigen Abhängigkeiten oder Generalisierung.

Verhalten mit passenden Abnahmekriterien prüfen; keine bloßen Implementierungsduplikate als Tests. Echte Browsernachweise für Pointer Lock/Audio nicht durch Mocks ersetzen. Performance messen statt schätzen. Nach ausreichender Prüfung Ergebnis und Einschränkungen melden, abschließend den oben vorgeschriebenen Kontext-/Prompt-Abgleich durchführen.
