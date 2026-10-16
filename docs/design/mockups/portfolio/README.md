# Portfolio Mockups – Design & Implementation Reference

## 1. Purpose

Dieses Verzeichnis enthält die freigegebenen visuellen Referenzen für das Portfolio-Interface von **The Arcane Tower – Wizard RPG Portfolio**.

Die Mockups dienen als Grundlage für die spätere Implementierung durch KI.

Sie definieren insbesondere:

- Die visuelle Identität des Portfolios
- Die Navigationsstruktur und Hierarchie
- Die grundlegenden Seitenlayouts
- Die Gestaltung wiederverwendbarer UI-Komponenten
- Die Interaktion zwischen Übersichts- und Detailseiten
- Scrollverhalten, Pagination und responsive Layouts
- Die mobile Navigation
- Die Darstellung von Fähigkeiten und beruflichen Erfahrungen
- Die Erweiterbarkeit von Projekten und Inhalten

**Wichtig:** Die Mockups sind visuelle Entwurfsreferenzen, keine vollständigen technischen Spezifikationen und keine verbindliche Quelle für personenbezogene oder berufliche Angaben.

Die Kontextdateien unter `docs/context/` und die übergeordneten Projektanforderungen müssen bei der Implementierung ebenfalls berücksichtigt werden.

Bei Widersprüchen zwischen Mockup-Darstellung und ausdrücklich dokumentierten Anforderungen gelten die bestätigten Anforderungen.

---

## 2. Mockup Inventory

Alle folgenden Mockups befinden sich in diesem Verzeichnis.

| Datei | Zweck |
|---|---|
| `portfolio-main-overview.png` | Allgemeine Profilübersicht und Recruiter-Schnelleinstieg |
| `portfolio-about-interests.png` | Übersicht der persönlichen Interessen |
| `portfolio-interest-detail.png` | Wiederverwendbare Detailseite für ein einzelnes Interesse |
| `portfolio-skilltree-overview.png` | Übersicht der drei Skilltree-Bereiche |
| `portfolio-skilltree-technical-skills.png` | Technische Fähigkeiten mit Erfahrungsleisten |
| `portfolio-skilltree-tools-and-methods.png` | Werkzeuge, Methoden und KI-gestützte Entwicklung |
| `portfolio-skilltree-career-progression.png` | Beruflicher Werdegang als Zeitstrahl |
| `portfolio-projects-overview.png` | Erweiterbare Projektgalerie mit Pagination |
| `portfolio-project-detail.png` | Wiederverwendbare Projektdetailseite |
| `portfolio-contact.png` | Direkte Kontaktmöglichkeiten und Profile |
| `portfolio-responsive-mobile.png` | Mobile Layouts, Navigation und responsive UI-Patterns |

Die elf PNG-Dateien stellen die freigegebenen Designreferenzen dar.

### Implementation principles

- Keine zusätzlichen Portfolio-Bereiche erfinden.
- Keine in Mockups zufällig dargestellten Funktionen ungeprüft implementieren.
- Keine Mockup-Bilder als vollständige, nicht interaktive Benutzeroberfläche verwenden.
- Wiederverwendbare UI-Komponenten entwickeln.
- Inhalte und Präsentationslogik voneinander trennen.
- Das Portfolio muss für zukünftige Inhalte erweiterbar bleiben.

---

## 3. Visual Design Language

Das Portfolio verwendet denselben einheitlichen Fantasy-RPG-Stil wie die Welt, der Magierturm und der Magier.

### Visual characteristics

- Klassisches RPG-Menüdesign
- Pixelartige Fantasy-Grafik
- Dunkelblaue und indigofarbene Oberflächen
- Goldene Rahmen und dekorative Verzierungen
- Cyanfarbene Hervorhebungen
- Magische Symbole und Ornamente
- Fantasy-inspirierte Typografie
- Leuchtende Interaktionselemente
- Hochwertige Pixel-Art-Illustrationen
- Atmosphärische Hintergründe
- Konsistente Abstände, Größen und Ausrichtungen

### Colors

Die Mockups definieren eine visuelle Farbrichtung, jedoch noch keine verbindlichen Farbwerte.

Die tatsächlichen Farben sollen zentral über wiederverwendbare Design-Tokens verwaltet werden.

### Typography

Eine passende Fantasy-Typografie soll für Überschriften verwendet werden.

Fließtexte, Beschreibungen und Navigationspunkte müssen auch bei kleinen Bildschirmgrößen gut lesbar bleiben.

Dekorative Typografie darf Lesbarkeit und Barrierefreiheit nicht beeinträchtigen.

### Icons

**Alle Icons in den Mockups gelten grundsätzlich als austauschbare Platzhalter.**

Aus den Abbildungen ergibt sich keine Verpflichtung, genau dieselben Icons oder Logos zu verwenden.

Verbindlich sind:

