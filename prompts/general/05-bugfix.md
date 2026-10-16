# Bugfix

Zweck: Einen reproduzierbaren Fehler gezielt beheben.

## Verwendung

Den folgenden Prompt kopieren, eckige Platzhalter ausfüllen und an KI im Projekt übergeben. Nicht benötigte optionale Felder entfernen. Ein Prompt erweitert keine Berechtigung aus AGENTS.md.

## Kopierbarer Prompt

```text
Fehler: [BESCHREIBUNG]
Schritte: [1, 2, 3]
Erwartet: [SOLL]
Beobachtet: [IST]
Umgebung: [OS / BROWSER / VERSION; GPU UND QUALITÄT BEI GRAFIKFRAGEN]
Entwicklungsstand: [COMMIT / LOKALER STAND]
Fehlermeldung / Screenshot / Video / Trace: [SOWEIT BEREITGESTELLT]
Bisherige Tests und Status: [ANGABE ODER OFFEN]

Alle Dateipfade sind relativ zum Projektroot. Lies zuerst AGENTS.md, docs/context/README.md und die unten genannten Dokumente. Prüfe den tatsächlichen Repository-Zustand. Halte dich an bestätigte Anforderungen.

Erfinde keine APIs, Fakten, Inhalte, Testergebnisse oder Entscheidungen. Nutze offizielle Dokumentation passend zu den tatsächlich eingesetzten Paketversionen; nenne bei technischen Aussagen Quelle und Nachweisstand. Wenn etwas nicht geprüft werden kann, sage es ausdrücklich. Trenne Annahmen und Vorschläge von bestätigten Fakten.

Ändere AGENTS.md, README.md, docs/ oder prompts/ nur, wenn ich die konkrete Änderung ausdrücklich beauftragt oder nach Erklärung genehmigt habe. Ansonsten nenne Datei, geplante Änderung und Nutzen, frage und warte. Kein eigenständiger Commit, Push oder Deployment. Keine Einführung von Backend, Datenbank, Tracking oder neuen Produktfunktionen ohne Freigabe.

Für diesen Auftrag zusätzlich lesen: zur Funktion passende Kontextdatei, docs/development/acceptance-criteria.md. Maßgeblicher Entwicklungs-/Testprozess: docs/development/testing-workflow.md.

Arbeitsauftrag:
1. Prüfe den Bugreport nach dem zentralen Testworkflow, bei Windows-/Opera-Befunden insbesondere Umgebung und Entwicklungsstand, und nur tatsächlich erhaltene Artefakte. Versuche den Fehler in Ubuntu nachzustellen; fehlende Windows-Reproduktion offen benennen. Kein Windows-Zugriff oder Nachstellen auf dem Host aus diesem Prompt ableiten.
2. Untersuche zuerst die Ursache anhand von Code, bereitgestellten Logs/Medien und offizieller versionsbezogener Dokumentation. VM-WebGL-/GPU-Grenzen von Anwendungsfehlern unterscheiden; keinen Zusammenhang mit NEM behaupten, der nicht nachgewiesen ist.
3. Implementiere die kleinste robuste Korrektur ohne Änderung bestätigter UX-Anforderungen.
4. Prüfe den ursprünglichen Fehler und naheliegende Regressionen; ergänze einen sinnvollen Regressionstest, soweit angemessen und mit vorhandenen Werkzeugen möglich. Betroffene Windows-/Opera- und visuelle Nutzerprüfung gegebenenfalls erneut durchführen lassen. Automatischer Erfolg erledigt keine manuelle Sichtfreigabe; keine neue Testinfrastruktur ohne Freigabe.
5. Bei unvermeidlichem Anforderungskonflikt erkläre Optionen und warte auf Entscheidung statt Kriterien still zu ändern.

Bei visuellen Aufgaben zusätzlich docs/design/README.md, die zuständige Mockup-README UND die tatsächlichen PNGs lesen. Alle 29 vorhandenen PNGs sind freigegeben; nicht verändern. Relevante Patterns aus Architektur, UI, Gameplay und Performance beachten. Fragen nur zum unmittelbar betroffenen Schritt stellen.

Erwartetes Ergebnis:
Reproduktion, belegte Ursache, Korrektur, Prüfergebnisse und verbleibende Unsicherheit.

Letzter Arbeitsschritt nach allen Implementierungs-/Testschritten: Prüfe Kontextdateien UND betroffene Prompts auf Konsistenz mit Dateiänderungen und wichtigen Entscheidungen. Bereits konkret beauftragte Dokumentationsänderungen im Umfang ausführen; sonst betroffene Datei, konkreten Textvorschlag/Diff, Nutzen und Auswirkungen nennen, ausdrücklich Bestätigung erfragen und vor dem Schreiben warten. Falls keine Anpassung nötig ist, dies als letzten Antwortpunkt bestätigen. Keine automatische Kontextpflege ohne Freigabe.
```
