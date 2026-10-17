# Projekt und Umfang

Stand: 17.10.2026. Phase 00 ist im dokumentierten Umfang abgeschlossen, offene technische Befunde bleiben erhalten; der folgende Releaseumfang bleibt überwiegend beschlossener Sollzustand.

**The Arcane Tower – Wizard RPG Portfolio** ist Florians persönliches Entwicklerportfolio mit freiwilliger Third-Person-Fantasywelt und gleichwertigem HTML-Zugang. Öffentliche Berufsbezeichnung: SAP-Entwickler mit Fokus auf CAP, BTP und ABAP. toom Baumarkt darf genannt werden; keine internen Unternehmensdetails.

## Erreichter Implementierungsstand

| Zustand                                        | Umfang                                                                                                                                                              |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Implementiert und im benannten Umfang getestet | Minimales Next.js-/React-Grundgerüst, npm-Lockfile, TypeScript/Tailwind/ESLint/Prettier; statischer Export der drei Einstiegspunkte, lokale CLI-/HTTP-Prüfungen und erneut erfolgreiche Qualitätsprüfungen im nativen Ubuntu-Checkout. |
| Implementiert, noch nicht vollständig getestet | Sprachwahl und HTML-Platzhalter unter `/`, `/de-DE/` und `/en-EN/`; Browserdarstellung laut Florian erfolgreich, vollständige Browser-, Tastatur-, Zoom-, Accessibility- und responsive Abnahme steht aus.                              |
| Beschlossen, nicht implementiert               | Lokalisierte Startscreens, Portfolio-Basispfade, vier vollständige Hauptbereiche, Inhaltsmodell, technische Portfolio-Assetintegration und gemeinsame Inhaltsarbeit, 3D-Welt und die nachfolgend beschriebenen Releasefunktionen.                                              |
| Geplant oder offen                             | Devmodus-Routenbefund nach erstem Windows-HTML-Test, nächster Commit durch Florian, vollständige Browser-/Accessibility-Abnahme, Performance-Messungen und priorisierte ESLint-10-Migration nach erfüllten Bedingungen.        |

Alle derzeit sichtbaren Inhalte sind Entwicklungsplatzhalter. Root bietet noch keinen funktionierenden Welt-Einstieg, keine gespeicherte Sprachpräferenz oder Einstellungen; die fachlichen Anforderungen bleiben erhalten. Nachweise und offene Prüfungen: [open-items.md](../development/open-items.md). Der Installations-/Startablauf steht in der [Root-README](../../README.md).