- Die konsistente Positionierung
- Die visuelle Hierarchie
- Die Bedeutung und Funktion der Elemente
- Die einheitliche Icon-Gestaltung
- Die Hervorhebung aktiver Zustände

Icons und zugehörige Inhalte müssen unabhängig voneinander austauschbar sein.

Für identische Navigationseinträge muss innerhalb des Portfolios dasselbe Icon verwendet werden.

Insbesondere dürfen die Icons von `About Me`, `Skilltree`, `Projects` und `Contact` nicht zwischen verschiedenen Portfolioseiten wechseln.

Ebenso müssen Unterpunkte bei wiederholter Darstellung konsistent bleiben.

Wenn mehrere Navigationsbereiche gleichzeitig ausgeklappt sind, müssen ihre Icons und Verbindungslinien weiterhin einheitlich und verständlich wirken.

Markenlogos dürfen nur bei sachlich korrekter Zuordnung und unter Berücksichtigung ihrer Lizenz- und Nutzungsbedingungen verwendet werden.

---

## 4. Portfolio Information Architecture

Das Portfolio besitzt vier Hauptbereiche.

```text
Portfolio
├── About Me
│   ├── General
│   └── Interests
│       ├── Gaming
│       ├── Technology
│       ├── Anime
│       ├── Fitness
│       ├── Internet Culture
│       └── Neapolitan Pizza
│
├── Skilltree
│   ├── Overview
│   ├── Technical Skills
│   ├── Tools & Methods
│   └── Career Progression
│
├── Projects
│   ├── Overview
│   └── Project Details
│       └── The Arcane Tower
│
└── Contact
```

Die Navigation muss drei hierarchische Ebenen unterstützen.

Die dritte Ebene wird insbesondere für die einzelnen Interessen benötigt.

### Navigation behavior

- Desktop: dauerhaft sichtbare linke Seitenleiste.
- Mobile: Navigation über ein einblendbares Seitenmenü.
- Hauptbereiche können auf- und zugeklappt werden, soweit Unterpunkte vorhanden sind.
- Aktive Navigationspunkte werden cyanfarben hervorgehoben.
- Der aktuelle Menüpunkt muss eindeutig erkennbar sein.
- Unterpunkte dürfen unabhängig vom Inhalt korrekt auf- und zugeklappt werden.
- Direkte Navigation zu Unterseiten muss unterstützt werden.
- Die Navigation muss per Tastatur und Touch bedienbar sein.
- Wechsel zwischen Seiten dürfen keine unnötigen vollständigen Neuladevorgänge auslösen.

### Active navigation state

Der aktive Menüpunkt soll unabhängig vom jeweiligen Mockup automatisch anhand der aktuellen Portfolioansicht bestimmt werden.

Die Navigation darf nicht lediglich als statisches Bild umgesetzt werden.

---

## 5. Quick Navigation

Die zusätzliche Quick Navigation wird **ausschließlich auf der General-Seite** verwendet.

Referenz:

`portfolio-main-overview.png`

Sie dient als schneller Einstieg für Recruiter und andere Besucher.

Quick Navigation beinhaltet:

- About Me
- Skilltree
- Projects
- Contact

Auf den anderen Portfolioseiten entfällt die Quick Navigation vollständig.

Die dauerhaft sichtbare Desktop-Navigation beziehungsweise das mobile Navigationsmenü übernehmen dort diese Funktion.

Die Quick Navigation darf nicht automatisch auf andere Ansichten übertragen werden.

---

## 6. General / Main Overview

Referenz:

`portfolio-main-overview.png`

Die General-Seite ist die zentrale Profilübersicht.

Sie soll die wichtigsten Informationen über die Person und das Portfolio kompakt zusammenfassen.

### Main sections

- Charakterprofil und kurze persönliche Informationen
- About Me
- Core Skills
- Experience
- Current Focus
- Currently Exploring
- Quick Navigation

### Recruiter-focused layout

Die Seite soll innerhalb kurzer Zeit einen Überblick ermöglichen über:

- Beruflichen Hintergrund
- Technische Schwerpunkte
- Berufliche Entwicklung
- Persönliche Interessen
- Aktuelle Themen und Lernbereiche
- Weitere Portfolioabschnitte

Die Bereiche `Core Skills` und `Experience` bleiben auf der General-Seite sichtbar, obwohl `Experience` kein eigenständiger Hauptnavigationspunkt mehr ist.

Die vollständigen Informationen zur beruflichen Entwicklung befinden sich unter `Skilltree → Career Progression`.

### Character presentation

Das Charakterbild ist eine visuelle RPG-Repräsentation.

Fantasy-Titel, Rollenbezeichnungen, Verfügbarkeitsangaben und Zitate aus dem Mockup sind nicht automatisch verbindliche personenbezogene Informationen.

---

## 7. About Me – Interests

Referenz:

`portfolio-about-interests.png`

