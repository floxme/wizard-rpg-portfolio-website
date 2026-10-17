# Entscheidungsprotokoll

Erstfassung: 15.10.2026. Konsolidiert: 17.10.2026.

Historische Einträge erklären frühere Entscheidungen. Aktueller Sollzustand steht in docs/context/. D30s Beschränkung auf zwei Bilder ist durch D31 abgelöst; D02 bleibt fachliche Trennung, nicht eigenständige Hauptnavigation. D19s fünf Interessen sind durch D32 ersetzt. D28s alte Promptablage ist durch D40 ersetzt. Die bei D41 noch offene Grundgerüst-Versionsauflösung ist inzwischen durch die dokumentierte Initialisierung D46 konkretisiert; spätere 3D-Versionen bleiben gesondert zu prüfen.

Quelle: direkte Nutzerbestätigungen im Planungsgespräch, ergänzt durch den gelieferten Projektpräsentationschat und spätere ausdrücklich bestätigte Entscheidungen.

Die IDs ermöglichen Referenzen; sie sind keine Tickets.

Spätere Ergänzungen und Änderungen nur nach Zustimmung gemäß `AGENTS.md`.

| ID  | Beschlossene Entscheidung / Änderung                                                            | Grund / Folge                                                                                      |
| --- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| D01 | The Arcane Tower – Wizard RPG Portfolio                                                         | Offizieller Projektname                                                                            |
| D02 | Fähigkeiten, Berufserfahrung, eigene Projekte getrennt                                          | Berufliche Kompetenz ohne vertrauliche Projektdetails zeigen                                       |
| D03 | The Arcane Tower ist erstes privates Projekt                                                    | Keine erfundenen Füllprojekte                                                                      |
| D04 | Start draußen, Kristall im zentralen Turmraum                                                   | Bestätigter Kristallstandort unabhängig von früheren Mockups                                       |
| D05 | Drei optionale Hotspots inkl. Wegschild am Spawn                                                | Ersetzt ursprüngliche zwei Hotspots                                                                |
| D06 | Startscreen: Welt oder direktes HTML-Portfolio                                                  | Kein Spielzwang                                                                                    |
| D07 | Pixel-RPG-UI und einheitlicher Fantasy-Stil                                                     | Pixelrahmen/Icons, lesbare Fließtexte; aktuelle visuelle Grundlagen gemäß D31                      |
| D08 | WASD, Shift, E, Q, Pointer Lock; kein Springen                                                  | Vereinbarter Umfang                                                                                |
| D09 | X schließt aus jeder Tiefe, Zurück navigiert                                                    | Kein mehrfaches Zurück zum Verlassen nötig                                                         |
| D10 | Esc entfernt als App-Schließen-Hotkey                                                           | Schließen-Klick soll Spielsteuerung wieder aktivieren; kein zusätzlicher Klick/Q                   |
| D11 | Historisch: Idle an Interaktionsposition, Kristallleuchten aus                                  | Position durch D33/D35 präzisiert: Animationsstartposition; E erneut nutzbar                       |
| D12 | Teleport-Abkürzung aktiviert anschließend automatisch                                           | Kein zweites E                                                                                     |
| D13 | Reduzierte Bewegung mit sofortigen Übergängen                                                   | Systemeinstellung und eigener Schalter                                                             |
| D14 | Mobile zuerst vollständiges HTML                                                                | Touch-Gameplay später                                                                              |
| D15 | Automatisch plus Niedrig/Mittel/Hoch                                                            | Leistung anpassen, manuelle Kontrolle ermöglichen                                                  |
| D16 | Feste Dämmerung, Audio zuerst aus                                                               | Bestätigte Atmosphäre und freiwilliger Ton; unabhängig von alten Mockups                           |
| D17 | Minimap und freiwillige Questliste                                                              | Orientierung ohne Informationssperren                                                              |
| D18 | Lokale Einstellungen/Hotspots, neue Sitzung am Spawn                                            | Keine dauerhafte Positionsspeicherung                                                              |
| D19 | Historisch: Schmiede nutzt echte Skillinhalte; Garten fünf Interessen                           | Interessenanzahl durch D32 auf sechs aktualisiert                                                  |
| D20 | Name/Berufsbezeichnung, toom Baumarkt erlaubt                                                   | Keine Freigabe interner Informationen                                                              |
| D21 | E-Mail/GitHub/LinkedIn, kein Kontaktformular                                                    | Einfacher Kontakt ohne Verarbeitung im Backend                                                     |
| D22 | /de-DE/, /en-EN/, Sprachwahl auch Startscreen                                                   | URL hat Vorrang; Zustand bei Wechsel erhalten                                                      |
| D23 | Kein Backend/DB/Admin/Tracking im ersten Release                                                | Lokale Inhaltspflege; spätere Erweiterung nur begründet/freigegeben                                |
| D24 | Next/React/TS, Three/R3F/Drei, Tailwind, GSAP                                                   | Beschlossener Stack; Versionen beim Setup validieren                                               |
| D25 | Historisch: Repository privat, UI „Quellcode derzeit privat“                                                | Später echten öffentlichen Link ergänzen                                                           |
| D26 | Vollständig bedienbare Platzhalterversion zuerst                                                | Technik/UX vor visueller Ausarbeitung prüfen                                                       |
| D27 | Kontextänderungen vorher vorschlagen, begründen, fragen                                         | Nutzer behält Kontrolle über verbindliche Grundlage                                                |
| D28 | Struktur und 13 Prompts bestätigt; Erstellung beauftragt                                        | Erstfassung freigegeben                                                                            |
| D29 | Keine erfundenen Fakten/Funktionen/Ergebnisse; offizielle versionsbezogene Dokumentation prüfen | Explizite Ergänzung durch Florian am 15.10.2026                                                    |
| D30 | Historisch: einheitlicher Fantasy-Stil, damals zwei freigegebene Character Sheets               | Referenzumfang durch D31 auf alle 29 PNGs erweitert; historische Einschränkung nicht mehr anwenden |

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

