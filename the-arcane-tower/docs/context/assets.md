# Assetbestand und Integration

Stand der Prüfung: 15.10.2026. Archiv geöffnet, Bilder visuell gelesen, GLB-JSON-Struktur untersucht. Modelle nicht in einer 3D-Laufzeit gerendert oder animiert geprüft. „Optimized“ im Dateinamen belegt keine Browser-Eignung.

## Gelieferte Quellen

`The Arcane Tower – Wizard RPG Portfolio.7z` enthält:

| Datei | Befund |
|---|---|
| assets/concepts/Character_Design_Cheet.png | Charakterkonzept mit Ansichten, Material-/Farbideen; Schreibweise des Originals beibehalten |
| assets/concepts/Production_Character_Sheet.png | Produktionsreferenz mit Details und Ansichten |
| assets/references/wandering-rune-mage.png | Einzelreferenz des Magiers |
| assets/models/wandering-rune-mage/wandering-rune-mage_v1_base.glb | 7.022.576 Bytes; 1 Mesh, keine Skin, keine Animation, keine eingebetteten Bilder |
| …/wandering-rune-mage_v1_textured.glb | 20.058.536 Bytes; 1 Mesh, 3 Bilder, keine Skin/Animation |
| …/wandering-rune-mage_v1_optimized.glb | 22.868.828 Bytes; 1 Mesh, 3 Bilder, keine Skin/Animation |
| …/wandering-rune-mage_v1_rigged_walk.glb | 24.685.140 Bytes; 1 Mesh, 1 Skin, 3 Bilder; Clips Running und Walking mit je 150 Kanälen |

Der Archivordner assets/animations/ war leer. Idle- und Zauberanimation sind in den geprüften GLBs nicht vorhanden. Clipqualität, Root Motion, Fußkontakt, Knochenzuordnung, Skalierung, Ausrichtung, Stabhandling und Übergänge müssen praktisch geprüft werden.

Weitere separat gelieferte Referenzen: `Worldbuilding Konzept.png`, `Minimap Konzept.png`, `Schematischer Weltaufbau.png`. Der gerettete Chat `chat projektpräsentation erklären.7z` enthält `Arcane_Tower_Chatverlauf.txt` und drei illustrative JPGs. Diese Illustrationen sind keine zusätzlich bestätigten Entwürfe.

## Zielpfade – Vorschlag für spätere Übernahme

- Visuelle Referenzen: `assets/references/` und `assets/concepts/`, außerhalb von public/.
- Originalmodelle: `assets/source/models/`, Zugriff/Größe vor Git-Aufnahme prüfen.
- Optimierte veröffentlichbare Laufzeitmodelle: `public/assets/models/`.
- Audio: `public/assets/audio/`; Schriften/Icons entsprechend nur nach Rechteprüfung.

Diese Pfade beschreiben geplante Ablage; Dateien sind diesem Dokumentationspaket nicht beigefügt. Git-LFS oder getrennte Ablage für große Originale erst bei tatsächlichem Bedarf entscheiden. Kein automatischer Upload aller Varianten oder Roharchive ins Repository.

## Noch benötigt

Platzhalter für sämtliche Weltobjekte genügen zuerst. Später: Turm/Hauptraum, Wege/Umgebung, drei Hotspots, Kristall, weitere Requisiten, passende Idle-/Zauberanimation und Audio. Umfang/Detailgrad mit gemessener Performance abgleichen. Keine Assets ohne Rückfrage kaufen oder kostenpflichtige Generierung starten.

## Integrationsprüfung

Quelle/Rechte → Maßstab/Ausrichtung → Geometrie/Materialien/Texturen → Animationen → Dateigröße/Ladezeit → Darstellung in drei Qualitätsstufen → reduzierte Bewegung → visueller Vergleich zur Referenz. Originaldateien erhalten; optimierte Ableitungen separat speichern. Änderung des Assetregisters nach AGENTS.md freigeben lassen.