Die Interests-Übersicht enthält sechs bestätigte Interessenkategorien:

1. Gaming
2. Technology
3. Anime
4. Fitness
5. Internet Culture
6. Neapolitan Pizza

### Overview layout

- Desktop: dreispaltiges Kartenraster mit zwei Reihen.
- Jede Karte besitzt ein Bild, ein Icon, einen Titel und eine kurze Beschreibung.
- Karten führen zur jeweiligen Detailseite.
- Die Karten sollen einheitliche Größen und Proportionen verwenden.
- Auf mobilen Geräten werden die Karten in einer Spalte angeordnet.
- Auf mittleren Bildschirmgrößen kann ein zweispaltiges Layout verwendet werden.

Die Kartenbilder, Icons und Beschreibungen müssen austauschbar sein.

Die sechs Interessenkategorien selbst sind als aktuelle Inhaltsstruktur bestätigt.

---

## 8. Interest Detail

Referenz:

`portfolio-interest-detail.png`

Die Detailseite ist eine wiederverwendbare Vorlage für sämtliche Interessen.

Das vorhandene Mockup verwendet Gaming als Beispiel.

### Possible content modules

- Titel und Kurzbeschreibung
- Einleitender Text
- Großes Themenbild
- Unterkategorien
- Favoriten
- Bildergalerien
- Persönliche Highlights
- Plattformen, Werkzeuge oder andere themenabhängige Informationen
- Zusätzliche Fakten

Nicht jedes Interesse benötigt dieselben Inhaltsmodule.

Beispielsweise sind `Favorite Games` und `Platforms` ausschließlich für Gaming sinnvoll.

Andere Interessenkategorien können eigene Module erhalten.

### Scrolling

Die Detailseite muss vertikal scrollbar sein.

Der Scrollzustand soll visuell verständlich sein.

Die Navigation bleibt auf Desktopgeräten sichtbar.

Längere Inhalte dürfen nicht abgeschnitten oder zwanghaft verkleinert werden.

### Content verification

Abgebildete Lieblingsspiele, Plattformen, Genres und persönliche Beschreibungen sind Beispielinhalte.

Sie dürfen nicht ungeprüft als bestätigte persönliche Vorlieben veröffentlicht werden.

---

## 9. Skilltree – Overview

Referenz:

`portfolio-skilltree-overview.png`

Der Skilltree kombiniert technische Fähigkeiten, Werkzeuge, Methoden und berufliche Erfahrung.

Er besitzt drei fachliche Bereiche:

- Technical Skills
- Tools & Methods
- Career Progression

Die Overview-Seite zeigt einen kompakten Einstieg in diese Bereiche.

Jeder Bereich verweist auf seine ausführliche Unterseite.

### Layout

Die Übersicht soll nicht mit sämtlichen Detailinformationen überladen werden.

Sie verwendet strukturierte Vorschaukarten.

Auf Desktopgeräten können Karten nebeneinander angeordnet werden.

Auf mobilen Geräten wechseln sie in ein einspaltiges Layout.

Die Darstellung muss bei zunehmendem Inhalt erweiterbar bleiben.

---

## 10. Skilltree – Technical Skills

Referenz:

`portfolio-skilltree-technical-skills.png`

Dieser Bereich präsentiert tatsächliche technische Kompetenzen.

### Layout

Die Fähigkeiten werden in fachlichen Kategorien gruppiert.

Das Mockup zeigt beispielhaft:

- Programmiersprachen
- Frameworks & Libraries
- Frontend / UI
- Backend & Data

Diese Kategorien sowie ihre konkreten Skill-Einträge können anhand bestätigter tatsächlicher Kompetenzen angepasst werden.

### Experience bars

Alle technischen Fähigkeiten werden mit **durchgehenden Erfahrungsleisten** dargestellt.

Die Leisten enthalten:

- Keine sichtbaren Prozentzahlen
- Keine Stufenpunkte
- Keine Segmentunterteilungen
- Keine dekorativen Zwischenmarkierungen

Lediglich die beiden Enden werden sichtbar beschriftet:

- Anfänger
- Experte

### Internal four-level model

Das interne Bewertungsmodell verwendet vier Stufen:

| Stufe | Bezeichnung | Technische Füllung |
|---|---|---|
| 1 | Anfänger | 25 % |
| 2 | Grundwissen | 50 % |
| 3 | Fortgeschritten | 75 % |
| 4 | Experte | 100 % |

Die Füllwerte dienen ausschließlich der grafischen Darstellung.

Sie sind keine objektiv gemessenen Kompetenzwerte.

Das gewählte Level kann optional als zugänglicher Text oder Tooltip bereitgestellt werden.

Die Skillleisten selbst bleiben visuell durchgehend.

### Data model

Jeder Skill soll mindestens folgende Informationen unterstützen:

