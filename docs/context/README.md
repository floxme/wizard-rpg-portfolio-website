# Kontextübersicht

Stand: 16.10.2026. Das minimale statisch exportierbare Grundgerüst von Phase 00 ist implementiert; der native Ubuntu-Checkout ist eingerichtet und im dokumentierten Umfang erneut geprüft. Eine vollständige Browserabnahme, Portfoliofunktionen und 3D-Welt stehen noch aus.

## Lesen nach Aufgabe

| Datei                                                                | Zuständigkeit                                                                                          |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| [project.md](project.md)                                             | Ziel, Releasegrenzen und aktueller Stand                                                               |
| [world-and-design.md](world-and-design.md)                           | Weltgestaltung, Laufwege und Kollisionsprinzipien                                                      |
| [gameplay-and-interactions.md](gameplay-and-interactions.md)         | Einzige zentrale Quelle für Eingaben, Kristall, Teleport, Aufgaben und Rückkehr                        |
| [ui-and-navigation.md](ui-and-navigation.md)                         | Layout, Navigation, Dialoge, Scrollen, HUD und Einstellungen                                           |
| [portfolio-and-content.md](portfolio-and-content.md)                 | Inhaltshierarchie, Daten, Sprache und wahrheitsgemäße Inhalte                                          |
| [architecture.md](architecture.md)                                   | Installierte Versionen, Architektur, Ubuntu-Checkout und historische Workarounds, ESLint-PoC, Git-/Modellregel und Quellen |
| [accessibility-and-performance.md](accessibility-and-performance.md) | Zugänglichkeit, Laden, Qualität, Fehler und Prüfungen                                                  |
| [assets.md](assets.md)                                               | Tatsächlicher Bestand, Prototyp, Beschaffung und Integration                                           |
| [privacy-security-and-licenses.md](privacy-security-and-licenses.md) | Vertraulichkeit, Rechte und Veröffentlichung                                                           |
| [Designindex](../design/README.md)                                   | Alle 29 freigegebenen PNGs und Referenzzuständigkeiten                                                 |
| [Entscheidungen](../decisions/decision-log.md)                       | Historische und aktuelle Entscheidungen                                                                |
| [Roadmap](../development/roadmap.md)                                 | Phasen und Prüftore                                                                                    |
| [Abnahmekriterien](../development/acceptance-criteria.md)            | Überprüfbarer Sollzustand, kein Testergebnis                                                           |
| [Offene Punkte](../development/open-items.md)                        | Fragen erst zur relevanten Phase                                                                       |
| [Prompts](../../prompts/README.md)                                   | Allgemeine Aufträge und Projektablauf                                                                  |

## Quellen und Zuständigkeit

Aktuelle ausdrückliche Nutzerentscheidung > aktueller zentraler Fachkontext > zugeordnete Designinterpretation. PNGs definieren das visuelle Ziel; Detailreferenzen konkretisieren ihren Bereich. Bei echtem Widerspruch nicht automatisch Inhalte kombinieren, sondern nachfragen. Persönliche Angaben und Zahlen innerhalb der PNGs bleiben ungeprüfte Beispiele.

Alle 29 vorhandenen PNGs sind ausdrücklich ausgewählt. Die frühere Beschränkung auf zwei Character Sheets ist abgelöst. Mockup-READMEs erklären Bilder; zentrale Fachregeln werden verlinkt, nicht unabhängig neu spezifiziert. Das Entscheidungsprotokoll erklärt Änderungen, historische Einträge sind keine konkurrierenden aktuellen Regeln.

## Statusbegriffe

1. **Implementiert und getestet:** nur im ausdrücklich genannten Prüfungsumfang; erfolgreiche CLI-/HTTP-Prüfungen ersetzen keine Browserabnahme.
2. **Implementiert, aber noch nicht vollständig getestet:** vorhandenes Verhalten mit ausdrücklich offenen Prüfungen.
3. **Beschlossen, aber noch nicht implementiert:** verbindlicher Sollzustand, kein Fortschrittsnachweis.
4. **Geplant oder offen:** nächster Schritt, fehlender Nachweis oder noch erforderliche Entscheidung.

Ergänzende Begriffe:

- **Beschlossen:** bestätigte Anforderung, noch kein Implementierungsnachweis.
- **Vorschlag:** technische Ausgestaltung oder Startwert, im Prototyp zu prüfen.
- **Offen:** braucht noch Entscheidung oder Nachweis; nicht automatisch ein Blocker.
- **Vorhanden:** Datei tatsächlich im gelieferten Stand enthalten.
- **Geprüft:** nur die ausdrücklich genannte Prüfung.

## Prüfstand und Pflege

Aktueller technischer Nachweisstand: [open-items.md](../development/open-items.md#tatsächlicher-nachweisstand). Start-/Prüfbefehle: [Root-README](../../README.md). Paketversionen, Ubuntu-Checkout, historische Workarounds und ESLint-10-Erkenntnisse: [architecture.md](architecture.md). Fortschritt und Folgeschritte: [roadmap.md](../development/roadmap.md).

Die frühere Archivprüfung umfasste 33 ursprüngliche Markdown-Dateien, alle 29 PNGs und die GLB-Struktur. [revision-notes.md](../development/revision-notes.md) hält diese historische Dokumentationskonsolidierung fest; dortige Aussagen ohne App-Build sind keine aktuelle Zustandsbeschreibung. Praktisches 3D-Rendering, Performance und vollständige Nutzungsrechte bleiben ungeprüft.

Arbeits- und Freigaberegeln: [AGENTS.md](../../AGENTS.md). Nach jedem dateiverändernden Auftrag sowie wichtigen Entscheidungen ist der letzte Schritt der Kontext-/Prompt-Abgleich; notwendige, noch nicht autorisierte Änderungen zuerst konkret vorschlagen und bestätigen lassen.
