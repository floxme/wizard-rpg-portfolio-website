# Entscheidungsprotokoll

Erstfassung: 15.10.2026. Konsolidiert: 16.10.2026.

Historische Einträge erklären frühere Entscheidungen. Aktueller Sollzustand steht in docs/context/. D30s Beschränkung auf zwei Bilder ist durch D31 abgelöst; D02 bleibt fachliche Trennung, nicht eigenständige Hauptnavigation. D19s fünf Interessen sind durch D32 ersetzt. D28s alte Promptablage ist durch D40 ersetzt.

Quelle: direkte Nutzerbestätigungen im Planungsgespräch, ergänzt durch den gelieferten Projektpräsentationschat und spätere ausdrücklich bestätigte Entscheidungen.

Die IDs ermöglichen Referenzen; sie sind keine Tickets.

Spätere Ergänzungen und Änderungen nur nach Zustimmung gemäß `AGENTS.md`.

| ID | Beschlossene Entscheidung / Änderung | Grund / Folge |
|---|---|---|
| D01 | The Arcane Tower – Wizard RPG Portfolio | Offizieller Projektname |
| D02 | Fähigkeiten, Berufserfahrung, eigene Projekte getrennt | Berufliche Kompetenz ohne vertrauliche Projektdetails zeigen |
| D03 | The Arcane Tower ist erstes privates Projekt | Keine erfundenen Füllprojekte |
| D04 | Start draußen, Kristall im zentralen Turmraum | Bestätigter Kristallstandort unabhängig von früheren Mockups |
| D05 | Drei optionale Hotspots inkl. Wegschild am Spawn | Ersetzt ursprüngliche zwei Hotspots |
| D06 | Startscreen: Welt oder direktes HTML-Portfolio | Kein Spielzwang |
| D07 | Pixel-RPG-UI und einheitlicher Fantasy-Stil | Pixelrahmen/Icons, lesbare Fließtexte; aktuelle visuelle Grundlagen gemäß D31 |
| D08 | WASD, Shift, E, Q, Pointer Lock; kein Springen | Vereinbarter Umfang |
| D09 | X schließt aus jeder Tiefe, Zurück navigiert | Kein mehrfaches Zurück zum Verlassen nötig |
| D10 | Esc entfernt als App-Schließen-Hotkey | Schließen-Klick soll Spielsteuerung wieder aktivieren; kein zusätzlicher Klick/Q |
| D11 | Historisch: Idle an Interaktionsposition, Kristallleuchten aus | Position durch D33/D35 präzisiert: Animationsstartposition; E erneut nutzbar |
| D12 | Teleport-Abkürzung aktiviert anschließend automatisch | Kein zweites E |
| D13 | Reduzierte Bewegung mit sofortigen Übergängen | Systemeinstellung und eigener Schalter |
| D14 | Mobile zuerst vollständiges HTML | Touch-Gameplay später |
| D15 | Automatisch plus Niedrig/Mittel/Hoch | Leistung anpassen, manuelle Kontrolle ermöglichen |
| D16 | Feste Dämmerung, Audio zuerst aus | Bestätigte Atmosphäre und freiwilliger Ton; unabhängig von alten Mockups |
| D17 | Minimap und freiwillige Questliste | Orientierung ohne Informationssperren |
| D18 | Lokale Einstellungen/Hotspots, neue Sitzung am Spawn | Keine dauerhafte Positionsspeicherung |
| D19 | Historisch: Schmiede nutzt echte Skillinhalte; Garten fünf Interessen | Interessenanzahl durch D32 auf sechs aktualisiert |
| D20 | Name/Berufsbezeichnung, toom Baumarkt erlaubt | Keine Freigabe interner Informationen |
| D21 | E-Mail/GitHub/LinkedIn, kein Kontaktformular | Einfacher Kontakt ohne Verarbeitung im Backend |
| D22 | /de-DE/, /en-EN/, Sprachwahl auch Startscreen | URL hat Vorrang; Zustand bei Wechsel erhalten |
| D23 | Kein Backend/DB/Admin/Tracking im ersten Release | Lokale Inhaltspflege; spätere Erweiterung nur begründet/freigegeben |
| D24 | Next/React/TS, Three/R3F/Drei, Tailwind, GSAP | Beschlossener Stack; Versionen beim Setup validieren |
| D25 | Repository privat, UI „Quellcode derzeit privat“ | Später echten öffentlichen Link ergänzen |
| D26 | Vollständig bedienbare Platzhalterversion zuerst | Technik/UX vor visueller Ausarbeitung prüfen |
| D27 | Kontextänderungen vorher vorschlagen, begründen, fragen | Nutzer behält Kontrolle über verbindliche Grundlage |
| D28 | Struktur und 13 Prompts bestätigt; Erstellung beauftragt | Erstfassung freigegeben |
| D29 | Keine erfundenen Fakten/Funktionen/Ergebnisse; offizielle versionsbezogene Dokumentation prüfen | Explizite Ergänzung durch Florian am 15.10.2026 |
| D30 | Historisch: einheitlicher Fantasy-Stil, damals zwei freigegebene Character Sheets | Referenzumfang durch D31 auf alle 29 PNGs erweitert; historische Einschränkung nicht mehr anwenden |