- Eindeutige ID
- Name
- Kategorie
- Icon-Referenz
- Erfahrungsstufe
- Optionale Beschreibung
- Optionale relevante Erfahrung

Die Daten müssen unabhängig von der Darstellung bearbeitbar sein.

### Verification requirement

Alle Skillnamen und Erfahrungsstufen müssen vor Veröffentlichung anhand tatsächlicher Kenntnisse geprüft werden.

Die in den Mockups dargestellten Werte und Technologien gelten nicht automatisch als bestätigt.

---

## 11. Skilltree – Tools & Methods

Referenz:

`portfolio-skilltree-tools-and-methods.png`

Dieser Bereich beschreibt Werkzeuge und Arbeitsweisen.

### Confirmed layout categories

- Development Tools
- Collaboration & Project Management
- Methods & Workflow
- AI-Assisted Development

### Presentation

Werkzeuge und Methoden werden als Karten dargestellt.

Jede Karte kann enthalten:

- Icon oder Logo
- Name
- Kurze Beschreibung

Für diesen Bereich werden grundsätzlich keine Erfahrungsleisten benötigt.

### AI-Assisted Development

Die Arbeit mit KI-Tools erhält einen eigenen Bereich.

Dort können tatsächlich verwendete KI-Werkzeuge und KI-gestützte Entwicklungsprozesse beschrieben werden.

Beispielhafte Themen:

- KI-gestützte Unterstützung bei der Entwicklung
- Analyse und Erklärung von Code
- Unterstützung bei der Problemlösung
- Ideenfindung und Prototyping
- Refactoring und Dokumentation

Konkrete Tools und Nutzungsszenarien dürfen erst nach Bestätigung als persönliche Erfahrung ausgewiesen werden.

### Placeholder rules

Alle dargestellten Toolnamen, Logos, Icons und Beschreibungen sind austauschbar.

Die Abbildung eines Tools im Mockup ist kein Nachweis dafür, dass dieses Tool tatsächlich verwendet wird.

---

## 12. Skilltree – Career Progression

Referenz:

`portfolio-skilltree-career-progression.png`

Die Career Progression ersetzt den früher eigenständigen Experience-Bereich.

Sie zeigt den beruflichen Werdegang in Form eines RPG-inspirierten Zeitstrahls.

### Confirmed stages

1. Vor Ausbildung
2. Während Ausbildung
3. Vollzeit als Entwickler

### Timeline design

- Desktop: horizontaler Zeitstrahl mit drei Stationen.
- Verbindungen zwischen den Stationen.
- Individuelle Icons und kurze Beschreibungen.
- Optional zusätzliche Details je Station.
- Mobile: vertikale Timeline oder entsprechend angepasste, untereinander angeordnete Stationen.

Die Reihenfolge der beruflichen Entwicklung muss erhalten bleiben.

### Data verification

Im Mockup dargestellte Datumsangaben sind nicht verbindlich.

Vor Veröffentlichung müssen sämtliche Zeiträume und biografischen Angaben bestätigt werden.

Die Darstellung darf keine erfundenen Arbeitgeber, Verantwortlichkeiten oder Projekte enthalten.

---

## 13. Projects – Overview

Referenz:

`portfolio-projects-overview.png`

Die Projects-Overview dient als zentraler Einstieg in alle persönlichen Projekte.

Aktuell existiert ein bestätigtes persönliches Portfolio-Projekt:

**The Arcane Tower – Wizard RPG Portfolio**

Die Architektur muss zukünftige Projekte unterstützen.

### Project grid

- Desktop: drei Spalten.
- Mobile: eine Spalte.
- Tablet: abhängig vom verfügbaren Platz ein oder zwei Spalten.
- Maximal sechs Projektkarten pro Seite.

### Pagination

Die Projektübersicht verwendet eine seitenbasierte Pagination.

Regeln:

- Maximal sechs tatsächliche Projekte pro Seite.
- Projekt 1–6 auf Seite 1.
- Projekt 7–12 auf Seite 2.
- Projekt 13–18 auf Seite 3.
- Die Gesamtseitenzahl wird dynamisch aus der Anzahl tatsächlicher Projekte ermittelt.
- Navigation vorwärts und rückwärts.
- Keine Navigation außerhalb vorhandener Seiten.
- Aktuelle Seite wird sichtbar hervorgehoben.
- Auch per Tastatur bedienbar.

Die im Mockup dargestellte Seitenanzahl ist nur ein Beispiel.

### Future project placeholders

Leere Projektplätze können als dekorative `Coming Soon`-Karten dargestellt werden.

Diese dürfen nicht den Eindruck erwecken, dass konkrete weitere Projekte bereits existieren oder fest geplant sind.

Nicht vorhandene Projekte dürfen keine funktionslosen `Mehr erfahren`-Links vortäuschen.

Placeholder-Karten sind visuell unterscheidbar und nicht als echte Projekte in der Pagination zu zählen.

