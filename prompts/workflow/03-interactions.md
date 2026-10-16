# Phase 03 – Kristall, Teleport und Weltinteraktionen

Voraussetzung: Begehbarer Prototyp und frühe Pointer-Lock-Prüfung.

Die Phase in kleine Aufträge teilen, nicht ungefragt alle Arbeitspakete auf einmal erledigen. Fehlende Fragen nur soweit für den nächsten Schritt nötig stellen.

```text
Projektroot: [PFAD]
Aktueller Stand: [PRÜFEN / BEKANNTER STAND]
Umfang dieser Sitzung: [KLEINER TEILSCHRITT DIESER PHASE]

Lies AGENTS.md, docs/context/README.md, docs/development/open-items.md, docs/development/roadmap.md und die relevanten Abnahmekriterien. Zusätzlich: docs/context/gameplay-and-interactions.md; docs/context/ui-and-navigation.md; docs/design/mockups/character/README.md. Maßgeblicher Entwicklungs-/Testprozess: docs/development/testing-workflow.md.

Alle Pfade ab Projektroot. Prüfe tatsächliche Dateien und Nutzeränderungen. Bei visuellen Aufgaben docs/design/README.md, zuständige Bereichs-README und die PNGs selbst lesen. Alle 29 Referenzen sind freigegeben; Original-PNGs/GLB nicht verändern. Arbeitsanweisungen gelten KI-unabhängig.

Erfinde keine APIs, Paketfunktionen, Inhalte, Rechte, Entscheidungen oder Prüfergebnisse. Offizielle Dokumentation passend zur eingesetzten Version konsultieren, Quellen/Versionen nennen und dokumentiert/implementiert/getestet trennen. Beschlossener Stack bleibt Ausgangspunkt; keine ungefragten Zusatzsysteme.

Arbeitsauftrag:
Implementiere zentrale Übergangszustände. E am Kristall: kollisionsverträglich positionieren/ausrichten, dann aktivieren. Etwa eine Sekunde nur Startwert, mit Florian animiert testen. B teleportiert erst, dann gleiche Aktivierung. Beim Schließen an Animationsstartposition bleiben. Generic Interact ohne diese automatische Positionierung. „Mehr erfahren“ öffnet passende Unterseite ohne Kristallteleport, Kontext für Rückkehr erhalten. Doppelauslösung, Abbruch, Fokusverlust, reduzierte Bewegung und fehlende Clips behandeln.

Gehe mit kurzem Plan in einen überprüfbaren Teilschritt. Keine Käufe/Generierungen, Commits, Pushes oder Deployments ohne konkreten Auftrag; keine automatische Dokumentationsänderung. Fehlende persönliche Inhalte nicht aus Bildbeispielen übernehmen.

Prüftor/Ergebnis:
E/B, Weltobjekte, tiefes X/Zurück, Sprachwechsel und Ein-Klick-Rückkehr im realen Browser prüfen; keine starren Timing-Abnahmen. Automatische Zustands-/Ablauftests und tatsächliche Windows-/Opera-Befunde getrennt belegen. Kristallpositionierung/-ausrichtung, Aktivierung, Teleport, Kamerafahrt und Welt-/HTML-Übergänge benötigen gesonderte visuelle Nutzerfreigabe; grüne Tests reichen dafür nicht.
Berichte tatsächliche Änderungen, Nachweise, nicht getestete Aspekte und den nächsten kleinen Schritt. Nicht bestandene Prüftore nicht durch Änderung der Anforderungen umgehen.

Letzter Arbeitsschritt nach allen Implementierungs-/Testschritten: Prüfe Kontextdateien UND betroffene Prompts auf Konsistenz mit Dateiänderungen und wichtigen Entscheidungen. Bereits konkret beauftragte Dokumentationsänderungen im Umfang ausführen; sonst betroffene Datei, konkreten Textvorschlag/Diff, Nutzen und Auswirkungen nennen, ausdrücklich Bestätigung erfragen und vor dem Schreiben warten. Falls keine Anpassung nötig ist, dies als letzten Antwortpunkt bestätigen. Keine automatische Kontextpflege ohne Freigabe.
```
