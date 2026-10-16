# Release-Prüfung

Zweck: Veröffentlichungsbereitschaft beurteilen.

## Verwendung

Den folgenden Prompt kopieren, eckige Platzhalter ausfüllen und an KI im Projekt übergeben. Nicht benötigte optionale Felder entfernen. Ein Prompt erweitert keine Berechtigung aus AGENTS.md.

## Kopierbarer Prompt

```text
Prüfstand: [COMMIT / LOKALER STAND]
Geplantes Hosting/Domain: [ANGABE ODER OFFEN]
Zielbrowser/Geräte: [ANGABE]

Alle Dateipfade sind relativ zum Projektroot. Lies zuerst AGENTS.md, docs/context/README.md und die unten genannten Dokumente. Prüfe den tatsächlichen Repository-Zustand. Halte dich an bestätigte Anforderungen.

Erfinde keine APIs, Fakten, Inhalte, Testergebnisse oder Entscheidungen. Nutze offizielle Dokumentation passend zu den tatsächlich eingesetzten Paketversionen; nenne bei technischen Aussagen Quelle und Nachweisstand. Wenn etwas nicht geprüft werden kann, sage es ausdrücklich. Trenne Annahmen und Vorschläge von bestätigten Fakten.

Ändere AGENTS.md, README.md, docs/ oder prompts/ nur, wenn ich die konkrete Änderung ausdrücklich beauftragt oder nach Erklärung genehmigt habe. Ansonsten nenne Datei, geplante Änderung und Nutzen, frage und warte. Kein eigenständiger Commit, Push oder Deployment. Keine Einführung von Backend, Datenbank, Tracking oder neuen Produktfunktionen ohne Freigabe.

Für diesen Auftrag zusätzlich lesen: docs/development/acceptance-criteria.md, docs/development/open-items.md, docs/context/privacy-security-and-licenses.md. Maßgeblicher Entwicklungs-/Testprozess: docs/development/testing-workflow.md.

Arbeitsauftrag:
1. Prüfe tatsächlichen Build, statische Routen/Reloads, Inhalte/Links, mobile HTML-Nutzung und bekannte Fehler.
2. Prüfe kritische Spielabläufe einschließlich X/Zurück-Pointer-Lock, Sprache, reduzierte Bewegung, Audio und Qualitätsregelung.
3. Prüfe Rechte/Attribution, vertrauliche Daten, Geheimnisse, unerwartete Netzwerkdienste und noch fehlende Website-Veröffentlichungsangaben. GitHub-Repository ist bereits öffentlich, Website noch unveröffentlicht. Nur bestätigte funktionierende Links; keine implementierten UI-Links aus Repository-Sichtbarkeit ableiten. Testartefakte vor Veröffentlichung bereinigen; private:true betrifft npm und bleibt erhalten.
4. Trenne automatisierte Checks, reale Browserprüfungen und visuelle Nutzerfreigabe mit Nachweisstatus aus dem Testworkflow. Windows-/Opera-Abnahme nur mit tatsächlichem Nachweis nennen; fehlende Nachweise bleiben offen. Grüne Tests belegen weder natürliche Animation/Kamerawirkung noch Referenznähe. Trenne Blocker, kleinere Befunde und ungetestete Bereiche; kein grüner Releasebericht bei wesentlichen Lücken.
5. Keine Website-Veröffentlichung, kein Commit/Push, keine Änderung der Repository-Sichtbarkeit oder Git-Historie. Liefere einen überprüfbaren Bericht für Florians Entscheidung; keine erfolgte Historienbereinigung behaupten.

Bei visuellen Aufgaben zusätzlich docs/design/README.md, die zuständige Mockup-README UND die tatsächlichen PNGs lesen. Alle 29 vorhandenen PNGs sind freigegeben; nicht verändern. Relevante Patterns aus Architektur, UI, Gameplay und Performance beachten. Fragen nur zum unmittelbar betroffenen Schritt stellen.

Erwartetes Ergebnis:
Releaseempfehlung mit Begründung, tatsächliche Nachweise, Blocker, Restpunkte und durch Florian auszuführende nächste Schritte.

Letzter Arbeitsschritt nach allen Implementierungs-/Testschritten: Prüfe Kontextdateien UND betroffene Prompts auf Konsistenz mit Dateiänderungen und wichtigen Entscheidungen. Bereits konkret beauftragte Dokumentationsänderungen im Umfang ausführen; sonst betroffene Datei, konkreten Textvorschlag/Diff, Nutzen und Auswirkungen nennen, ausdrücklich Bestätigung erfragen und vor dem Schreiben warten. Falls keine Anpassung nötig ist, dies als letzten Antwortpunkt bestätigen. Keine automatische Kontextpflege ohne Freigabe.
```
