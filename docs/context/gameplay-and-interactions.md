# Gameplay und Interaktionen

Stand: 16.10.2026. **Zentrale, maßgebliche Ablaufbeschreibung** für Weltinteraktionen, Kristall und Teleport. Mockup-READMEs verweisen hierher.

## Eingaben und Grenzen

| Eingabe | Verhalten |
|---|---|
| WASD | Gehen |
| Shift halten | Rennen |
| Maus im Gameplay | Third-Person-Kamera über Pointer Lock |
| E in Reichweite | Angezeigtes Objekt einmal aktivieren |
| Q | Gameplay-/Cursor-Modus wechseln; Browserfreigabe beobachten |
| B / HUD „Zum Kristall“ | Teleport zum Kristall, danach automatisch Aktivierung und Portfolio |
| Zurück | Eine Portfolioebene zurück; auf oberster Ebene zum passenden Einstiegskontext |
| X im Welt-Portfolio | Aus jeder Tiefe vollständig zur Welt schließen |
| Esc | Keine App-Schließfunktion; browserseitiges Unlock bleibt möglich |

**Kein Springen**, kein Klettern, kein automatisches Hochziehen, keine Fall-/Schadensmechanik. Die zwischenzeitliche Box-Sprungidee wurde ausdrücklich verworfen. Laufwege, Grenzen und Kollisionen: [world-and-design.md](world-and-design.md).

Im Cursor-/UI-Modus keine Maus-Kamerasteuerung oder unbeabsichtigte Bewegung. Eingaben in Feldern/Bedienelementen lösen keine Weltaktionen aus. Gehaltenes E/B/Q darf nicht wiederholt Übergänge starten. Bei Fokusverlust/Unlock gedrückte Bewegungstasten zurücksetzen und Bewegung pausieren. Interaktionshinweis nur für ein tatsächlich erreichbares Ziel; Reichweiten später testen.

## E am Kristall

1. Eingabe einmal annehmen und manuelle Bewegung pausieren. Kamerakontext für die spätere Rückkehr festhalten.
2. Magier automatisch zur vorgesehenen **Animationsstartposition** bewegen und zum Kristall ausrichten. Diese automatische Positionierung gilt ausschließlich für die Kristallanimation.
3. Erst nach erreichter Position/Ausrichtung beginnt die eigentliche Kristallaktivierung: Vorbereitung, Aktivierung, Resonanz und Übergang. Magie primär vom Stab, freie Hand unterstützt. Keine zusätzliche Magic-Channel-Pflichtanimation.
4. **Etwa eine Sekunde ist nur ein erster Timing-Vorschlag**, keine feste Dauer, Obergrenze oder Abnahmebedingung. Florian beurteilt den animierten Ablauf später im Browser. Positionierung und Teleport gehören nicht zu diesem Startwert; auch für sie sind keine festen Zeiten beschlossen.
5. Portfolio öffnen, Maus freigeben, Hintergrund abdunkeln, Minimap ausblenden. Inhalte sofort zugänglich.
6. X oder Zurück auf oberster Ebene schließt. Direkt in derselben geeigneten Nutzeraktion Pointer Lock anfordern, nicht erst nach Animation/await.
7. Spielkamera passend zur Animationsstartposition wiederherstellen; Magier bleibt dort in Idle. Nicht zur vorherigen E-Position zurücklaufen oder teleportieren. Zusätzliches Aktivierungsleuchten ausschalten; dekoratives Grundmaterial darf bleiben.
8. Erst bei abgeschlossenem Rückübergang und gültigem Steuerungszustand Bewegung freigeben; E kann erneut aktivieren. Kein zusätzlicher regulärer Klick/Q.

Positionierung muss kollisionsverträglich erfolgen. Gültige Annäherungszone und Anker früh im Prototyp prüfen; kein Durchziehen durch Säulen/Podest. Genaue Wegführung ist eine Implementierungsentscheidung, kein ungefragter Auftrag für ein komplexes Navigationssystem.

## B / „Zum Kristall“

Teleport starten → Ortswechsel während der Teleportsequenz → Ankunft an derselben gültigen Animationsstartposition → passende Ausrichtung → derselbe Aktivierungsablauf ab Schritt 3. Kein zusätzliches E. Nicht vor dem sichtbaren Teleport den Charakter offen an den Zielort versetzen. Nach Schließen bleibt er an der Startposition der Kristallanimation. Gesamtdauer offen und gemeinsam zu testen.

