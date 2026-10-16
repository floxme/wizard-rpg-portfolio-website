# Testing

Zweck: Verhalten gegen Anforderungen prüfen.

## Verwendung

Den folgenden Prompt kopieren, eckige Platzhalter ausfüllen und an KI im Projekt übergeben. Nicht benötigte optionale Felder entfernen. Ein Prompt erweitert keine Berechtigung aus AGENTS.md.

## Kopierbarer Prompt

```text
Prüfumfang: [FUNKTION / PHASE]
Umgebung: [OS / BROWSER / VERSION / GERÄT ODER UNBEKANNT]
Entwicklungsstand: [COMMIT / LOKALER STAND]
Bereitgestellte Befunde: [SCREENSHOT / VIDEO / LOG / TRACE ODER KEINE]
Kriterien: [A-IDS ODER BITTE AUSWÄHLEN]

Alle Dateipfade sind relativ zum Projektroot. Lies zuerst AGENTS.md, docs/context/README.md und die unten genannten Dokumente. Prüfe den tatsächlichen Repository-Zustand. Halte dich an bestätigte Anforderungen.

Erfinde keine APIs, Fakten, Inhalte, Testergebnisse oder Entscheidungen. Nutze offizielle Dokumentation passend zu den tatsächlich eingesetzten Paketversionen; nenne bei technischen Aussagen Quelle und Nachweisstand. Wenn etwas nicht geprüft werden kann, sage es ausdrücklich. Trenne Annahmen und Vorschläge von bestätigten Fakten.

Ändere AGENTS.md, README.md, docs/ oder prompts/ nur, wenn ich die konkrete Änderung ausdrücklich beauftragt oder nach Erklärung genehmigt habe. Ansonsten nenne Datei, geplante Änderung und Nutzen, frage und warte. Kein eigenständiger Commit, Push oder Deployment. Keine Einführung von Backend, Datenbank, Tracking oder neuen Produktfunktionen ohne Freigabe.

Für diesen Auftrag zusätzlich lesen: docs/development/acceptance-criteria.md, docs/context/gameplay-and-interactions.md, docs/context/accessibility-and-performance.md. Maßgeblicher Entwicklungs-/Testprozess: docs/development/testing-workflow.md.

Zusätzlicher Projektfokus: Neue Kriterien A28–A40 soweit betroffen prüfen: Rampen/Grenzen ohne Sprung, kontextabhängige Rückkehr, Settings-Verwerfen, Innen-Turm-Minimap, echte Pagination und Hintergrundladen. Keine Timing-Obergrenze erfinden.

Arbeitsauftrag:
1. Leite eine kleine relevante Testauswahl aus Anforderungen und Änderungen ab.
2. Prüfe tatsächliche Skripte und Testwerkzeuge und führe geeignete verfügbare Prüfungen aus. Kein allgemeines npm run test und kein fertig eingerichtetes Browser-Testframework voraussetzen. Kandidaten erst bei konkretem Bedarf gesondert abstimmen. Ergänze erforderliche Verhaltenstests im vereinbarten Umfang; keine Dokumentationsdateien ändern.
3. Unterscheide Implementierung, automatisierte Tests, echte Browserprüfung und visuelle Nutzerfreigabe. Ubuntu/Chrome dient Entwicklung; manuelle grafische Abnahme durch Florian separat unter Windows/Opera. Kein automatischer Hostzugriff. Pointer Lock, Audio oder WebGL nicht allein durch Mocks als browserbewiesen erklären; VM-Grafikgrenzen benennen. Grüne Tests beweisen keine natürliche Animation, angenehme Kamera, gelungenen Übergang oder Mockup-Übereinstimmung.
4. Prüfe relevante Fehlerfälle wie wiederholtes E, tiefe Navigation, Speicherfehler, Sprachwechsel oder Assetfehler.
5. Melde reproduzierbare Fehler; verändere Produktcode nicht im reinen Testauftrag. Nenne nicht ausführbare Prüfungen ausdrücklich.

Bei visuellen Aufgaben zusätzlich docs/design/README.md, die zuständige Mockup-README UND die tatsächlichen PNGs lesen. Alle 29 vorhandenen PNGs sind freigegeben; nicht verändern. Relevante Patterns aus Architektur, UI, Gameplay und Performance beachten. Fragen nur zum unmittelbar betroffenen Schritt stellen.

Erwartetes Ergebnis:
Tabelle mit Kriterium, Entwicklungsstand, Umgebung, Ausführendem/Quelle, Methode (automatisch geprüft / manuell geprüft), Ergebnis (bestanden / fehlgeschlagen / noch nicht geprüft), Beleg und Grenze; visuelle Nutzerfreigabe separat. Windows-Befunde gemäß Bugreport-Schema im Testworkflow übergeben. Nicht erhaltene Artefakte nicht als geprüft melden.

Letzter Arbeitsschritt nach allen Implementierungs-/Testschritten: Prüfe Kontextdateien UND betroffene Prompts auf Konsistenz mit Dateiänderungen und wichtigen Entscheidungen. Bereits konkret beauftragte Dokumentationsänderungen im Umfang ausführen; sonst betroffene Datei, konkreten Textvorschlag/Diff, Nutzen und Auswirkungen nennen, ausdrücklich Bestätigung erfragen und vor dem Schreiben warten. Falls keine Anpassung nötig ist, dies als letzten Antwortpunkt bestätigen. Keine automatische Kontextpflege ohne Freigabe.
```
