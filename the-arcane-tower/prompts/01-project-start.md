# Projektstart

Zweck: Initialisierung des bedienbaren Platzhalter-Prototyps.

## Verwendung

Den folgenden Prompt kopieren, eckige Platzhalter ausfüllen und an Codex im Projekt übergeben. Nicht benötigte optionale Felder entfernen. Ein Prompt erweitert keine Berechtigung aus AGENTS.md.

## Kopierbarer Prompt

```text
Projektpfad: [PFAD]
Vorhandener Stand: [LEER / VORHANDEN / BITTE PRÜFEN]
Für diesen Auftrag gewünschter Umfang: [Z. B. PHASE 0 UND HTML-GRUNDGERÜST]

Lies zuerst AGENTS.md, docs/context/README.md und die unten genannten Dokumente. Prüfe den tatsächlichen Repository-Zustand. Halte dich an bestätigte Anforderungen.

Erfinde keine APIs, Fakten, Inhalte, Testergebnisse oder Entscheidungen. Nutze offizielle Dokumentation passend zu den tatsächlich eingesetzten Paketversionen; nenne bei technischen Aussagen Quelle und Nachweisstand. Wenn etwas nicht geprüft werden kann, sage es ausdrücklich. Trenne Annahmen und Vorschläge von bestätigten Fakten.

Ändere AGENTS.md, README.md, docs/ oder prompts/ nur, wenn ich die konkrete Änderung ausdrücklich beauftragt oder nach Erklärung genehmigt habe. Ansonsten nenne Datei, geplante Änderung und Nutzen, frage und warte. Kein eigenständiger Commit, Push oder Deployment. Keine Einführung von Backend, Datenbank, Tracking oder neuen Produktfunktionen ohne Freigabe.

Für diesen Auftrag zusätzlich lesen: docs/context/architecture.md, docs/context/project.md, docs/development/roadmap.md, docs/development/open-items.md.

Arbeitsauftrag:
1. Prüfe Repository, vorhandene Nutzeränderungen, Node/Paketmanager und Dateien. Bewahre bestehende AGENTS.md; kein Generator darf sie überschreiben.
2. Stelle einen kurzen Umsetzungsplan für den angegebenen Umfang auf. Prüfe konkrete stabile Paketversionen und peerDependencies anhand offizieller Quellen. Keine pauschale Installation ungeprüfter latest-Kombinationen.
3. Initialisiere im autorisierten Umfang. Richte Formatierung, Typprüfung, Build und passende minimale Prüfungen ein. Bestehendes Lockfile/Paketmanager respektieren.
4. Lege ein kleines statisch auslieferbares Grundgerüst an: Root/Sprachrouten, HTML-Zugang; 3D erst gemäß gewähltem Umfang. Keine finalen Assets erforderlich.
5. Prüfe tatsächliche Befehle und Build. Berichte fehlende Voraussetzungen und nächste Phase. README-Startbefehle bei Bedarf als konkrete freizugebende Ergänzung vorschlagen.

Erwartetes Ergebnis:
Gefundener Zustand, Paketwahl mit Quellen, umgesetzter Umfang, echte Prüfergebnisse, Startanleitung im Gespräch und nächster Schritt.
```
