# Assetbestand, Prototyp und Beschaffung

Stand: 17.10.2026. Dateibestand und GLB-Struktur geprüft; keine Rendering-, Animations- oder Lizenzfreigabe daraus ableiten.

## Vorhandener Bestand

29 unveränderte PNG-Designreferenzen: 4 Character, 7 World, 7 UI, 11 Portfolio; vollständiger [Designindex](../design/README.md). Referenzen sind keine fertigen UI-, Modell- oder Animationsassets.

Zusätzlich sind sieben mit ChatGPT/OpenAI erzeugte, vom Nutzer visuell ausgewählte Portfolio-PNGs im aktuellen Checkout vorhanden: B01/B02 als Bildmotive, D01 und D02-A bis D02-D als Designvorlagen. Sie gehören nicht zu den 29 ursprünglichen Mockups und ersetzen diese nicht. Alle sieben sind nicht in die App integriert und nicht im Browser abgenommen. Tatsächliche Pfade, Metadaten, Herkunft, Freigaben, datierter Git-Tracking-Befund und offene Prüfungen stehen zentral im [Asset-Inventar, Abschnitt 9](../design/asset-inventory/arcane-portfolio-asset-inventar-phase-01.md#9-erstes-ausgewähltes-portfolio-asset-paket).

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

`assets/source/` bewahrt Originale (characters, environments, animations, audio). Die 29 ursprünglichen PNG-Mockups bleiben unter `docs/design/mockups/`. Die sieben neu ausgewählten Portfolio-PNGs liegen bereits unter `public/assets/portfolio/`; ihre Lage ist kein Nachweis einer technisch fertigen Laufzeitfassung. Optimierte benötigte Laufzeit-Ableitungen später unter `public/assets/` (models, textures, audio sowie nach Bedarf images/fonts/icons). Original-GLB, Mockups und ausgewählte PNG-Vorlagen nicht überschreiben oder umbenennen; Ableitungen nur separat und gesondert beauftragt.

Nur benötigte Laufzeitdateien ausliefern, keine Quellarchive oder Referenzsammlung automatisch in public kopieren. Große Originale nicht ungefragt in Git aufnehmen; Git-LFS-/Speicherentscheidung gesondert. `.gitignore` schützt neue unversionierte GLB-Quellen, entfernt aber keine bereits getrackten Dateien.

## Portfolio-Assets während Phase 01

**Bestätigte begrenzte Ausnahme zur bisherigen Reihenfolge „erst funktionaler Prototyp, dann finale Assets“:** Benötigte visuelle HTML-Portfolio-Assets werden schrittweise bereits während Phase 01 vorbereitet, erstellt, freigegeben und integriert. Das ist eine beschlossene Strategie, kein aktueller Produktions- oder Implementierungsauftrag. Sie orientiert sich an den elf freigegebenen Portfolio-PNGs und umfasst notwendige Fantasy-Hintergründe, Header-/Sidebar-Illustrationen, Charakter-/Interessenbilder, Rahmen/Ornamente, Schriften/Icons sowie wiederverwendbare Fantasy-Karten und UI-Komponenten.

Maßgebliche Planungsquelle: [Portfolio-Asset-Inventar Phase 01](../design/asset-inventory/arcane-portfolio-asset-inventar-phase-01.md). Die 18 Bildmotiv-Kandidaten und weiteren Designasset-, Komponenten- und Medienkategorien sind Planungsgrößen, keine Pflicht zur Erzeugung einer festen Dateizahl und keine automatische Freigabe aller vorgeschlagenen Funktionen/Einzelassets. Die im Inventar verwendeten Nummern 01.1–01.8 bleiben die [vorgeschlagene operative Unterteilung](../development/roadmap.md#phase-01--vorgeschlagene-operative-unterteilung).

| Kategorie | Vorgehen |
| --- | --- |
| Generierte Illustrationen | Getrennte Bildmotive und geeignete Zuschnitte; vorhandene freigegebene Motive bevorzugt wiederverwenden. Keine echten Screenshots oder bestätigten persönlichen Fakten vortäuschen. |
| Skalierbare Designelemente | SVG/CSS für Rahmen, Ornamente und weitere wiederverwendbare Dekoration; Bildgenerierung allein ist kein Nachweis sauberer SVG-Geometrie. |
| Bedienbare Oberfläche | Echte React-/HTML-/CSS-Komponenten und übersetzbare Texte; vollständige Benutzeroberflächen nicht als starre Bilder integrieren. |

Das erste Paket ist inzwischen erstellt und als Motiv beziehungsweise PNG-Designvorlage ausgewählt: **B01 Fantasy-Header**, **B02 Sidebar-Illustration**, **D01 Arkane Kompassrose (Variante 3)** sowie **D02-A Hauptpanel (Variante 3), D02-B Kartenrahmen (Variante 2, separates Einzelbild), D02-C Überschriftenrahmen und D02-D kleiner UI-Rahmen**. Bei D02-D ist die reduzierte Gestaltung mit zwei seitlichen blauen Kristallen maßgeblich; stark verzierte Vorentwürfe wurden abgelehnt. D02 bleibt die gemeinsame Kategorie, andere Inventar-IDs bleiben unverändert. Diese konkrete Auswahl ergänzt die Strategie, ist jedoch keine technische Integrations- oder Releasefreigabe; weitere Motive bleiben gesondert zu beauftragen.

B01 ist ausschließlich die Hintergrundillustration, kein vollständiger Header; B02 ist die Illustration mit Magier und Katze, keine Sidebar-Navigation. D01 bleibt bis zur gesonderten Umsetzung eine PNG-Vorlage für eine spätere SVG-Masterversion. D02-A bis D02-D sind Vorlagen für skalierbare SVG-/CSS- beziehungsweise echte HTML/CSS-Elemente, keine fertigen Komponenten. Lokal nachgewiesen: nur D01 hat einen Alphakanal mit transparenten Pixeln; alle anderen sechs PNGs sind undurchsichtig. Keine Transparenz oder beliebige verzerrungsfreie Skalierung unterstellen. Technische Rekonstruktion und visuelle Browserprüfung bleiben offen; B01/B02 benötigen Optimierung, responsive Zuschnitte und Prüfung des Ladeverhaltens. Keine Ableitungen oder Phase-01-Implementierung durch diesen Dokumentationsauftrag.

Herkunft aller sieben PNGs laut Nutzer: Bildgenerierungsfunktion von ChatGPT/OpenAI, Auswahl aus Entwürfen durch Florian. Offizielle OpenAI-Bedingungen wurden für diesen Auftrag tatsächlich geöffnet; Quellenstand und Prüfgrenzen zentral im [Inventar](../design/asset-inventory/arcane-portfolio-asset-inventar-phase-01.md#herkunft-und-rechteprüfung). Das ersetzt keine abschließende Prüfung von Eingaberechten und möglichen Rechten Dritter für die vorgesehene öffentliche, möglicherweise kommerzielle Nutzung. Keine ausschließlichen Urheberrechte oder CC0-/CC-BY-Lizenz aus der Herkunft ableiten.

Für jedes Produktionsasset vor Verwendung tatsächliche Herkunft, Lizenz/Nutzungsrechte, gegebenenfalls Attribution, Freigabestatus und technische Eignung nachvollziehbar prüfen und dokumentieren. „Generiert“ ist kein pauschaler Rechtenachweis. Neue einzelne Assets brauchen jeweils gesonderte Beauftragung und Freigabe; für neue Mockup-Entwürfe bleiben drei Varianten und ausdrückliche Auswahl verbindlich. Original-PNGs/GLB unverändert erhalten; Ableitungen nur separat im jeweils beauftragten Umfang.

Die Ausnahme verlagert keine Weltproduktion nach Phase 01. Phasen 06 und 07 bleiben für finale Welt-, Charakter-, Animations- und weitere Assetarbeiten nach dem funktionalen Prototyp zuständig. Die nachfolgende Standardasset-/Meshy-Strategie bleibt für diesen späteren Bedarf bestehen. Phase 08 mit Inhaltsfinalisierung, Qualität und Releaseprüfung bleibt ebenfalls erhalten.

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