| ID  | Aktuelle Entscheidung                                                                                                     | Folge                                                                                                   |
| --- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| D31 | Alle 29 vorhandenen PNGs verbindlich ausgewählt                                                                           | Ersetzt Beschränkung von D30; neue Referenzen weiterhin nur nach Freigabe                               |
| D32 | Vier Hauptbereiche, sechs Interessen, vierstufige Skillleisten, drei Career-Phasen, max. sechs echte Projekte/Seite       | Neue Portfolio-README konsolidiert; keine persönlichen Beispielwerte übernehmen                         |
| D33 | E positioniert und dreht nur am Kristall automatisch zum Animationsanker; danach Aktivierung                              | Vorherige Regel zum Verbleib an beliebiger E-Position abgelöst                                          |
| D34 | Etwa eine Sekunde Aktivierung nur erster Timing-Vorschlag                                                                 | Frühere Maximaldauer aufgehoben, animiert mit Florian testen; Teleport/Positionierung ohne feste Zeiten |
| D35 | Nach Kristall-Portfolio an Animationsstartposition bleiben, Kamera passend zurück                                         | Kein Rückweg zur vorherigen E-Position                                                                  |
| D36 | Kein Springen; Rampen, vereinfachte Kollisionen und sichere Grenzen                                                       | Zwischenzeitliches Box-Sprungbeispiel ausdrücklich zurückgenommen                                       |
| D37 | Aufgabenabschluss bei erfolgreicher Interaktion/Inhaltsöffnung; B zählt                                                   | Kein Fortschritt durch Vorbeilaufen                                                                     |
| D38 | Mehr erfahren ohne Kristallteleport; direkter HTML-Zugang ohne Welt-X                                                     | Einstiegskontext erhalten, HTML mit internem Zurück/Start-Link                                          |
| D39 | Settings als Entwurf, Übernehmen aktiv/speichern, Verwerfen/X verwerfen; HP/Mana dekorativ; Außen-Minimap innen beweglich | Keine Innenraumkarte, keine neuen Spielmechaniken                                                       |
| D40 | Allgemeine Prompts und neun Projektphasen getrennt                                                                        | Neue README-Dateien für Design und UI; alle erkannten Patterns berücksichtigen                          |
| D41 | Stack ausdrücklich beschlossen; konkrete Versionen waren bei dieser Entscheidung offen                                    | D24 bestätigt; Grundgerüst-Versionen inzwischen gemäß D46, spätere 3D-Versionen gesondert prüfen        |
| D42 | Vorhandene GLB ist Prototypmodell; fehlende Clips vorläufig ersetzen                                                      | Eine tatsächlich vorhandene Datei statt behaupteter vier                                                |
| D43 | Standardassets kostenlos recherchieren, Meshy nur für nötige Lücken; Pro-Abo optional                                     | Keine automatische Beschaffung oder Generierung                                                         |
| D44 | Priorisiertes Hintergrundladen, angemessene Licht-/Effektbudgets und frühe Kamera-/Kollisionstests                        | Technik messen, Referenzwirkung nicht in maximale dynamische Last übersetzen                            |
| D45 | KI-neutrale Arbeitsanweisungen; letzter Schritt Kontext-/Prompt-Abgleich                                                  | Unautorisierte Dokumentationsanpassungen erst konkret vorschlagen und bestätigen lassen                 |

