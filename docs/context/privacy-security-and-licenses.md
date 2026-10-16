# Vertraulichkeit, Sicherheit und Nutzungsrechte

## Verbindliche Inhaltsgrenzen

Berufliche Kompetenzen, Verantwortlichkeiten und Erfahrungen allgemein darstellen. toom Baumarkt darf genannt werden. Ohne gesonderte Freigabe keine identifizierbaren internen Apps, Projektbezeichnungen, Screenshots, Quellcodes, Architekturdiagramme, Systemdetails oder Geschäftszahlen veröffentlichen. Anonymisierung allein ist keine ausreichende Freigabe.

Keine privaten Informationen aus anderen Gesprächsthemen in das Portfolio übernehmen. Keine erfundenen Kenntnisse oder übertriebenen Leistungsangaben. KI-Unterstützung und übernommene Bestandteile ehrlich beschreiben.

## Daten und Kontakt

Erster Release: kein Analytics/Tracking, keine Konten, kein Kontaktformular, kein eigenes Backend oder Datenbank. E-Mail über mailto und ausgewählte externe Profile. Sprache, Audio, Grafik und Hotspotstatus lokal; Position nicht dauerhaft. Datenmenge klein halten, keine personenbezogenen Besucherprofile aufbauen. Hosting kann unabhängig davon Zugriffslogs erzeugen; reale Konfiguration vor Release prüfen.

## Technische Umsetzung

Keine Geheimnisse im Repository oder Clientbundle. Alles öffentlich ausgelieferte JavaScript und alle public-Assets sind abrufbar, auch bei privatem GitHub-Repository. Vertrauliche Materialien deshalb niemals in Runtime-Dateien ablegen. Lokale Inhalte sicher rendern, keine ungeprüften HTML-Injektionen. Abhängigkeiten nachvollziehbar halten und Sicherheitsbefunde vor Release bewerten.

Hosting-Header und Sicherheitskonfiguration beim gewählten Anbieter prüfen; statischer Export ersetzt keine Hostkonfiguration. Externe Dienste, Fonts, Embeds oder CDNs nicht beiläufig einführen. Eigene/lokal ausgelieferte Assets bevorzugen, wenn Rechte und Technik passen.

## Isolation und Testartefakte

Die Ubuntu-KI erhält durch den [Testworkflow](../development/testing-workflow.md#isolation-und-git-übergabe) keine Windows-Datei-, Ausführungs- oder Browserrechte. Keine Schnittstelle stillschweigend einrichten. Entwicklungsstände über GitHub austauschen; Befunde stellt Florian bewusst bereit. Spätere Windows-Automation muss zunächst lokal durch ihn startbar sein, ohne zusätzliche Hostrechte. Windows-Sicherheitsfunktionen und OPNsense nicht eigenständig verändern.

Screenshots, Traces, Videos, Logs und Fehlermeldungen vor Veröffentlichung auf Tokens, Zugangsdaten, private Pfade/Benutzernamen, interne Arbeitgeberinformationen und sonstige nicht freigegebene Inhalte prüfen. Das öffentliche Repository gibt keine lokalen Dateien, Assets oder Testergebnisse automatisch zur Veröffentlichung frei. Nur benötigte, bereinigte und freigegebene Nachweise übernehmen; Ignoreregeln ersetzen diese Prüfung nicht. Bereits veröffentlichte Inhalte können in älteren Commits bleiben; keine erfolgte Historienbereinigung durch Textänderungen behaupten.

## Assetrechte

Für Modelle, Bilder, Musik, Effekte, Schriften und Symbole dokumentieren: Quelle/Urheber, Erstellungsweg, Lizenz/Plan, erlaubte Verwendung, Bearbeitung, Attribution und Nachweis. „Mit KI erstellt“ ist kein pauschaler Rechtenachweis. Unbekannte Rechte als offen kennzeichnen und vor Veröffentlichung klären. Keine geschützten Anime-/Spielcharaktere oder Markenbilder nur wegen passender Interessen übernehmen.

## Veröffentlichung

Das GitHub-Repository ist inzwischen öffentlich; die Website-Veröffentlichung steht weiterhin aus. Die frühere Vorgabe „Quellcode derzeit privat“ ist überholt. Der öffentliche Repository-Zugang bedeutet nicht, dass Quellcode-Links bereits in der Portfolio-Oberfläche implementiert sind. Nur bestätigte, tatsächlich funktionierende Links veröffentlichen; keine Repository-URL erfinden. Domain, Hosting, öffentliche Kontaktangaben und notwendige rechtliche Seitentexte stehen noch aus. Vor Release anhand des tatsächlichen Angebots prüfen; dieses Dokument trifft keine abschließende rechtliche Bewertung und erfindet keine Adresse/Impressumsdaten.

`"private": true` in `package.json` bleibt bestehen: Es verhindert npm-Paketveröffentlichung und bestimmt nicht die GitHub-Sichtbarkeit. Quelle: [npm-11-Dokumentation zu private](https://docs.npmjs.com/cli/v11/configuring-npm/package-json/#private), geprüft am 17.10.2026 für die verwendete npm-11-Linie; kein hier ausgeführter Veröffentlichungsversuch.
