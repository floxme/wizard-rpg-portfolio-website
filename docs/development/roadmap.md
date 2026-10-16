# Projektphasen

Stand: 16.10.2026. Von Florian bestätigte Reihenfolge. Phase 00 ist technisch initialisiert und dokumentiert; die echte Browserabnahme bleibt offen. Phase 01 bis 08 sind noch nicht umgesetzt. Fachliche Ziele bleiben Sollzustand, nicht automatisch Fortschrittsnachweise.

Jede Phase in kleine überprüfbare Aufträge teilen; nur unmittelbar relevante Fragen stellen. Zugänglichkeit, DE/EN, Fehlerfälle und Performance von Anfang an berücksichtigen. Kein ungefragtes Commit/Push/Deployment. Fehlende finale Assets blockieren den funktionalen Prototyp nicht.

| Phase | Ziel                                            | Prompt                                                                                |
| ----- | ----------------------------------------------- | ------------------------------------------------------------------------------------- |
| 00    | Klärung und Initialisierung                     | [00-clarification-and-setup.md](../../prompts/workflow/00-clarification-and-setup.md) |
| 01    | HTML-Portfolio, Daten und Navigation            | [01-html-portfolio.md](../../prompts/workflow/01-html-portfolio.md)                   |
| 02    | Platzhalterwelt, Magier, Kamera und Kollisionen | [02-world-prototype.md](../../prompts/workflow/02-world-prototype.md)                 |
| 03    | Kristall, Teleport und Weltinteraktionen        | [03-interactions.md](../../prompts/workflow/03-interactions.md)                       |
| 04    | HUD, Einstellungen, Aufgaben und Robustheit     | [04-hud-settings-robustness.md](../../prompts/workflow/04-hud-settings-robustness.md) |
| 05    | Funktionalen Prototyp gemeinsam abnehmen        | [05-prototype-acceptance.md](../../prompts/workflow/05-prototype-acceptance.md)       |
| 06    | Assetinventar, kostenlose Recherche und Auswahl | [06-asset-research.md](../../prompts/workflow/06-asset-research.md)                   |
| 07    | Finale Assets integrieren und messen            | [07-final-assets.md](../../prompts/workflow/07-final-assets.md)                       |
| 08    | Inhalte, Qualität und Releasevorbereitung       | [08-content-release.md](../../prompts/workflow/08-content-release.md)                 |

## Erreichter Stand und nächster gesonderter Auftrag

Phase 00 liefert ein geprüftes statisches Platzhalter-Grundgerüst mit npm-Lockfile und Qualitätswerkzeugen. Das ist weder das vollständige HTML-Portfolio aus Phase 01 noch ein Weltprototyp. Detaillierte Nachweise und Grenzen stehen ausschließlich in [open-items.md](open-items.md#tatsächlicher-nachweisstand), Versionen und Ausnahmen in [architecture.md](../context/architecture.md).

Der native Ubuntu-Checkout ist eingerichtet, beide Shared-Folder-Workarounds sind entfernt und die Qualitätsprüfungen dort erneut erfolgreich. Clone, Neuinstallation, Entwicklungsstart und erste Browserdarstellung sind von Florian bestätigt; Quellen und Prüfgrenzen stehen zentral in open-items.md. Florian übernimmt den nächsten Commit auf `dev`. Vollständige Browser-/Accessibility-Abnahme und Performance-Messungen bleiben offen. ESLint 9 bleibt vorläufig bewusst akzeptiert; die spätere ESLint-10-Migration ist priorisiert. Diese Restaufgaben starten nicht automatisch weitere Entwicklungsphasen. Phase 01 benötigt einen eigenen abgegrenzten Implementierungsauftrag.

## Prüftore

Setup: reale Versionen, Build/Export. HTML: direkte Routen, Sprache, Mobil/Tastatur. Welt: Laufwege, Kollisionen, Kamera, früher Pointer-Lock-Test. Interaktionen: vollständige Rückkehr, Positionierung, Abbruch und Timing mit Florian. Robustheit: Settings, Laden, Speicher, Fehler. Erst nach funktionaler Abnahme finale Assetbeschaffung und Integration.

Assetbeschaffung: vorhandene Lösungen/Grundgeometrie → kostenlose passende Pakete → Meshy nur für notwendige verbleibende Lücken. Kein Abo oder Kauf automatisch beschlossen. Finales Timing und visuelle Qualität im Browser gemeinsam beurteilen.

Als letzter Schritt jedes dateiverändernden Auftrags Kontext und betroffene Prompts abgleichen; unautorisierte Anpassungen konkret vorschlagen und bestätigen lassen.
