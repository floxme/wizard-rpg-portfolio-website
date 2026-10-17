# Projektablauf-Prompts

Von Florian bestätigte Reihenfolge. Eine Phase ist kein Einmalauftrag für die gesamte Website. Pro Sitzung einen überprüfbaren Umfang wählen, Ergebnis testen und anschließend weitergehen. Bestehende Implementierungen prüfen statt erneut erzeugen. Phasenstatus nur mit Nachweis und Dokumentationsfreigabe ändern.

[Entwicklungs- und Testworkflow](../../docs/development/testing-workflow.md) ist die zentrale Prozessquelle: Ubuntu-Entwicklung/automatisierte Checks, Git-Übergabe und getrennte Windows-/Opera-Prüfung durch Florian. Keine Hostberechtigungen aus einer Vorlage ableiten; grüne Tests ersetzen keine visuelle Nutzerfreigabe. Windows-Grundeinrichtung und erster Opera-HTML-Test sind laut Nutzer erfolgt; offene Devmodus- und spätere Abnahmen bleiben in docs/development/open-items.md dokumentiert. Phase 01 benötigt einen eigenen Auftrag und ist nicht begonnen.

| Phase | Auftrag |
|---|---|
| 00 | [Klärung und Initialisierung](00-clarification-and-setup.md) |
| 01 | [HTML-Portfolio, Daten und Navigation](01-html-portfolio.md) |
| 02 | [Platzhalterwelt, Magier, Kamera und Kollisionen](02-world-prototype.md) |
| 03 | [Kristall, Teleport und Weltinteraktionen](03-interactions.md) |
| 04 | [HUD, Einstellungen, Aufgaben und Robustheit](04-hud-settings-robustness.md) |
| 05 | [Funktionalen Prototyp gemeinsam abnehmen](05-prototype-acceptance.md) |
| 06 | [Assetinventar, kostenlose Recherche und Auswahl](06-asset-research.md) |
| 07 | [Finale Assets integrieren und messen](07-final-assets.md) |
| 08 | [Inhalte, Qualität und Releasevorbereitung](08-content-release.md) |

Fragen, Platzhalter und Prüftore stehen in jeder Vorlage. Allgemeine Dev-/Bugfix-/Test-/Reviewprompts können innerhalb jeder Phase verwendet werden. Fortschritt ist nicht automatisch freigegeben, nur weil eine Phase einen Dateinamen besitzt. Spätere finale Welt-/Charakter-/Animationsassets weiterhin erst nach ausreichender funktionaler Prototypabnahme in Phasen 06/07; begrenzte Ausnahme für notwendige HTML-Portfolio-Assets während Phase 01 gemäß docs/context/assets.md. Einzelproduktion braucht gesonderten Auftrag und Freigabe. Der gemeinsame Inhaltsschritt in Phase 01 ersetzt nicht Phase 08; keine Veröffentlichung durch die KI.

Die [Roadmap-Unterpakete 01.1–01.8](../../docs/development/roadmap.md#phase-01--vorgeschlagene-operative-unterteilung) sind ausschließlich ein operativer Vorschlag. Verbindliche URL-/Inhaltsquelle: [Portfolio und Inhalte](../../docs/context/portfolio-and-content.md); Planung und konkrete visuelle PNG-Freigaben: [Asset-Inventar](../../docs/design/asset-inventory/arcane-portfolio-asset-inventar-phase-01.md). Phase 01 bleibt nicht implementiert. Sieben mit ChatGPT/OpenAI erzeugte Portfolio-PNGs sind vom Nutzer visuell ausgewählt: B01/B02 als freigegebene Bildmotive, D01 und D02-A bis D02-D als freigegebene PNG-Designvorlagen. Technische SVG-/CSS-Umsetzung, Bildoptimierung, responsive Einbindung und Browserabnahme stehen aus; weitere Assetproduktion benötigt gesonderte Freigaben. Dateinachweis und Grenzen im Inventar, Abschnitt 9. Keine automatische Generierung oder Integration und kein Implementierungsauftrag aus diesem Statusabgleich.
