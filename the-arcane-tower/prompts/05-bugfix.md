# Bugfix

Zweck: Einen reproduzierbaren Fehler gezielt beheben.

## Verwendung

Den folgenden Prompt kopieren, eckige Platzhalter ausfüllen und an Codex im Projekt übergeben. Nicht benötigte optionale Felder entfernen. Ein Prompt erweitert keine Berechtigung aus AGENTS.md.

## Kopierbarer Prompt

```text
Fehler: [BESCHREIBUNG]
Schritte: [1, 2, 3]
Erwartet: [SOLL]
Beobachtet: [IST]
Browser/Version: [FALLS BEKANNT]
Fehlermeldung: [OPTIONAL]

Lies zuerst AGENTS.md, docs/context/README.md und die unten genannten Dokumente. Prüfe den tatsächlichen Repository-Zustand. Halte dich an bestätigte Anforderungen.

Erfinde keine APIs, Fakten, Inhalte, Testergebnisse oder Entscheidungen. Nutze offizielle Dokumentation passend zu den tatsächlich eingesetzten Paketversionen; nenne bei technischen Aussagen Quelle und Nachweisstand. Wenn etwas nicht geprüft werden kann, sage es ausdrücklich. Trenne Annahmen und Vorschläge von bestätigten Fakten.

Ändere AGENTS.md, README.md, docs/ oder prompts/ nur, wenn ich die konkrete Änderung ausdrücklich beauftragt oder nach Erklärung genehmigt habe. Ansonsten nenne Datei, geplante Änderung und Nutzen, frage und warte. Kein eigenständiger Commit, Push oder Deployment. Keine Einführung von Backend, Datenbank, Tracking oder neuen Produktfunktionen ohne Freigabe.

Für diesen Auftrag zusätzlich lesen: zur Funktion passende Kontextdatei, docs/development/acceptance-criteria.md.

Arbeitsauftrag:
1. Versuche den Fehler mit den angegebenen Schritten nachzustellen. Kannst du das nicht, benenne den fehlenden Nachweis.
2. Grenze die Ursache anhand von Code, Logs und offizieller versionsbezogener Dokumentation ein. Keine vorschnelle Vermutung als Ursache ausgeben.
3. Implementiere die kleinste robuste Korrektur ohne Änderung bestätigter UX-Anforderungen.
4. Prüfe den ursprünglichen Fehler und naheliegende Regressionen; füge einen sinnvollen Regressionstest hinzu, wenn angemessen.
5. Bei unvermeidlichem Anforderungskonflikt erkläre Optionen und warte auf Entscheidung statt Kriterien still zu ändern.

Erwartetes Ergebnis:
Reproduktion, belegte Ursache, Korrektur, Prüfergebnisse und verbleibende Unsicherheit.
```
