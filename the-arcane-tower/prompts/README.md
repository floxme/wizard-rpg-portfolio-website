# Prompts verwenden

Diese 13 Vorlagen sind Arbeitsaufträge, keine Skills oder automatisch ausgeführten Skripte. Öffne die passende Datei, kopiere den Textblock, ersetze die Platzhalter und sende ihn in Codex im Projektverzeichnis.

Die Kontextdateien liefern den Sollzustand; die Prompts bestimmen den aktuellen Umfang. AGENTS.md gilt für jede Vorlage, einschließlich offizieller Dokumentationsprüfung, wahrheitsgemäßer Nachweise und ausdrücklicher Zustimmung vor Dokumentationsänderungen.

| Vorlage | Einsatz |
|---|---|
| [Projektstart](01-project-start.md) | Initialisierung des bedienbaren Platzhalter-Prototyps |
| [Development](02-development.md) | Eine abgegrenzte Funktion implementieren |
| [Architekturfrage](03-architecture.md) | Technische Alternativen fundiert bewerten |
| [Testing](04-testing.md) | Verhalten gegen Anforderungen prüfen |
| [Bugfix](05-bugfix.md) | Einen reproduzierbaren Fehler gezielt beheben |
| [Code-Review](06-code-review.md) | Änderungen unabhängig vom Implementierungsablauf untersuchen |
| [User Experience](07-user-experience.md) | Benutzerabläufe prüfen |
| [Barrierefreiheit](08-accessibility.md) | Zugänglichkeit praktisch untersuchen |
| [Performance](09-performance.md) | Messbare Engpässe verbessern |
| [Asset-Integration](10-asset-integration.md) | Ein freigegebenes Asset einbinden |
| [Inhalte und Übersetzung](11-content-and-translation.md) | Wahrheitsgemäße DE/EN-Inhalte vorbereiten |
| [Release-Prüfung](12-release-check.md) | Veröffentlichungsbereitschaft beurteilen |
| [Session-Übergabe](13-session-handover.md) | Nächste Sitzung ohne erfundenen Fortschritt vorbereiten |

## Empfohlene Reihenfolge

Projektstart → eine kleine Development-Aufgabe → Testing → Code-Review. Bugfix bei konkreten Fehlern; UX/Barrierefreiheit früh, Performance nach ersten Messungen. Assetintegration nach funktionierendem Grundablauf. Release-Check vor Veröffentlichung. Session-Übergabe bei Wechsel in einen neuen Chat.

## Beispiel für den ersten Auftrag

Verwende 01-project-start.md mit:
- Projektpfad: dein tatsächlicher lokaler Repository-Pfad.
- Stand: prüfen.
- Umfang: Phase 0, anschließend Root-Startscreen und statische Sprachrouten mit HTML-Grundgerüst; noch keine finalen Assets.

Beginne nicht mit allen 13 Prompts gleichzeitig. Nach jeder Aufgabe Ergebnis prüfen und den nächsten überschaubaren Auftrag wählen. Analyse-/Reviewvorlagen ändern standardmäßig keinen Produktcode. Development/Bugfix beauftragen dagegen konkrete Umsetzung im angegebenen Umfang. Keine Vorlage erlaubt eigenständigen Commit, Push oder Deployment.
