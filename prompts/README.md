# Prompts verwenden

Stand: 17.10.2026. KI-neutrale Arbeitsvorlagen, keine ausführbaren Skripte. Öffne eine Vorlage, kopiere den Textblock, fülle Platzhalter aus und übergib ihn der KI im Projekt. Alle Pfade gelten relativ zum Projektroot.

## Zwei Gruppen

- [general/](general/README.md): 14 allgemeine Vorlagen für Setup, Development, Architektur, Testing, Bugfix, Code-Review, UX, Barrierefreiheit, Performance, Assetintegration, Inhalte, Releaseprüfung, Übergabe und technische Dokumentation.
- [workflow/](workflow/README.md): neun nummerierte Projektphasen vom Kontextabgleich/Setup bis zur Releasevorbereitung.

## Beginnen

Nutze [Phase 00](workflow/00-clarification-and-setup.md), Umfang zunächst Kontext-/Repositoryprüfung und Initialisierung. Windows-Grundeinrichtung und erster HTML-Test sind laut Nutzer erfolgt; vor [Phase 01](workflow/01-html-portfolio.md) offene Phase-00-Befunde im Testworkflow und in docs/development/open-items.md prüfen und gesonderten Implementierungsauftrag erteilen. Kleine überprüfbare Aufträge statt alle Prompts gleichzeitig. Rückfragen gezielt vor der betroffenen Funktion; nicht sämtliche Assets und Details vor dem Setup festlegen.

AGENTS.md gilt immer. Vorlagen erweitern keine Rechte. Analyse-/Reviewaufträge sind keine automatische Codeänderung. Beschlossener Stack, kein Springen, Platzhalter zuerst, PNGs/Original-GLB unverändert und keine eigenständigen Commits/Pushes/Deployments.

[Entwicklungs- und Testworkflow](../docs/development/testing-workflow.md) ist die zentrale Prozessquelle: Ubuntu-Entwicklung/automatisierte Checks, Git-Übergabe und getrennte Windows-/Opera-Prüfung durch Florian. Keine Hostberechtigungen aus einer Vorlage ableiten; grüne Tests ersetzen keine visuelle Nutzerfreigabe. Windows-Grundeinrichtung und erster Opera-HTML-Test sind laut Nutzer erfolgt; offene Devmodus- und spätere Abnahmen bleiben in docs/development/open-items.md dokumentiert. Phase 01 benötigt einen eigenen Auftrag und ist nicht begonnen.

## Abschluss jedes dateiverändernden Auftrags

Als letzten Schritt Kontextdateien UND betroffene Prompts gegen Änderungen und wichtige Entscheidungen prüfen. Notwendige noch nicht konkret autorisierte Anpassungen mit Datei, Textvorschlag/Diff, Nutzen und Auswirkungen zur Bestätigung vorlegen. Bei keinem Bedarf kurz bestätigen. Nicht automatisch neue Anforderungen in Dateien schreiben.

## Umstellung aus dem alten Paket

Die bisherigen `prompts/01-…` bis `13-…` liegen jetzt unter `prompts/general/` mit ihren bisherigen Dateinamen. Neu ist `general/14-technical-documentation.md`; der Projektablauf steht separat unter `workflow/00-…` bis `08-…`. Alte flache Vorlagen beim Übernehmen dieses Pakets entfernen, damit keine konkurrierenden Anweisungen übrig bleiben. Die alte zentrale prompts/README.md durch diese ersetzen.
