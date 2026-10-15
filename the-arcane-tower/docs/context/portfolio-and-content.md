# Portfolio, Inhalte und Sprache

## Öffentliche Darstellung

Florian Metzger — SAP-Entwickler mit Fokus auf CAP, BTP und ABAP. toom Baumarkt darf als Arbeitgeber genannt werden. Konkrete Berufszeiträume, Kompetenzaussagen, Links und Biografie noch mit Florian ausarbeiten; keine Zahlen aus Erinnerungen ungeprüft veröffentlichen. Kein Lebenslauf-Download vorgesehen.

## Navigation

| Bereich | Inhalt |
|---|---|
| Über mich | Kurze wahrheitsgemäße Vorstellung und Motivation |
| Fähigkeiten | Nach Themen gruppierter interaktiver Fähigkeitenbaum; Klick erklärt Erfahrung und allgemeine Einsatzgebiete |
| Berufserfahrung | Allgemeine Entwicklung, Rollen und Verantwortlichkeiten als Zeitleiste |
| Eigene Projekte | Erweiterbare Karten mit Detailansichten; zunächst nur The Arcane Tower |
| Interessen | Gaming, Anime/Serien, Technik, Calisthenics, neapolitanisches Pizzabacken |
| Kontakt | E-Mail-Link und ausgewählte GitHub-/LinkedIn-Profillinks |

Die drei fachlichen Hauptbereiche bleiben eigenständig. Alle Skills sind zugänglich; keine erfundenen Level, Prozentwerte oder Quest-Sperren. Der Begriff Fähigkeitenbaum ist eine Darstellungsform, keine Verpflichtung zu einem Freischaltsystem.

## Projektgeschichte und Quellcode

Projektansicht: Idee, Umsetzung, technische Entscheidungen, Herausforderungen und transparente Beschreibung von KI-Unterstützung, übernommenen Assets und eigener Arbeit. Keine noch nicht implementierten Funktionen als fertig darstellen. Am Wegschild kurze Entstehung, Motivation und Bedienhinweise; ausführliche Geschichte in der Projektansicht.

Im Wegschild und in der Projektansicht steht zunächst „Quellcode derzeit privat“. Kein funktionsloser Link auf ein unzugängliches Repository. Erst nach tatsächlicher Veröffentlichung und Florians Entscheidung durch Repository-Link ersetzen. Das öffentliche GitHub-Profil kann im Kontaktbereich unabhängig davon erscheinen.

## Inhaltspflege

Lokale strukturierte Daten/Übersetzungsdateien, kein Adminmenü oder Backend. Gemeinsame IDs und Inhalte für HTML-Portfolio, Kristall, Schmiede und Garten. Projektliste erweiterbar ohne grundlegenden Umbau. Fehlende Inhalte als interne Aufgaben führen; veröffentlichte Seite nicht mit erfundenen Beispieldaten füllen.

## Sprachen und Einstieg

Deutsch mit „du“, freundlich/professionell. Fantasy-Begriffe tragen Atmosphäre; technische Texte bleiben verständlich. Englisch sinngemäß, nicht unverständlich wörtlich.

- `/`: Sprachwahl und Einstieg; gespeicherte Sprache vorauswählen, keine automatische erzwungene Weiterleitung.
- `/de-DE/`: deutsche Fassung.
- `/en-EN/`: englische Fassung; URL genau beibehalten.
- Startscreen erlaubt ebenfalls Sprachwechsel und zeigt „Welt betreten“ / „Portfolio direkt öffnen“.
- Direkte URL hat Vorrang vor gespeicherter Sprache.
- Sprachwechsel erhält aktive Portfolio-Unterseite bzw. Position in der aktuellen Spielsession.
- „Portfolio direkt öffnen“ führt ohne 3D-Umweg zum vollständigen HTML-Portfolio.

URL-Segment `en-EN` ist eine Produktentscheidung, kein geeigneter Standardwert für alle Sprach-APIs. Intern auf `en` abbilden; `de-DE` auf `de` oder `de-DE`. HTML-lang, hreflang und Formatierung verwenden passende Sprachcodes. Alle UI-Texte, Fehlermeldungen, Steuerungshinweise und zugänglichen Beschriftungen übersetzen.

## Kontextabhängige Navigation

Im 3D-Portfolio schließen X und Zurück auf oberster Ebene zur Welt. Im direkt geöffneten HTML-Portfolio existiert keine laufende Welt, zu der X zurückkehren könnte. Umsetzungsvorschlag: dort normale Seitennavigation und Start-Link; kein irreführendes Welt-Schließen-X. Dieses Detail vor UI-Finalisierung mit Florian abstimmen. Browser-Zurück und der sichtbare interne Zurück-Pfeil sind unterschiedliche Funktionen; interne Navigation darf die Website nicht unerwartet verlassen.
