# User Experience

Zweck: Benutzerabläufe prüfen.

## Verwendung

Den folgenden Prompt kopieren, eckige Platzhalter ausfüllen und an Codex im Projekt übergeben. Nicht benötigte optionale Felder entfernen. Ein Prompt erweitert keine Berechtigung aus AGENTS.md.

## Kopierbarer Prompt

```text
Ablauf oder Bildschirm: [ANGABE]
Zielgruppe/Gerät: [OPTIONAL]
Material: [URL / LOKALER STAND / SCREENSHOTS]

Lies zuerst AGENTS.md, docs/context/README.md und die unten genannten Dokumente. Prüfe den tatsächlichen Repository-Zustand. Halte dich an bestätigte Anforderungen.

Erfinde keine APIs, Fakten, Inhalte, Testergebnisse oder Entscheidungen. Nutze offizielle Dokumentation passend zu den tatsächlich eingesetzten Paketversionen; nenne bei technischen Aussagen Quelle und Nachweisstand. Wenn etwas nicht geprüft werden kann, sage es ausdrücklich. Trenne Annahmen und Vorschläge von bestätigten Fakten.

Ändere AGENTS.md, README.md, docs/ oder prompts/ nur, wenn ich die konkrete Änderung ausdrücklich beauftragt oder nach Erklärung genehmigt habe. Ansonsten nenne Datei, geplante Änderung und Nutzen, frage und warte. Kein eigenständiger Commit, Push oder Deployment. Keine Einführung von Backend, Datenbank, Tracking oder neuen Produktfunktionen ohne Freigabe.

Für diesen Auftrag zusätzlich lesen: docs/context/world-and-design.md, docs/context/gameplay-and-interactions.md, docs/context/portfolio-and-content.md.

Arbeitsauftrag:
1. Durchlaufe soweit möglich den echten Ablauf; kennzeichne eine reine Screenshot-/Codeanalyse.
2. Bewerte Orientierung, Lesbarkeit, Rückmeldungen, Fehlertoleranz und Zahl nötiger Aktionen.
3. Beachte die beschlossenen Sonderregeln: X schließt direkt, kein Esc-Schließen, kein weiterer regulärer Klick/Q zur Rückkehr, HTML ohne Spielzwang.
4. Prüfe gemeinsame Gestaltung bei Pixel-RPG-UI und lesbaren Texten sowie DE/EN-Platzbedarf.
5. Liefere priorisierte Verbesserungen mit konkretem Vorher/Nachher. Keine Umsetzung oder Kontextänderung ohne entsprechenden Auftrag.

Erwartetes Ergebnis:
Konkrete Probleme, Auswirkung auf Besucher, Verbesserungsvorschläge, vorhandene Nachweise und offene Tests.
```
