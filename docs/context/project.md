# Projekt und Umfang

Stand: 17.10.2026. Phase 00 ist technisch initialisiert; der folgende Releaseumfang bleibt überwiegend beschlossener Sollzustand.

**The Arcane Tower – Wizard RPG Portfolio** ist Florians persönliches Entwicklerportfolio mit freiwilliger Third-Person-Fantasywelt und gleichwertigem HTML-Zugang. Öffentliche Berufsbezeichnung: SAP-Entwickler mit Fokus auf CAP, BTP und ABAP. toom Baumarkt darf genannt werden; keine internen Unternehmensdetails.

## Erreichter Implementierungsstand

| Zustand                                        | Umfang                                                                                                                                                              |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Implementiert und im benannten Umfang getestet | Minimales Next.js-/React-Grundgerüst, npm-Lockfile, TypeScript/Tailwind/ESLint/Prettier; statischer Export der drei Einstiegspunkte, lokale CLI-/HTTP-Prüfungen und erneut erfolgreiche Qualitätsprüfungen im nativen Ubuntu-Checkout. |
| Implementiert, noch nicht vollständig getestet | Sprachwahl und HTML-Platzhalter unter `/`, `/de-DE/` und `/en-EN/`; Browserdarstellung laut Florian erfolgreich, vollständige Browser-, Tastatur-, Zoom-, Accessibility- und responsive Abnahme steht aus.                              |
| Beschlossen, nicht implementiert               | Vier vollständige Portfolio-Hauptbereiche, Inhaltsmodell, 3D-Welt und die nachfolgend beschriebenen Releasefunktionen.                                              |
| Geplant oder offen                             | Windows-Testumgebung vor Phase 01, nächster Commit durch Florian, vollständige Browser-/Accessibility-Abnahme, Performance-Messungen und priorisierte ESLint-10-Migration nach erfüllten Bedingungen.        |

Alle derzeit sichtbaren Inhalte sind Entwicklungsplatzhalter. Root bietet noch keinen funktionierenden Welt-Einstieg, keine gespeicherte Sprachpräferenz oder Einstellungen; die fachlichen Anforderungen bleiben erhalten. Nachweise und offene Prüfungen: [open-items.md](../development/open-items.md). Der Installations-/Startablauf steht in der [Root-README](../../README.md).

Phase 01 ist nicht begonnen. Zunächst steht die [Windows-Vorbereitung](../development/testing-workflow.md#offene-windows-vorbereitung-vor-phase-01) offen; danach ist ein eigener Implementierungsauftrag erforderlich. Entwicklung, automatisierte Nachweise und visuelle Nutzerfreigabe folgen dem zentralen Testworkflow.

## Erster Release – beschlossen, noch nicht vollständig implementiert

- Deutsch und Englisch unter `/de-DE/` und `/en-EN/`; Root mit Sprachwahl und beiden Einstiegen, ohne erzwungenen Redirect.
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

Vollständig bedienbarer Prototyp zuerst: einfache Umgebung und vorhandenes Magier-Prototypmodell; fehlende Assets/Animationen sichtbar vorläufig ersetzen. Finale Gestaltung danach gemäß den 29 freigegebenen Referenzen. Die vorhandene GLB ist kein fertiges Produktionsmodell.

Beschlossener Stack, tatsächlich installierte Versionen und spätere 3D-Integration: [architecture.md](architecture.md). Roadmap und passende Phasenprompts: [roadmap.md](../development/roadmap.md).

Weitere Turmetagen, Touch-Spielsteuerung oder begründete spätere Infrastruktur sind Erweiterungsmöglichkeiten, keine Releasepflicht. Die Architect’s Chamber ist nicht beschlossen.

## Erfolg

Kompetenzen und Kontakt sind schnell auffindbar, Informationen weder an Quests noch WebGL gebunden. Welt und UI sind konsistent, bedienbar und auf schwächeren Geräten angemessen skalierbar. Veröffentlichte Inhalte sind bestätigt und frei von internen Unternehmensdaten. Keine Leistungs- oder Barrierefreiheitsgarantie ohne entsprechende Prüfungen.
