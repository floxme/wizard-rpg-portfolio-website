# The Arcane Tower – UI Design References

Stand: 16.10.2026

Status: Freigegebene visuelle UI-Referenzen für The Arcane Tower – Wizard RPG Portfolio.

## 1. Zweck

Dieses Verzeichnis enthält die freigegebenen UI-Mockups für die Benutzeroberflächen von The Arcane Tower – Wizard RPG Portfolio.

Die Referenzen definieren die visuelle Gestaltung und grundlegende Anordnung von:

- Startbildschirm
- Ingame-HUD
- Minimap
- Questliste und Aufgabenfortschritt
- Einstellungsmenü
- Interaktionsfenstern für Weltobjekte

Alle UI-Elemente orientieren sich am einheitlichen Fantasy-Stil des Projekts.

Die Mockups sind visuelle Gestaltungsvorlagen und keine vollständig implementierten oder technisch exakten Spezifikationen.

Bestätigte Produktanforderungen, Gameplay-Regeln, Datenschutz, Barrierefreiheit und Performance haben Vorrang.

## 2. Freigegebene UI-Referenzen

| Datei | Zuständigkeit |
|---|---|
| `ui-app-start-screen.png` | Startbildschirm und Einstiegsmöglichkeiten |
| `ui-ingame-hud.png` | Allgemeine HUD-Gestaltung und Positionierung |
| `ui-minimap.png` | Minimap, Symbole und Kartenstil |
| `ui-quest-tracker-folded-unfolded.png` | Ein- und Ausklappen der Questliste |
| `ui-quest-tracker-states.png` | Offene, abgeschlossene und gemischte Questzustände |
| `ui-settings-menu.png` | Grafikeinstellungen, Audio und Sprache |
| `ui-world-interaction-dialog.png` | Wiederverwendbare Dialogfenster für Weltobjekte |

Alle Dateien befinden sich in diesem Verzeichnis.

Die Bilder wurden als gestalterische Referenzen ausgewählt. Einzelne dargestellte Details können Illustrationsfehler oder nicht bestätigte Funktionen enthalten.

In solchen Fällen gelten die nachfolgenden Regeln.

---

## 3. Einheitliches UI-Designsystem

### 3.1 Farbpalette

**Indigo / Dunkelblau**

Hauptfarbe für Fensterhintergründe, Dialogflächen, Menüs und HUD-Elemente.

**Gold / Messing**

Verwendung für:

- Fensterrahmen
- Ornamente
- Überschriften
- Symbole
- Trennlinien
- ausgewählte Schaltflächen

**Cyan / Blau**

Verwendung für:

- aktive Auswahlzustände
- magische Interaktionen
- Portfolio-Kristall
- hervorgehobene Schaltflächen
- ausgewählte Statusanzeigen

**Warme Lichtfarben**

Dezente Ergänzung für atmosphärische Akzente.

### 3.2 Wiederkehrende Gestaltungselemente

- Verzierte Fantasy-Rahmen
- Astronomische Kreise
- Runen
- Kompasssymbole
- Kristalle
- Dunkle, möglichst ruhige Hintergründe
- Dezente Leuchteffekte
- Fantasy-inspirierte Überschriften
- Gut lesbarer Fließtext

### 3.3 Gestaltungsprinzip

Die UI soll hochwertig und atmosphärisch wirken, darf aber die Bedienbarkeit nicht beeinträchtigen.

Wichtige Grundsätze:

- Lesbarkeit vor Dekoration
- Klare visuelle Hierarchie
- Eindeutige Interaktionszustände
- Konsistente Schaltflächen
- Ausreichende Kontraste
- Verständliche Beschriftungen
- Bedienbarkeit per Maus und Tastatur
- Geeignete responsive Darstellung
- Keine unnötige Überladung des Bildschirms

Die UI übernimmt ausgewählte Fantasy- und RPG-Elemente, ohne eine klassische Kampf- oder Inventaroberfläche vorauszusetzen.

---

## 4. Startbildschirm

### Referenz

`ui-app-start-screen.png`

### Zweck

Der Startbildschirm bildet den Einstieg in The Arcane Tower.

Besucher sollen zwischen der interaktiven 3D-Welt und dem direkten HTML-Portfolio wählen können.

### Verbindliche Gestaltung

- Großflächige Fantasy-Hintergrundszene
- Sichtbarer Magier
- Deutlich erkennbarer Projekttitel
- Indigo-Gold-Farbgebung
- Cyanfarbene magische Akzente
- Zwei besonders gut erkennbare Einstiegsmöglichkeiten
- Spracheinstellung
- Zugang zu den Einstellungen

