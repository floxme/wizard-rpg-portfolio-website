# Development

Zweck: Eine abgegrenzte Funktion implementieren.

## Verwendung

Den folgenden Prompt kopieren, eckige Platzhalter ausfüllen und an Codex im Projekt übergeben. Nicht benötigte optionale Felder entfernen. Ein Prompt erweitert keine Berechtigung aus AGENTS.md.

## Kopierbarer Prompt

```text
Aufgabe: [FUNKTION]
Erwartetes Verhalten: [BEISPIEL]
Abnahmekriterien: [A-IDS ODER BESCHREIBUNG]
Grenzen dieses Auftrags: [OPTIONAL]

Lies zuerst AGENTS.md, docs/context/README.md und die unten genannten Dokumente. Prüfe den tatsächlichen Repository-Zustand. Halte dich an bestätigte Anforderungen.

Erfinde keine APIs, Fakten, Inhalte, Testergebnisse oder Entscheidungen. Nutze offizielle Dokumentation passend zu den tatsächlich eingesetzten Paketversionen; nenne bei technischen Aussagen Quelle und Nachweisstand. Wenn etwas nicht geprüft werden kann, sage es ausdrücklich. Trenne Annahmen und Vorschläge von bestätigten Fakten.

Ändere AGENTS.md, README.md, docs/ oder prompts/ nur, wenn ich die konkrete Änderung ausdrücklich beauftragt oder nach Erklärung genehmigt habe. Ansonsten nenne Datei, geplante Änderung und Nutzen, frage und warte. Kein eigenständiger Commit, Push oder Deployment. Keine Einführung von Backend, Datenbank, Tracking oder neuen Produktfunktionen ohne Freigabe.

Für diesen Auftrag zusätzlich lesen: docs/context/architecture.md, zuständige Produktdatei, docs/development/acceptance-criteria.md.

Arbeitsauftrag:
1. Prüfe vorhandene Implementierung und die relevante Produktentscheidung. Frage nur bei entscheidender Unklarheit.
2. Erkläre den überschaubaren Änderungsumfang und führe ihn aus. Kleine Module, klare Typen, gemeinsame Inhalte statt Duplikate.
3. Berücksichtige DE/EN, HTML/3D, reduzierte Bewegung und Fehlerzustände soweit betroffen.
4. Prüfe das tatsächliche Verhalten gegen ausgewählte Abnahmekriterien. Nutze bestehende Tests und ergänze sinnvolle Verhaltenstests für konkrete Risiken.
5. Nenne mögliche Kontextänderungen getrennt als Vorschlag. Keine zusätzlichen Features, Refactorings oder Paketwechsel ohne Bedarf.

Erwartetes Ergebnis:
Ergebnis, betroffene Dateien, warum die Änderung nötig war, Tests mit tatsächlichem Ergebnis, offene Einschränkungen.
```