Die Einträge D31–D45 dokumentieren die damalige autorisierte Kontextkonsolidierung vor der Implementierung. Der spätere technische Initialisierungsstand folgt unten; frühere Aussagen ohne Anwendung nicht als heutigen Status lesen.

## Phase 00 – technische Initialisierung und Abschluss am 16.10.2026

Quelle: ausdrückliche Nutzerentscheidungen zu Initialisierung, ESLint-Ausnahme, nativem Entwicklungsort und Git-/Modellverwaltung. Konkrete Versionen und PoC-Erkenntnisse werden zentral in [architecture.md](../context/architecture.md), Nachweise und offene Prüftore in [open-items.md](../development/open-items.md) gepflegt.

| ID  | Bestätigte Entscheidung                                                                                                                      | Grund / Folge                                                                                                                                                                                                                                                                                                                                       |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| D46 | npm; minimales statisch exportierbares Next.js-/React-Grundgerüst mit TypeScript, Tailwind, ESLint und Prettier von Anfang an                | Ein npm-Lockfile, feste direkte Versionen, drei Einstiegspunkte mit echter Root-Sprachwahl; noch keine Portfoliofunktionen oder 3D-Integration. Bestehender Produktstack bleibt erhalten.                                                                                                                                                           |
| D47 | Historisch: Shared-Folder-Workarounds zunächst erhalten; nach Git-Sicherung auf natives Ubuntu-Dateisystem verlagern                  | Symlink- und persistente Turbopack-Cache-Probleme wurden praktisch beobachtet. Danach Performance, Dateisystemkompatibilität und Notwendigkeit der Workarounds erneut prüfen; echte Browserabnahme nach Möglichkeit dort. Damals noch nicht ausgeführt; Abschluss und heutiger Nachweisstand siehe unten.                                                                                              |
| D48 | ESLint 9.39.5 bleibt bewusst vorläufig trotz EOL; Wechsel auf ESLint 10 ausdrücklich priorisiert und bei erfüllten Bedingungen durchzuführen | PoC installierbar/ausführbar ohne Peer-Konflikte, aber React-Regelverluste, teilweise andere Semantik und zusätzlicher Pflegebedarf. Konkrete TypeScript-Ersatzbeispiele beweisen keine vollständige Gleichwertigkeit. Zeitlich begrenzte Ausnahme, keine Dauerarchitektur; kein Kalendertermin festgelegt. Migrationsbedingungen in open-items.md. |
| D49 | Im aktiven Git nur benötigte, freigegebene 3D-Modelle samt Abhängigkeiten; spätere Bereinigung gezielt und nur nach ausdrücklicher Freigabe  | Nutzungsprüfung und Clone-Verfügbarkeit sicherstellen; keine pauschale globale GLB-/GLTF-Ignorierung und kein versehentlicher Originalverlust. Bereits getrackte Dateien werden durch Ignore-Regeln nicht entfernt. Zentrale Regel in architecture.md.                                                                                              |