### Funktionale Anforderungen

Die beiden zentralen Einstiegsmöglichkeiten sind:

**3D-Welt erkunden**

Startet die interaktive 3D-Erfahrung.

**Portfolio direkt öffnen**

Öffnet das vollständig bedienbare HTML-Portfolio ohne verpflichtenden Einstieg in die 3D-Welt.

Zusätzlich sollen Sprache und Einstellungen zugänglich sein.

### Nicht verbindliche Details

- Exakte Position und Größe der Menüschaltflächen
- Zusätzliche dekorative Symbole
- Abgebildete Hintergrundgebäude
- Im Mockup dargestellte Menübezeichnungen, sofern sie von den bestätigten Funktionen abweichen
- Die Schaltfläche „Beenden“

Da The Arcane Tower eine Website ist, wird keine zusätzliche Beenden-Funktion allein aufgrund der Illustration eingeführt.

### Sprachkonzept

Die Website unterstützt Deutsch und Englisch.

Die sprachspezifischen Routen sind:

- `/de-DE/`
- `/en-EN/`

Der Aufruf der Domainwurzel `/` führt zur vorgesehenen Sprachauswahl.

Die Startbildschirmgestaltung muss mit diesem Routingkonzept vereinbar sein.

---

## 5. Ingame-HUD

### Referenz

`ui-ingame-hud.png`

### Zweck

Das HUD unterstützt die Orientierung und Bedienung innerhalb der 3D-Welt.

Es soll wichtige Informationen anzeigen, ohne die Fantasy-Umgebung unnötig zu verdecken.

### Verbindliche Anordnung

**Oben links:**

- Magierporträt
- Kompakte HP-Anzeige
- Kompakte Mana-Anzeige

**Oben rechts:**

- Runde Minimap
- Schnellzugriff „Zum Kristall“
- Einklappbare Questliste unterhalb des Schnellzugriffs

**Unten links:**

- Steuerungshinweise

### HP- und Mana-Anzeige

Die Balken sind als visuelle RPG-Elemente vorgesehen.

Für den ersten Prototyp sind HP und Mana ausdrücklich rein dekorativ. Spätere funktionale Bedeutung ist offen und braucht eine neue Entscheidung.

Bis zu einer ausdrücklichen Entscheidung dürfen daraus keine zusätzlichen Kampf-, Schadens-, Heilungs-, Mana-Verbrauchs- oder Regenerationsmechaniken abgeleitet werden.

Insbesondere ist keine Skill-Actionbar vorgesehen.

### Steuerung

Die wichtigsten beschlossenen Tasten:

| Taste | Funktion |
|---|---|
| `W`, `A`, `S`, `D` | Bewegung |
| `Shift` | Laufen |
| `E` | Interagieren |
| `Q` | Wechsel zwischen Gameplay- und Cursor-Modus |
| `B` | Schnellzugriff zum Portfolio-Kristall |

Die vollständigen Regeln für Pointer Lock, Cursor-Modus und Interaktionen stehen in:

`docs/context/gameplay-and-interactions.md`

### Kristall-Schnellzugriff

Die HUD-Schaltfläche „Zum Kristall“ bleibt zusätzlich zum Hotkey `B` verfügbar.

Die maßgebliche Reihenfolge steht ausschließlich in [Gameplay](../../../context/gameplay-and-interactions.md): Teleport starten, an der Animationsstartposition ankommen, ausrichten, Kristall aktivieren und Portfolio öffnen. E nutzt davor eine automatische Positionierung ohne Teleport. Timing ist ein zu testender Vorschlag, keine feste Ein-Sekunden-Vorgabe. Bewegungsreduktion erreicht denselben Zielzustand direkt.

### Nicht verbindliche Details

- Exakte Pixelpositionen
- Größe des Magierporträts
- Konkrete HP-/Mana-Werte
- Nicht ausdrücklich bestätigte Statusmechaniken
- Zusätzliche Menü- oder Spielsysteme

---

## 6. Minimap

### Referenz

`ui-minimap.png`

### Zweck

Die Minimap erleichtert die Orientierung innerhalb der kompakten Fantasy-Welt.

### Verbindliche Gestaltung

- Runde Kartenform
- Goldener Kompassrahmen
- Dunkelblaue und natürliche Geländefarben
- Cyanfarbene Spielerposition
- Eindeutige Markierungen der wichtigen Orte
- Gut unterscheidbare Symbole