### Scrolling

Der Projektbereich bleibt vertikal scrollbar, falls Karten oder Inhalte den sichtbaren Bereich überschreiten.

Die Pagination befindet sich am Ende der Projektliste.

### Project navigation

Ein tatsächliches Projekt öffnet seine individuelle Detailseite.

Die Navigation und Seitenstruktur müssen später dynamisch erweitert werden können.

---

## 14. Projects – Detail

Referenz:

`portfolio-project-detail.png`

Die Projektdetailseite ist eine wiederverwendbare Vorlage.

Aktuelles Beispiel:

**The Arcane Tower – Wizard RPG Portfolio**

### Content modules

- Projekttitel
- Kurzbeschreibung
- Projektbild oder Galerie
- Status
- Zeitraum
- Eigene Rolle
- Verwendete Technologien
- Ausführliche Projektbeschreibung
- Wichtige Features
- Technische Besonderheiten
- Herausforderungen und Erkenntnisse
- Weiterführende Links
- Zusätzliche Screenshots

Die Inhaltsmodule können abhängig vom Projekt ein- oder ausgeblendet werden.

### Links

Unterstützte Linktypen können sein:

- Live Demo
- GitHub Repository
- Dokumentation

Ein Link wird nur als aktiv dargestellt, wenn ein gültiges und tatsächlich verfügbares Ziel existiert.

Ist das Repository privat, wird beispielsweise angezeigt:

**Quellcode derzeit privat**

Dies gilt insbesondere für The Arcane Tower, solange kein öffentlich zugängliches Repository vorhanden ist.

Ein öffentliches GitHub-Profil darf unabhängig davon verlinkt werden.

### Images and videos

Das Titelbild kann ein Projektbild, Screenshot oder Vorschaumedium sein.

Ein Play-Button darf nur angezeigt werden, wenn tatsächlich ein abspielbares Video vorhanden ist.

Das Mockup allein begründet keine Videofunktion.

### Scrolling

Die Detailseite muss vertikal scrollbar sein.

Bildergalerien können zusätzlich über eigene, klar erkennbare Bedienelemente navigiert werden.

Die mobile Ansicht stapelt Inhaltsbereiche untereinander.

---

## 15. Contact

Referenz:

`portfolio-contact.png`

Die Contact-Seite verwendet ausschließlich direkte Kontaktmöglichkeiten.

**Es wird kein Kontaktformular implementiert.**

### Contact channels

Vorgesehen sind:

- E-Mail
- GitHub
- Optional LinkedIn, sofern ein bestätigtes öffentliches Profil angegeben wird

### Layout

Die Seite enthält:

- Überschrift und Einleitung
- Atmosphärisches Fantasy-Bild
- Kontaktkarten
- Optional Verfügbarkeitsinformation
- Optional Interessengebiete für beruflichen Austausch

### Contact behavior

- E-Mail öffnet das lokale E-Mail-Programm über einen geeigneten Link.
- Profilkarten verweisen auf bestätigte öffentliche Profile.
- Kontaktinformationen können bei Bedarf kopiert werden.
- Externe Links sind erkennbar.

Es dürfen keine erfundenen Kontaktadressen oder Profile verwendet werden.

Verfügbarkeitsangaben müssen vor Veröffentlichung bestätigt werden.

---

## 16. Responsive Design

Referenz:

`portfolio-responsive-mobile.png`

Die mobile Gestaltung ist Bestandteil der funktionalen Anforderungen und darf nicht lediglich durch eine verkleinerte Desktopoberfläche umgesetzt werden.

### 16.1 Mobile header

Die mobile Kopfzeile verwendet diese feste Reihenfolge:

**Links:** Navigationsmenü-Icon

**Mitte:** Projektlogo und „The Arcane Tower“

**Rechts:** Sprachumschaltung DE / EN

Das Logo und der Projekttitel sollen als gemeinsame Einheit mittig angeordnet werden.

Die Sprachumschaltung darf nicht in das Navigationsmenü verschoben werden.

Bei sehr kleinen Breiten darf die Typografie verkleinert oder eine kompaktere Darstellung verwendet werden, ohne dass sich die grundsätzliche Reihenfolge ändert.

### 16.2 Mobile navigation

Die linke Desktop-Seitenleiste wird mobil durch ein Off-Canvas-Menü ersetzt.

Verhalten:

- Öffnen über das Menü-Icon oben links.
- Einblenden über die linke Bildschirmseite.
- Zugriff auf sämtliche Haupt- und Unterpunkte.
- Dritte Navigationsebene für Interessen.
- Aktiven Menüpunkt deutlich markieren.
- Schließen über eine gut erreichbare Schaltfläche.
- Schließen über geeignete Interaktionen außerhalb des Menüs.
- Fokussteuerung und Tastaturbedienung berücksichtigen.
- Hintergrund während geöffnetem Modal-Menü nicht unbeabsichtigt bedienen lassen.

