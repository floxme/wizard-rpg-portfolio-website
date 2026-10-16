# UI und Navigation

Stand: 16.10.2026. Funktionale Quelle für Oberflächen und Navigation; Bildinterpretationen im [Designindex](../design/README.md). Gameplay-Abläufe ausschließlich in [gameplay-and-interactions.md](gameplay-and-interactions.md), Inhaltshierarchie in [portfolio-and-content.md](portfolio-and-content.md).

## Gemeinsame Oberfläche

Ein gemeinsamer Portfolio-Rahmen mit Header, Navigation, Seitenkopf und Inhaltsbereich für direkten HTML-Einstieg und Welt-Portfolio. Einstiegskontext steuert nur Rückkehr/Schließen, nicht eine zweite Kopie aller Seiten.

Design-Tokens für Farbrollen, Abstände, Typografie, Rahmen, Fokus und Effekte; konkrete Werte anhand der Referenzen und Lesbarkeit wählen. Wiederverwendbare Fantasy-Karten, Buttons, Dialograhmen, Statusanzeigen und Inhaltsmodule. Dekorative Rahmen dürfen keine Klicks abfangen. Echte Links/Buttons, keine PNG-Oberfläche als Ersatz für Interaktion. Icons und Bilder unabhängig von Daten austauschbar; gleiche Navigationspunkte verwenden dieselben Icons.

## Navigation und Hierarchie

Vier Hauptgruppen: About Me, Skilltree, Projects, Contact; bis zu drei Ebenen für Interessen. Eine gemeinsame Datenstruktur für Desktop-Sidebar, mobiles Menü und Schnelleinstieg. Aktive Route/Inhalts-ID getrennt von aufgeklappten Gruppen verwalten. Gruppe aufklappen darf nicht versehentlich navigieren. Mehrere offene Gruppen sind möglich. Direkte Unterseitenaufrufe, gültige Zielpfade und Sprachwechsel zur gleichen Inhalts-ID berücksichtigen.

Quick Navigation ausschließlich auf General. Desktop-Sidebar sichtbar halten; mobil links ein Off-Canvas-Menü. Mobile Header-Reihenfolge: links Menü, mittig Logo/Titel als Einheit, rechts DE/EN. Sprachwahl nicht ins Menü verschieben. Keine zusätzliche Bottom Navigation allein aus dem Mockup.

Mobile Menüschicht: klarer Schließen-Button und geeigneter Klick außerhalb; Fokus hineinführen, Hintergrund unbedienbar, Fokus beim Schließen zurück. Menüzustand, Portfoliozustand und Einstellungen getrennt koordinieren. Esc bleibt gemäß Produktentscheidung keine App-Schließfunktion; nicht durch Komponentenstandards ungefragt einschalten.

## Rückkehr

Welt-Portfolio: X schließt aus jeder Tiefe; Zurück navigiert intern und schließt auf oberster Ebene in den gespeicherten Weltkontext. Direkter HTML-Zugang: kein Welt-X, interne Zurücknavigation und Start-Link. Browser-Zurück ist eine separate Navigationsfunktion; nicht blind für den internen Zurück-Button verwenden. Konkrete History-/Deep-Link-Abbildung beim Routing-Prototyp prüfen.

## Layout, Scrollen und Inhalte

Desktop mehrspaltig, mobil gestapelt; Breakpoints nach Inhaltsbreite und DE/EN-Textbedarf, nicht ungeprüft aus den PNGs kopieren. Skillleisten mobil weiterhin horizontal, gegebenenfalls unter dem Namen. Career Timeline horizontal auf Desktop, mobil vertikal. Interessen/Projekte als responsive Kartenraster.

Projekte maximal sechs tatsächliche Einträge pro Seite; Seitenzahl aus echten Einträgen berechnen. Coming-Soon-Dekoration nicht mitzählen und nicht mit funktionslosen Links versehen. Leere Datenlisten und Änderungen der Seitenzahl abfangen. Beim Rückweg von Details sinnvoll zur Liste zurückkehren; konkrete Scrollbewahrung im UI-Test festlegen.

Ein klarer Hauptscrollbereich pro Ansicht. Lange Detailseiten nicht abschneiden/verkleinern; feste Header und Navigation dürfen Inhalte bei Zoom nicht überdecken. Verschachtelte Scrollflächen nur mit begründetem Bedarf. Body-Scroll-Sperre beim Schließen/Unmount zuverlässig entfernen. Menüs und Dialoge brauchen definierte Ebenen und Fokuszuständigkeit.

