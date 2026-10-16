# Abnahmekriterien

Sollzustand, noch kein Testprotokoll. Für jeden späteren Test Browser/Gerät, Schritte, Ergebnis und Einschränkungen berichten. Kriterien nicht absenken, um einen Test grün zu machen. Änderungen benötigen Zustimmung.

| ID | Prüffall und erwartetes Ergebnis |
|---|---|
| A01 | `/` zeigt Sprachwahl und beide Einstiege; gespeicherte Sprache ist vorausgewählt, kein erzwungener Redirect. |
| A02 | `/de-DE/` und `/en-EN/` funktionieren nach statischem Build auch bei direktem Aufruf/Reload; URL-Sprache gewinnt gegen gespeicherte Wahl. |
| A03 | Direkter HTML-Einstieg liefert alle vier Hauptbereiche und vorgesehenen Unterseiten ohne Weltzwang; mobile Nutzung braucht kein WebGL. |
| A04 | Sprachenwechsel in Portfolio-Detail erhält dieselbe Inhalts-ID; in der Welt bleibt Position erhalten. |
| A05 | Welt startet draußen am Spawn. Turmraum begehbar; Kristall darin; Schild am Spawn, Schmiede und Garten erreichbar. |
| A06 | WASD/Shift funktionieren, kein Springen; Kamera reagiert nur im Gameplay auf Maus. Q gibt Cursor frei/fordert Gameplay an. |
| A07 | In Reichweite erscheint korrekter E-Hinweis; außerhalb keine unbeabsichtigte Interaktion. Gehaltenes E startet keinen Wiederholungszyklus. |
| A08 | E am Kristall positioniert/ausrichtet den Magier zuerst kollisionsverträglich am Animationsanker und startet danach Aktivierung/Portfolio. Etwa eine Sekunde nur Vorschlag, Timing mit Florian testen. |
| A09 | Im Welt-Portfolio schließt X aus tiefer Projektansicht alles. Zurück navigiert intern, auf oberster Ebene schließt es. Kein Verlassen der Website durch internen Pfeil. |
| A10 | Schließen-Aktion fordert Pointer Lock ohne zweite Eingabe; passende Spielkamera, Idle an Animationsstartposition, zusätzliches Aktivierungslicht aus, E erneut nutzbar. In realen Zielbrowsern testen. |
| A11 | Esc schließt keine App-Oberfläche. Browser-Unlock bleibt möglich, ungewollte Bewegung stoppt. |
| A12 | B und HUD „Zum Kristall“ starten Teleport, Ankunft/Ausrichtung am Animationsanker, dann automatische Aktivierung ohne E. Nach Schließen dort bleiben. |
| A13 | Wiederholte Klicks/E während Übergang erzeugen keine doppelten Overlays/Animationen oder blockierten Zustände. |
| A14 | Reduzierte Bewegung führt dieselben Endzustände sofort ohne Kamerafahrt/starke Effekte herbei. |
| A15 | Minimap zeigt Turm/Spieler/drei Hotspots, ist im Portfolio verborgen. Auch im Turm bewegt/dreht sich der Marker auf der Außenkarte entsprechend dem realen Zustand. Questliste einklappbar, Inhalte frei. |
| A16 | Schmiede/Skilldarstellung verwenden dieselben Daten; Garten und Interessenbereich dieselben sechs Kategorien. |
| A17 | Erstbesuch stumm; Musik/Effekte getrennt regelbar; Autoplay-Ablehnung blockiert keine Bedienung. |
| A18 | Einstellungen und besuchte Hotspots bleiben nach Reload; Position wird nicht dauerhaft gespeichert. Speicherfehler verhindert Nutzung nicht. |
| A19 | Automatik reduziert bei anhaltendem Leistungsabfall ohne Pendeln; manuelle Stufe bleibt gewählt; UI-Texte bleiben scharf. |
| A20 | Fehlendes WebGL/defektes Asset/Ladefehler zeigt verständlichen HTML-Zugang statt Endlosschleife. |
| A21 | Alle Portfolio-Informationen per Tastatur zugänglich, Fokus sichtbar und sinnvoll; X/Zurück zugänglich beschriftet. |
| A22 | Keine internen Projektinformationen oder erfundenen Skills; nur bestätigte berufliche Texte. |
| A23 | E-Mail/Profil-Links stimmen; kein Formular. Der GitHub-Link zum öffentlichen Repository ist bestätigt, tatsächlich erreichbar und korrekt verknüpft; keine erfundene URL oder veraltete Privat-Statusanzeige für The Arcane Tower. Öffentliche Sichtbarkeit allein beweist keine bereits implementierte UI-Verknüpfung. |
| A24 | Statischer Build benötigt keinen eigenen Server/DB; keine Analytics-/Trackingrequests oder Geheimnisse im Bundle. |
| A25 | Projektkarte/Detail erklärt tatsächlichen Entwicklungsstand und KI-Unterstützung wahrheitsgemäß. |
| A26 | Keine fehlenden DE/EN-UI-Texte; technische Sprachcodes korrekt von URL-Segmenten getrennt. |
| A27 | Finale Assets weisen dokumentierte Rechte auf; Runtime enthält nur benötigte Varianten, keine Rohchats oder vertraulichen Daten. |
| A28 | Objektkollisionen, Rampen, Brücken, Podest und sichere Weltgrenzen funktionieren ohne Springen; keine Box-Sprünge oder ungewolltes Verlassen der Welt. |
| A29 | Andere Weltobjekte lösen keine automatische Kristallpositionierung aus. Mehr erfahren öffnet passende Portfolio-Unterseite ohne Teleport; Schließen erhält den ursprünglichen Weltkontext. |
| A30 | Vier Aufgaben werden erst bei erfolgreicher Interaktion/Inhaltsöffnung abgeschlossen; B zählt für Kristall, Vorbeilaufen und reines HTML-Lesen täuschen keinen Weltfortschritt vor. |
| A31 | Settings-Entwurf: Übernehmen aktiviert/speichert; Verwerfen/X verwerfen ungespeicherte Änderungen; Defaults zunächst nur im Entwurf. Speicherfehler blockiert nicht. |
| A32 | Desktop-Sidebar/mobile Drawer unterstützen drei Ebenen, aktive Seite und offene Gruppen unabhängig. Mobiler Header: Menü links, Titel/Logo mittig, Sprache rechts; keine Pflicht-Bottom-Navigation. |
| A33 | Quick Navigation ausschließlich General; lange Inhalte vollständig scrollbar, Fokus-/Scrollsperren nach Schließen korrekt aufgehoben. |
| A34 | Skillleisten durchgehend mit vier internen Stufen, ohne sichtbare Prozentwerte/Segmente; persönliche Bewertungen bestätigt. Tools ohne Leisten; Career mit drei Phasen. |
| A35 | Pagination zählt nur echte Projekte, maximal sechs pro Seite. Ein echtes Projekt erzeugt keine weiteren Seiten durch dekorative Platzhalter; keine funktionslosen Links. |
| A36 | HP/Mana im Prototyp rein dekorativ; keine Skill-Actionbar oder abgeleitete Kampf-/Ressourcenmechanik. |
| A37 | Startscreen bleibt während begrenzter Vorladung bedienbar; HTML/Mobil lädt nicht zwangsläufig die ganze Welt. Reuse/Fehlerpfade und erste Renderkosten getrennt messen. |
| A38 | Fokusverlust/Unlock während Bewegung oder Übergang hinterlässt keine klemmenden Tasten, mehrfachen Listener, Animationen oder blockierte UI. |
| A39 | Prototypmodell und vorläufige fehlende Clips ehrlich gekennzeichnet; Originale unverändert, finale Ableitungen separat. Keine endgültige Ein-Sekunden-Abnahme. |
| A40 | Direkter HTML-Zugang ohne Welt-X, interne Navigation und Start-Link; Welt-X schließt unabhängig von Portfoliotiefe. |