Die Desktop-Navigationsstruktur muss inhaltlich erhalten bleiben.

### 16.3 Mobile bottom navigation

Das Responsive-Mockup zeigt beispielhaft eine untere Navigation.

Diese ist **nicht Bestandteil der bestätigten Pflichtnavigation**.

Die verbindliche mobile Hauptnavigation erfolgt über das Menü oben links.

Eine zusätzliche Bottom Navigation darf nicht allein aufgrund des Mockups implementiert werden.

### 16.4 General page

Die General-Seite wird mobil in vertikale Inhaltsbereiche umgewandelt.

Empfohlene Reihenfolge:

1. Profilüberschrift
2. Charakterprofil
3. About Me
4. Core Skills
5. Experience
6. Current Focus
7. Currently Exploring
8. Quick Navigation

Die Reihenfolge kann bei der technischen Umsetzung angepasst werden, sofern die schnelle Erfassung der wichtigsten Informationen gewährleistet bleibt.

Die Quick Navigation bleibt ausschließlich der General-Seite zugeordnet.

### 16.5 Card layouts

Desktop-Raster werden abhängig von der verfügbaren Breite angepasst.

Prinzip:

- Breite Ansicht: mehrere Spalten.
- Mittlere Ansicht: reduzierte Spaltenzahl.
- Schmale Ansicht: eine Spalte.

Karten dürfen nicht so stark verkleinert werden, dass Texte oder Bedienelemente unlesbar werden.

### 16.6 Skillbars

Skillleisten bleiben mobil horizontal.

Anforderungen:

- Skillname klar sichtbar.
- Erfahrungsleiste ausreichend breit.
- Endbeschriftungen Anfänger und Experte.
- Keine sichtbaren Prozentzahlen.
- Keine Stufenpunkte.
- Intern dasselbe vierstufige Bewertungssystem wie auf Desktop.

Bei Platzproblemen kann die Erfahrungsleiste unter dem Skillnamen stehen.

### 16.7 Career timeline

Die horizontale Desktop-Timeline kann mobil in eine vertikale Timeline umgewandelt werden.

Die drei Stationen bleiben erhalten.

Zusätzliche Beschreibungen werden unter den jeweiligen Stationen angeordnet.

### 16.8 Project gallery

Projektkarten werden mobil untereinander angezeigt.

Die sechs Projekte pro Seite gelten als Obergrenze auch auf Mobilgeräten.

Die Pagination bleibt vollständig bedienbar.

### 16.9 Detail pages

Interessen- und Projektdetails müssen auch mobil vollständig scrollbar bleiben.

Mehrspaltige Inhaltsbereiche werden gestapelt.

Horizontale Bildgalerien und Karussells erhalten erkennbare Bedienelemente.

### 16.10 Accordions

Akkordeons können auf kleinen Bildschirmen zur Reduzierung visueller Überladung verwendet werden.

Geeignet sind insbesondere:

- Zusätzliche Projektdetails
- Lange Beschreibungen
- Technische Details
- Optionale Inhaltsmodule

Wichtige Inhalte dürfen nicht ohne erkennbare Zugriffsmöglichkeit verborgen werden.

### 16.11 Breakpoints

Die im Responsive-Mockup gezeigten Breakpoints gelten ausschließlich als Beispiele.

Die tatsächlichen Breakpoints müssen anhand der Inhaltsbreite und des Layoutverhaltens bestimmt werden.

Keine starren Gerätegrößen als alleinige Layoutgrundlage verwenden.

### 16.12 Touch interaction

Alle mobilen Bedienelemente müssen ausreichend große Touch-Ziele besitzen.

Hover darf nicht die einzige Möglichkeit zur Darstellung wichtiger Informationen sein.

Gestenbasierte Aktionen benötigen verständliche Alternativen.

---

## 17. Scrolling & Overflow

Längere Portfolioseiten müssen vertikal scrollbar sein.

Dies betrifft insbesondere:

- Interest Detail
- Technical Skills
- Tools & Methods
- Career Progression
- Projects Overview
- Project Detail

Weitere Seiten werden bei Bedarf ebenfalls scrollbar.

### Rules

- Kein Abschneiden wichtiger Informationen.
- Kein erzwungenes Verkleinern umfangreicher Inhalte.
- Scrollposition muss verständlich sein.
- Scrollindikatoren dürfen das Layout nicht überdecken.
- Die Desktop-Navigation soll sichtbar bleiben.
- Mobile Navigation und Header müssen funktional erreichbar bleiben.
- Verschachtelte Scrollbereiche möglichst vermeiden, sofern sie keinen klaren Nutzen besitzen.
- Bei Seitenwechseln sinnvolle Scrollposition herstellen.
- Für lange Inhalte eine barrierearme Navigation ermöglichen.

---

