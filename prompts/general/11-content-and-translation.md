# Inhalte und Übersetzung

Zweck: Wahrheitsgemäße DE/EN-Inhalte vorbereiten.

## Verwendung

Den folgenden Prompt kopieren, eckige Platzhalter ausfüllen und an KI im Projekt übergeben. Nicht benötigte optionale Felder entfernen. Ein Prompt erweitert keine Berechtigung aus AGENTS.md.

## Kopierbarer Prompt

```text
Bereich: [ANGABE]
Bestätigte Fakten/Entwurf: [TEXT]
Umfang: [ENTWURF IM CHAT / FREIGEGEBENE INHALTE EINPFLEGEN]

Alle Dateipfade sind relativ zum Projektroot. Lies zuerst AGENTS.md, docs/context/README.md und die unten genannten Dokumente. Prüfe den tatsächlichen Repository-Zustand. Halte dich an bestätigte Anforderungen.

Erfinde keine APIs, Fakten, Inhalte, Testergebnisse oder Entscheidungen. Nutze offizielle Dokumentation passend zu den tatsächlich eingesetzten Paketversionen; nenne bei technischen Aussagen Quelle und Nachweisstand. Wenn etwas nicht geprüft werden kann, sage es ausdrücklich. Trenne Annahmen und Vorschläge von bestätigten Fakten.

Ändere AGENTS.md, README.md, docs/ oder prompts/ nur, wenn ich die konkrete Änderung ausdrücklich beauftragt oder nach Erklärung genehmigt habe. Ansonsten nenne Datei, geplante Änderung und Nutzen, frage und warte. Kein eigenständiger Commit, Push oder Deployment. Keine Einführung von Backend, Datenbank, Tracking oder neuen Produktfunktionen ohne Freigabe.

Für diesen Auftrag zusätzlich lesen: docs/context/portfolio-and-content.md, docs/context/privacy-security-and-licenses.md. Der eigene kontrollierte Inhaltsschritt innerhalb Phase 01 ist beschlossen: gemeinsam mit Florian About Me/General/Interests, dann Skilltree mit Kompetenzen/Tools/Career, danach Projects und Contact. Nur den hier freigegebenen Teil bearbeiten; die Nummerierung 01.1–01.8 bleibt vorgeschlagen. Phase 08 behält Inhaltsfinalisierung, Qualität und Releaseprüfung.

Arbeitsauftrag:
1. Verwende nur bestätigte Fakten. Technische Struktur darf zunächst eindeutig markierte Entwicklungsplatzhalter nutzen. Persönliche Angaben, Skilllevel, Berufserfahrungen, Projekte, Technologien, Kontakte und Medien Schritt für Schritt bestätigen; bei Lücken fragen statt erfinden. Illustrationen nicht als echte Screenshots oder Biografien ausgeben. Asset-Inventar ist keine Inhaltsfreigabe.
2. Formuliere deutsch mit du, freundlich/professionell; englisch sinngemäß. Fantasybegriffe dürfen fachliche Aussagen nicht verschleiern.
3. Prüfe Unternehmensvertraulichkeit und ehrliche KI-/Assetdarstellung. Das GitHub-Repository ist öffentlich; nur bestätigte funktionierende Quellcode-Links veröffentlichen und deren tatsächliche UI-Implementierung getrennt prüfen. Website noch nicht als veröffentlicht darstellen.
4. Halte IDs und Textquellen für HTML/Welt konsistent; übersetze auch zugängliche Labels und Fehlermeldungen.
5. Bei Entwurfsumfang nur Textvorschlag liefern. Bei ausdrücklich freigegebenem Einpflegen lokale Inhaltsdateien ändern und Konsistenz prüfen; Kontextdateien benötigen eigene Freigabe.

Bei visuellen Aufgaben zusätzlich docs/design/README.md, die zuständige Mockup-README UND die tatsächlichen PNGs lesen. Alle 29 vorhandenen PNGs sind freigegeben; nicht verändern. Relevante Patterns aus Architektur, UI, Gameplay und Performance beachten. Fragen nur zum unmittelbar betroffenen Schritt stellen.

Erwartetes Ergebnis:
DE/EN-Entwurf oder eingepflegte Änderungen, fehlende Fakten, verwendete bestätigte Angaben und Konsistenzprüfung.

Letzter Arbeitsschritt nach allen Implementierungs-/Testschritten: Prüfe Kontextdateien UND betroffene Prompts auf Konsistenz mit Dateiänderungen und wichtigen Entscheidungen. Bereits konkret beauftragte Dokumentationsänderungen im Umfang ausführen; sonst betroffene Datei, konkreten Textvorschlag/Diff, Nutzen und Auswirkungen nennen, ausdrücklich Bestätigung erfragen und vor dem Schreiben warten. Falls keine Anpassung nötig ist, dies als letzten Antwortpunkt bestätigen. Keine automatische Kontextpflege ohne Freigabe.
```
