# Wandering Rune Mage – Character Design References

Stand: 16.10.2026

## 1. Zweck und Status

Dieses Verzeichnis enthält die **vier freigegebenen visuellen Referenzen** für den Wandering Rune Mage und seinen Zauberstab im Projekt **The Arcane Tower – Wizard RPG Portfolio**. Die Referenzen beschreiben das gewünschte Aussehen, wichtige Produktionsdetails und die visuelle Wirkung der vereinbarten Animationen.

Die PNG-Dateien sind **Konzept- und Referenzbilder**, keine fertigen 3D-Modelle, kein Rig, keine Animation-Clips und keine technisch verbindlichen Konstruktionszeichnungen. Sie dienen der späteren Asset-Produktion und Implementierung. Entscheidungen zu Geometrie, Materialaufbau, Rigging, Clips, technischen Formaten und Performance werden anhand der tatsächlichen Projektanforderungen getroffen.

Weitere Referenzen werden nur nach ausdrücklicher Freigabe verbindlich.

## 2. Verzeichnis und Referenzaufgaben

```text
docs/design/mockups/character/
├── README.md
├── character-design-sheet.png
├── character-production-sheet.png
├── character-staff-detail.png
└── character-animation-poses.png
```

| Datei | Rolle | Wesentliche Inhalte |
| --- | --- | --- |
| `character-design-sheet.png` | Künstlerische Hauptreferenz | Persönlichkeit, Gesamterscheinung, Silhouette, Kleidung, Stimmung, Farb- und Materialwirkung, Magie |
| `character-production-sheet.png` | Charakter-Produktionsreferenz | Vorder-, Seiten-, Rück- und Dreiviertelansicht, Proportionen, Hut, Stiefel, Handschuhe, Tasche, Gürtel und weiteres Zubehör |
| `character-staff-detail.png` | Stab-Designreferenz | Gesamtansicht, Perspektiven, Kristall, goldene Orbitalringe, Schaft, Griff, Runen, Materialdetails |
| `character-animation-poses.png` | Animations-Konzeptreferenz | Idle, Walk, Run, Turn, Start/Stop, Generic Interact, Crystal Activation und wichtige Schlüsselposen |

Die gezeigten Ansichten ergänzen sich, müssen aber nicht in jedem Detail geometrisch deckungsgleich sein.

## 3. Verbindliche visuelle Identität

Der Charakter ist der **Wandering Rune Mage**: ein wandernder, arkan-akademischer Magier und Entdecker. Er gehört visuell zur selben Fantasy-Welt wie Turm, Umgebung, Weltinteraktionen und Portfolio.

Grundmerkmale:

- Dunkles Indigo und Blau für Hut, Mantel und Robe.
- Gold, Messing und warmes Metall für Einfassungen, Ornamente und Runen.
- Leuchtendes Cyan/Teal für Kristalle und Magie.
- Leder, Stoff und metallische Accessoires mit klar unterscheidbaren Materialwirkungen.
- Astronomische Zeichen, Kompass-/Sternenmotive und arkane Verzierungen.
- Ein markanter Zaubererhut, mehrlagige Kleidung und eine in Third-Person-Perspektive gut erkennbare Silhouette.
- Ein magischer Stab als charakteristisches und wiederkehrendes Ausrüstungsteil.

Die detaillierte künstlerische Ausgestaltung orientiert sich primär an `character-design-sheet.png`; für Ansichten und die Umsetzung einzelner Teile zusätzlich an `character-production-sheet.png`.

**Keine neu erfundenen Kleidungsstücke, Accessoires, Farben oder Fähigkeiten hinzufügen**, nur weil verschiedene generierte Ansichten Unterschiede zeigen. Widersprüche zwischen Referenzen müssen explizit geklärt werden.

## 4. Zauberstab

`character-staff-detail.png` ist die spezifische Referenz für das **eigenständige Stab-Asset**.

Charakteristische Merkmale:

- Dunkler, dekorierter Stabschaft mit metallischen Akzenten.
- Heller cyanfarbener Kristall als magischer Fokus.
- Gold-/Messingfassung und umlaufende Orbitalringe.
- Runen und feinere Verzierungen am Schaft und an den Beschlägen.
- Gut erkennbare Form auch aus größerem Kameraabstand.