## 18. Placeholder & Content Rules

**Grundregel: Alle Texte, Icons, Logos, Illustrationen, Skillnamen, Skill-Level und beispielhaften Angaben innerhalb der PNG-Mockups gelten zunächst als austauschbare Inhalte.**

Eine Ausnahme bilden ausdrücklich bestätigte strukturelle Vorgaben wie:

- Die vier Portfolio-Hauptbereiche
- Die festgelegten Unterbereiche
- Die sechs Interessenkategorien
- Das vierstufige Skillmodell
- Die drei Career-Progression-Phasen
- Die maximal sechs Projekte pro Projektübersichtsseite
- Die festgelegten responsiven Navigationsregeln

Die Abbildung einer Information allein bestätigt nicht deren Richtigkeit.

### Examples of non-authoritative mockup content

- Berufstitel und Rollenbeschreibungen
- Erfahrungseinstufungen
- Technologien
- Toolnamen
- Skillnamen
- Projektzeiträume
- Kontaktdaten
- URLs
- Verfügbarkeit
- Zitate und Slogans
- Lieblingsspiele
- Persönliche Aussagen
- Projektstatus
- Projektbilder
- Markenlogos

Diese Angaben müssen vor produktiver Verwendung geprüft werden.

### Implementation requirement

Komponenten sollen datengetrieben aufgebaut sein.

Content, Icons und Bildreferenzen dürfen nicht fest in die visuelle Komponente eingebaut werden.

Die Darstellung muss auch dann korrekt funktionieren, wenn Inhalte ergänzt, entfernt oder geändert werden.

---

## 19. Privacy & Confidentiality

Das Portfolio darf keine vertraulichen Informationen aus dem beruflichen Umfeld veröffentlichen.

Insbesondere sind ohne ausdrückliche Freigabe des Arbeitgebers ausgeschlossen:

- Interner Quellcode
- Interne Screenshots
- Vertrauliche Architekturdetails
- Geschäftskennzahlen
- Nicht öffentliche Unternehmensinformationen
- Identifizierbare interne Projekte
- Personenbezogene Mitarbeiter- oder Kundendaten

Berufliche Kompetenzen, Verantwortlichkeiten und Erfahrungen dürfen nur allgemein und datenschutzkonform beschrieben werden.

Es dürfen keine erfundenen beruflichen Projekte als Referenzen aufgenommen werden.

The Arcane Tower ist das erste bestätigte persönliche Projekt.

---

## 20. Accessibility

Die UI muss nicht nur optisch dem Mockup entsprechen, sondern funktional zugänglich sein.

Anforderungen:

- Semantische HTML-Struktur
- Vollständige Tastaturbedienbarkeit
- Sichtbare Fokuszustände
- Ausreichende Kontraste
- Verständliche Beschriftungen
- Alternativtexte für informative Bilder
- Dekorative Bilder korrekt kennzeichnen
- Zugängliche Menü- und Akkordeonsteuerung
- Sinnvolle Screenreader-Beschriftungen
- Keine ausschließliche Informationsvermittlung über Farben oder Icons
- Unterstützung reduzierter Animationen
- Anpassung bei vergrößerter Schrift
- Keine Überlagerung wichtiger Inhalte durch feste UI-Elemente

Animierte Effekte dürfen nicht die Bedienbarkeit beeinträchtigen.

---

## 21. Performance

Die Mockups zeigen eine aufwendige Fantasy-Oberfläche.

Diese darf nicht zulasten der Benutzbarkeit umgesetzt werden.

### Requirements

- Bilder in geeigneten Formaten und Größen bereitstellen.
- Responsive Images verwenden.
- Nicht sofort benötigte Inhalte nachladen.
- Animationen sparsam einsetzen.
- Wiederverwendbare Komponenten bevorzugen.
- Keine unnötig großen Hintergrundbilder laden.
- Layoutverschiebungen vermeiden.
- Mobilgeräte mit geringerer Leistung berücksichtigen.
- Gute Lesbarkeit auch bei reduzierten visuellen Effekten sicherstellen.

Dekorative Effekte dürfen bei schwächeren Geräten vereinfacht werden, ohne wichtige Inhalte zu entfernen.

---

## 22. Localization

Das Portfolio unterstützt Deutsch und Englisch.

Die bestehende Projektarchitektur mit Sprachpräfixen muss erhalten bleiben:

- `/de-DE/`
- `/en-EN/`

Die Sprachumschaltung muss auf Desktop und Mobile erreichbar sein.

Texte dürfen nicht ausschließlich in deutscher oder englischer Sprache fest in Komponenten hinterlegt werden.

Die Übersetzungen sollen zentral verwaltet werden.

Bei einem Sprachwechsel bleibt dieselbe Portfolio-Inhalts-ID in der anderen Sprache erhalten. Fehlende Übersetzungen als Fehler/offenen Inhalt behandeln, nicht still auf die Startseite wechseln.

