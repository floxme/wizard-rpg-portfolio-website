# Projektphasen

Stand: 17.10.2026. Von Florian bestätigte Reihenfolge. Phase 00 ist im dokumentierten Umfang abgeschlossen; der Devmodus-Routenbefund und vollständige Browserabnahmen bleiben offen. Phase 01 bis 08 sind noch nicht umgesetzt. Fachliche Ziele bleiben Sollzustand, nicht automatisch Fortschrittsnachweise.

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

## Windows-HTML-Test und nächster Auftrag

Der [zentrale Testworkflow](testing-workflow.md) ist verbindlich. Der eigenständige Windows-Checkout ist laut Florian für HTML-Tests eingerichtet; Installation, Devstart und drei Einstiegsseiten sind in Opera manuell bestätigt. Der zuvor offene Einrichtungsschritt ist im benannten Umfang erledigt. Der unter Ubuntu reproduzierte Devmodus-Routenbefund und die fehlenden Windows-Vergleichsbedingungen bleiben in [open-items.md](open-items.md#windows-html-test-und-devmodus-routenbefund--17102026) offen; keine dauerhafte Fehlerbehebung behaupten. Ubuntu bleibt Entwicklungs-/Automationsort; Windows ist die separate grafische Testumgebung, ohne automatische Hostrechte für Codex. Phase 00 ist mit Nachweisen und verbleibenden Befunden dokumentiert, nicht vorbehaltlos fehlerfrei abgenommen. Phase 01 ist weiterhin nicht begonnen und benötigt einen gesonderten Auftrag.

Geeignete Regressionstests und ergänzende Browserautomation passend zur tatsächlichen Funktion/Phase einführen. Neue Testframeworks, GitHub Actions oder Runner sind keine Voraussetzung für den Windows-Vorbereitungsschritt und dürfen Phase 01 nicht unnötig verzögern. Automatische Funktionsergebnisse und visuelle Nutzerfreigabe getrennt führen.

## Phase 01 – vorgeschlagene operative Unterteilung

Phase 01 ist **nicht implementiert**. Verbindlich beschlossen sind das [Routing-Soll](../context/portfolio-and-content.md#sprachen-und-routen), die [begrenzte frühe Portfolio-Assetstrategie](../context/assets.md#portfolio-assets-während-phase-01) und der [gemeinsame Inhaltsschritt](../context/portfolio-and-content.md#echte-inhalte-innerhalb-von-phase-01). Die folgende Nummerierung und genaue Ausgestaltung sind dagegen **vorgeschlagen**, keine vollständige Freigabe von acht Implementierungsaufträgen. Jeder tatsächliche Auftrag wird gesondert abgegrenzt; die Hauptphasen 00–08 ändern sich nicht.

| Vorschlag | Arbeitspaket | Planungsgrenze |
| --- | --- | --- |
| 01.1 | Routing und technisches Fundament | Beschlossene Basis-URLs erhalten; Bereichs-/Detail-URLs vor Implementierung gesondert festlegen. Devmodus-Befund und Deep Links berücksichtigen. |
| 01.2 | Datenmodelle und Internationalisierung | Gemeinsame typisierte Inhalte und DE/EN; zunächst klar gekennzeichnete Entwicklungsplatzhalter. |
| 01.3 | Designsystem und gezielte Asset-Erstellung | Elf Portfolio-Referenzen und Planungsinventar nutzen; jede Einzelproduktion und Integration gesondert beauftragen/freigeben. |
| 01.4 | About Me und Interests | Bestätigte Struktur, austauschbare Inhalte und vorläufige Medien; keine erfundenen persönlichen Fakten. |
| 01.5 | Skilltree | Tatsächliche Kompetenzen, Tools & Methods und Career; Werte und Zeiträume erst gemeinsam bestätigen. |
| 01.6 | Projects und Contact | Tatsächlicher Projektstand und bestätigte Kontaktmöglichkeiten; keine erfundenen Projekte, URLs oder Medien. |
| 01.7 | Echte Portfolio-Inhalte gemeinsam erarbeiten | Eigener kontrollierter Inhaltsschritt in der fachlich festgelegten Reihenfolge; keine Vorwegnahme der Releasefreigabe. |
| 01.8 | Integration, Tests und visuelle Abnahme | Automatisierte Nachweise und echte Windows-/Opera-Prüfung getrennt; visuelle Freigabe durch Florian. |

Maßgebliche visuelle Planung: [Portfolio-Asset-Inventar](../design/asset-inventory/arcane-portfolio-asset-inventar-phase-01.md), 18 Bildmotiv-Kandidaten plus weitere Designasset-, Komponenten- und Medienkategorien; keine verpflichtende Dateizahl und kein freigegebener Produktionssatz. Vorhandene geeignete Motive bevorzugt wiederverwenden. Die begrenzte Ausnahme erlaubt notwendige HTML-Portfolio-Assets während Phase 01; sie verlagert **keine** finale Welt-, Charakter- oder Animationsproduktion aus Phasen 06/07. Phase 08 bleibt für Inhaltsfinalisierung, Qualität und Releasevorbereitung bestehen; der frühe Inhaltsschritt ersetzt diese Prüfung nicht.

Der nächste geplante fachliche Schritt ist die **detaillierte Spezifikation von B01 Fantasy-Header, B02 Sidebar-Illustration, D01 Arkaner Kompassrose und D02 Fantasy-Rahmensystem**. Noch keine Spezifikation, Produktion, Assetintegration oder Phase-01-Implementierung durch diesen Dokumentationsauftrag. Konkrete Produktionsassets sind weiterhin nicht generiert oder visuell freigegeben.

## Prüftore

Setup: reale Versionen, Build/Export. HTML: direkte Routen, Sprache, Mobil/Tastatur. Welt: Laufwege, Kollisionen, Kamera, früher Pointer-Lock-Test. Interaktionen: vollständige Rückkehr, Positionierung, Abbruch und Timing mit Florian. Robustheit: Settings, Laden, Speicher, Fehler. Für finale Welt-, Charakter- und Animationsassets weiterhin erst funktionale Prototypabnahme, dann Phasen 06/07. Die ausdrücklich begrenzte Portfolio-Asset-Ausnahme in Phase 01 ist davon ausgenommen; Einzelaufträge, Rechte-/Technikprüfung und visuelle Freigabe bleiben erforderlich.

Assetbeschaffung: vorhandene Lösungen/Grundgeometrie → kostenlose passende Pakete → Meshy nur für notwendige verbleibende Lücken. Kein Abo oder Kauf automatisch beschlossen. Finales Timing und visuelle Qualität im Browser gemeinsam beurteilen.

Als letzter Schritt jedes dateiverändernden Auftrags Kontext und betroffene Prompts abgleichen; unautorisierte Anpassungen konkret vorschlagen und bestätigen lassen.
