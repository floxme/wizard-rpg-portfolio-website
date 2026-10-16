# Session-Übergabe

Zweck: Nächste Sitzung ohne erfundenen Fortschritt vorbereiten.

## Verwendung

Den folgenden Prompt kopieren, eckige Platzhalter ausfüllen und an KI im Projekt übergeben. Nicht benötigte optionale Felder entfernen. Ein Prompt erweitert keine Berechtigung aus AGENTS.md.

## Kopierbarer Prompt

```text
Aktueller Auftrag: [ANGABE]
Besonderer Fokus für nächste Sitzung: [OPTIONAL]

Alle Dateipfade sind relativ zum Projektroot. Lies zuerst AGENTS.md, docs/context/README.md und die unten genannten Dokumente. Prüfe den tatsächlichen Repository-Zustand. Halte dich an bestätigte Anforderungen.

Erfinde keine APIs, Fakten, Inhalte, Testergebnisse oder Entscheidungen. Nutze offizielle Dokumentation passend zu den tatsächlich eingesetzten Paketversionen; nenne bei technischen Aussagen Quelle und Nachweisstand. Wenn etwas nicht geprüft werden kann, sage es ausdrücklich. Trenne Annahmen und Vorschläge von bestätigten Fakten.

Ändere AGENTS.md, README.md, docs/ oder prompts/ nur, wenn ich die konkrete Änderung ausdrücklich beauftragt oder nach Erklärung genehmigt habe. Ansonsten nenne Datei, geplante Änderung und Nutzen, frage und warte. Kein eigenständiger Commit, Push oder Deployment. Keine Einführung von Backend, Datenbank, Tracking oder neuen Produktfunktionen ohne Freigabe.

Für diesen Auftrag zusätzlich lesen: docs/development/roadmap.md, docs/development/open-items.md und tatsächlich bearbeitete Dateien.

Zusätzlicher Projektfokus: Erledigte Phase und nächste Phase anhand prompts/workflow/README.md benennen. Bestätigte neue Entscheidungen von noch nicht freigegebenen Dokumentationsvorschlägen unterscheiden.

Arbeitsauftrag:
1. Fasse den tatsächlichen Arbeitsstand anhand von Code/Diff und ausgeführten Prüfungen zusammen.
2. Trenne erledigt, begonnen, nur vorgeschlagen, offen und blockiert. Nenne relevante Dateien, lokale Startbefehle nur wenn wirklich vorhanden, Testresultate und bekannte Fehler.
3. Halte neue Nutzerentscheidungen mit ihrem tatsächlichen Freigabestatus fest; keine automatische Änderung an docs/ oder Roadmap.
4. Nenne den kleinsten nächsten sinnvollen Auftrag und eventuell nötige Kontextänderungen als Freigabevorschlag.
5. Liefere die Übergabe im Gespräch zum Kopieren. Keine ungefragte neue Handover-Datei und kein Commit/Push.

Bei visuellen Aufgaben zusätzlich docs/design/README.md, die zuständige Mockup-README UND die tatsächlichen PNGs lesen. Alle 29 vorhandenen PNGs sind freigegeben; nicht verändern. Relevante Patterns aus Architektur, UI, Gameplay und Performance beachten. Fragen nur zum unmittelbar betroffenen Schritt stellen.

Erwartetes Ergebnis:
Kopierbarer Übergabetext mit Ziel, Iststand, Entscheidungen, Dateien, Prüfungen, offenen Punkten und nächstem Auftrag.

Letzter Arbeitsschritt nach allen Implementierungs-/Testschritten: Prüfe Kontextdateien UND betroffene Prompts auf Konsistenz mit Dateiänderungen und wichtigen Entscheidungen. Bereits konkret beauftragte Dokumentationsänderungen im Umfang ausführen; sonst betroffene Datei, konkreten Textvorschlag/Diff, Nutzen und Auswirkungen nennen, ausdrücklich Bestätigung erfragen und vor dem Schreiben warten. Falls keine Anpassung nötig ist, dies als letzten Antwortpunkt bestätigen. Keine automatische Kontextpflege ohne Freigabe.
```
