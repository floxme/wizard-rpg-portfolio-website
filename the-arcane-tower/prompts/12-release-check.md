# Release-Prüfung

Zweck: Veröffentlichungsbereitschaft beurteilen.

## Verwendung

Den folgenden Prompt kopieren, eckige Platzhalter ausfüllen und an Codex im Projekt übergeben. Nicht benötigte optionale Felder entfernen. Ein Prompt erweitert keine Berechtigung aus AGENTS.md.

## Kopierbarer Prompt

```text
Prüfstand: [COMMIT / LOKALER STAND]
Geplantes Hosting/Domain: [ANGABE ODER OFFEN]
Zielbrowser/Geräte: [ANGABE]

Lies zuerst AGENTS.md, docs/context/README.md und die unten genannten Dokumente. Prüfe den tatsächlichen Repository-Zustand. Halte dich an bestätigte Anforderungen.

Erfinde keine APIs, Fakten, Inhalte, Testergebnisse oder Entscheidungen. Nutze offizielle Dokumentation passend zu den tatsächlich eingesetzten Paketversionen; nenne bei technischen Aussagen Quelle und Nachweisstand. Wenn etwas nicht geprüft werden kann, sage es ausdrücklich. Trenne Annahmen und Vorschläge von bestätigten Fakten.

Ändere AGENTS.md, README.md, docs/ oder prompts/ nur, wenn ich die konkrete Änderung ausdrücklich beauftragt oder nach Erklärung genehmigt habe. Ansonsten nenne Datei, geplante Änderung und Nutzen, frage und warte. Kein eigenständiger Commit, Push oder Deployment. Keine Einführung von Backend, Datenbank, Tracking oder neuen Produktfunktionen ohne Freigabe.

Für diesen Auftrag zusätzlich lesen: docs/development/acceptance-criteria.md, docs/development/open-items.md, docs/context/privacy-security-and-licenses.md.

Arbeitsauftrag:
1. Prüfe tatsächlichen Build, statische Routen/Reloads, Inhalte/Links, mobile HTML-Nutzung und bekannte Fehler.
2. Prüfe kritische Spielabläufe einschließlich X/Zurück-Pointer-Lock, Sprache, reduzierte Bewegung, Audio und Qualitätsregelung.
3. Prüfe Rechte/Attribution, vertrauliche Daten, Geheimnisse, unerwartete Netzwerkdienste und noch fehlende Veröffentlichungsangaben.
4. Trenne Blocker, kleinere Befunde und ungetestete Bereiche. Kein grüner Releasebericht bei fehlenden wesentlichen Nachweisen.
5. Keine Veröffentlichung, kein Commit/Push, kein Umschalten des Repositorys auf öffentlich. Liefere einen überprüfbaren Bericht für Florians Entscheidung.

Erwartetes Ergebnis:
Releaseempfehlung mit Begründung, tatsächliche Nachweise, Blocker, Restpunkte und durch Florian auszuführende nächste Schritte.
```