### Dargestellte Orte

- Magierturm
- Runenschmiede
- Magischer Garten
- Wegschild am Startpunkt

Die Grundanordnung orientiert sich an:

`docs/design/mockups/world/world-layout-top-down.png`

Die wichtigsten räumlichen Beziehungen:

- Magierturm zentral
- Runenschmiede links beziehungsweise westlich
- Magischer Garten rechts beziehungsweise östlich
- Startpunkt und Wegschild südlich des Turms

Die tatsächliche Kartenprojektion muss zur später implementierten 3D-Welt passen.

### Spielerposition

Die Spielerposition wird durch einen deutlich sichtbaren cyanfarbenen Richtungspfeil dargestellt.

Die angezeigte Position und Blickrichtung müssen auf dem tatsächlichen Spielzustand beruhen.

### Technische Grenzen

Die Minimap muss auch in verkleinerter HUD-Darstellung verständlich bleiben.

Das detaillierte Referenzbild muss nicht in jeder Einzelheit wiedergegeben werden.

Insbesondere können:

- Hintergrunddetails reduziert
- Wasserflächen vereinfacht
- kleine Dekorationen weggelassen
- Symbole stärker hervorgehoben

werden.

### Verhalten

Die Minimap ist während des regulären Gameplays sichtbar.

Bei geöffnetem Portfolio wird sie ausgeblendet.

Eine große zusätzliche Weltkartenansicht ist durch dieses Mockup allein nicht beschlossen.

---

## 7. Questliste – Ein- und Ausklappen

### Referenz

`ui-quest-tracker-folded-unfolded.png`

### Zweck

Dieses Mockup definiert die beiden Darstellungszustände der Questliste.

### Eingeklappter Zustand

- Nur die Überschrift „Aufgaben“ bleibt sichtbar.
- Ein gut erkennbares Symbol zeigt die Möglichkeit zum Ausklappen.
- Die Aufgaben werden ausgeblendet.
- Die Questliste benötigt nur wenig Bildschirmfläche.

### Ausgeklappter Zustand

- Die Überschrift bleibt sichtbar.
- Die Aufgaben werden darunter angezeigt.
- Ein Symbol erlaubt das erneute Einklappen.
- Aktuelle Aufgaben sind verständlich lesbar.

### Position

Die Questliste befindet sich rechts im HUD unterhalb der Minimap beziehungsweise des Kristall-Schnellzugriffs.

### Funktionale Anforderungen

- Ein- und Ausklappen per Mausklick
- Bedienbarkeit über die Tastatur
- Sichtbarer Fokuszustand
- Eindeutiger Zustand für assistive Technologien
- Keine störende Überlagerung wichtiger Spielelemente

Das Mockup zeigt die beiden Zustände nebeneinander. Dies stellt keine tatsächliche gleichzeitige Anzeige beider Varianten im Spiel dar.

---

## 8. Questliste – Aufgabenstatus

### Referenz

`ui-quest-tracker-states.png`

### Zweck

Dieses Mockup konkretisiert die Darstellung des Aufgabenfortschritts.

Es zeigt:

- alle Aufgaben offen
- alle Aufgaben abgeschlossen
- gemischten Fortschritt

### Offene Aufgaben

- Leerer goldener Kontrollkreis
- Normale Textdarstellung
- Gut erkennbares Aufgabensymbol

### Abgeschlossene Aufgaben

- Grünes Häkchen
- Visuelle Abschwächung des Aufgabentextes
- Optionale Durchstreichung

### Gemischter Zustand

Offene und abgeschlossene Aufgaben werden gemeinsam dargestellt.

Die Reihenfolge soll nachvollziehbar bleiben.

### Funktionale Anforderungen

Der Status darf nicht ausschließlich über Farbe vermittelt werden.

Zusätzlich werden eindeutige Symbole beziehungsweise zugängliche Statusinformationen benötigt.

Der Fortschritt muss aus dem tatsächlichen Spielzustand stammen.

Es dürfen keine abgeschlossenen Aufgaben vorgetäuscht werden.

### Aufgabeninhalt

Die Questliste orientiert sich an den beschlossenen Erkundungszielen:

- Portfolio-Kristall finden
- Runenschmiede erkunden
- Magischen Garten besuchen
- Wegschild entdecken

Die genaue fachliche Formulierung und Fortschrittslogik wird anhand der Gameplay-Kontextdatei umgesetzt.

Die Aufgaben sind freiwillig und dürfen den direkten Portfolio-Zugang nicht blockieren.

