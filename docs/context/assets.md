# Assetbestand, Prototyp und Beschaffung

Stand: 16.10.2026. Dateibestand und GLB-Struktur geprüft; keine Rendering-, Animations- oder Lizenzfreigabe daraus ableiten.

## Vorhandener Bestand

29 unveränderte PNG-Designreferenzen: 4 Character, 7 World, 7 UI, 11 Portfolio; vollständiger [Designindex](../design/README.md). Referenzen sind keine fertigen UI-, Modell- oder Animationsassets.

**Eine** GLB-Datei ist tatsächlich enthalten:

`assets/source/characters/wandering-rune-mage/wandering-rune-mage_v1_rigged_walk.glb`

| Merkmal | Strukturprüfung |
|---|---|
| Dateigröße | 24.685.140 Bytes |
| Meshes / Skins / eingebettete Bilder | 1 / 1 / 3 |
| Clips | Running und Walking, jeweils 150 Kanäle |
| Laufzeitprüfung | Noch nicht durchgeführt |

Früher dokumentierte Varianten `wandering-rune-mage_v1_base.glb`, `wandering-rune-mage_v1_textured.glb` und `wandering-rune-mage_v1_optimized.glb` fehlen in diesem gelieferten Stand. Nicht als verfügbar behandeln oder neu erfinden.

## Rolle des Magiermodells

Von Florian ausdrücklich als **Prototypmodell für lokale Browsertests** vorgesehen. Nach Lade-/Darstellungsprüfung im frühen Prototyp einsetzen; kein Beleg für fertige Produktionsqualität. Fehlende Clips dürfen grundlegende Funktionsprüfung nicht blockieren.

Idle, Generic Interact und Crystal Activation sind nicht als eigene Clips nachgewiesen. Start/Stop/Turn können später über Blending oder geeignete Clips realisiert werden; keine feste Clipzahl. Keine Sprung-, Kampf- oder Personality-Animationen hinzufügen. Stab als eigenständiges finales Asset vorgesehen, jedoch aktuell keine separate Stabdatei vorhanden; keine unabhängige Steuerbarkeit allein aus dem Meshnamen behaupten.

Bei fehlenden Animationen transparente vorläufige Ersatzposen, einfache Effekte oder Übergänge verwenden. Wenn das Modell technisch nicht verwendbar ist, vorübergehend eine einfache Figur nutzen und den Grund nennen. Keine falsche Meldung „final animiert“.

Vor Integration prüfen: Maßstab/Ausrichtung, Materialien/Texturen, Rig, vorhandene Clips, Root Motion, Fußkontakt, Stabhandling, Übergänge, Lade-/Speicherbedarf und Referenznähe. Tatsächliche Abspielqualität im Browser untersuchen.

## Quellen und Laufzeit getrennt

`assets/source/` bewahrt Originale (characters, environments, animations, audio). PNGs bleiben unter `docs/design/mockups/`. Optimierte benötigte Laufzeit-Ableitungen später unter `public/assets/` (models, textures, audio sowie nach Bedarf images/fonts/icons). Original-GLB und PNGs nicht überschreiben oder umbenennen.

Nur benötigte Laufzeitdateien ausliefern, keine Quellarchive oder Referenzsammlung automatisch in public kopieren. Große Originale nicht ungefragt in Git aufnehmen; Git-LFS-/Speicherentscheidung gesondert. `.gitignore` schützt neue unversionierte GLB-Quellen, entfernt aber keine bereits getrackten Dateien.

## Beschaffungsstrategie

Florian erzeugt neue Modelle/Animationen über **Meshy.ai**; kein zwingender manueller DCC-Modellierungsworkflow voraussetzen. Funktionen, Exportmöglichkeiten, Rig-/Animationskompatibilität und Lizenz des konkreten Meshy-Plans vor Nutzung in der dann aktuellen offiziellen Dokumentation prüfen. Ein Pro-Abo ist eine Option, kein Kaufauftrag und keine vorhandene Lizenz.

Reihenfolge pro Bedarf:
1. Vorhandene geeignete Assets wiederverwenden.
2. Einfache Grundgeometrie/Materiallösung prüfen.
3. Für Standardobjekte zuerst passende kostenlose Assets/Pakete im Internet recherchieren.
4. Nur wenn keine geeignete kostenlose/wiederverwendbare Lösung existiert, gezielte Meshy-Generierung vorschlagen.

Grashalme, Steine und vergleichbare Standarddekoration nicht einzeln kostenpflichtig generieren. Zusammenpassende Pakete bevorzugen. Für prägende Einzelobjekte wie Magier, Stab oder Turm Bedarf, Referenzen und Kosten/Nutzen prüfen. „Kostenlos“ bedeutet nicht automatisch frei von Attribution oder Einschränkungen.

Vor Beschaffung Inventar mit Objekt, Funktion, Sichtbarkeit/Priorität, vorhandener Quelle, Kandidaten, URL, Urheber, Lizenz/Plan, Attribution, Format, Maßstab, Rig/Clips, Texturen und Integrationsstatus vorbereiten. Keine heutigen Anbieterempfehlungen als dauerhaft gültig festschreiben; in der Assetphase aktuell recherchieren und konkrete Auswahl mit Florian abstimmen. Keine Käufe, Konten oder Generierungen ohne Auftrag.

## Noch benötigte Materialien

Weltgeometrie/Turm, Kristall, Wege, Vegetation, Schmiede, Garten, Wegschild, Requisiten, finale Charakter-/Stabteile und fehlende Animationen, Audio, Schriften, Icons, UI-Ornamente, Porträt und Inhaltsillustrationen. Referenzbilder enthalten solche Motive, liefern jedoch keine separaten fertigen Produktionsdateien. Zunächst Platzhalter, dann nach Bedarf ersetzen.

## Integration und Nachweise

Datei und Rechte → technische Struktur → lokale Darstellung/Animation → Interaktionen/Kollisionen → Messung → optimierte Ableitung → Qualitätsstufen/reduzierte Bewegung. Modelle, Animationen und Texturen müssen kompatibel sein; fehlende Meshy-Funktionen nicht versprechen. Vorher/Nachher messen und Rollback zum funktionierenden Platzhalter ermöglichen.

Performance-/Ladeprioritäten: [accessibility-and-performance.md](accessibility-and-performance.md). Rechte: [privacy-security-and-licenses.md](privacy-security-and-licenses.md). Am Ende des Integrationsauftrags Assetregister-/Kontextänderungen prüfen und vor unautorisiertem Schreiben vorschlagen.