Der Stab wird als eigenes Objekt konzipiert, damit er unabhängig vom Charakter positioniert und bei Animationen geführt werden kann. Seine visuelle Funktion bleibt erhalten, auch wenn Effekte aus Performancegründen vereinfacht werden müssen.

**Design vs. Funktion:** Rotierende Ringe, Emission, Leuchten und Partikel sind in der Referenz als Gestaltungsideen erkennbar. Die Bilder legen jedoch nicht automatisch fest, dass alle Ringelemente einzeln mechanisch animiert werden müssen. Solche Effekte werden während der Implementierung gezielt geplant und optimiert.

Die Größenangaben im Sheet sind illustrative Näherungen, **keine bestätigten absoluten Maße**.

## 5. Verbindlicher Animationsumfang

`character-animation-poses.png` veranschaulicht den festgelegten Animationsumfang. Die einzelnen Zeichnungen sind **Schlüsselposen**, keine exakten Zeitachsen, Bone-Pfade oder 1:1 zu übernehmenden Framefolgen.

### 5.1 Grundbewegungen

- **Idle:** ruhiges, natürliches Stehen.
- **Walk:** normales Gehen.
- **Run:** beschleunigtes Laufen (Spielsteuerung mit Shift).
- **Turn / Direction Change:** visuell verständliche Richtungswechsel.
- **Start Transition:** Übergang von Idle zu Walk oder Run.
- **Stop Transition:** Übergang von Walk oder Run zu Idle.

Start und Stop müssen als Bewegungsübergänge berücksichtigt werden und dürfen bei der Umsetzung nicht vergessen werden. Ob sie als eigene Clips, Blending oder eine Kombination umgesetzt werden, entscheidet die technische Realisierung. Die Bilder geben **keine verbindliche Anzahl von Animationsframes oder Loopdauern** vor.

### 5.2 Generic Interact

- **Auslöser:** `E` bei einem erreichbaren, interaktiven Objekt.
- Eine kurze, wiederverwendbare Standardinteraktion für Wegschild, Runenschmiede, Garten und andere normale Interaktionspunkte.
- Der Charakter stoppt beziehungsweise richtet sich passend aus, vollführt eine zurückhaltende Geste mit Stab und/oder freier Hand und kehrt anschließend in den geeigneten Bewegungszustand zurück.
- Die generische Animation darf angepasst werden, falls die Interaktion in einer konkreten Spielsituation unnatürlich wirkt.

**Nicht geplant:** Separate verpflichtende Animationen für `Read`, `Inspect` oder jede einzelne Objektart. Der gleiche Hotkey `E` bedeutet allerdings nicht, dass jede Objektaktion dieselbe UI-Funktion ausführt; es geht um eine gemeinsam verwendbare **körperliche Interaktionsanimation**.

### 5.3 Crystal Activation und Teleport

Die Kristallaktivierung besitzt eine eigene kurze Animation, getrennt von Generic Interact. Die Magie geht primär vom Stab aus; freie Hand unterstützt. Ein separater Magic-Channel-Clip ist nicht vorgesehen. Die PNG-Posen sind keine verbindlichen Clips, Framefolgen oder Zeitachsen.

**Aktualisiert am 16.10.2026:** Etwa eine Sekunde ist ausschließlich ein erster Vorschlag für die Aktivierung, keine feste Dauer oder Obergrenze. Florian beurteilt später im Browser, ob die animierte Sequenz zu kurz oder zu lang ist. Die frühere verbindliche Ein-Sekunden-Grenze ist aufgehoben.

Bei E wird der Magier vorher automatisch zur Animationsstartposition bewegt und ausgerichtet; erst dann startet die Aktivierung. Nur die Kristallanimation nutzt diese automatische Positionierung. Bei B erfolgt zuerst der Teleport dorthin, dann die gleiche Aktivierung ohne weiteres E. Nach Schließen bleibt der Magier an der Animationsstartposition. Positionierung/Teleport haben keine festgelegte Dauer.

Einzige maßgebliche Ablaufbeschreibung, einschließlich Bewegungsreduktion und Rückkehr: [Gameplay](../../../context/gameplay-and-interactions.md). Diese README beschreibt die visuelle Bewegungswirkung, keine zweite Implementierungssequenz.

### 5.5 Nicht Bestandteil des verbindlichen Umfangs

