# The Arcane Tower – Vollständiges Portfolio-Asset-Inventar (Planungsstand)

**Stand:** 17.10.2026 · **Historische Analysebasis:** unveränderte Repository-ZIP `wizard-rpg-portfolio-website-dev(1).zip`, elf PNG-Dateien unter `docs/design/mockups/portfolio/`, `docs/design/README.md`, `docs/design/mockups/portfolio/README.md`, `docs/context/assets.md`, `docs/context/portfolio-and-content.md`, `docs/context/ui-and-navigation.md` und `AGENTS.md`. Der neue Dateinachweis im aktuellen Checkout steht getrennt in [Abschnitt 9](#9-erstes-ausgewähltes-portfolio-asset-paket).

**Status:** Planungsinventar mit inzwischen sieben konkret ausgewählten PNG-Motiven beziehungsweise Designvorlagen gemäß Abschnitt 9, **keine** technisch abgenommene Assetintegration und **keine** Phase-01-Implementierung. Die elf ursprünglichen Portfolio-Mockups bleiben verbindliche Designreferenzen; weitere Inventarkandidaten sind nicht automatisch freigegeben. Original-PNGs bleiben unverändert. Der folgende ZIP-Dateibefund ist historisch, kein aktueller Nachweis eines fehlenden `public/`-Verzeichnisses.

## 0. Leseschlüssel

- **B** = illustratives **Bildmotiv** (KI-generierbares Bitmap, optional als optimierte WebP-/AVIF-Ableitung). Ein Motiv kann mit unterschiedlichen Zuschnitten mehrfach eingesetzt werden.
- **D** = dekoratives Designasset (SVG/CSS, gegebenenfalls aus einer separaten, freigegebenen PNG-Vorlage manuell nachgebaut).
- **C** = echte **HTML-/React-/CSS-Komponente**; kein gerendertes UI-Bild.
- **S** = benötigter Inhalts-/Medienplatz, dessen tatsächlicher Inhalt erst bei der späteren Contentarbeit oder nach echten Projektscreenshots feststeht.
- **P1** = Grundlage für das erste visuelle Shell-Muster in 01.3; **P2** = beim Aufbau der betroffenen Inhaltsseiten; **P3** = nur bei echten Inhalten / vor Endabnahme.
- **Neu** heißt *Kandidat zur Neugenerierung/Beschaffung*, nicht genehmigt. **Wiederverwendung** ist vor weiterer Generierung zu prüfen.

**Dateibefund:** Alle elf Quellen sind PNG-Designreferenzen und keine separat verwendbaren Runtime-Assets; ein `public/`-Verzeichnis existiert im analysierten ZIP-Stand nicht. Ohne weitere Prüfung sind keine individuellen Schriften, SVG-Ornamente, Iconpakete, Kartenillustrationen oder Screenshots als Produktionsdateien nachgewiesen.


### Original-PNGs: Dateiauflösung

Die Maße dienen nur der **Analyse der Designreferenzen**; sie sind keine Vorgabe für die späteren Produktionsassets.

| Datei | Pixel |
|---|---|
| `portfolio-main-overview.png` | 1670 × 942 |
| `portfolio-about-interests.png` | 1669 × 942 |
| `portfolio-interest-detail.png` | 1670 × 942 |
| `portfolio-skilltree-overview.png` | 1672 × 941 |
| `portfolio-skilltree-technical-skills.png` | 1670 × 941 |
| `portfolio-skilltree-tools-and-methods.png` | 1670 × 942 |
| `portfolio-skilltree-career-progression.png` | 1670 × 942 |
| `portfolio-projects-overview.png` | 1448 × 1086 |
| `portfolio-project-detail.png` | 1670 × 942 |
| `portfolio-contact.png` | 1448 × 1086 |
| `portfolio-responsive-mobile.png` | 1536 × 1024 |

## 1. Bildmotive – konsolidierte Kandidatenliste

Diese **18 Kandidaten** bilden ein vollständiges Motiv-Inventar für die in den elf Mockups sichtbaren primären Illustrationsbereiche. Sie sind **keine feste Mindestzahl zu erzeugender Dateien**: Einige Motive können durch genehmigte Zuschnitte, Alternativen oder vorhandene geeignete Assets abgedeckt werden. Zusätzliche Bildergalerien sind in Abschnitt 4 als *variable Medienplätze* erfasst, da ihr Umfang inhaltlich offen ist.

| ID | Motiv / Bildslot | Fundstellen in den PNGs | Vorgesehene Wiederverwendung und Gestaltung | Weg | Prio |
|---|---|---|---|---|---|
| B01 | Nächtliches Turm-/Schloss-Panorama mit Wald, Mond, warmem Licht | Alle Desktop-Mockups als Header; `responsive-mobile` als Stilreferenz | Ein Hauptmotiv mit Desktop-/Mobile-Zuschnitten; mögliches zusätzliches Bild in About/Projekten, sofern Ausschnitt passt | PNG-Bildmotiv erstellt und ausgewählt; technische Aufbereitung offen, siehe Abschnitt 9 | P1 |
| B02 | Magier von hinten mit blauem Kristall vor Turm, Wasserfällen und Laternen | Als Bild unter der linken Sidebar in praktisch allen Desktopansichten; Motiv im Mobile-Sheet | Ein Motiv für Sidebar, optional kleinere Deko-Ausschnitte; **nicht** das ganze Sidebar-Interface rasterisieren | PNG-Bildmotiv mit Katze erstellt und ausgewählt; technische Aufbereitung offen, siehe Abschnitt 9 | P1 |
| B03 | Charakterporträt des Wandering Rune Mage (frontal/halbseitig) | `main-overview` Profilspalte | Eine repräsentative RPG-Illustration im Rahmen; Silhouette/Kleidung mit freigegebenem Character-Design abstimmen | Neu auf Basis Character-Designreferenzen | P2 |
| B04 | Gaming: magischer Gaming-Schreibtisch mit Bildschirm/Controller | `about-interests`, Beispiel `interest-detail` | Für Übersicht und als Detail-Hero verwendbar, wenn ausreichende Auflösung/Bildausschnitt | Neu | P2 |
| B05 | Technology: arkanes Labor/Bibliothek, Monitore und leuchtende Sphäre | `about-interests` | Interesse-Vorschaubild, optional Detail-Hero | Neu | P2 |
| B06 | Anime: gemütliches Fantasy-/Anime-inspiriertes Zimmer, rosa Kirschblüte | `about-interests` | Interesse-Vorschaubild, optional Detail-Hero; keine ungeprüften fremden Serienfiguren | Neu | P2 |
| B07 | Fitness: Training in ruinösem Innenhof bei warmem Abendlicht | `about-interests` | Interesse-Vorschaubild, optional Detail-Hero | Neu | P2 |
| B08 | Internet Culture: bunte Monitor-/Meme-/Community-Szene | `about-interests` | Interesse-Vorschaubild, optional Detail-Hero; keine ungeprüften Memes/Marken nötig | Neu | P2 |
| B09 | Neapolitan Pizza: Pizza vor Steinofen am mediterranen Aussichtspunkt | `about-interests` | Interesse-Vorschaubild, optional Detail-Hero | Neu | P2 |
| B10 | Skilltree-Kachel Technical Skills: Magier am magischen Coding-Arbeitsplatz | `skilltree-overview` | Vorschau; möglicher Zuschnitt für B12, sofern Komposition geeignet | Neu, Wiederverwendung mit B12 prüfen | P2 |
| B11 | Skilltree-Kachel Tools & Methods: magischer Arbeitstisch/Bücher/Artefakte | `skilltree-overview` | Vorschau; ggf. für Tool-Kategorien wiederverwenden | Neu | P2 |
| B12 | Technical-Skills-Banner: offenes magisches Buch, blaue Symbole/Kristall, Bibliothek | `skilltree-technical-skills` | Breites Banner; kann ggf. aus B10 abgeleitet werden, aber nicht voraussetzen | Neu oder wiederverwenden | P2 |
| B13 | Career-Panorama: Magier unterwegs an Wegweiser in weiter Fantasy-Landschaft | `skilltree-career-progression`, Career-Kachel `skilltree-overview` | Ein Motiv für beide Ansichten, mit unterschiedlichen Zuschnitten | Neu | P2 |
| B14 | Career-Station 1: neugieriger Magier/Anfang der Reise, Landschaft | `skilltree-career-progression` links unten | Symbolische Illustrationskarte für „Vor Ausbildung“ – keine Biografiefakten daraus ableiten | Neu / geeigneter Zuschnitt B13 prüfen | P2 |
| B15 | Career-Station 2: Lern-/Entwicklungsarbeitsplatz mit blauem Licht | `skilltree-career-progression` Mitte unten | Symbolisches Studien-/Entwicklungsbild | Neu / geeigneter Zuschnitt B10 prüfen | P2 |
| B16 | Career-Station 3: weiterentwickelter Magier/Turm auf neuer Etappe | `skilltree-career-progression` rechts unten | Symbolische Darstellung „Vollzeit als Entwickler“ | Neu / geeigneter Zuschnitt B01/B13 prüfen | P2 |
| B17 | The Arcane Tower Projektcover/Hero: Fantasy-Turm, Kristall, Magier, Wasserfälle | `projects-overview` echte Projektkarte, `project-detail` Hero, `responsive-mobile` Projektkarten | **Ein** Qualitätsmotiv, daraus Galerie-Karte und großes Hero ableiten; als Konzeptillustration kennzeichnen, nicht als realen App-Screenshot ausgeben | Neu oder bestehendes B01/B02 bei geeigneter Auflösung/Freigabe | P2 |
| B18 | Contact: Blick aus einer magischen Bibliothek/Steinarkade auf Turm und Mondlandschaft, Teleskop | `contact` | Eine breite Contact-Illustration als optischer Auftakt | Neu | P2 |

**Hinweis zur Zahl 18:** Es sind 18 **benannte Motivbedarfe**, nicht 18 technisch zwingend unterschiedliche oder endgültig benötigte Bitmap-Dateien. Die aktuelle Empfehlung lautet: **erst B01, B02 und die Ornamente erproben**, danach die wirklich benötigten übrigen Motive generieren und pro Motiv Wiederverwendung prüfen.


### Technische Kompositionsanforderungen vor der Generierung

| Motivfamilie | Format-/Kompositionsziel (noch ohne fixe Pixelmaße) | Kritische Eigenschaft |
|---|---|---|
| B01 Header | sehr breites Panorama; Motivzentrum nicht durch UI-Bedienelemente verdecken | unterschiedliche Desktopbreiten und mobiler Zuschnitt, ausreichende ruhige Bereiche |
| B02 Sidebar | hochkant, seitliches/unteres Zentrum | brauchbar bei schmaler Sidebar und wechselnder Navigationshöhe |
| B03 Porträt | hochkant oder quadratisch mit Reserven zum Zuschneiden | erkennbares, konsistentes Charakterdesign; sichere Kopffreiheit |
| B04–B09 Interessen | einheitliche breite Kartenbilder mit Motiv im sicheren Zentralbereich | passende Zuschnitte für Detail-Hero; kein Text im Bild |
| B10–B12 Skill-Motive | breite Vorschau-/Bannerformate | Magie und Technik erkennbar, ohne lesbare Fake-Code-/Logotexte |
| B13–B16 Karriere | ein breites Panorama plus drei kleine Stationen-Kacheln | Symbolbilder, keine erfundenen biografischen Fakten |
| B17 Projektcover | hochwertige breite Hero-Komposition, zusätzlich kartenkompatibel | als Illustration beschriftbar, nicht als vermeintlicher Screenshot |
| B18 Kontaktbild | breites Panorama mit klarer Blickführung | Inhalt nicht mit Bedienelementen verschmelzen |

**Bildquellen-Prüfung:** Für jedes tatsächlich erzeugte Motiv ist festzuhalten, ob eine neue Generation benötigt wird oder ein freigegebenes Motiv in anderen Zuschnitten wiederverwendet werden kann. Transparenz ist primär für kleine Ornamente relevant, nicht für die großen Hintergrundbilder.

## 2. Globale Designelemente: SVG / CSS / Fonts / Iconquellen

| ID | Asset/System | Zu sehen bei | Vorgeschlagene Realisierung | Prio |
|---|---|---|---|---|
| D01 | Arkane Kompassrose / Sternkreis (Markenzeichen) | Logo, Seitenüberschriften, Profil und Akzente | **Eine** konsistente SVG-Mastervorlage in definierten Größen, keine separaten generierten Bitmaps pro Stelle | P1 |
| D02 | Goldene Eckornamente und Knoten | Karten, Panelrahmen, Header, Buttons | Wiederverwendbare, skalierbare Eck-/Kanten-SVGs mit CSS-Rahmen; Mindest-/Maximalgrößen testen | P1 |
| D03 | Dünne goldene Trennlinien mit Mittelornament | Überschriften, Kästen, Sidebar, Timeline | CSS-Linie mit kleinem SVG-Mittelstück | P1 |
| D04 | Dezente Runen/Sternchen/arkane Symbole | Hintergrund, Profile, Projektkarten | Kleine handhabbare SVG-Familie bzw. rein dekoratives CSS; sparsam einsetzen | P2 |
| D05 | Cyanfarbener aktiver Rand und Glow | ausgewählte Nav-Items, Buttons, Balken | CSS-Zustände mit separatem sichtbarem Tastaturfokus, `prefers-reduced-motion` beachten | P1 |
| D06 | Indigo-/Blauflächen, Schatten und Gold-/Cyan-/Warmlicht-Farbpalette | überall | zentrale CSS-/Tailwind-Design-Tokens; konkrete Farbwerte erst am Browser gegen Mockups und Kontrast prüfen | P1 |
| D07 | Fantasy-Titelschrift | Hauptüberschriften, Kartenüberschriften | Schriftkandidat anhand echtem DE/EN-Probetext prüfen, lokale Dateien plus Lizenznachweis | P1 |
| D08 | Gut lesbare Text-/UI-Schrift | Body, Menüs, Fließtext, Mobil | zweite Schriftfamilie (oder passende lesbare Variante), auch auf Mobil und bei 200 % Zoom prüfen | P1 |
| D09 | Bedeutungs- und Navigationsicons | Haupt-/Untermenüs, Interessen, Skills, Karriere, Status, Projektkarten | einheitliche SVG-Iconfamilie; feste Zuordnung pro Content-ID, **nicht** pixelgenau aus Mockup übernehmen | P1/P2 |
| D10 | Markenlogos (GitHub, LinkedIn, Tools, ggf. Plattformen) | `contact`, `tools-and-methods`, `interest-detail`, `project-detail` | erst nach bestätigtem Inhalt und Lizenz-/Markenprüfung; zulässige offizielle/geeignete Assets | P3 |
| D11 | Pfeile/Chevrons/Copy/External-Link/Menu/Close | Navigation, Karten, Links, Mobile | funktionale SVG-Icons aus derselben Familie; Screenreader-Beschriftung in HTML | P1 |
| D12 | Dunkle Hintergrundstruktur/Vignette | Sidebar, Panels, Seitengrund | zunächst CSS-Gradienten, gegebenenfalls eine kleine wiederholbare Textur erst bei nachgewiesenem optischem Bedarf | P1 |
| D13 | Visuelle States (Standard, Hover, Aktiv, Focus, Disabled) | alle Komponenten | CSS-Komponentenstates, nicht separate Bilder | P1 |
| D14 | Status-Chips (z. B. In Entwicklung) | Project Detail, Mobile | HTML/CSS, tatsächliche Aussage erst bei Content-Freigabe | P2 |
| D15 | Scroll-/Fortschrittsindikator | lange Details, mobile Beispiele | zugänglicher optionaler CSS/SVG-Indikator; kein Ersatz für natives Scrollen | P2 |
| D16 | Future-Project-Symbolik, Fragezeichen, Zaubertür/Schriftrolle | `projects-overview` dekorative Coming-Soon-Karten | ein konsistentes generisches SVG/CSS-Placeholder-System; **keine** fünf einzeln versprochenen Projekte bebildern | P2 |

**Wichtig:** Bildgenerierung liefert gerenderte Bilder; sie garantiert **keine** saubere, skalierbare SVG-Geometrie, wiederverwendbare CSS-Rahmen oder rechtssichere Markenlogos. Für D01–D16 ist Bildgenerierung höchstens Entwurfs-/Stilhilfe, nicht automatisch das finale technische Format.

Für D01 liegt inzwischen eine ausgewählte PNG-Vorlage vor. Die allgemeine Kategorie **D02** bleibt erhalten und wird durch die konkreten PNG-Untertypen **D02-A bis D02-D** ergänzt; D03–D16 werden nicht umnummeriert. Auswahl und Dateibefund: [Abschnitt 9](#9-erstes-ausgewähltes-portfolio-asset-paket). Die SVG-/CSS-Ziele oben bleiben noch umzusetzende technische Ziele.

## 3. Wiederverwendbare UI-Komponenten – ausdrücklich **keine** Bildassets

| ID | Komponente / Verhalten | Mockup-Verwendung | Kernanforderung |
|---|---|---|---|
| C01 | Globaler Header und Wortmarke | alle | Text ist echtes HTML, Banner B01 Hintergrund; Sprache DE/EN |
| C02 | Desktop-Sidebar | alle Desktopansichten | 3 Ebenen; Hintergrundbild B02 getrennt von Links und aktiven Zuständen |
| C03 | Mobile Header + Drawer | `responsive-mobile` | Menü links, Logo/Titel mittig, Sprache rechts; Fokus, Touch, Schließen |
| C04 | Sprachumschalter | alle | gleicher Inhalt nach Wechsel, kein hardcodierter Text im Bild |
| C05 | Navigationseintrag + Gruppe + Connector | Sidebar, Drawer | unabhängige aufklappbare Gruppen, konsistente Icons, aktive Seite |
| C06 | Fantasy-Panel / Karte / Rahmen | alle | flexible Größe, wechselnder Inhalt, Goldornament über CSS/SVG |
| C07 | Seitenüberschrift mit Symbol + optionalem Zitat | fast alle | echte übersetzbare Texte; Sprüche nicht als persönliche Aussage übernehmen |
| C08 | Bildkarte mit Titel/Text/CTA | Interests, Skilltree, Projects | Bildausschnitt + Inhalt separat, Touch und Keyboard |
| C09 | Profilkarte mit Attributzeilen | `main-overview` | B03 mit strukturierten, später bestätigten Daten |
| C10 | Skillleiste | `main-overview`, `skilltree-technical-skills`, Mobile | 4 interne Stufen; visuell durchgehend, ohne sichtbare % |
| C11 | Kleine und große Career Timeline | `main-overview`, `career-progression`, Mobile | 3 Phasen; Desktop horizontal auf Detail, Mobile vertikal |
| C12 | Tools-&-Methods-Kachel | `tools-and-methods` | Logo/Icon, Name, Kurztext; **keine** Skillleiste |
| C13 | Interessen-Detailmodule | `interest-detail` | variabler Modulumfang je Interesse; kein Gaming-Zwang für andere |
| C14 | Echte Bildergalerie/Karussell | `interest-detail`, `project-detail` | nur bei vorhandenen Medien; navigierbar und zugänglich |
| C15 | Projektkarte + Coming-Soon-Karte | `projects-overview` | reale Projekte von Dekoration getrennt |
| C16 | Pagination | `projects-overview`, Mobile | max. 6 **reale** Projekte/Seite; keine Phantomseiten |
| C17 | Projektdetail-Infokarten und Links | `project-detail` | nur bestätigte gültige Links; kein Play ohne Video |
| C18 | Kontaktkarte | `contact`, Mobile | echte E-Mail-/Profil-Links, kein Formular |
| C19 | Quick Navigation | ausschließlich `main-overview` | nicht global rendern |
| C20 | Chips/Status/optionale Akkordeons | General, Projects, Mobile | erreichbar, fokussierbar, sinnvolle semantische Zustände |

## 4. Flexible Medienplätze – **keine** sofortige Generierung

| ID | Medienplatz | Mockup | Warum noch offen? | Vorgehen |
|---|---|---|---|---|
| S01 | Gaming-Favoriten/-Coverreihe | `interest-detail` | im Mockup sichtbare Spielcover sind keine bestätigten Favoriten oder lizenzierten Assets | erst mit Nutzer reale Favoriten klären, dann zulässige Bilder/Alternativen prüfen |
| S02 | Highlights-/Erlebnisgalerie für Gaming | `interest-detail` | Anzahl und konkrete Motive sind beispielhaft | bei Textbefüllung festlegen; kann mit freigegebenen Themenbildern starten |
| S03 | Gaming-„Fun Fact“-Illustration / Maskottchen | `interest-detail` | beispielhafte kleine Deko; echter Inhalt offen | später optional erstellen, sonst Icon/neutraler Platzhalter |
| S04 | Sechs spezifische Interest-Detail-Hero-Zuschnitte | `interest-detail` + sechs Interessen aus `about-interests` | nur Gaming-Detaillayout illustriert; andere Seiten benötigen variable Module | zuerst B04–B09 wiederverwenden; bei Bedarf gezielt neue Motive |
| S05 | Weitere Interest-Detailmodule je Kategorie | `interest-detail` als Template | Themenabhängigkeit; keine generischen Fake-Fakten | Daten-/Modulmodell zuerst, Medien erst bei realem Inhalt |
| S06 | Reale Projekt-Screenshots und Galerie | `project-detail` | UI, 3D-Szenen und echte Screenshots noch nicht umgesetzt | nach existierender App lokal erstellen; niemals KI-Bilder als echte Screenshots ausgeben |
| S07 | Projektvideo / Play-Button | `project-detail` | kein echtes Video belegt | vollständig ausblenden bis Video existiert |
| S08 | Kontaktdaten, Verfügbarkeit, Links, Markenicons | `contact`, `project-detail` | nur bestätigte Angaben publizieren | später eigener Content-Schritt; bis dahin keine erfundenen URLs |
| S09 | Tool-/Skill-/Plattformlogos | `technical-skills`, `tools-and-methods`, `interest-detail` | Mockup zeigt Beispiele, keine validierte persönliche Nutzung | nach Inhaltsbestätigung ausgewählte Logos/Rechte prüfen |

## 5. Zuordnung je freigegebenem Portfolio-Mockup

| Mockup | Bildkandidaten | Design- und UI-System | Variable Medien/Anmerkungen |
|---|---|---|---|
| `portfolio-main-overview.png` | B01, B02, B03, ggf. B01 als About-Bild | D01–D09, C01–C11, C19–C20 | Profilwerte, Skills, Karriere und Slogans noch nicht aus PNG als wahr übernehmen |
| `portfolio-about-interests.png` | B01, B02, **B04–B09** | D01–D09, C01–C08 | 6 Karten, austauschbare Texte/Icons, 3 Spalten Desktop |
| `portfolio-interest-detail.png` | B01, B02, **B04** als Gaming-Hero; B01 ggf. als Landschaftszuschnitt | D01–D09, C01–C08, C13–C14 | S01–S05; Gallery und Plattformen nur bei realem Inhalt |
| `portfolio-skilltree-overview.png` | B01, B02, B10, B11, **B13** | D01–D09, C01–C08, C11 | drei Vorschaubereiche; keine redundante Volltextseite |
| `portfolio-skilltree-technical-skills.png` | B01, B02, B12 | D01–D09, C01–C07, C10 | Kategorien und konkrete Skillwerte nicht aus Bild übernehmen |
| `portfolio-skilltree-tools-and-methods.png` | B01, B02; keine zwingende zusätzliche Szenengrafik | D01–D11, C01–C07, C12 | S09 Marken/Tools vor Nutzung bestätigen |
| `portfolio-skilltree-career-progression.png` | B01, B02, B13, B14–B16 | D01–D09, C01–C07, C11 | Datumsangaben aus PNG unbestätigt; 3 Stationen fix |
| `portfolio-projects-overview.png` | B01, B02, B17 als echte Projektkarte | D01–D09, D16, C01–C08, C15–C16 | Coming Soon rein dekorativ; bei 1 realem Projekt nur 1 Seite |
| `portfolio-project-detail.png` | B01, B02, B17 | D01–D11, C01–C07, C14, C17 | S06–S08; Demo/Video nur real vorhanden, keine Mockup-URL |
| `portfolio-contact.png` | B01, B02, **B18** | D01–D11, C01–C07, C18, C20 | E-Mail/GitHub/LinkedIn/Verfügbarkeit nur bestätigt; kein Formular |
| `portfolio-responsive-mobile.png` | zugeschnittene bzw. responsiv angepasste B01/B03/B17, B02 ggf. im Drawer | D01–D16 in mobiler Form, insb. C03, C10–C18 | keine Pflicht-Bottom-Navigation; neue Assetserie allein für Mobile nicht zwingend |

## 6. Technische Assetregeln und Abnahme

1. Original-PNGs unter `docs/design/mockups/portfolio/` niemals überschreiben, umbenennen, automatisch ausschneiden oder als komplette UI ausliefern.
2. Zunächst B01/B02 mit dem D01–D03-Rahmenprototyp testen: unterschiedliche Breiten, lange deutsche Texte, Zoom, mobile Header-Aufteilung, Fokus, Skalierung der Ecken. Die Schlüsselfrage ist **nicht** nur visuelle Ähnlichkeit, sondern zuverlässiges Resizing.
3. Bildmotive für Produktionsnutzung erst nach ausdrücklicher Auswahl/Freigabe erstellen. Abweichungen von Mockups als Änderungsantrag behandeln. Für neue **Mockup-Entwürfe** gelten weiterhin drei Varianten; auch Produktionsassets können zur Auswahl mehrere Entwürfe erhalten, sind aber nicht automatisch Mockups.
4. Möglichst keine lesbaren Schriftzüge, Beschriftungen, Markenlogos oder Buttontexte in KI-Bildmotiven. Texte, Buttons, Navigation, Tooltips und ARIA-Informationen gehören in echtes HTML.
5. Gegenüber Screenshots klar zwischen **Konzeptillustration**, **echter Anwendungsgrafik** und **echtem Screenshot** unterscheiden; Fake-Screenshots vermeiden.
6. Bei Icons dieselben semantischen IDs durch alle Seiten verwenden; bekannte Drittlogos nur bei tatsächlich bestätigter Nutzung und nach Rechte-/Quellenprüfung.
7. Vor der Erzeugung pro Motiv Format, Motiv-Fokus, Seitenverhältnis, geplanter Zuschnitt (mobile/desktop), Transparenzbedarf, zulässige Größe und Zielverwendung festhalten. **Keine fixen Pixelmaße/KB-Ziele ohne echten Layouttest vorgeben.**
8. Abgeleitete Produktionsbilder nach separater Freigabe unter `public/assets/images/`, Schriften unter `public/assets/fonts/`, SVG-Ornamente/Iconressourcen unter geeigneten `public/assets/`-Unterpfaden beziehungsweise komponentennahen Dateien, in Einklang mit `docs/context/assets.md`. Die tatsächliche Ablage durch Codex erst mit Implementierungsauftrag.
9. Komprimierung/WebP/AVIF, `srcset`/responsive Ausgabe, reservierte Bildflächen, Lazy Loading nur bei nicht sofort sichtbaren Bildern, Contrast/Keyboard/Touch-Tests und gegebenenfalls Reduced Motion gehören zur späteren Integration. PNG als Referenz ≠ Runtime-Medium.
10. Vor Git-Übernahme Quelle/Generierungsverfahren, Lizenz bzw. Nutzungsrechte, ggf. Attribution, Freigabe, Version, Abmessungen, Dateigröße und Einsatzorte nachvollziehbar erfassen. Nutzungsrechte für generierte/beschaffte Elemente nicht pauschal behaupten.
11. Finale Opera-Freigabe nur durch Nutzer nach Umsetzung. Optimierungs- oder Testscripterfolg ist kein Ersatz für einen visuellen Vergleich mit allen elf Referenzen.

## 7. Empfohlener Produktionsablauf

**Status:** Der folgende Ablauf einschließlich der Nummerierung 01.1–01.8 ist eine **vorgeschlagene operative Unterteilung**, keine vollständige Freigabe von Implementierungs- oder Produktionsaufträgen. Maßgeblich ist die [Roadmap](../../development/roadmap.md#phase-01--vorgeschlagene-operative-unterteilung); die Hauptphasen 00–08 bleiben bestehen. Phase 01 ist nicht implementiert.

**Vorbereitungsstand vor dem vorgeschlagenen Paket 01.3:** Das erste Paket aus **B01, B02, D01 und D02-A bis D02-D** ist gestalterisch ausgewählt; alle sieben PNGs sind im Checkout nachgewiesen. Dateinachweis und datierter Git-Tracking-Befund stehen in Abschnitt 9. Damit ist die frühere pauschale Aussage „noch keine Bilderzeugung oder visuelle Auswahl“ für dieses Paket abgelöst. Technische SVG-/CSS-Ausarbeitung, Bildoptimierung, responsive Zuschnitte und Browserabnahme bleiben offen. Die folgenden technischen Schritte und jede weitere Assetproduktion setzen jeweils einen gesonderten Auftrag und die erforderlichen Freigaben voraus; dieser Dokumentationsauftrag führt sie nicht aus.

**01.3, Schritt I:** Nur einen vertikalen Prototyp aus *Header B01 + Seitenleiste B02 + Goldrahmen D02 + Kompassrose D01 + Beispielkarte C06* erstellen, inklusive responsivem Layout. Erst nach Prüfung auf alle Seiten übertragen.

**01.3, Schritt II:** Typografie, Iconfamilie, Zustandsdesign, Bildgrößen und Performance-Strategie vervollständigen. UI-Komponenten stets ohne eingebrannte Texte.

**01.4:** B03 + B04–B09 bedarfsbezogen erzeugen/freigeben; Interest-Detailmodule erst mit echten Inhalten vollständig bebildern.

**01.5:** B10–B16 für Skilltree und Career möglichst mit Wiederverwendung bzw. Zuschnitten produzieren.

**01.6:** B17 und B18 sowie Projekt-Coming-Soon-Dekoration; echte Screenshots erst nach realer Umsetzung.

**01.7:** Nutzerbestätigte Texte/Kompetenzen/Links, anschließend variable Medienplätze S01–S09 nach Bedarf füllen.

**01.8:** Visueller Vergleich aller elf Desktop/Mobile-Referenzen, DE/EN, Zugänglichkeit, Medienrechte, Performance, Export und echte Windows-/Opera-Abnahme.

**Nicht enthalten:** 3D-Weltasset-Produktion, HUD/Quest/Settings für die Welt, neue Mockups, Bilderzeugung, SVG-/Font-Beschaffung oder Implementierung. Das ist ausschließlich das Inventar für die elf Portfolio-PNGs; der separate Startscreen ist über `docs/design/mockups/ui/ui-app-start-screen.png` zu behandeln.

## 8. Offene Freigaben

**Bestätigt ist die Assetstrategie:** Notwendige visuelle HTML-Portfolio-Assets schrittweise bereits während Phase 01, mit konsequenter Wiederverwendung, getrennten Illustrationen, SVG/CSS für Rahmen/Ornamente und echten HTML/React-Komponenten. Die 18 Bildmotiv-Kandidaten sind Planungsgrößen, keine verpflichtende Anzahl neu zu erzeugender Dateien. Zentrale Regel: [Assets](../../context/assets.md#portfolio-assets-während-phase-01). Die begrenzte Ausnahme ersetzt weder spätere Welt-/Charakter-/Animationsassetarbeit in Phasen 06/07 noch die Inhaltsfinalisierung und Releaseprüfung in Phase 08.

Offen bleiben:

1. Genaue Ausgestaltung und Beauftragung der vorgeschlagenen operativen Arbeitspakete; keine pauschale Freigabe aller acht Implementierungsaufträge.
2. Technische Aufbereitung des bereits visuell ausgewählten ersten Pakets: D01 als spätere SVG-Masterversion, D02-A bis D02-D als skalierbare SVG-/CSS-/HTML-Elemente; B01/B02 optimieren und responsive Verwendung prüfen. Noch keine technische Umsetzung oder Browserfreigabe.
3. Assetbezogene Rechteprüfung und Nachweise vor öffentlicher Verwendung abschließen; Quellenprüfung und verbleibende Grenzen in Abschnitt 9. Weitere Bildmotive und sonstige Inventarkandidaten benötigen gesonderte Produktionsaufträge und Auswahl; die sieben PNG-Freigaben geben sie nicht pauschal frei.
4. Optionaler späterer Stilabgleich für eine Goldrahmen-Masterkomponente mit realen Browseransichten, bevor das gesamte Portfolio dieselben Ornamente nutzt.

**Kontext-/Prompt-Abgleich:** Entscheidungen A (Routen), B (begrenzte frühe Portfolio-Assetstrategie) und C (eigener Inhaltsschritt) bleiben erhalten. Die Kandidatenkategorien und historische Analysebasis bleiben bestehen; neue visuelle Freigaben und tatsächliche Dateinachweise sind in Abschnitt 9 getrennt ergänzt. Diese Dokumentationspflege ist keine Implementierungs-, Performance-, SVG-/CSS- oder Browserfreigabe. Veraltete Statusangaben in nicht freigegebenen Fachquellen/Prompts sind gesondert zur Korrektur vorzulegen.

## 9. Erstes ausgewähltes Portfolio-Asset-Paket

Stand der Bestandsprüfung: 17.10.2026. **Visuelle Auswahl durch Florian laut ausdrücklichem Auftrag**, kein von Codex ausgeführter Browser-Abnahmetest. Alle sieben Dateien wurden im aktuellen `dev`-Checkout gefunden, lokal betrachtet und mit vorhandenen Python-/Pillow-Werkzeugen auf PNG-Format, Decodierbarkeit, Abmessungen, Dateigröße und Alpha geprüft. Die 29 ursprünglichen Mockups einschließlich der elf Portfolio-Referenzen bleiben davon getrennt und unverändert.

### Auswahl, Zweck und Weiterverwendung

Für alle sieben Dateien gilt die vom Nutzer bestätigte Herkunft: **Mit der Bildgenerierungsfunktion von ChatGPT/OpenAI erzeugt und vom Nutzer aus den Entwürfen ausgewählt.** Ein konkreter Modellversionsname, der genaue Erstellungszeitpunkt und vollständige Erstellungsbelege wurden nicht übermittelt und werden nicht erfunden.

Alle Pfade in der folgenden Tabelle relativ zum Repository-Root.

| ID | Name / Zweck | Tatsächlicher Pfad | Visuelle Auswahl / geplante Weiterverwendung |
| --- | --- | --- | --- |
| B01 | Fantasy-Header: nächtliches Panorama mit dominanter warm beleuchteter Burg-/Turmanlage, Mond, Wald, Bergen und Wasser | `public/assets/portfolio/backgrounds/portfolio-header-fantasy.png` | Als Bildmotiv freigegeben; eigenständige Hintergrundillustration ohne UI-Texte. Kein fertiger Header mit Logo, Titel oder Sprachumschalter; spätere responsive Bildverwendung offen. |
| B02 | Sidebar-Illustration: Wandering Rune Mage mit Katze, von hinten/seitlich vor einem hohen Magierturm, Cyanmagie und Stab | `public/assets/portfolio/illustrations/portfolio-sidebar-rune-mage.png` | Als hochformatiges Bildmotiv freigegeben; keine Sidebar-Navigation. Schmale Viewports, Zuschnitte und Performance noch prüfen. |
| D01 | Goldene arkane Kompassrose mit Sternspitzen und ornamentalen Kreisen | `public/assets/portfolio/icons/arcane-compass-rose-gold.png` | Variante 3 als PNG-Designvorlage ausgewählt; wiederverwendbares Identitätsmerkmal. SVG-Masterversion erst später umsetzen und visuell prüfen. |
| D02-A | Fantasy-Hauptpanel mit Goldrahmen, blauen arkanen Akzenten und dunkelblauer Inhaltsfläche | `public/assets/portfolio/frames/fantasy-frame-main.png` | Variante 3 als PNG-Designvorlage freigegeben; skalierbares SVG-/CSS-Hauptpanel vorgesehen, flexible Größen und Browserdarstellung offen. |
| D02-B | Fantasy-Kartenrahmen mit goldenen Eckornamenten, blauen Kristallen und ruhiger dunkelblauer Fläche | `public/assets/portfolio/frames/fantasy-frame-card.png` | Variante 2 gewählt und als separates Einzelbild erstellt; PNG-Vorlage für wiederverwendbare Karten, skalierbare Umsetzung offen. |
| D02-C | Breiter flacher Fantasy-Überschriftenrahmen mit Goldornamenten, blauen Kristallen und freier Innenfläche | `public/assets/portfolio/frames/fantasy-frame-heading.png` | Konkrete PNG-Variante ausgewählt; spätere echte HTML-Überschriften, responsive SVG-/CSS-Umsetzung und visuelle Prüfung offen. |
| D02-D | Reduzierter goldener Rahmen für kleine UI-Elemente mit je einem kleinen blauen Kristall links und rechts | `public/assets/portfolio/frames/fantasy-frame-control.png` | PNG-Designvorlage für Buttons, Links und Sprachumschalter freigegeben. Frühere stark verzierte Entwürfe ausdrücklich abgelehnt; reduzierte Gestaltung maßgeblich. Wiederverwendbares HTML/CSS noch offen. |

### Technischer Dateinachweis und Status

Bei der **Bestandsprüfung am 17.10.2026 vor der geplanten Git-Übernahme** waren die sieben PNG-Dateien im lokalen Checkout vorhanden, aber noch **ungetrackt** und durch die vorhandene `.gitignore` nicht ausgeschlossen. Das ist ein datierter Befund, keine dauerhaft gültige Tracking-Aussage. Der aktuelle Git-Status ist direkt im Repository zu prüfen; die Verfügbarkeit in einem frischen Clone hängt vom tatsächlich übernommenen Git-Stand ab. Aus dieser Bestandsprüfung wird kein erfolgter Commit oder Push abgeleitet; Codex führt beides nicht aus. Die Lage unter `public/` beweist keine UI-Integration, Optimierung oder Website-Veröffentlichung; vor einer späteren öffentlichen Auslieferung die [Rechte-/Datenschutzregeln](../../context/privacy-security-and-licenses.md#assetrechte) beachten.

| ID | Pixel | Bytes | Tatsächliches Format / Alpha | SHA-256 des geprüften Inhalts |
| --- | --- | --- | --- | --- |
| B01 | 2508 × 627 | 2.065.827 | PNG, RGB, 8 Bit/Kanal; kein Alpha, keine Transparenz | `70f980aec2869efb382b063a1cdb94b938cfbf304f1bee241575ca8a801fcc6f` |
| B02 | 1024 × 1536 | 2.773.761 | PNG, RGB, 8 Bit/Kanal; kein Alpha, keine Transparenz | `b7426e632d02ea6af1042b1c2b1b296e1c4da3c7ed3a5131a2c1c51d26a64a59` |
| D01 | 1254 × 1254 | 1.392.240 | PNG, RGBA, 8 Bit/Kanal; Alpha-Werte 0–255, transparente Pixel vorhanden | `c9740277d4e306242e58f07d39e7b66b53c3061d724a5303cae65db21032427e` |
| D02-A | 1448 × 1086 | 2.062.646 | PNG, RGB, 8 Bit/Kanal; kein Alpha, keine Transparenz | `fd238d5715dca9b0dda3f1594f3b8bf17ef7dee89a0849771919b47cad5d9f58` |
| D02-B | 1086 × 1448 | 2.038.687 | PNG, RGB, 8 Bit/Kanal; kein Alpha, keine Transparenz | `a6f6362567977a711c3cd513d2d263fbb668b80723482e4d4cd646842bfb419e` |
| D02-C | 2172 × 724 | 1.941.020 | PNG, RGB, 8 Bit/Kanal; kein Alpha, keine Transparenz | `91e085602c8084ac80138a47cddd7ca45952c07b0ce03ed7b297349f7e16f2a9` |
| D02-D | 2048 × 768 | 1.747.830 | PNG, RGB, 8 Bit/Kanal; kein Alpha, keine Transparenz | `30861a2421d1dbbcfbaf59e00d29a276ed6301f49a6188ff04adf1e75fc83ce8` |

Hashes dienen ausschließlich der Dateizuordnung, nicht als Rechte- oder Qualitätsnachweis. Abmessungen und Größen sind Istwerte, keine vorgegebenen Layoutmaße oder Performancebudgets.

- **Visuell ausgewählt:** alle sieben Motive/Vorlagen durch den Nutzer bestätigt.
- **Im Repository vorhanden:** alle sieben Dateien im lokalen Checkout zum datierten Prüfstand nachgewiesen; Tracking und Clone-Verfügbarkeit gemäß Bestandsvermerk oben gesondert prüfen.
- **Technisch vorbereitet:** nur Metadaten, PNG-Decodierbarkeit und Alpha geprüft; keine Optimierung, Vektorisierung oder Komponentenarbeit durchgeführt, keine Produktionsreife bestätigt.
- **In die App integriert:** noch nicht; keine Referenzen auf diese Dateien im vorhandenen Anwendungscode gefunden. Phase 01 bleibt nicht implementiert.
- **Visuell im Browser abgenommen:** noch nicht; keine Opera-, responsive, Accessibility- oder Performance-Abnahme dieser Assets ausgeführt oder durch den Nutzer bestätigt.

D01 und D02-A bis D02-D bleiben Rastervorlagen, keine SVGs. Die D02-PNGs enthalten ihren Hintergrund und sind nicht transparent. Ungeprüftes Strecken kann Ornamente verzerren; eine spätere SVG-/CSS-Rekonstruktion muss dem ausgewählten Design entsprechen und erneut vom Nutzer visuell geprüft werden. Ganze Rahmenbilder ersetzen keine bedienbare HTML-UI. B01/B02 benötigen vor Integration eine bedarfsgerechte Bildoptimierung sowie Prüfung von Zuschnitten, Bildgrößen und Ladeverhalten. Keine verbindlichen KB-/Pixelgrenzen ohne tatsächliche Layout- und Performancemessung; keine Ableitungen in diesem Auftrag.

### Herkunft und Rechteprüfung

Vorgesehen ist ein öffentliches Entwicklerportfolio mit möglicher kommerzieller Nutzung. Offizielle Quellen am 17.10.2026 tatsächlich geöffnet:

- [OpenAI Europe Terms of Use](https://openai.com/policies/eu-terms-of-use/), aktualisiert 16.01.2026: Abschnitt „Content“ ordnet Output im Verhältnis zu OpenAI soweit rechtlich zulässig dem Nutzer zu; Output kann anderen Ergebnissen ähneln. Verantwortung für Eingaberechte und rechtmäßige Verwendung bleibt beim Nutzer. Für geschäftliche Verwendung enthält die Seite ein eigenes Addendum.
- [OpenAI Help Center: kommerzielle Nutzung von ChatGPT-Output](https://help.openai.com/en/articles/6783457-what-is-chatgpt): nennt kommerzielle Nutzung unter Vorbehalt der Bedingungen und Richtlinien, unabhängig von kostenlosem oder bezahltem Plan.
- [OpenAI Service Terms](https://openai.com/policies/service-terms/), aktualisiert 16.10.2026: ergänzende Regelungen, insbesondere zu Bild-/Videofunktionen in Abschnitt 6; kein assetbezogener Lizenznachweis allein durch den Seitenabruf.

Die Quellenprüfung ist erfolgt, eine abschließende assetbezogene Rechteprüfung nicht. Kontobezogene Anwendbarkeit und Bedingungen zur Erstellungszeit sowie Rechte an verwendeten Eingaben und mögliche Rechte Dritter sind vor öffentlicher Verwendung angemessen zu klären. Es werden weder ausschließliche Urheberrechte noch Gemeinfreiheit, CC0 oder CC BY behauptet. Konkrete Modellversion, Lizenzurkunde und pauschale Rechtsfreiheit werden nicht aus der ChatGPT-Herkunft abgeleitet. Herkunft ist als Nutzerangabe dokumentiert; keine unabhängige Prüfung privater Erstellungsunterlagen. Maßgeblich bleiben die [zentralen Rechtevorgaben](../../context/privacy-security-and-licenses.md#assetrechte).
