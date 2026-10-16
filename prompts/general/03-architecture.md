# Architekturfrage

Zweck: Technische Alternativen fundiert bewerten.

## Verwendung

Den folgenden Prompt kopieren, eckige Platzhalter ausfüllen und an KI im Projekt übergeben. Nicht benötigte optionale Felder entfernen. Ein Prompt erweitert keine Berechtigung aus AGENTS.md.

## Kopierbarer Prompt

```text
Frage: [FRAGE]
Auslöser: [KONKRETES PROBLEM]
Randbedingungen: [OPTIONAL]

Alle Dateipfade sind relativ zum Projektroot. Lies zuerst AGENTS.md, docs/context/README.md und die unten genannten Dokumente. Prüfe den tatsächlichen Repository-Zustand. Halte dich an bestätigte Anforderungen.

Erfinde keine APIs, Fakten, Inhalte, Testergebnisse oder Entscheidungen. Nutze offizielle Dokumentation passend zu den tatsächlich eingesetzten Paketversionen; nenne bei technischen Aussagen Quelle und Nachweisstand. Wenn etwas nicht geprüft werden kann, sage es ausdrücklich. Trenne Annahmen und Vorschläge von bestätigten Fakten.

Ändere AGENTS.md, README.md, docs/ oder prompts/ nur, wenn ich die konkrete Änderung ausdrücklich beauftragt oder nach Erklärung genehmigt habe. Ansonsten nenne Datei, geplante Änderung und Nutzen, frage und warte. Kein eigenständiger Commit, Push oder Deployment. Keine Einführung von Backend, Datenbank, Tracking oder neuen Produktfunktionen ohne Freigabe.

Für diesen Auftrag zusätzlich lesen: docs/context/architecture.md, docs/context/project.md, docs/development/open-items.md.

Arbeitsauftrag:
1. Lies die betroffenen Implementierungen und Paketversionen.
2. Prüfe relevante offizielle Dokumentation und bekannte Einschränkungen dieser Versionen.
3. Vergleiche höchstens drei tatsächlich passende Ansätze nach Komplexität, Betrieb, Performance, Wartbarkeit und Auswirkungen auf bestehende Anforderungen.
4. Empfiehl einen Ansatz mit Begründung, Unsicherheiten und überprüfbarem nächsten Schritt.
5. Dieser Auftrag ist Analyse: ändere keine Anwendungsdateien. Schlage nötige Kontextänderungen konkret zur Zustimmung vor. Backend/DB oder veränderte Bedienung niemals implizit genehmigt behandeln.

Bei visuellen Aufgaben zusätzlich docs/design/README.md, die zuständige Mockup-README UND die tatsächlichen PNGs lesen. Alle 29 vorhandenen PNGs sind freigegeben; nicht verändern. Relevante Patterns aus Architektur, UI, Gameplay und Performance beachten. Fragen nur zum unmittelbar betroffenen Schritt stellen.

Erwartetes Ergebnis:
Klare Empfehlung, knapper Vergleich, Quellen/Versionen, Risiken, mögliche Dokumentationsänderung und nächste Prüfung.

Letzter Arbeitsschritt nach allen Implementierungs-/Testschritten: Prüfe Kontextdateien UND betroffene Prompts auf Konsistenz mit Dateiänderungen und wichtigen Entscheidungen. Bereits konkret beauftragte Dokumentationsänderungen im Umfang ausführen; sonst betroffene Datei, konkreten Textvorschlag/Diff, Nutzen und Auswirkungen nennen, ausdrücklich Bestätigung erfragen und vor dem Schreiben warten. Falls keine Anpassung nötig ist, dies als letzten Antwortpunkt bestätigen. Keine automatische Kontextpflege ohne Freigabe.
```
