# Phase 01 – HTML-Portfolio, Daten und Navigation

Voraussetzung: Phase-00-Nachweise und offene Befunde nach Testworkflow und docs/development/open-items.md geprüft und eigener Implementierungsauftrag für Phase 01 erteilt. Windows-Grundeinrichtung und erster Opera-HTML-Test sind vom Nutzer bestätigt; der Devmodus-Routenbefund ist damit nicht behoben. Phase 01 ist derzeit nicht begonnen.

Die Phase in kleine Aufträge teilen, nicht ungefragt alle Arbeitspakete auf einmal erledigen. Die Unterpakete 01.1–01.8 in der Roadmap sind ein Vorschlag, keine vollständige Freigabe aller Implementierungsaufträge. Diese vorhandene Vorlage wird nur dokumentarisch aktualisiert; Phase 01 bleibt nicht implementiert. Fehlende Fragen nur soweit für den nächsten Schritt nötig stellen.

```text
Projektroot: [PFAD]
Aktueller Stand: [PRÜFEN / BEKANNTER STAND]
Umfang dieser Sitzung: [KLEINER TEILSCHRITT DIESER PHASE]

Lies AGENTS.md, docs/context/README.md, docs/development/open-items.md, docs/development/roadmap.md und die relevanten Abnahmekriterien. Zusätzlich: docs/context/portfolio-and-content.md; docs/context/ui-and-navigation.md; docs/context/architecture.md; docs/design/mockups/portfolio/README.md. Zusätzlich die vorhandene Planungsquelle docs/design/asset-inventory/arcane-portfolio-asset-inventar-phase-01.md lesen und ihren Status gegen die zentralen Fachquellen abgleichen; Inventar nicht automatisch ändern. Maßgeblicher Entwicklungs-/Testprozess: docs/development/testing-workflow.md.

Alle Pfade ab Projektroot. Prüfe tatsächliche Dateien und Nutzeränderungen. Bei visuellen Aufgaben docs/design/README.md, zuständige Bereichs-README und die PNGs selbst lesen. Alle 29 Referenzen sind freigegeben; Original-PNGs/GLB nicht verändern. Arbeitsanweisungen gelten KI-unabhängig.

Erfinde keine APIs, Paketfunktionen, Inhalte, Rechte, Entscheidungen oder Prüfergebnisse. Offizielle Dokumentation passend zur eingesetzten Version konsultieren, Quellen/Versionen nennen und dokumentiert/implementiert/getestet trennen. Beschlossener Stack bleibt Ausgangspunkt; keine ungefragten Zusatzsysteme.

Arbeitsauftrag:
Setze ausschließlich den gesondert beauftragten Teilschritt um. Routing-Soll: / bleibt Sprachauswahl ohne automatischen Redirect; /de-DE/ und /en-EN/ werden lokalisierte Startscreens mit Welt- und direktem Portfolio-Einstieg. HTML-Portfolio unter /de-DE/portfolio/ und /en-EN/portfolio/, unabhängig von 3D. Direkte Sprachroute gewinnt gegen gespeicherte Präferenz. Konkrete Bereichs-/Detail-URLs vor Umsetzung gesondert festlegen, keine Slugs erfinden. Gemeinsame Layouts und typisierte Inhalte für direktes HTML und späteres Kristall-Interface, keine zweite Portfolioimplementierung. Das ist beschlossenes Soll, kein bereits vorhandenes Routing.

Vier Hauptbereiche und Navigation bis Ebene drei, datengetriebene Skills, Tools, Career, Interessen und Projekte; technische Struktur zunächst mit eindeutig markierten Entwicklungsplatzhaltern zulässig. Mobile Drawer/Header, Scrollen, Fokus, DE/EN und direkte HTML-Nutzung von Anfang an, Pagination aus echten Einträgen. Den eigenen kontrollierten Inhaltsschritt innerhalb von Phase 01 mit Florian in der Reihenfolge About Me/Interests → Skilltree → Projects → Contact berücksichtigen; nur bestätigte Fakten/Medien. Phase 08 zur Inhaltsfinalisierung und Releaseprüfung bleibt bestehen.

Für notwendige HTML-Portfolio-Assets gilt die begrenzte Phase-01-Ausnahme aus docs/context/assets.md. Die elf ursprünglichen Portfolio-PNGs bleiben Referenzen; 18 Bildmotiv-Kandidaten und weitere Inventarkategorien sind Planung, keine Pflichtdateizahl oder automatische Einzelproduktionsfreigabe. Inzwischen sind B01/B02 als Bildmotive sowie D01 und D02-A bis D02-D als PNG-Designvorlagen vom Nutzer ausgewählt und im Checkout vorhanden; Dateipfade, Metadaten und Status in Abschnitt 9 des Inventars prüfen. Keine fertigen SVGs, integrierten Komponenten, pauschalen Nutzungsrechte oder erfolgte Browserabnahme daraus ableiten. D02-D folgt dem ausgewählten reduzierten Entwurf. Technische Aufbereitung, responsive Zuschnitte, Optimierung und SVG-/CSS-Ausarbeitung bleiben gesondert zu beauftragen; keine Ableitungen oder Implementierung aus einem Dokumentationsauftrag beginnen. Illustrationen, SVG/CSS-Designelemente und echte UI-Komponenten unterscheiden; Motive wiederverwenden, Herkunft/Rechte/Technik vor Verwendung prüfen. Weitere einzelne Assets nur nach gesondertem Auftrag und Freigabe; neue Mockups weiterhin drei Varianten. Welt-/Charakter-/Animationsassetarbeit in Phasen 06/07 erhalten.

Statischen Export, direkte Portfolio-Aufrufe, Deep Links, Reload und unbekannte Routen mit dem tatsächlichen Code prüfen. Offenen generateStaticParams-/output:export-Devmodus-Befund aus open-items.md erhalten; weder eine Behebung behaupten noch ohne Freigabe Routing/Konfiguration/Pakete ändern. Ein erfolgreicher Build ersetzt keine Devmodus-/Windows-/Opera-Prüfung.

Gehe mit kurzem Plan in einen überprüfbaren Teilschritt. Keine Käufe/Generierungen, Commits, Pushes oder Deployments ohne konkreten Auftrag; keine automatische Dokumentationsänderung. Fehlende persönliche Inhalte nicht aus Bildbeispielen übernehmen.

Prüftor/Ergebnis:
Alle vorgesehenen HTML-Ansichten bedienbar, keine erfundenen Inhalte; Route-/Sprach-/Mobil-/Tastaturprüfung mit ehrlichen Grenzen. Automatische Ubuntu-Checks, tatsächliche Windows-/Opera-Prüfung und visuelle Layout-/Referenzfreigabe durch Florian separat belegen. Ein grüner Test ist keine visuelle Abnahme; nicht ausgeführte Prüfungen bleiben offen.
Berichte tatsächliche Änderungen, Nachweise, nicht getestete Aspekte und den nächsten kleinen Schritt. Nicht bestandene Prüftore nicht durch Änderung der Anforderungen umgehen.

Letzter Arbeitsschritt nach allen Implementierungs-/Testschritten: Prüfe Kontextdateien UND betroffene Prompts auf Konsistenz mit Dateiänderungen und wichtigen Entscheidungen. Bereits konkret beauftragte Dokumentationsänderungen im Umfang ausführen; sonst betroffene Datei, konkreten Textvorschlag/Diff, Nutzen und Auswirkungen nennen, ausdrücklich Bestätigung erfragen und vor dem Schreiben warten. Falls keine Anpassung nötig ist, dies als letzten Antwortpunkt bestätigen. Keine automatische Kontextpflege ohne Freigabe.
```
