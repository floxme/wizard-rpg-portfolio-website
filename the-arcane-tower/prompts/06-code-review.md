# Code-Review

Zweck: Änderungen unabhängig vom Implementierungsablauf untersuchen.

## Verwendung

Den folgenden Prompt kopieren, eckige Platzhalter ausfüllen und an Codex im Projekt übergeben. Nicht benötigte optionale Felder entfernen. Ein Prompt erweitert keine Berechtigung aus AGENTS.md.

## Kopierbarer Prompt

```text
Reviewumfang: [DATEIEN / DIFF / BRANCH]
Fokus: [OPTIONAL]

Lies zuerst AGENTS.md, docs/context/README.md und die unten genannten Dokumente. Prüfe den tatsächlichen Repository-Zustand. Halte dich an bestätigte Anforderungen.

Erfinde keine APIs, Fakten, Inhalte, Testergebnisse oder Entscheidungen. Nutze offizielle Dokumentation passend zu den tatsächlich eingesetzten Paketversionen; nenne bei technischen Aussagen Quelle und Nachweisstand. Wenn etwas nicht geprüft werden kann, sage es ausdrücklich. Trenne Annahmen und Vorschläge von bestätigten Fakten.

Ändere AGENTS.md, README.md, docs/ oder prompts/ nur, wenn ich die konkrete Änderung ausdrücklich beauftragt oder nach Erklärung genehmigt habe. Ansonsten nenne Datei, geplante Änderung und Nutzen, frage und warte. Kein eigenständiger Commit, Push oder Deployment. Keine Einführung von Backend, Datenbank, Tracking oder neuen Produktfunktionen ohne Freigabe.

Für diesen Auftrag zusätzlich lesen: docs/context/architecture.md, docs/development/acceptance-criteria.md und betroffene Produktdateien.

Arbeitsauftrag:
1. Lies Diff und nötigen Umgebungscode. Prüfe Änderungen gegen bestätigte Anforderungen.
2. Suche konkrete Fehler, Regressionen, Lifecycle-/Ressourcenprobleme, doppelte Inhalte, Vertraulichkeitsrisiken und unnötige Komplexität.
3. Belege Befunde mit Datei und Stelle, Auslöser, Auswirkung und Korrekturvorschlag. Schweregrad nach tatsächlichem Risiko.
4. Prüfe technische Behauptungen anhand offizieller Dokumentation der eingesetzten Version.
5. Keine Dateiänderungen in diesem Reviewauftrag. Wenn keine konkreten Befunde vorliegen, sage dies und nenne tatsächlichen Prüfungsumfang und Lücken.

Erwartetes Ergebnis:
Befunde nach Priorität, konkrete Referenzen, offene Fragen und knapper Prüfungsumfang; kein künstliches Fehlerfinden.
```