### Nicht verbindliche Details

- Exakte Aufgabenbeschreibungen im Bild
- Exakte Symbolgrößen
- Konkrete Schriftgrößen
- Jede dargestellte Durchstreichung
- Ausschließlich grüne Hervorhebungen ohne alternative Statuskennzeichnung

---

## 9. Einstellungsmenü

### Referenz

`ui-settings-menu.png`

### Zweck

Das Einstellungsmenü erlaubt die Anpassung der beschlossenen Anzeige-, Audio- und Sprachoptionen.

### Verbindliche Gestaltung

- Zentrales, gut lesbares Dialogfenster
- Dunkler Hintergrund
- Goldener Fantasy-Rahmen
- Cyanfarbene Auswahlhervorhebung
- Seitliche Kategorienavigation
- Gut erkennbare Bedienelemente
- Schließen-Schaltfläche oben rechts

### Kategorien

**Grafik**

Grafikqualität mit vier Auswahlmöglichkeiten:

- Automatisch
- Niedrig
- Mittel
- Hoch

**Audio**

Lautstärkeeinstellungen für:

- Hauptlautstärke
- Musik
- Effekte

**Sprache**

Auswahl zwischen:

- Deutsch
- Englisch

### Bedienkonzept

Die linke Navigation dient zur Auswahl der Einstellungsbereiche.

Im Mockup werden die Inhalte aller drei Kategorien beispielhaft gleichzeitig dargestellt.

Für die tatsächliche Anwendung kann jeweils nur der ausgewählte Bereich angezeigt werden.

Entscheidend ist, dass alle Funktionen verständlich und ohne unnötige Komplexität erreichbar sind.

### Schaltflächen

Die Vorlage zeigt:

- Standard wiederherstellen
- Änderungen verwerfen
- Änderungen übernehmen
- Schließen

Entwurfswerte sind von aktiven Werten getrennt. Übernehmen aktiviert und speichert; Verwerfen und X verwerfen ungespeicherte Änderungen. Standard wiederherstellen verändert zunächst nur den Entwurf. Maßgeblich: [UI und Navigation](../../../context/ui-and-navigation.md).

Nicht funktionierende Scheinoptionen sind unzulässig.

### Bewegungsreduzierung

Die Unterstützung reduzierter Bewegung ist weiterhin eine Projektanforderung.

Dass das ausgewählte Einstellungs-Mockup keinen eigenen Schalter dafür darstellt, hebt diese Anforderung nicht auf.

Die technische Umsetzung muss die zugehörigen Anforderungen unter:

`docs/context/accessibility-and-performance.md`

berücksichtigen.

### Nicht verbindliche Details

- Beispielhafte Lautstärkewerte
- Vorausgewählte Grafikqualität
- Exakte Darstellung der Schieberegler
- Konkrete Fenstermaße
- Weitere nicht beschlossene Grafikeinstellungen

Zusätzliche Funktionen wie V-Sync, Controller-Konfiguration oder individuelle Schattenoptionen werden nicht allein aufgrund früherer Entwürfe implementiert.

---

## 10. Weltinteraktionsfenster

### Referenz

`ui-world-interaction-dialog.png`

### Zweck

Dieses Mockup definiert eine wiederverwendbare Dialogkomponente für die interaktiven Weltobjekte.

Die Komponente kann unter anderem verwendet werden für:

- Wegschild
- Runenschmiede
- Magischen Garten

### Verbindliche Gestaltung

- Zentrales Dialogfenster
- Dunkler Indigo-Hintergrund
- Dekorativer Goldrahmen
- Austauschbares Bereichssymbol
- Vorschaubild links
- Titel und Untertitel rechts
- Beschreibungstext
- Gut erkennbare Schaltflächen
- Schließen-Symbol oben rechts

### Dynamische Inhalte

Die angezeigten Inhalte hängen vom interaktiven Objekt ab.

Austauschbar sind:

- Titel
- Untertitel
- Beschreibung
- Bereichssymbol
- Vorschaubild
- Verfügbare weiterführende Aktion

### Placeholder-Texte

Die Referenz verwendet bewusst generische Texte.

**Titel:**

`Titel des Ortes`

**Untertitel:**

`Kurze Beschreibung des Themenbereichs`

**Beschreibung:**

`Hier erscheint eine kurze Einführung in den ausgewählten Bereich. Der Inhalt wird abhängig vom interaktiven Objekt dynamisch angezeigt.`

`Weitere Informationen können über die entsprechende Schaltfläche aufgerufen werden.`