Der technische Initialisierungsschritt ist implementiert und begrenzt geprüft. Die vollständige Browserabnahme bleibt offen; keine spätere Entwicklungsphase, Modellbereinigung, ESLint-Migration oder Veröffentlichung folgt automatisch aus diesem Dokumentationsabschluss.

## Ubuntu-Abschluss und öffentliche Repository-Texte am 16.10.2026

Quelle: Florians ausdrücklicher Abschlussauftrag und die darin bestätigten Ergebnisse des bisherigen Verlaufs; getrennt davon die erneuten Prüfungen der Abschlusssitzung. Dies aktualisiert den Status von D25 und D47, keine neue Entwicklungsphase.

- **D47 umgesetzt:** Der aktive Checkout liegt auf dem nativen Ubuntu-Dateisystem. Frischer GitHub-Clone, Neuinstallation, Symlink-Test, Entwicklungsstart und Browserdarstellung sind von Florian bestätigt. Die beiden Workarounds sind aus der aktiven Konfiguration entfernt; Arbeitsort, `dev`, Konfiguration, npm-Symlinks und vier Qualitätsprüfungen wurden erneut erfolgreich geprüft. Einzelne Quellen und Grenzen zentral in [open-items.md](../development/open-items.md#tatsächlicher-nachweisstand). Vollständige Browser-/Accessibility-Abnahme und Performance-Messungen bleiben offen.
- **D25 aktualisiert:** Das GitHub-Repository ist laut Florian bereits öffentlich. Die frühere Privat-Annahme ist historisch. Kein öffentlicher Repository-Link wird erfunden; ein späterer UI-Link benötigt das bestätigte Ziel. Die älteren Privat-/UI-Formulierungen in [portfolio-and-content.md](../context/portfolio-and-content.md#eigene-projekte-und-kontakt) und [privacy-security-and-licenses.md](../context/privacy-security-and-licenses.md#veröffentlichung) waren im damaligen Abschlussauftrag nur lesend freigegeben; sie wurden anschließend nach gesonderter Freigabe korrigiert. Öffentliche Repository-Sichtbarkeit und implementierte UI-Links bleiben getrennte Nachweise.
- Öffentliche Projekttexte verwenden relative Repository-Pfade oder neutrale Beispiele; persönliche absolute Pfade und individuelle Mountbezeichnungen sind unnötig. Die historische Mountangabe in architecture.md wurde entfernt. Bereits veröffentlichte Angaben können in älteren Commits fortbestehen; keine Untersuchung der Git-Objektdatenbank, keine Historienumschreibung und kein Force-Push.
- **D48 und D49 bleiben unverändert:** Befristete ESLint-9.39.5-Ausnahme, priorisierte ESLint-10-Migration mit allen Bedingungen und die bestehende Git-/Modellregel gelten weiter. Keine Migration, Assetbereinigung, Veröffentlichung oder Git-Schreiboperation in diesem Auftrag.

## Entwicklungs- und Testworkflow vor Phase 01 – 17.10.2026

Quelle: Florians ausdrücklicher Konsolidierungsauftrag. Umgebungsbefunde stammen aus seinem Bericht, keine hier ausgeführte Windows-/GPU-Abnahme. Maßgeblicher Prozess und vollständige Umgebungsdetails: [testing-workflow.md](../development/testing-workflow.md). Keine neue Produktfunktion oder Entwicklungsphase begonnen.

| ID | Bestätigte Entscheidung | Folge |
| --- | --- | --- |
| D50 | Ubuntu-VM bleibt Entwicklungs-/Automationsort mit Chrome; eigenständiger Windows-Checkout für manuelle Grafiktests primär in Opera | Firefox bleibt optional; ergänzende Zielbrowser weiterhin prüfen. VM-Grafikgrenzen nicht als Anwendungsfehler ausgeben. |
| D51 | Isolation bleibt; GitHub-Übergabe auf `dev`, `main` geschützt, lokale Abhängigkeiten pro Betriebssystem | Keine automatische Windows-Datei-/Programmausführungs-/Browserberechtigung; kein geteiltes `node_modules`, keine eigenständigen Änderungen an Windows-Sicherheit oder OPNsense. |
| D52 | Zentraler Testworkflow mit Befundübergabe, Ursachenanalyse, gezieltem Fix und angemessenen Regressionstests | Vorhandene Checks nutzen; neue Testframeworks, CI oder Windows-Automation erst bedarfsorientiert und gesondert freigegeben. |
| D53 | Automatische Funktionstests ersetzen keine menschliche visuelle Freigabe | Animation, Kamera, Übergänge, Grafik, Performance und Layout-/Mockup-Wirkung durch Florian separat prüfen; Belege und Prüfgrenzen trennen. |
| D54 | Historisch: Windows-Testumgebung noch nicht vollständig eingerichtet; Vorbereitung vor Phase 01 | Lokale Einrichtung und Opera-Start durch Florian nachweisen; Phase 01 braucht eigenen Auftrag. Keine Verzögerung durch vorsorglichen Aufbau zusätzlicher Testinfrastruktur. |
| D55 | Öffentliches GitHub-Repository, Website weiterhin unveröffentlicht; A23 und illustrative Privat-Annahmen aktualisieren | Nur bestätigte funktionierende Links; UI-Implementierung separat nachweisen. `private: true` betrifft npm-Veröffentlichung und bleibt bestehen. Testartefakte vor Veröffentlichung prüfen; keine Historienbereinigung behaupten. |

D48/D49, Produktstack, 29 PNGs, Originalasset-Schutz, Gameplay/Spracharchitektur und die nachrangige optionale EXE-Idee bleiben unverändert. Die Dokumentationskonsolidierung installiert keine Testframeworks und richtet keine CI oder Hostschnittstelle ein.

## Phase 00 – erster Windows-HTML-Test und Routenanalyse am 17.10.2026

Quelle: Florians berichteter Windows-Test und korrigierter Auftrag (npm 11.19.1), getrennt von Codex' Ubuntu-HTTP-Prüfungen. Keine neue Produktentscheidung und keine Phase-01-Implementierung.

- **D54 im Grundumfang erledigt:** Eigenständiger Windows-11-Checkout auf `dev`, projektgleiche Node.js-/npm-Kombination, erfolgreiche Installation und Devstart sowie drei Einstiegsseiten in Opera manuell vom Nutzer bestätigt. Umgebung zentral im [Testworkflow](../development/testing-workflow.md#windows-einrichtung-und-erster-html-test), genaue Nachweise in [open-items.md](../development/open-items.md#windows-html-test-und-devmodus-routenbefund--17102026). Keine eigene Windows-/Screenshotprüfung durch Codex behaupten.
- Der beobachtete Missing-param-Fehler wurde im unveränderten Ubuntu-Devmodus reproduziert: insbesondere erster Favicon-Request mit HTTP 500, danach gültige Routen mit HTTP 200 und weitere Fehler bei nicht generierten Pfaden. Installierter Next.js-Code erklärt den Export-Abgleich und Cache-/Hintergrundfehler; genaue Windows-Bedingungen und dauerhafte Korrektur bleiben offen. Kein belegter Fehler allein im Locale-Layout oder den Route Groups, keine Code-/Konfigurationsänderung.
- Grundlegender HTML-Test ersetzt keine WebGL-, 3D-, GPU-Performance-, Animations-, Accessibility- oder vollständige visuelle Abnahme. Diese Nachweise bleiben phasenbezogen offen. Ein erfolgreicher Build ersetzt keine fehlerfreie Entwicklungsmodusprüfung.
- Getrennter Git-Workflow und Hostisolation, D48/D49, Sprach-URLs und Static Export bleiben unverändert. Phase 01 benötigt einen eigenen Auftrag; keine Commits, Pushes, Branchwechsel oder Releases durch Codex.

## Phase-01-Planung vor Implementierungsbeginn – 17.10.2026

Quelle: ausdrückliche Nutzerbestätigung A–C und Dokumentationsauftrag zur Konsolidierung. D bleibt ein Vorschlag für die operative Unterteilung. Die folgenden Einträge präzisieren beziehungsweise lösen ältere allgemeinere Formulierungen erkennbar ab; historische Entscheidungen und Nachweise oben bleiben unverändert. Phase 00 ist im dokumentierten Umfang abgeschlossen, der Devmodus-Routenbefund bleibt offen. Phase 01 ist nicht implementiert.

| ID | Status / Entscheidung | Auswirkung auf bisherige Planung |
| --- | --- | --- |
| D56 | **Beschlossen (A):** `/` bleibt Sprachauswahl ohne automatischen Redirect; `/de-DE/` und `/en-EN/` sind lokalisierte Startscreens mit Welt- und direktem Portfolio-Einstieg. HTML-Portfolio unter `/de-DE/portfolio/` und `/en-EN/portfolio/`. | Präzisiert D06/D22 und frühere Root-/Präfixbeschreibungen. Bereichs-/Detail-URLs noch gesondert festlegen; gemeinsame HTML-/Kristall-Implementierung und URL-Vorrang bleiben. Nur Routing-Soll, keine Codeänderung. Zentrale Quelle: [Portfolio und Inhalte](../context/portfolio-and-content.md#sprachen-und-routen). |
| D57 | **Beschlossen (B):** Notwendige visuelle HTML-Portfolio-Assets schrittweise bereits während Phase 01 vorbereiten, erstellen, freigeben und integrieren. | Begrenzte Ausnahme zur früher allgemein formulierten Prototyp-vor-finalen-Assets-Reihenfolge (D26); Phasen 06/07 für spätere Welt-/Charakter-/Animationsarbeit bleiben. [Inventar](../design/asset-inventory/arcane-portfolio-asset-inventar-phase-01.md) mit 18 Bildmotiv-Kandidaten ist Planung, keine Pflichtdateizahl oder Einzelproduktionsfreigabe. Illustration, SVG/CSS und echte UI-Komponenten unterscheiden; Wiederverwendung und Rechteprüfung erhalten. Nächster geplanter Schritt: Spezifikation B01/B02/D01/D02, keine hier erzeugten Assets. Zentrale Quelle: [Assets](../context/assets.md#portfolio-assets-während-phase-01). |
| D58 | **Beschlossen (C):** Eigener kontrollierter Inhaltsschritt gemeinsam mit Florian innerhalb von Phase 01: About Me/Interests, Skilltree, Projects, Contact. | Technische Struktur darf vorher gekennzeichnete Entwicklungsplatzhalter nutzen. Keine erfundenen Angaben/Medien; Phase 08 zur Inhaltsfinalisierung, Qualität und Releaseprüfung bleibt bestehen. Zentrale Quelle: [Portfolioinhalte](../context/portfolio-and-content.md#echte-inhalte-innerhalb-von-phase-01). |
| D59 | **Vorgeschlagen (D):** Operative Unterteilung 01.1–01.8 gemäß [Roadmap](../development/roadmap.md#phase-01--vorgeschlagene-operative-unterteilung). | Nummerierung und genaue Ausgestaltung sind keine vollständig freigegebenen acht Implementierungsaufträge; Hauptphasen 00–08 unverändert. |

Das Asset-Inventar bleibt in diesem Auftrag unverändert; seine früheren offenen Strategie-Freigaben und Nummerierungsannahmen sind nach diesem bestätigten Status zu lesen. Konkrete Produktionsassets sind weiterhin nicht generiert oder visuell freigegeben. Stack/Versionen, ESLint-9-Ausnahme und ESLint-10-Migrationsbedingungen, Originalschutz, Gameplay, öffentlicher GitHub-Status, noch unveröffentlichte Website und Ubuntu-/Windows-Testisolation bleiben erhalten. Kein neuer Test-/Implementierungsnachweis durch diese Dokumentation.