Interessen- und Projektdetails aus optionalen Modulen zusammensetzen. Gaming-Module nicht für alle Interessen erzwingen. Karten, Galerie, Kontakt und Inhalte bleiben datengetrieben. Kein Play-Button ohne Video, kein aktiver Link ohne reales Ziel, kein Kontaktformular.

## HUD und Orientierung

Oben links Porträt und rein dekorative HP-/Mana-Balken im Prototyp. Keine Schadens-, Heilungs-, Verbrauchs-, Regenerationsmechanik oder Skill-Actionbar. Keine falschen fachlichen Informationen für assistive Technik; rein dekorative Balken entsprechend behandeln.

Oben rechts runde Minimap, B/„Zum Kristall“ und einklappbare Aufgaben; unten links Steuerungshinweise. Die Detailreferenz der Aufgaben zeigt vier Aufgaben, auch wenn das Gesamt-HUD nur drei zeigt. Status aus echten Interaktionen, zusätzlich zu Farbe verständliche Symbole/Texte. Ein-/Ausklappen per Maus/Tastatur mit eindeutigem Zustand.

Minimap und Welt verwenden gemeinsame Positionsdaten. Turm zentral, Schmiede westlich, Garten östlich, Spawn/Wegschild südlich. Keine zusätzliche große Karte. Im Turm bleibt die Außenkarte sichtbar: Marker weiterhin aus tatsächlichen X/Z-Koordinaten und Ausrichtung ableiten, nicht am Turmsymbol festklemmen. Kartenausschnitt/Zoom so im Prototyp prüfen, dass Bewegung erkennbar bleibt; keine eigene Innenraumkarte. Ob die Karte selbst rotiert oder nur der Marker, ist technische/gestalterische Feinabstimmung. Im geöffneten Portfolio Minimap ausblenden.

## Einstellungen

Gemeinsamer Dialog für Startscreen und Welt. Grafik: Automatisch/Niedrig/Mittel/Hoch; Audio: Hauptlautstärke, Musik, Effekte; Sprache: DE/EN; Bewegungsreduktion trotz fehlendem Schalter im PNG anbieten.

**Entwurfswerte von aktiven Werten trennen:** Öffnen übernimmt aktuellen Stand in den Entwurf. „Übernehmen“ aktiviert und speichert den Entwurf. „Verwerfen“ und X verwerfen seit dem letzten Übernehmen ungespeicherte Werte. „Standard wiederherstellen“ setzt zunächst nur den Entwurf auf die dokumentierten Defaults. Keine wirksamen Live-Voransichten, die Verwerfen bedeutungslos machen. Speichern kann scheitern: aktive Sitzung bleibt nutzbar, Persistenz nicht fälschlich bestätigen. Ob Übernehmen den Dialog schließt, bei Umsetzung abstimmen.

Sprachwechsel innerhalb des Einstellungsdialogs ist Entwurf bis Übernehmen; direkte DE/EN-Navigation außerhalb des Dialogs wirkt unmittelbar. Erstbesuch stumm, Grafik automatisch; übrige Defaults beim Setup konsistent festlegen.

## Wiederverwendbare Weltobjekt-Dialoge

Ein Rahmen für Wegschild, Schmiede und Garten mit austauschbarem Titel, Symbol, Vorschaubild, Text und Zielaktion. Platzhalterbilder zunächst erlaubt, nicht als fertige Assets ausgeben. „Mehr erfahren“ nur mit funktionierendem Inhaltsziel; kein zusätzlicher Kristallteleport. Gemeinsame körperliche Generic-Interact-Geste bedeutet nicht identische Inhalte oder Aktionen.

## Prüfschwerpunkte

Drei Navigationsebenen, mehrere ausgeklappte Gruppen, lange deutsche/englische Texte, kleine Breiten, Zoom, Tastatur/Touch, Fokus-Rückgabe, verschachtelte UI, Scrollfreigabe, leere Listen, reale Pagination, Einstellungs-Verwerfen und identische Inhalte in HTML/Welt. Barrierefreiheit/Übersetzung von Anfang an, keine nachträgliche Pflichtphase allein am Ende.
