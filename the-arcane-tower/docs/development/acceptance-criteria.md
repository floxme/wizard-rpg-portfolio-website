# Abnahmekriterien

Sollzustand, noch kein Testprotokoll. Für jeden späteren Test Browser/Gerät, Schritte, Ergebnis und Einschränkungen berichten. Kriterien nicht absenken, um einen Test grün zu machen. Änderungen benötigen Zustimmung.

| ID | Prüffall und erwartetes Ergebnis |
|---|---|
| A01 | `/` zeigt Sprachwahl und beide Einstiege; gespeicherte Sprache ist vorausgewählt, kein erzwungener Redirect. |
| A02 | `/de-DE/` und `/en-EN/` funktionieren nach statischem Build auch bei direktem Aufruf/Reload; URL-Sprache gewinnt gegen gespeicherte Wahl. |
| A03 | Direkter Portfolio-Einstieg liefert alle sechs Bereiche ohne Weltzwang; mobile Nutzung braucht kein WebGL. |
| A04 | Sprachenwechsel in Portfolio-Detail erhält dieselbe Inhalts-ID; in der Welt bleibt Position erhalten. |
| A05 | Welt startet draußen am Spawn. Turmraum begehbar; Kristall darin; Schild am Spawn, Schmiede und Garten erreichbar. |
| A06 | WASD/Shift funktionieren, kein Springen; Kamera reagiert nur im Gameplay auf Maus. Q gibt Cursor frei/fordert Gameplay an. |
| A07 | In Reichweite erscheint korrekter E-Hinweis; außerhalb keine unbeabsichtigte Interaktion. Gehaltenes E startet keinen Wiederholungszyklus. |
| A08 | E am Kristall hält Position, startet Geste/Leuchten/Kamera und öffnet Portfolio mit freiem Cursor. |
| A09 | X aus tiefer Projektansicht schließt alles. Zurück navigiert intern, auf oberster Ebene schließt es. Kein Verlassen der Website durch internen Pfeil. |
| A10 | Schließen-Klick fordert Pointer Lock ohne zweite Eingabe; nach Rückübergang vorherige Kamera, Idle an Interaktionsposition, Kristallaktivierungslicht aus, E wieder nutzbar. In realen Zielbrowsern testen. |
| A11 | Esc schließt keine App-Oberfläche. Browser-Unlock bleibt möglich, ungewollte Bewegung stoppt. |
| A12 | „Zum Kristall“ teleportiert an feste Position und öffnet automatisch, ohne E. Nach Schließen bleibt Figur an Ankunftsposition. |
| A13 | Wiederholte Klicks/E während Übergang erzeugen keine doppelten Overlays/Animationen oder blockierten Zustände. |
| A14 | Reduzierte Bewegung führt dieselben Endzustände sofort ohne Kamerafahrt/starke Effekte herbei. |
| A15 | Minimap zeigt Turm/Spieler/drei Hotspots, ist im Portfolio verborgen; Questliste einklappbar und ohne Inhaltssperren. |
| A16 | Schmiede und Fähigkeitenbaum zeigen dieselben Daten; Garten und Interessenbereich dieselben fünf Interessen. |
| A17 | Erstbesuch stumm; Musik/Effekte getrennt regelbar; Autoplay-Ablehnung blockiert keine Bedienung. |
| A18 | Einstellungen und besuchte Hotspots bleiben nach Reload; Position wird nicht dauerhaft gespeichert. Speicherfehler verhindert Nutzung nicht. |
| A19 | Automatik reduziert bei anhaltendem Leistungsabfall ohne Pendeln; manuelle Stufe bleibt gewählt; UI-Texte bleiben scharf. |
| A20 | Fehlendes WebGL/defektes Asset/Ladefehler zeigt verständlichen HTML-Zugang statt Endlosschleife. |
| A21 | Alle Portfolio-Informationen per Tastatur zugänglich, Fokus sichtbar und sinnvoll; X/Zurück zugänglich beschriftet. |
| A22 | Keine internen Projektinformationen oder erfundenen Skills; nur bestätigte berufliche Texte. |
| A23 | E-Mail/Profil-Links stimmen; kein Formular; privater Quellcode als Status, kein unzugänglicher Repository-Link. |
| A24 | Statischer Build benötigt keinen eigenen Server/DB; keine Analytics-/Trackingrequests oder Geheimnisse im Bundle. |
| A25 | Projektkarte/Detail erklärt tatsächlichen Entwicklungsstand und KI-Unterstützung wahrheitsgemäß. |
| A26 | Keine fehlenden DE/EN-UI-Texte; technische Sprachcodes korrekt von URL-Segmenten getrennt. |
| A27 | Finale Assets weisen dokumentierte Rechte auf; Runtime enthält nur benötigte Varianten, keine Rohchats oder vertraulichen Daten. |

## Geeignete Testebenen – Umsetzungsvorschlag

Automatisierbar: Inhalts-/Übersetzungskonsistenz, Zustandsübergänge, Speicherfallbacks, Navigation, statische Routen. Echte Browserprüfung: Pointer Lock, Fokus, Audiofreigabe, WebGL-Ausfall und Eingabekombinationen. Visuell/manuell: Kamerawirkung, Lesbarkeit, Animation, Audioqualität. Gemessene Geräteprüfung: Performance; keine Zahlen ohne Messkontext.

Testwerkzeuge bei Einrichtung passend wählen; Vitest/Testing Library und Playwright sind mögliche Kandidaten, noch keine installierte oder abschließend beschlossene Toolchain. Keine umfangreiche Testsuite für reine Dokumentationsformatierung.