Bei reduzierter Bewegung dieselben Endzustände sofort bzw. ohne unnötige Orts-/Kamerafahrten und starke Effekte herstellen. Ausgelassene Animationen dürfen keine künstliche Wartezeit oder blockierte Abschluss-Callbacks hinterlassen.

## Andere Weltobjekte und Portfolio-Einstieg

Wegschild zeigt Projektmotivation und Orientierung; Schmiede tatsächliche Skills; Garten die sechs gemeinsamen Interessenkategorien. Generische kurze Interaktionsgeste, keine automatische Bewegung zur Kristall-Animationsposition und keine Pflichtclips pro Objektart. Körperausrichtung bei Bedarf im Prototyp abstimmen.

„Mehr erfahren“ öffnet die passende Portfolio-Unterseite **ohne Kristallteleport**. Der Weltobjekt-Kontext bleibt erhalten; beim Schließen zur ursprünglichen Weltinteraktion/Position und passenden Kamera zurückkehren, kein impliziter Kristallablauf. Details einer möglichen Dialog-Rückkehr bei verschachtelter Navigation phasenbezogen abstimmen; X beendet das Welt-Portfolio direkt.

Portfolio-Einstiegskontext explizit unterscheiden: direkter HTML-Zugang, Kristall, Weltobjekt. Direkter HTML-Zugang hat keine laufende Welt und kein Welt-X; interne Navigation plus Start-Link. UI-Regeln: [ui-and-navigation.md](ui-and-navigation.md).

## Aufgaben und Speicherung

Vier optionale Aufgaben: Kristall aktivieren, Schmiede erkunden, Garten besuchen, Wegschild lesen. Abschluss bei erfolgreicher Interaktion bzw. Öffnen des zugehörigen Inhalts, nicht durch bloßes Vorbeilaufen oder Tastendruck. B zählt für den Kristall. Reiner HTML-Besuch täuscht keine Weltinteraktion vor. Fortschritt sperrt niemals Inhalte; ein Abschlussereignis wird nicht mehrfach gewertet.

Sprache, Audio, Grafik, Bewegungsreduktion und Erkundungsfortschritt lokal speichern; Spielerposition nicht dauerhaft. Neuer Besuch startet am Spawn. Sprachwechsel innerhalb derselben Sitzung erhält Position, Kamera-/Interaktionskontext und aktuelle Inhalts-ID. Speicherfehler: nutzbare Sitzung statt Abbruch.

## Audio und Browsergrenzen

Erstbesuch stumm; Startscreen bietet Audioentscheidung, spätere Anpassung in Einstellungen. Musik/Effekte getrennt. Gespeichertes „an“ ersetzt keine erforderliche Browser-Nutzeraktion. Fehlendes oder blockiertes Audio verhindert keinen Ablauf.

Pointer Lock direkt aus geeigneter Nutzeraktion anfordern und tatsächlichen Erfolg/Fehler beobachten. Canvas während der Rückkehr erhalten. Erfolgreicher Lock während einer Rückanimation bedeutet noch keine Bewegungsfreigabe. Browser-Unlock nicht umgehen. Wenn der Ein-Klick-Rückweg in einem Zielbrowser scheitert: sicher pausieren, Nachweis und Optionen vorlegen; nicht still zusätzliche Klicks als reguläre Lösung einbauen. Auf normaler Website testen, nicht nur eingebettetem Preview. Offizielle Quellen: [architecture.md](architecture.md).

## Umsetzungspattern und frühe Tests

Expliziter koordinierter Ablaufzustand (z. B. Laden, Gameplay, Cursor, Hotspot-UI, Positionierung, Teleport, Aktivierung, Portfolio, Rückkehr, Fehler) statt konkurrierender Boolescher Schalter. Kamera, Figur und UI besitzen klar zugewiesene Steuerungsverantwortung. Während Übergängen keine zweite E/B-Aktion starten. Animationen müssen abbrechbar sein; Fokusverlust, Fehler, Unmount und reduzierte Bewegung dürfen keinen halbfertigen Zustand hinterlassen.

Früh prüfen: E/B mehrfach, E halten, Q/E-Kombinationen, Tabwechsel, Browser-Unlock, Schließen aus tiefen Seiten, Sprachwechsel, Aktivierung ohne finale Clips und kollisionsverträgliche Positionierung.
