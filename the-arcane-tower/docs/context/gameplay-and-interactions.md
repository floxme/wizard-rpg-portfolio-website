# Gameplay und Interaktionen

## Steuerung

| Eingabe | Verhalten |
|---|---|
| WASD | Gehen |
| Shift halten | Rennen |
| Maus im Gameplay | Third-Person-Kamera über Pointer Lock |
| E in Reichweite | Angezeigtes Objekt aktivieren |
| Q | Wechsel zwischen Gameplay und Cursor-/UI-Modus |
| Zurück-Pfeil | Eine Ebene innerhalb des Portfolios zurück; auf oberster Ebene zur Welt |
| X oben rechts | Portfolio aus jeder Tiefe vollständig schließen |
| Esc | Kein App-Schließen-Hotkey; browserseitige Freigabe der Maus bleibt möglich |

Springen ist im ersten Release ausgeschlossen. Während UI-/Cursor-Modus folgt die Kamera nicht der Maus. Eingaben in Textfeldern/Bedienelementen dürfen keine Spielaktionen auslösen. Interaktion zeigt in Reichweite einen konkreten Hinweis, etwa „E – Wegschild lesen“. Reichweiten werden am Prototyp festgelegt.

## Kristall: regulärer Ablauf

1. Vor Aktivierung Spielerposition und Spielkamera merken.
2. E wird einmal angenommen; Magier bleibt an dieser Stelle, Bewegungssteuerung pausiert.
3. Kurze Zaubergeste; Kristall leuchtet auf, Kamera richtet sich auf den Kristall aus.
4. Portfolio öffnet, Maus frei, Turmhintergrund abgedunkelt, Minimap verborgen.
5. Besucher navigiert in der Oberfläche. Inhalte sind sofort zugänglich.
6. X oder Zurück auf der obersten Ebene löst Schließen aus. Derselbe Nutzerklick fordert Pointer Lock an, bevor verzögerte Animationen abgewartet werden.
7. Rückübergang zur gespeicherten Kamera; Magier Idle an der ursprünglichen Interaktionsposition. Aktivierungsleuchten erlischt. Kein weiter leuchtender Aktivierungszustand nach Schließen.
8. Nach Übergang Spielsteuerung aktiv, E kann sofort erneut öffnen. Keine neue zusätzliche Bestätigung, kein „Weiterspielen“-Schritt.

Wichtig: E darf bei gehaltenem Tastendruck nicht mehrfach öffnen/schließen. Übergänge gegen Doppelklicks und konkurrierende Aktionen schützen. Erfolgreicher Pointer Lock während Rückanimation bedeutet nicht, dass die Figur schon bewegbar ist.

## „Zum Kristall“

Permanente Abkürzung innerhalb der Spielwelt. Kurzer Auflösungs-/Teleporteffekt, Ankunft an einer festen gültigen Position vor dem Kristall. Danach automatisch derselbe Aktivierungsablauf wie E; KEIN weiteres E erforderlich. Nach dem Schließen bleibt der Magier an dieser Ankunftsposition, nicht am früheren Standort vor dem Teleport.

## Browsergrenze / frühes Prüftor

Pointer Lock ist eine Browserfreigabe. Den Antrag direkt im X-/Zurück-Event auslösen, nicht erst nach await/Animationsende. Canvas muss weiter existieren. Erfolg über tatsächlichen Browserzustand bestätigen, Fehler behandeln. Esc nicht abfangen, um Browserfreigaben zu umgehen.

Der beschlossene normale Ablauf verlangt keinen zusätzlichen Klick/Q. Falls ein Zielbrowser das trotz korrekter Umsetzung verhindert, ist dies ein offener technischer Konflikt: Nutzer informieren, Nachweis liefern und Lösung abstimmen. Keinen zusätzlichen Bestätigungsschritt still als akzeptierten Fallback einbauen und keine browserübergreifende Garantie behaupten. Bei Fehlern Eingaben sicher pausieren und zugänglichen HTML-Zugang erhalten. Prüfung auf normaler Website, nicht ausschließlich in einem eingebetteten Preview.

## Weitere Hotspots

Wegschild öffnet Einführung. Schmiede lässt eine Fähigkeit wählen, spielt eine kurze Runen-/Schmiedeanimation und zeigt dieselben Daten wie der Fähigkeitenbaum. Garten zeigt Gaming, Anime/Serien, Technik, Calisthenics und neapolitanisches Pizzabacken. UI und Mausfreigabe folgen demselben Grundprinzip. Keine Pflichtaufgaben oder Inhalte hinter Spielfortschritt.

## Reduzierte Bewegung

Systemeinstellung berücksichtigen, zusätzlicher Schalter. Teleport und Portfolio-Wechsel sofort, ohne Kamerafahrt oder starke Effekte. Funktionszustand identisch, keine längeren Wartezeiten auf ausgelassene Animationen. Einstellungen dürfen nicht die Lesbarkeit der Inhalte beeinträchtigen.

## Neustart, Sprache und Speicherung

Neuer Besuch startet am Spawn. Sprache, Audio, Grafik und besuchte Hotspots bleiben lokal gespeichert; Position nicht dauerhaft. Sprachwechsel innerhalb einer Sitzung erhält Position und aktuelle Portfolio-Unteransicht. Speicherzugriff kann scheitern; dann bleibt die Sitzung benutzbar.

## Audio

Erstbesuch vollständig stumm. Startbildschirm bietet Audioentscheidung; Musik und Effekte getrennt regelbar, spätere Wahl lokal gespeichert. Dezente Fantasymusik, einfache Schritte/Schmiedefeuer/Kristallklänge angestrebt. Aufwendige Synchronisierung nachrangig. Browser-Autoplay-Sperren beachten; gespeichertes „an“ garantiert keine Wiedergabe vor einer erlaubten Nutzeraktion. Bei fehlenden Effekten zunächst Hintergrundmusik. Audiofehler dürfen keinen Ablauf blockieren.

## Umsetzungsvorschlag: Zustände

Explizit modellieren: Start, Laden, Gameplay, Cursor, Hotspot-UI, Teleport, Kristallaktivierung, Portfolio, Rückübergang, Fehler. Zustandsnamen sind Vorschläge; Anforderungen oben sind verbindlich. Ein zentraler Interaktionszustand verhindert parallele Kamera-/Animationsabläufe. Externe Fokusverluste und Browser-Unlock müssen beobachtet werden.