---

## 23. Reusable Components

Bei der Implementierung sollten insbesondere folgende Komponenten wiederverwendbar sein:

- Portfolio Layout
- Desktop Sidebar
- Mobile Navigation Drawer
- Mobile Header
- Language Switcher
- Navigation Item
- Navigation Group
- Active Navigation Indicator
- Portfolio Page Header
- Fantasy Card
- Interest Card
- Interest Detail Module
- Skill Progress Bar
- Tool Card
- Career Timeline
- Project Card
- Project Gallery
- Project Pagination
- Project Detail Section
- Contact Card
- Accordion
- Scrollable Content Container
- Status Indicator

Die tatsächliche Komponentenstruktur soll sich an der vereinbarten technischen Architektur orientieren.

Keine unnötige Duplizierung von UI-Code.

---

## 24. Implementation Priorities (historische Detailorientierung)

Verbindliche aktuelle Projektphasen: [Roadmap](../../../development/roadmap.md) und [Phasenprompts](../../../../prompts/workflow/README.md). Gemeinsames Layout, Navigation und Daten zuerst; Zugänglichkeit, Responsive-Verhalten und DE/EN von Anfang an berücksichtigen, nicht erst am Ende. Die Bildreihenfolge ist kein eigenständiger Entwicklungsplan.

---

## 25. Definition of Done

Die Portfolio-Implementierung gilt erst dann als ausreichend umgesetzt, wenn:

- Alle bestätigten Navigationsbereiche vorhanden sind.
- Die Hierarchie einschließlich der dritten Ebene funktioniert.
- Alle definierten Seiten erreichbar sind.
- Navigation und aktive Zustände konsistent sind.
- Die Desktop- und Mobile-Layouts funktional umgesetzt sind.
- Die festgelegte mobile Header-Anordnung stimmt.
- Die Quick Navigation ausschließlich auf General erscheint.
- Skillleisten dem festgelegten vierstufigen Modell entsprechen.
- Die Career Progression die drei bestätigten Phasen enthält.
- Projektkarten und Pagination dynamisch funktionieren.
- Keine erfundenen Projekte angezeigt werden.
- Nicht verfügbare Projektlinks korrekt behandelt werden.
- Kein Kontaktformular vorhanden ist.
- Längere Seiten vollständig scrollbar bleiben.
- Icons und Inhalte ohne Layoutänderungen austauschbar sind.
- Deutsche und englische Texte unterstützt werden.
- Die Bedienbarkeit mit Tastatur und Touch gewährleistet ist.
- Keine vertraulichen Unternehmensinformationen veröffentlicht werden.
- Alle veröffentlichten persönlichen und beruflichen Angaben bestätigt sind.

---

## 26. Final Notes for KI

Die PNG-Dateien sind visuelle Referenzen und keine vollständigen Produktanforderungen.

KI muss bei der Entwicklung zwischen drei Arten von Informationen unterscheiden:

**1. Confirmed requirements**

Ausdrücklich vereinbarte Navigation, Interaktion, Layoutregeln und Funktionsanforderungen.

**2. Visual references**

Farbgebung, Proportionen, dekorative Gestaltung und visuelle Beispiele aus den Mockups.

**3. Replaceable placeholders**

Beispieltexte, Bilder, Icons, Technologien, Daten und nicht bestätigte Angaben.

Nicht bestätigte Informationen dürfen nicht als Fakten übernommen werden.

Fehlende Informationen müssen als offene Punkte gekennzeichnet oder nachgefragt werden.

Bei technischen Entscheidungen sind die offiziellen Dokumentationen der verwendeten Technologien maßgeblich.

Keine APIs, Konfigurationen oder Funktionen erfinden.

**Ziel:** Ein konsistentes, erweiterbares, responsives, barrierearmes und wartbares RPG-Portfolio, das der freigegebenen Designsprache entspricht und zugleich tatsächlich bedienbar ist.
## 27. Zentrale Fachquellen – Stand 16.10.2026

Alle elf PNGs sind verbindliche Designreferenzen. Diese README erläutert ihre Layouts und Platzhalter; verbindliche Inhaltsstruktur: [Portfolio und Inhalte](../../../context/portfolio-and-content.md), Oberflächenverhalten: [UI und Navigation](../../../context/ui-and-navigation.md), Welt-Rückkehr: [Gameplay](../../../context/gameplay-and-interactions.md).

Im direkten HTML-Portfolio kein Welt-X, stattdessen interne Navigation und Start-Link. Im Welt-Portfolio bleibt der Einstiegskontext (Kristall/Weltobjekt) erhalten. Quick Navigation nur auf General. Zentrale Daten für General, Skilltree, Schmiede und Garten vermeiden Abweichungen. Bildfreigabe bestätigt keine persönlichen Texte, Daten, Skillwerte oder Kontakte.