Diese Texte dienen ausschließlich als Platzhalter für das Design.

Sie dürfen nicht als finale Portfolioinhalte veröffentlicht werden.

### Vorschaubild

Das Bildfeld dient zunächst als allgemeiner Platzhalter.

Die konkreten Vorschaubilder für Wegschild, Runenschmiede und Garten werden später separat erstellt beziehungsweise ausgewählt.

Die Bilder müssen:

- zur jeweiligen Interaktion passen,
- das gemeinsame Designsystem verwenden,
- technisch optimiert sein,
- hinsichtlich ihrer Nutzungsrechte geprüft werden.

Das aktuell dargestellte Schlossmotiv ist kein verpflichtendes Vorschaubild für alle Interaktionen.

### Schaltflächen

**Schließen**

Schließt das aktuelle Dialogfenster.

**Mehr erfahren**

Öffnet weiterführende Informationen, sofern diese für den entsprechenden Bereich tatsächlich vorhanden sind.

Die Schaltfläche darf nicht ohne funktionierendes Ziel angezeigt werden.

### Schließverhalten

Das Fenster besitzt:

- ein X oben rechts,
- eine Schließen-Schaltfläche.

Das Schließverhalten folgt den bestätigten Gameplay-Regeln.

Esc darf nicht automatisch als Schließfunktion für das Portfolio eingeführt werden.

### Wiederverwendbarkeit

Die drei Hotspots sollen möglichst dieselbe Dialogkomponente verwenden.

Unterschiede entstehen durch Inhalt, Symbol und Bild, nicht durch vollständig unterschiedliche Dialogimplementierungen.

---

## 11. Trennung zwischen UI und Portfolio

Dieses Verzeichnis enthält die Benutzeroberflächen für:

- Startbildschirm
- Gameplay
- Orientierung
- Einstellungen
- Interaktionen innerhalb der Welt

Die eigentlichen Portfolio-Ansichten werden separat dokumentiert unter:

`docs/design/mockups/portfolio/`

Dort werden unter anderem behandelt:

- Portfolio-Hauptansicht
- RPG-Skilltree
- Berufserfahrung
- Persönliche Projekte
- Kontaktbereich

Beide Bereiche verwenden dieselbe grundlegende Fantasy-Designsprache.

Die Portfolio-Oberfläche muss zusätzlich als eigenständige HTML-Erfahrung funktionieren.

---

## 12. Responsive Design und Barrierefreiheit

Die Mockups wurden überwiegend als Desktopreferenzen erstellt.

Ihre Desktop-Anordnung ist nicht automatisch für mobile Endgeräte verbindlich.

Die tatsächliche Implementierung muss die jeweiligen Anforderungen berücksichtigen.

### Responsive Gestaltung

- Anpassung an unterschiedliche Bildschirmgrößen
- Vermeidung horizontalen Überlaufs
- Geeignete Größe interaktiver Elemente
- Flexible Dialoggrößen
- Lesbare Typografie
- Reduzierte Dekoration auf kleineren Bildschirmen

Die vollständige HTML-Portfolio-Erfahrung muss auf mobilen Geräten bedienbar bleiben.

Die Desktop-3D-Erfahrung darf nicht als Voraussetzung für den Zugriff auf Portfolioinformationen dienen.

### Barrierefreiheit

- Bedienbarkeit per Tastatur
- Verständliche Fokusführung
- Sichtbare Fokuszustände
- Ausreichende Farbkontraste
- Eindeutige Schaltflächenbeschriftungen
- Semantisch geeignete HTML-Elemente
- Keine reine Farbcodierung für wichtige Informationen
- Beachtung von Bewegungsreduzierung
- Sinnvolle Beschriftungen für Symbole und Statusanzeigen

Die verbindlichen Details stehen in:

`docs/context/accessibility-and-performance.md`

---

## 13. Technische Umsetzungsregeln

Die Mockups zeigen das visuelle Ziel und ersetzen keine technische Spezifikation.

KI muss insbesondere:

1. Wiederverwendbare UI-Komponenten erstellen.
2. Inhalte von Darstellung und Interaktionslogik trennen.
3. Responsives Layout berücksichtigen.
4. Tatsächliche Bedienbarkeit sicherstellen.
5. Nicht beschlossene Spielfunktionen vermeiden.
6. UI-Zustände aus echten Anwendungsdaten ableiten.
7. Tastatur- und Mausbedienung berücksichtigen.
8. Dekorative Effekte kontrolliert einsetzen.
9. Grafikqualität und Geräteleistung berücksichtigen.
10. Die bestehenden Projektkonventionen einhalten.