Phase 01 ist nicht begonnen. Die [Windows-Grundeinrichtung und der erste HTML-Test](../development/testing-workflow.md#windows-einrichtung-und-erster-html-test) sind von Florian bestätigt; der Devmodus-Routenbefund bleibt gemäß open-items.md offen. Für Phase 01 ist ein eigener Implementierungsauftrag erforderlich. Entwicklung, automatisierte Nachweise und visuelle Nutzerfreigabe folgen dem zentralen Testworkflow.

## Erster Release – beschlossen, noch nicht vollständig implementiert

- Root `/` bleibt Sprachauswahl ohne automatischen Redirect; danach lokalisierter Startscreen unter `/de-DE/` oder `/en-EN/` mit Welt- und direktem Portfolio-Einstieg. Eigenständiges HTML-Portfolio unter `/de-DE/portfolio/` und `/en-EN/portfolio/`, unabhängig von 3D. Konkrete Unterseiten-URLs bleiben vor Umsetzung gesondert festzulegen; [zentrale Routingquelle](portfolio-and-content.md#sprachen-und-routen).
- Desktop/Laptop mit Maus und Tastatur: optionale Welt. Smartphone/Tablet: vollständiges HTML-Portfolio, kein Touch-Gameplay.
- Vier Portfolio-Hauptbereiche: About Me, Skilltree, Projects, Contact. Fähigkeiten, Berufserfahrung und eigene Projekte bleiben fachlich getrennt; Berufserfahrung liegt unter Skilltree → Career Progression.
- Start außerhalb des Turms, ein begehbarer zentraler Raum mit Portfolio-Kristall, drei optionale Hotspots: Wegschild, Runenschmiede, Garten.
- WASD, Shift, E, Q und B; kein Springen, Klettern oder Kampfsystem. Sichere Grenzen und Objektkollisionen.
- Minimap, freiwillige Aufgaben, lokale Einstellungen, Qualitätsregelung und reduzierte Bewegung.
- HP/Mana rein dekorativ im Prototyp, keine Skill-Actionbar oder abgeleiteten Ressourcenmechaniken.
- Audio bei Erstbesuch aus; Musik und Effekte getrennt regelbar.
- Lokale Inhalte, kein Konto, Backend, Datenbank, Admin oder Tracking. Laut Florian öffentliches GitHub-Repository; öffentliches Portfolio als Ziel.
- The Arcane Tower ist das erste persönliche Projekt; keine erfundenen Füllprojekte.

## Vorgehen

Für die 3D-Welt weiterhin vollständig bedienbarer Prototyp zuerst: einfache Umgebung und vorhandenes Magier-Prototypmodell; fehlende Assets/Animationen sichtbar vorläufig ersetzen. Finale Weltgestaltung danach gemäß den 29 freigegebenen Referenzen. Die vorhandene GLB ist kein fertiges Produktionsmodell.

Begrenzte Ausnahme: notwendige visuelle HTML-Portfolio-Assets bereits während Phase 01 schrittweise vorbereiten, erstellen, freigeben und integrieren; [Assetquelle](assets.md#portfolio-assets-während-phase-01) und [Planungsinventar](../design/asset-inventory/arcane-portfolio-asset-inventar-phase-01.md). Gesonderte Einzelaufträge/Rechte-/Sichtfreigaben bleiben notwendig. Gemeinsam bestätigte echte Inhalte erhalten einen eigenen kontrollierten Schritt in Phase 01; zunächst gekennzeichnete Entwicklungsplatzhalter. Phasen 06/07 für spätere Assetarbeiten und Phase 08 für Inhaltsfinalisierung/Releaseprüfung bleiben erhalten. Die acht Unterpakete 01.1–01.8 sind ausschließlich ein operativer Vorschlag in der Roadmap, keine vollständige Implementierungsfreigabe. Phase 01 ist weiterhin nicht implementiert.

Zur Vorbereitung sind inzwischen sieben mit ChatGPT/OpenAI erzeugte Portfolio-PNGs vom Nutzer visuell ausgewählt: B01/B02 als freigegebene Bildmotive, D01 und D02-A bis D02-D als freigegebene PNG-Designvorlagen. Tatsächlicher Bestand und Freigabegrenzen: [Inventar, Abschnitt 9](../design/asset-inventory/arcane-portfolio-asset-inventar-phase-01.md#9-erstes-ausgewähltes-portfolio-asset-paket). Technische SVG-/CSS-Umsetzung, Bildoptimierung, responsive Einbindung und Browserabnahme stehen aus. Die visuelle Auswahl ist keine Appintegration; weitere Assetproduktion benötigt gesonderte Freigaben.

Beschlossener Stack, tatsächlich installierte Versionen und spätere 3D-Integration: [architecture.md](architecture.md). Roadmap und passende Phasenprompts: [roadmap.md](../development/roadmap.md).

Weitere Turmetagen, Touch-Spielsteuerung oder begründete spätere Infrastruktur sind Erweiterungsmöglichkeiten, keine Releasepflicht. Die Architect’s Chamber ist nicht beschlossen.

## Erfolg

Kompetenzen und Kontakt sind schnell auffindbar, Informationen weder an Quests noch WebGL gebunden. Welt und UI sind konsistent, bedienbar und auf schwächeren Geräten angemessen skalierbar. Veröffentlichte Inhalte sind bestätigt und frei von internen Unternehmensdaten. Keine Leistungs- oder Barrierefreiheitsgarantie ohne entsprechende Prüfungen.
