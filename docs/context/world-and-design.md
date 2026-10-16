# Welt und Gestaltung

Stand: 16.10.2026. Alle 29 PNGs sind freigegebene Designreferenzen; [Designindex](../design/README.md) und Bereichs-READMEs definieren ihre Aufgaben. Die frühere Beschränkung auf Character Sheets gilt nicht mehr.

## Gemeinsame Gestaltung

Stilisierte arkan-akademische Fantasy: Indigo/dunkles Blau, Gold/Messing, Cyan/Teal für Magie, warme Lichtquellen. Materialien: Stein, Holz, Stoff, Leder, Metall, Pflanzen und Kristalle. Runen, Sterne, Monde, astronomische Ringe gezielt einsetzen. Character Sheets prägen die gemeinsame Identität, Welt-/UI-/Portfolio-Detailbilder ihre jeweiligen Bereiche. Kein globaler Pixelfilter über der Welt; ausgewählte Pixel-/Fantasy-Elemente in der UI bei gut lesbarem Fließtext.

## Weltaufbau

Kompakte zusammenhängende Welt. Start draußen südlich auf dem Weg zum Turm mit Wegschild. Turm als zentrales Ziel, Schmiede westlich, Garten östlich. Ein begehbarer zentraler Turmraum mit Portfolio-Kristall; weitere Etagen/Galerien können dekorativ sein, keine zusätzlichen Spielregionen oder Pflichtinhalte.

Feste Dämmerung, warme Fenster/Laternen, Vegetation und cyanfarbene Magie. Kein dynamischer Tag-Nacht-Wechsel. Hintergrundgebäude, Wasserfälle und Landschaft dienen der Atmosphäre, nicht automatisch als erreichbare Gebiete.

Die Schnittdarstellung des Eingangs ist keine Vorgabe für ein tatsächlich offenes Gebäude. Innenraum symmetrisch, großzügig, Kristall mit astronomischen Ringen auf leicht erhöhtem Podest, zugängliche Interaktionszone. Bücherschränke und Arbeitsplätze seitlich; Raummaße und Dekorationszahl später testen.

Wegschild: Motivation und Orientierung. Schmiede: tatsächliche Skills. Garten: sechs gemeinsame Interessenkategorien. Alle Inhalte auch direkt in HTML; keine Pflichtaufgaben.

## Begehbarkeit und Kollisionen

**Kein Springen**, keine Box-Sprünge, kein Klettern und keine Fallmechanik. Geometrie muss die bestätigten Wege ohne Sprung ermöglichen.

- Sichtbare Treppen zunächst mit vereinfachten unsichtbaren begehbaren Rampen kombinieren.
- Dekoration, sichtbare Geometrie und Kollisionsflächen getrennt planen. Unpassierbare Objekte dürfen nicht durchlaufen werden.
- Brücken/Podeste ohne Sprung erreichbar; sichere Grenzen verhindern das Verlassen der beabsichtigten Welt und ungewolltes Fallen.
- Einfache Platzhalter-Kollisionen zuerst; Steigungen, Stufenübergänge, Durchgangsbreiten und Bewegungsparameter im Browser prüfen.
- Keine zusätzliche Physik-/Pathfinding-Bibliothek allein wegen aufwendiger Bilder. Bedarf anhand Prototyp zeigen.

## Kamera und Kristall

Früh mit Platzhaltern: Eingang, Säulen, Wände, Kristallringe, Podest und Third-Person-Kamera gemeinsam testen. Kamera darf nicht dauerhaft in Wände geraten oder Interaktionen verdecken. Charakter muss zwischen Objekten und durch Türöffnungen passen.

Ein sicherer Animationsanker vor dem Kristall; E positioniert/richtet automatisch aus, B teleportiert dorthin. Positionierungsweg darf Objekte nicht durchdringen. Verbindlicher Ablauf und Timing-Vorschlag ausschließlich in [gameplay-and-interactions.md](gameplay-and-interactions.md).

## Licht und Dekoration

Bilder definieren die Lichtwirkung, nicht eine dynamische Lichtquelle mit Schatten pro Laterne. Sparsame echte Lichter dort, wo sinnvoll; übrige Wirkung über Materialien, vorgefertigte Beleuchtung oder vereinfachte Effekte prüfen. Reflexionen, Transparenz, Partikel, Wasser und Vegetation nach Leistung budgetieren. Instanzen/gemeinsame Materialien für wiederkehrende Elemente prüfen, ohne ungeprüfte Leistungszahlen zu versprechen.

Hohe Detaildichte schrittweise nach dem funktionsfähigen Prototyp. Reduzierte Qualitätsstufen erhalten Orientierung und Erkennbarkeit. Laufzeitassets nicht mit den unveränderten Referenz-PNGs verwechseln.

## Weitere visuelle Entscheidungen

Genauer Maßstab, Abstände und Effekte sind Prototypfragen. Neue Mockups nur bei tatsächlichem Bedarf; für künftige Mockup-Auswahl drei unterschiedliche Entwürfe mit Dateiname und geplantem Projektpfad anbieten, erst ausdrückliche Auswahl macht sie verbindlich. Die vorhandenen 29 Referenzen müssen nicht erneut freigegeben werden.
