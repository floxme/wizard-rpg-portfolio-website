# Performance

Zweck: Messbare Engpässe verbessern.

## Verwendung

Den folgenden Prompt kopieren, eckige Platzhalter ausfüllen und an KI im Projekt übergeben. Nicht benötigte optionale Felder entfernen. Ein Prompt erweitert keine Berechtigung aus AGENTS.md.

## Kopierbarer Prompt

```text
Problem: [LADEZEIT / FPS / SPEICHER / ANDERES]
Gerät/Browser: [ANGABE]
Umfang: [NUR ANALYSE / ANALYSE UND GEZIELTE OPTIMIERUNG]

Alle Dateipfade sind relativ zum Projektroot. Lies zuerst AGENTS.md, docs/context/README.md und die unten genannten Dokumente. Prüfe den tatsächlichen Repository-Zustand. Halte dich an bestätigte Anforderungen.

Erfinde keine APIs, Fakten, Inhalte, Testergebnisse oder Entscheidungen. Nutze offizielle Dokumentation passend zu den tatsächlich eingesetzten Paketversionen; nenne bei technischen Aussagen Quelle und Nachweisstand. Wenn etwas nicht geprüft werden kann, sage es ausdrücklich. Trenne Annahmen und Vorschläge von bestätigten Fakten.

Ändere AGENTS.md, README.md, docs/ oder prompts/ nur, wenn ich die konkrete Änderung ausdrücklich beauftragt oder nach Erklärung genehmigt habe. Ansonsten nenne Datei, geplante Änderung und Nutzen, frage und warte. Kein eigenständiger Commit, Push oder Deployment. Keine Einführung von Backend, Datenbank, Tracking oder neuen Produktfunktionen ohne Freigabe.

Für diesen Auftrag zusätzlich lesen: docs/context/accessibility-and-performance.md, docs/context/assets.md, docs/context/architecture.md.

Zusätzlicher Projektfokus: Priorisiertes Vorladen am Startscreen, Download/Decode/GPU-Aufbereitung, begrenzte Parallelität und Cache-Reuse getrennt messen. HTML/Mobil nicht zur ganzen Welt zwingen; Lichter/Schatten gezielt budgetieren.

Arbeitsauftrag:
1. Ermittle eine reproduzierbare Ausgangsmessung; nenne Gerät, Browser, Szene, Qualität, Cachezustand und Messmethode.
2. Trenne Download-, CPU-, GPU- und Speicherprobleme. Keine FPS-Zahlen schätzen.
3. Untersuche konkrete Ursachen, beispielsweise Texturen, Draw Calls, Schatten, Renderauflösung oder unnötige Renders.
4. Optimiere nur bei entsprechendem Umfang, gezielt und mit Vorher/Nachher-Messung. Manuelle Qualitätswahl respektieren; Textschärfe erhalten.
5. Prüfe Automatik auf Pendeln, Lade-/Tab-Ausreißer und stabile Rückkehr. Neue Leistungsbudgets nur vorschlagen, nicht still dokumentieren.

Bei visuellen Aufgaben zusätzlich docs/design/README.md, die zuständige Mockup-README UND die tatsächlichen PNGs lesen. Alle 29 vorhandenen PNGs sind freigegeben; nicht verändern. Relevante Patterns aus Architektur, UI, Gameplay und Performance beachten. Fragen nur zum unmittelbar betroffenen Schritt stellen.

Erwartetes Ergebnis:
Messkontext, belegter Engpass, Maßnahmen/Änderungen, Vorher/Nachher und verbleibende Grenzen.

Letzter Arbeitsschritt nach allen Implementierungs-/Testschritten: Prüfe Kontextdateien UND betroffene Prompts auf Konsistenz mit Dateiänderungen und wichtigen Entscheidungen. Bereits konkret beauftragte Dokumentationsänderungen im Umfang ausführen; sonst betroffene Datei, konkreten Textvorschlag/Diff, Nutzen und Auswirkungen nennen, ausdrücklich Bestätigung erfragen und vor dem Schreiben warten. Falls keine Anpassung nötig ist, dies als letzten Antwortpunkt bestätigen. Keine automatische Kontextpflege ohne Freigabe.
```
