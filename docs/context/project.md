# Projekt und Umfang

Stand: 16.10.2026. Phase 00 ist technisch initialisiert; der folgende Releaseumfang bleibt überwiegend beschlossener Sollzustand.

**The Arcane Tower – Wizard RPG Portfolio** ist Florians persönliches Entwicklerportfolio mit freiwilliger Third-Person-Fantasywelt und gleichwertigem HTML-Zugang. Öffentliche Berufsbezeichnung: SAP-Entwickler mit Fokus auf CAP, BTP und ABAP. toom Baumarkt darf genannt werden; keine internen Unternehmensdetails.

## Erreichter Implementierungsstand

| Zustand                                        | Umfang                                                                                                                                                              |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Implementiert und im benannten Umfang getestet | Minimales Next.js-/React-Grundgerüst, npm-Lockfile, TypeScript/Tailwind/ESLint/Prettier; statischer Export der drei Einstiegspunkte und lokale CLI-/HTTP-Prüfungen. |
| Implementiert, noch nicht vollständig getestet | Sprachwahl und HTML-Platzhalter unter `/`, `/de-DE/` und `/en-EN/`; echte Browser-, Tastatur-, Zoom- und responsive Abnahme steht aus.                              |
| Beschlossen, nicht implementiert               | Vier vollständige Portfolio-Hauptbereiche, Inhaltsmodell, 3D-Welt und die nachfolgend beschriebenen Releasefunktionen.                                              |
| Geplant oder offen                             | Git-Sicherung durch Florian, Umzug auf natives Ubuntu-Dateisystem, erneute Umgebungsprüfung und priorisierte ESLint-10-Migration nach erfüllten Bedingungen.        |

Alle derzeit sichtbaren Inhalte sind Entwicklungsplatzhalter. Root bietet noch keinen funktionierenden Welt-Einstieg, keine gespeicherte Sprachpräferenz oder Einstellungen; die fachlichen Anforderungen bleiben erhalten. Nachweise und offene Prüfungen: [open-items.md](../development/open-items.md). Der Installations-/Startablauf steht in der [Root-README](../../README.md).

## Erster Release – beschlossen, noch nicht vollständig implementiert

- Deutsch und Englisch unter `/de-DE/` und `/en-EN/`; Root mit Sprachwahl und beiden Einstiegen, ohne erzwungenen Redirect.
- Desktop/Laptop mit Maus und Tastatur: optionale Welt. Smartphone/Tablet: vollständiges HTML-Portfolio, kein Touch-Gameplay.
- Vier Portfolio-Hauptbereiche: About Me, Skilltree, Projects, Contact. Fähigkeiten, Berufserfahrung und eigene Projekte bleiben fachlich getrennt; Berufserfahrung liegt unter Skilltree → Career Progression.
- Start außerhalb des Turms, ein begehbarer zentraler Raum mit Portfolio-Kristall, drei optionale Hotspots: Wegschild, Runenschmiede, Garten.
- WASD, Shift, E, Q und B; kein Springen, Klettern oder Kampfsystem. Sichere Grenzen und Objektkollisionen.
- Minimap, freiwillige Aufgaben, lokale Einstellungen, Qualitätsregelung und reduzierte Bewegung.
- HP/Mana rein dekorativ im Prototyp, keine Skill-Actionbar oder abgeleiteten Ressourcenmechaniken.
- Audio bei Erstbesuch aus; Musik und Effekte getrennt regelbar.
- Lokale Inhalte, kein Konto, Backend, Datenbank, Admin oder Tracking. Privates Repository, öffentliches Portfolio als Ziel.
- The Arcane Tower ist das erste persönliche Projekt; keine erfundenen Füllprojekte.

## Vorgehen

Vollständig bedienbarer Prototyp zuerst: einfache Umgebung und vorhandenes Magier-Prototypmodell; fehlende Assets/Animationen sichtbar vorläufig ersetzen. Finale Gestaltung danach gemäß den 29 freigegebenen Referenzen. Die vorhandene GLB ist kein fertiges Produktionsmodell.

Beschlossener Stack, tatsächlich installierte Versionen und spätere 3D-Integration: [architecture.md](architecture.md). Roadmap und passende Phasenprompts: [roadmap.md](../development/roadmap.md).

Weitere Turmetagen, Touch-Spielsteuerung oder begründete spätere Infrastruktur sind Erweiterungsmöglichkeiten, keine Releasepflicht. Die Architect’s Chamber ist nicht beschlossen.

## Erfolg

Kompetenzen und Kontakt sind schnell auffindbar, Informationen weder an Quests noch WebGL gebunden. Welt und UI sind konsistent, bedienbar und auf schwächeren Geräten angemessen skalierbar. Veröffentlichte Inhalte sind bestätigt und frei von internen Unternehmensdaten. Keine Leistungs- oder Barrierefreiheitsgarantie ohne entsprechende Prüfungen.
