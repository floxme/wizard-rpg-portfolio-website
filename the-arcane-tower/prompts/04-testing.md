# Testing

Zweck: Verhalten gegen Anforderungen prüfen.

## Verwendung

Den folgenden Prompt kopieren, eckige Platzhalter ausfüllen und an Codex im Projekt übergeben. Nicht benötigte optionale Felder entfernen. Ein Prompt erweitert keine Berechtigung aus AGENTS.md.

## Kopierbarer Prompt

```text
Prüfumfang: [FUNKTION / PHASE]
Umgebung: [BROWSER / GERÄT ODER UNBEKANNT]
Kriterien: [A-IDS ODER BITTE AUSWÄHLEN]

Lies zuerst AGENTS.md, docs/context/README.md und die unten genannten Dokumente. Prüfe den tatsächlichen Repository-Zustand. Halte dich an bestätigte Anforderungen.

Erfinde keine APIs, Fakten, Inhalte, Testergebnisse oder Entscheidungen. Nutze offizielle Dokumentation passend zu den tatsächlich eingesetzten Paketversionen; nenne bei technischen Aussagen Quelle und Nachweisstand. Wenn etwas nicht geprüft werden kann, sage es ausdrücklich. Trenne Annahmen und Vorschläge von bestätigten Fakten.

Ändere AGENTS.md, README.md, docs/ oder prompts/ nur, wenn ich die konkrete Änderung ausdrücklich beauftragt oder nach Erklärung genehmigt habe. Ansonsten nenne Datei, geplante Änderung und Nutzen, frage und warte. Kein eigenständiger Commit, Push oder Deployment. Keine Einführung von Backend, Datenbank, Tracking oder neuen Produktfunktionen ohne Freigabe.

Für diesen Auftrag zusätzlich lesen: docs/development/acceptance-criteria.md, docs/context/gameplay-and-interactions.md, docs/context/accessibility-and-performance.md.

Arbeitsauftrag:
1. Leite eine kleine relevante Testauswahl aus Anforderungen und Änderungen ab.
2. Prüfe vorhandene Testwerkzeuge und führe verfügbare Prüfungen aus. Ergänze erforderliche Verhaltenstests im vereinbarten Umfang; keine Dokumentationsdateien ändern.
3. Unterscheide automatisierte Tests, echte Browserprüfung und manuelle Sichtprüfung. Pointer Lock oder Audiofreigabe nicht allein durch Mocks als browserbewiesen erklären.
4. Prüfe relevante Fehlerfälle wie wiederholtes E, tiefe Navigation, Speicherfehler, Sprachwechsel oder Assetfehler.
5. Melde reproduzierbare Fehler; verändere Produktcode nicht im reinen Testauftrag. Nenne nicht ausführbare Prüfungen ausdrücklich.

Erwartetes Ergebnis:
Tabelle mit Kriterium, Umgebung, Ergebnis und Nachweis; reproduzierbare Fehler und verbleibende Lücken.
```
