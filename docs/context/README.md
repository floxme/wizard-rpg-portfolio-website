# Kontextübersicht

Stand: 16.10.2026. Diese Fassung konsolidiert den gelieferten Projektstand und die anschließenden ausdrücklichen Entscheidungen. Es existiert noch keine initialisierte Anwendung.

## Lesen nach Aufgabe

| Datei | Zuständigkeit |
|---|---|
| [project.md](project.md) | Ziel, Releasegrenzen und aktueller Stand |
| [world-and-design.md](world-and-design.md) | Weltgestaltung, Laufwege und Kollisionsprinzipien |
| [gameplay-and-interactions.md](gameplay-and-interactions.md) | Einzige zentrale Quelle für Eingaben, Kristall, Teleport, Aufgaben und Rückkehr |
| [ui-and-navigation.md](ui-and-navigation.md) | Layout, Navigation, Dialoge, Scrollen, HUD und Einstellungen |
| [portfolio-and-content.md](portfolio-and-content.md) | Inhaltshierarchie, Daten, Sprache und wahrheitsgemäße Inhalte |
| [architecture.md](architecture.md) | Beschlossener Stack, technische Patterns und offizielle Quellen |
| [accessibility-and-performance.md](accessibility-and-performance.md) | Zugänglichkeit, Laden, Qualität, Fehler und Prüfungen |
| [assets.md](assets.md) | Tatsächlicher Bestand, Prototyp, Beschaffung und Integration |
| [privacy-security-and-licenses.md](privacy-security-and-licenses.md) | Vertraulichkeit, Rechte und Veröffentlichung |
| [Designindex](../design/README.md) | Alle 29 freigegebenen PNGs und Referenzzuständigkeiten |
| [Entscheidungen](../decisions/decision-log.md) | Historische und aktuelle Entscheidungen |
| [Roadmap](../development/roadmap.md) | Phasen und Prüftore |
| [Abnahmekriterien](../development/acceptance-criteria.md) | Überprüfbarer Sollzustand, kein Testergebnis |
| [Offene Punkte](../development/open-items.md) | Fragen erst zur relevanten Phase |
| [Prompts](../../prompts/README.md) | Allgemeine Aufträge und Projektablauf |

## Quellen und Zuständigkeit

Aktuelle ausdrückliche Nutzerentscheidung > aktueller zentraler Fachkontext > zugeordnete Designinterpretation. PNGs definieren das visuelle Ziel; Detailreferenzen konkretisieren ihren Bereich. Bei echtem Widerspruch nicht automatisch Inhalte kombinieren, sondern nachfragen. Persönliche Angaben und Zahlen innerhalb der PNGs bleiben ungeprüfte Beispiele.

Alle 29 vorhandenen PNGs sind ausdrücklich ausgewählt. Die frühere Beschränkung auf zwei Character Sheets ist abgelöst. Mockup-READMEs erklären Bilder; zentrale Fachregeln werden verlinkt, nicht unabhängig neu spezifiziert. Das Entscheidungsprotokoll erklärt Änderungen, historische Einträge sind keine konkurrierenden aktuellen Regeln.

## Statusbegriffe

- **Beschlossen:** bestätigte Anforderung, noch kein Implementierungsnachweis.
- **Vorschlag:** technische Ausgestaltung oder Startwert, im Prototyp zu prüfen.
- **Offen:** braucht noch Entscheidung oder Nachweis; nicht automatisch ein Blocker.
- **Vorhanden:** Datei tatsächlich im gelieferten Stand enthalten.
- **Geprüft:** nur die ausdrücklich genannte Prüfung.

## Prüfstand und Pflege

33 ursprüngliche Markdown-Dateien und alle 29 PNGs wurden gelesen bzw. visuell geprüft. GLB-Struktur geprüft, kein Rendering oder Browserlauf. Keine Paketinstallation, Builds, Leistungsmessung oder Lizenzfreigabe behaupten. Frühere Chatarchive sind nicht Bestandteil dieses Pakets und nicht erneut vollständig geprüft.

Arbeits- und Freigaberegeln: [AGENTS.md](../../AGENTS.md). Nach jedem dateiverändernden Auftrag sowie wichtigen Entscheidungen ist der letzte Schritt der Kontext-/Prompt-Abgleich; notwendige, noch nicht autorisierte Änderungen zuerst konkret vorschlagen und bestätigen lassen.