## D30 – Historische Konkretisierung (durch D31 abgelöst)

Die beiden verbindlichen visuellen Hauptreferenzen sind:

- `docs/design/mockups/character/character-design-sheet.png`
- `docs/design/mockups/character/character-production-sheet.png`

Bestätigte Gestaltung:

- dunkles Blau / Indigo,
- Gold / Messing,
- Cyan / Teal für Magie,
- warme Lichtquellen,
- stilisierte arkan-akademische Fantasy-Ästhetik.

Die bisher besprochenen Welt- und Minimap-Bilder sowie andere ältere Illustrationen werden nicht als aktuelle Designreferenzen verwendet.

Neue Mockups werden erst nach ausdrücklicher Freigabe verbindlich.

Diese Änderung betrifft die visuellen Referenzen, nicht automatisch die bereits beschlossenen Spielmechaniken, Hotspots, Portfolioinhalte oder technischen Anforderungen.

## Historische Ausschlüsse – weiterhin gültig, soweit nicht ausdrücklich aktualisiert

- Frühere NestJS-/Prisma-/Datenbankvorschläge
- Optionale Architect’s Chamber
- Unbestätigte Funktionen aus Illustrationen
- Zusätzlicher regulärer Weiterspielen-Klick
- Esc zum Portfolio-Schließen
- Nicht freigegebene alte Mockups als aktuelle Designvorlagen

Keine stillschweigende Wiedereinführung dieser Punkte.
## Aktualisierungen am 16.10.2026

Quelle: ausdrückliche Nutzerentscheidungen in der anschließenden Projektprüfung und die bestätigten neueren Mockup-READMEs.

| ID | Aktuelle Entscheidung | Folge |
|---|---|---|
| D31 | Alle 29 vorhandenen PNGs verbindlich ausgewählt | Ersetzt Beschränkung von D30; neue Referenzen weiterhin nur nach Freigabe |
| D32 | Vier Hauptbereiche, sechs Interessen, vierstufige Skillleisten, drei Career-Phasen, max. sechs echte Projekte/Seite | Neue Portfolio-README konsolidiert; keine persönlichen Beispielwerte übernehmen |
| D33 | E positioniert und dreht nur am Kristall automatisch zum Animationsanker; danach Aktivierung | Vorherige Regel zum Verbleib an beliebiger E-Position abgelöst |
| D34 | Etwa eine Sekunde Aktivierung nur erster Timing-Vorschlag | Frühere Maximaldauer aufgehoben, animiert mit Florian testen; Teleport/Positionierung ohne feste Zeiten |
| D35 | Nach Kristall-Portfolio an Animationsstartposition bleiben, Kamera passend zurück | Kein Rückweg zur vorherigen E-Position |
| D36 | Kein Springen; Rampen, vereinfachte Kollisionen und sichere Grenzen | Zwischenzeitliches Box-Sprungbeispiel ausdrücklich zurückgenommen |
| D37 | Aufgabenabschluss bei erfolgreicher Interaktion/Inhaltsöffnung; B zählt | Kein Fortschritt durch Vorbeilaufen |
| D38 | Mehr erfahren ohne Kristallteleport; direkter HTML-Zugang ohne Welt-X | Einstiegskontext erhalten, HTML mit internem Zurück/Start-Link |
| D39 | Settings als Entwurf, Übernehmen aktiv/speichern, Verwerfen/X verwerfen; HP/Mana dekorativ; Außen-Minimap innen beweglich | Keine Innenraumkarte, keine neuen Spielmechaniken |
| D40 | Allgemeine Prompts und neun Projektphasen getrennt | Neue README-Dateien für Design und UI; alle erkannten Patterns berücksichtigen |
| D41 | Stack ausdrücklich beschlossen, konkrete Versionen offen | D24 bestätigt; keine allgemeine Neuentscheidung nötig |
| D42 | Vorhandene GLB ist Prototypmodell; fehlende Clips vorläufig ersetzen | Eine tatsächlich vorhandene Datei statt behaupteter vier |
| D43 | Standardassets kostenlos recherchieren, Meshy nur für nötige Lücken; Pro-Abo optional | Keine automatische Beschaffung oder Generierung |
| D44 | Priorisiertes Hintergrundladen, angemessene Licht-/Effektbudgets und frühe Kamera-/Kollisionstests | Technik messen, Referenzwirkung nicht in maximale dynamische Last übersetzen |
| D45 | KI-neutrale Arbeitsanweisungen; letzter Schritt Kontext-/Prompt-Abgleich | Unautorisierte Dokumentationsanpassungen erst konkret vorschlagen und bestätigen lassen |

Diese Aktualisierung ist autorisiert. Sie dokumentiert Anforderungen und tatsächlichen Asset-/Dokumentationsstand, keine implementierte Anwendung.