Die Umsetzung muss schrittweise überprüfbar bleiben.

Bilddateien dürfen nicht einfach als vollständige nicht-interaktive Benutzeroberflächen eingebunden werden.

Interaktive Elemente müssen als echte bedienbare UI-Komponenten umgesetzt werden.

---

## 14. Umgang mit widersprüchlichen Mockups

Unterschiedliche Bilder können teilweise dieselben UI-Elemente enthalten.

Bei Abweichungen gilt:

1. Bestätigte Produktanforderungen haben Vorrang.
2. Die jeweils zuständige Detailreferenz definiert die konkrete Gestaltung.
3. Das Ingame-HUD definiert die grundsätzliche Positionierung.
4. Die Minimap-Referenz definiert den Kartenstil.
5. Quest-Tracker-Referenzen definieren ihre jeweiligen Zustände.
6. Das Einstellungsmenü definiert das visuelle Konzept der Einstellungen.
7. Das Weltinteraktionsfenster definiert die wiederverwendbare Dialoggestaltung.

Illustrative Abweichungen dürfen keine neuen Funktionen oder technischen Anforderungen begründen.

### Beispiele

- Ein im Bild dargestellter Hotkey ist nicht automatisch verbindlich.
- Ein UI-Element ohne dokumentierte Funktion ist keine bestätigte Spielmechanik.
- Ein dekorativer HP-Balken begründet kein Kampfsystem.
- Ein Screenshot ist keine pixelgenaue responsive Layoutvorgabe.
- Eine gezeigte Schaltfläche ohne beschlossenes Ziel darf nicht als funktionierende Funktion ausgegeben werden.

Bei relevanten Unklarheiten muss vor der endgültigen Umsetzung nachgefragt werden.

---

## 15. Zukünftige Erweiterungen

Neue UI-Mockups können später ergänzt werden, wenn tatsächlich ein zusätzlicher Designbedarf entsteht.

Dazu können beispielsweise gehören:

- Weitere responsive Zustände
- Zusätzliche Dialogvarianten
- Lade- oder Übergangszustände
- Fehler- und Fallback-Ansichten
- Weitere ausdrücklich bestätigte UI-Funktionen

Diese Punkte sind keine automatisch beschlossenen Anforderungen.

Neue Mockups werden erst nach ausdrücklicher Auswahl beziehungsweise Freigabe verbindlich.

Änderungen an dieser README erfolgen nach den Zustimmungsregeln in `AGENTS.md`.

---

## 16. Zusammengehörige Dokumentation

Für die Implementierung sind insbesondere relevant:

- `AGENTS.md`
- `docs/context/README.md`
- `docs/context/project.md`
- `docs/context/gameplay-and-interactions.md`
- `docs/context/world-and-design.md`
- `docs/context/portfolio-and-content.md`
- `docs/context/accessibility-and-performance.md`
- `docs/context/privacy-security-and-licenses.md`
- `docs/design/mockups/character/README.md`
- `docs/design/mockups/world/README.md`
- `docs/development/roadmap.md`
- `docs/development/acceptance-criteria.md`

Diese README konkretisiert ausschließlich die visuellen UI-Referenzen.

Sie ersetzt keine zentralen Produkt-, Gameplay-, Datenschutz- oder Architekturentscheidungen.

Frühere verworfene Entwürfe und nicht im Projekt vorhandene Mockups sind keine gültigen Referenzen.
## Konsolidierte Zuständigkeit – 16.10.2026

Diese README erklärt die Bildgestaltung. Maßgebliche Funktionsregeln: [UI und Navigation](../../../context/ui-and-navigation.md), [Gameplay](../../../context/gameplay-and-interactions.md), [Zugänglichkeit/Performance](../../../context/accessibility-and-performance.md). Alle sieben UI-PNGs sind verbindlich freigegeben.

Minimap-Marker folgt auch innerhalb des Turms der echten Position und Ausrichtung auf der Außenkarte; nicht am Turmsymbol fixieren, keine separate Innenraumkarte. Aufgaben zählen bei erfolgreicher Interaktion/Inhaltsöffnung, nicht beim Vorbeilaufen; B zählt für Kristall. „Mehr erfahren“ führt ohne Teleport zur passenden Portfolio-Unterseite. Andere Weltobjekte nutzen keine automatische Kristallpositionierung. Keine widersprechenden Regeln allein aus Illustrationen ableiten.