## Testebenen und visuelle Freigabe

Maßgeblich sind [Testworkflow](testing-workflow.md), dessen [Prüfebenen](testing-workflow.md#vorhandene-prüfungen-und-mögliche-testarchitektur) und [Nachweisstatus](testing-workflow.md#nachweisstatus-und-datenschutz). Keine installierten Verhaltenstest-Werkzeuge oder Windows-/Opera-Ergebnisse ohne tatsächlichen Nachweis behaupten. Windows-Grundeinrichtung und erster Opera-HTML-Test sind vom Nutzer bestätigt; das ist keine vollständige Erfüllung von A01/A02 oder Grafik-/Accessibility-Kriterien. Der Devmodus-Routenbefund bleibt in open-items.md offen; die Kriterien bleiben Sollzustand.

**Ein erfolgreich abgeschlossener automatisierter Test beweist nicht, dass eine Animation natürlich aussieht, eine Kamerafahrt angenehm wirkt, ein Übergang optisch gelungen ist oder eine 3D-Szene den verbindlichen Mockups entspricht.** Gesonderte visuelle Nutzerprüfung insbesondere für Magierbewegung/Idle/Lauf/Interaktion, Kristallpositionierung/-ausrichtung, Aktivierung/Teleport/Kamera, Welt-/HTML-Übergänge, Grafik/Licht/Effekte/Performance und Layout-/Referenzwirkung. Funktionale Kriterien und visuelle Freigabe getrennt belegen; Prototypplatzhalter bleiben gemäß A39 zulässig.

Nach Dateiänderungen zuletzt Kontext-/Prompt-Konsistenz prüfen und unautorisierte Anpassungen zur Bestätigung vorlegen.
