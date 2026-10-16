# Portfolio, Inhalte und Sprache

Stand: 16.10.2026. Inhaltliche Quelle; Layout und Navigation in [ui-and-navigation.md](ui-and-navigation.md).

## Öffentliche Darstellung

Florian Metzger — SAP-Entwickler mit Fokus auf CAP, BTP und ABAP. toom Baumarkt darf genannt werden. Berufszeiträume, Biografie, Kompetenzen, Links und Verfügbarkeit vor Veröffentlichung bestätigen. Keine Angaben aus anderen Gesprächsthemen ungeprüft übernehmen; kein Lebenslauf-Download.

## Aktuelle Informationsarchitektur

| Hauptbereich | Unterseiten / Inhalte |
|---|---|
| About Me | General; Interests mit sechs Detailseiten |
| Skilltree | Overview; Technical Skills; Tools & Methods; Career Progression |
| Projects | Overview; individuelle Projektdetails, zunächst The Arcane Tower |
| Contact | Bestätigte E-Mail-/Profilverknüpfungen, kein Formular |

Die vier Hauptbereiche ersetzen die frühere sechsteilige Hauptnavigation. Technische Fähigkeiten, berufliche Erfahrung und eigene Projekte bleiben fachlich getrennt; Career Progression ist unter Skilltree eingeordnet und kein eigener Hauptpunkt.

General enthält Charakterprofil, About Me, Core Skills, Experience, Current Focus, Currently Exploring und exklusiv Quick Navigation. Fantasyrolle und Mockup-Zitate sind keine bestätigten personenbezogenen Angaben.

Interessen: **Gaming, Technology, Anime, Fitness, Internet Culture, Neapolitan Pizza**. Dieselben sechs Kategorien im Garten. Calisthenics kann in bestätigten Fitness-Inhalten erscheinen. Persönliche Favoriten, Spiele, Plattformen und Aussagen aus PNGs bleiben Beispiele. Detailmodule abhängig vom Interesse; keine Pflicht zu identischen Feldern.

## Skills, Tools und Career

Technical Skills: tatsächliche Fähigkeiten in bestätigten Kategorien. Durchgehende Leisten, keine sichtbaren Prozentzahlen, Segmente oder Stufenpunkte; Endbeschriftungen Anfänger/Experte bzw. Übersetzungen.

| Interne Stufe | Bedeutung | Grafische Füllung |
|---|---|---|
| 1 | Anfänger | 25 % |
| 2 | Grundwissen | 50 % |
| 3 | Fortgeschritten | 75 % |
| 4 | Experte | 100 % |

Füllwerte sind Gestaltung, keine objektive Kompetenzmessung. Persönliche Einstufungen erst bestätigen. Zugänglicher Text beschreibt die bestätigte Stufe; keine frei erfundenen Werte aus Bildbalken ablesen. Ein Skill unterstützt stabile ID, Name, Kategorie, Icon, bestätigte Stufe und optionale Beschreibung/Erfahrung. General/Overview/Schmiede verwenden dieselben Daten.

Tools & Methods: Development Tools, Collaboration & Project Management, Methods & Workflow, AI-Assisted Development. Karten statt Erfahrungsleisten. Tatsächlich genutzte Werkzeuge und Arbeitsweisen vor Veröffentlichung bestätigen; Logos sind kein Nutzungsnachweis.

Career Progression: Vor Ausbildung → Während Ausbildung → Vollzeit als Entwickler. Datumsangaben, Verantwortlichkeiten und zusätzliche Details bestätigen. Keine erfundenen Arbeitgeber oder internen Projektreferenzen. General-Experience und Timeline verwenden dieselbe Datenquelle.

## Eigene Projekte und Kontakt

The Arcane Tower ist das erste bestätigte persönliche Projekt. Galerie erweiterbar, maximal sechs echte Projekte pro Seite; dekorative Coming-Soon-Karten nicht als Projekte zählen und keine konkreten Pläne suggerieren. Projektdetails unterstützen optionale Module zu Idee, Umsetzung, Status, Zeitraum, Rolle, Technologien, Features, Herausforderungen, KI-/Asset-Anteilen und Medien.

Nur tatsächlichen Entwicklungsstand nennen. Kein Video-Play-Button ohne Video, keine aktiven Links ohne verfügbares Ziel. Wegschild/Projektdetail zunächst „Quellcode derzeit privat“. Erst nach tatsächlicher Repository-Veröffentlichung und Entscheidung ersetzen. Öffentliches GitHub-Profil darf unabhängig davon unter Kontakt verlinkt sein. Kontakt: mailto, GitHub, optional bestätigtes LinkedIn; keine erfundenen Adressen oder Verfügbarkeitsangaben.

## Gemeinsame Daten

Lokale strukturierte typisierte Inhalte mit stabilen sprachunabhängigen IDs und getrennten Übersetzungen. Keine React-Abhängigkeit im fachlichen Inhaltsmodell. HTML, Kristall, Schmiede und Garten verwenden dieselben Daten. Inhaltsfreigabe getrennt von Designfreigabe; fehlende Werte als Entwicklungsplatzhalter oder offen führen. Keine erfundenen Daten veröffentlichen.

## Sprachen und Routen

Deutsch mit du, freundlich/professionell; Englisch sinngemäß. Alle UI-Texte, Status-, Fehler-, Steuerungs- und zugänglichen Labels übersetzen.

- `/`: Sprachwahl und beide Einstiege; gespeicherte Sprache vorauswählen, kein erzwungener Redirect.
- `/de-DE/`: Deutsch; `/en-EN/`: Englisch. URL-Schreibweise bleibt ausdrücklich erhalten.
- Direkte URL hat Vorrang vor gespeicherter Sprache.
- Startscreen erlaubt Sprache und Einstellungen, Welt oder direktes vollständiges HTML-Portfolio.
- Sprachwechsel erhält aktive Inhalts-ID und während derselben Sitzung Weltposition/Interaktionskontext.
- URL-Segment `en-EN` intern auf `en` abbilden; geeignete Codes für HTML-lang, hreflang und Formatierung verwenden.

Exakte Unterpfade beim Setup festlegen und mit statischem Export, Deep Links, Reload und Browserhistorie prüfen. Kein unbeabsichtigter Welt-Remount beim Sprachwechsel.