Keine zusätzlichen Personality- oder Kampfanimationen wie `Greeting`, `Look Around`, `Robe Adjust`, `Staff Adjust` oder Angriffscombos vorsehen. Falls solche Posen im generierten Sheet auftauchen, sind sie **nur illustrative Darstellungen**, keine Featurefreigabe.

Die Bildbeschriftungen, Framezahlen und ungefähren Dauern sind nicht verbindlich. Das Timing wird später mit Florian getestet; keine feste Ein-Sekunden-Grenze.

## 6. Sichtbarkeit, Lesbarkeit und technische Umsetzung

- Der Magier muss aus der Third-Person-Spielkamera auch in Bewegung leicht erkennbar bleiben.
- Hut, Umhang, Taschen und Stab dürfen die Bewegungen und Interaktionen visuell nicht unverständlich machen.
- Stoff-/Umhangbewegung kann über geeignete Animation oder vereinfachte Verfahren realisiert werden; keine teure Echtzeit-Stoffsimulation allein wegen der Illustrationen voraussetzen.
- Bewegungsübergänge sollen flüssig sein und nicht ruckartig zwischen Posen springen.
- Animationsdesign und Effekte müssen auf Webperformance, Desktop-Spielsteuerung und reduzierte Bewegung; mobile Geräte erhalten im ersten Release das HTML-Portfolio, kein Touch-Gameplay abgestimmt werden.
- Der Stab soll beim Gehen, Laufen und Interagieren konsistent geführt werden, ohne durch Hände oder Körper zu schneiden, soweit technisch sinnvoll vermeidbar.
- Magische Partikel, Bloom und Leuchten müssen bei niedrigeren Grafikqualitätsstufen reduzierbar sein.

## 7. Referenzhierarchie und Abweichungen

Bei konkreten Gestaltungsfragen gelten diese Prioritäten:

1. **Explizit bestätigte Projektentscheidungen und Anforderungen**, einschließlich dieser README und aktueller Kontextdokumentation.
2. **`character-design-sheet.png`** für den künstlerischen Gesamtcharakter.
3. **`character-production-sheet.png`** für Modellierungsdetails und Ansichten.
4. **`character-staff-detail.png`** für die nähere Gestaltung des Stabs.
5. **`character-animation-poses.png`** für Bewegungswirkung und Key Poses.

Diese Reihenfolge ist eine Entscheidungshilfe, kein Auftrag, voneinander abweichende Bilddetails automatisch zu kombinieren. Unklare Details sind zu markieren und zu klären. Die Sheets enthalten generierte Beispielbeschriftungen und teilweise inkonsistente Einzelansichten; sie sind **keine maßhaltigen Blueprints**.

## 8. Zugehörige 3D-Dateien

Im gelieferten Stand ist ausschließlich `assets/source/characters/wandering-rune-mage/wandering-rune-mage_v1_rigged_walk.glb` vorhanden: Prototypmodell für lokale Browsertests, keine finale Produktionsfreigabe. Strukturell nachgewiesen: Running und Walking. Fehlende Clips durch gekennzeichnete vorläufige Lösungen ersetzen; keine fertigen Animationen aus PNGs ableiten.

Tatsächlicher Bestand, technische Prüfung und Beschaffung: [assets.md](../../../context/assets.md). Die frühere Angabe von vier lokal vorhandenen GLBs ist korrigiert.

## 9. Grenzen dieser README und Freigaberegeln

Diese README dokumentiert die freigegebenen **Character-Designreferenzen und den vereinbarten Animations-Scope**. Sie ersetzt keine spätere technische Asset- oder Animationsspezifikation.

- Keine Inhalte, Bewegungen, Assets oder Funktionen dazuerfinden.
- Nicht aus einem generierten PNG auf existierende 3D-Assets schließen.
- Entscheidungen zu Rigging, Clipnamen, Bone-Struktur, Materialformaten oder Modellqualität erst anhand tatsächlicher Anforderungen und offizieller technischer Dokumentation treffen.
- Neue oder abweichende Referenzen erst nach expliziter Freigabe als verbindlich markieren.
- Nicht vorhandene ältere Chatmockups, Archivillustrationen und alternative Varianten gelten nicht als aktuelle Designreferenzen.

**Status: Das visuelle Referenzset für den Character-Ordner ist mit diesen vier freigegebenen PNGs vollständig.**
