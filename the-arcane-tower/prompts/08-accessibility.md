# Barrierefreiheit

Zweck: Zugänglichkeit praktisch untersuchen.

## Verwendung

Den folgenden Prompt kopieren, eckige Platzhalter ausfüllen und an Codex im Projekt übergeben. Nicht benötigte optionale Felder entfernen. Ein Prompt erweitert keine Berechtigung aus AGENTS.md.

## Kopierbarer Prompt

```text
Bereich: [ANGABE]
Testumgebung/Hilfsmittel: [FALLS BEKANNT]

Lies zuerst AGENTS.md, docs/context/README.md und die unten genannten Dokumente. Prüfe den tatsächlichen Repository-Zustand. Halte dich an bestätigte Anforderungen.

Erfinde keine APIs, Fakten, Inhalte, Testergebnisse oder Entscheidungen. Nutze offizielle Dokumentation passend zu den tatsächlich eingesetzten Paketversionen; nenne bei technischen Aussagen Quelle und Nachweisstand. Wenn etwas nicht geprüft werden kann, sage es ausdrücklich. Trenne Annahmen und Vorschläge von bestätigten Fakten.

Ändere AGENTS.md, README.md, docs/ oder prompts/ nur, wenn ich die konkrete Änderung ausdrücklich beauftragt oder nach Erklärung genehmigt habe. Ansonsten nenne Datei, geplante Änderung und Nutzen, frage und warte. Kein eigenständiger Commit, Push oder Deployment. Keine Einführung von Backend, Datenbank, Tracking oder neuen Produktfunktionen ohne Freigabe.

Für diesen Auftrag zusätzlich lesen: docs/context/accessibility-and-performance.md, docs/context/portfolio-and-content.md.

Arbeitsauftrag:
1. Prüfe semantische Struktur, Tastaturpfade, sichtbaren Fokus, Beschriftungen, Kontraste, Zoom und reduzierte Bewegung.
2. Prüfe, ob sämtliche Informationen ohne 3D/Quests erreichbar sind.
3. Prüfe X/Zurück als zugängliche Buttons und sinnvolle Fokusführung trotz bewusst fehlendem Esc-Schließen.
4. Nutze verfügbare automatisierte Hilfen ergänzend; behaupte keine Screenreader-Prüfung oder Konformität ohne Nachweis.
5. Gib Befunde und konkrete Maßnahmen aus. Dieser Prompt ist ein Reviewauftrag, keine automatische Änderung der Bedienregeln.

Erwartetes Ergebnis:
Befundliste mit betroffenen Nutzern und Reproduktion, Prüfmethoden, priorisierten Maßnahmen und nicht geprüften Aspekten.
```
