# The Arcane Tower – Wizard RPG Portfolio

Persönliches Entwicklerportfolio von Florian Metzger: freiwillige Third-Person-Fantasywelt und vollständiger HTML-Zugang als Produktziel. Stand: **17.10.2026**.

## Start hier

1. [Arbeitsregeln für KI](AGENTS.md)
2. [Kontextübersicht](docs/context/README.md)
3. [Architektur, installierte Versionen und technische Ausnahmen](docs/context/architecture.md)
4. [Projektphasen](docs/development/roadmap.md), [Abnahmekriterien](docs/development/acceptance-criteria.md), [Nachweise und offene Punkte](docs/development/open-items.md)
5. [Alle 29 verbindlichen Designreferenzen](docs/design/README.md) und [Prompts](prompts/README.md)

## Tatsächlicher Stand

Das minimale Grundgerüst von Phase 00 ist implementiert: Next.js App Router, React, TypeScript, Tailwind CSS, ESLint und Prettier, npm mit einem vorhandenen Lockfile. Der statische Produktionsbuild und die drei Einstiegspunkte wurden geprüft:

- `/`: echte Sprachwahl ohne automatische Weiterleitung.
- `/de-DE/`: deutscher HTML-Platzhalter.
- `/en-EN/`: englischer HTML-Platzhalter.

Alle Inhalte sind ausdrücklich Entwicklungsplatzhalter. Portfoliofunktionen und 3D-Welt sind noch nicht implementiert; Three.js, React Three Fiber, Drei und GSAP bleiben beschlossen, aber noch nicht installiert. Kein Canvas ist für die bestehenden Einstiege erforderlich.

Typecheck, Linting, Formatprüfung und Produktionsbuild wurden im nativen Ubuntu-Checkout erneut erfolgreich ausgeführt. Sprachlinks und HTML-Sprachangaben waren bereits lokal per HTTP geprüft; die Browserdarstellung aller drei Einstiegspunkte wurde von Florian aus dem bisherigen Verlauf bestätigt und in dieser Abschlusssitzung nicht wiederholt. Eine vollständige Browser-, Barrierefreiheits- und Performance-Abnahme steht weiterhin aus. Quellen und Prüfgrenzen stehen zentral in [open-items.md](docs/development/open-items.md#tatsächlicher-nachweisstand).

## Entwicklung und Abnahme

Der [zentrale Testworkflow](docs/development/testing-workflow.md) beschreibt Ubuntu-Entwicklung und automatisierte Prüfungen, die isolierte Übergabe über GitHub sowie Florians manuelle Windows-/Opera-Abnahme. Chrome ist bevorzugter Ubuntu-Browser; die gemeldeten VM-Grafikgrenzen ersetzen keine realistischen Grafiktests. Die eigenständige Windows-Testumgebung ist für grundlegende HTML-Tests eingerichtet: Installation, Devstart und die drei Einstiegsseiten wurden von Florian unter Windows 11/Opera manuell bestätigt. Phase 01 ist nicht begonnen und benötigt einen eigenen Auftrag.

Der unter Windows beobachtete Missing-param-Fehler wurde unter Ubuntu bei nicht generierten Dev-Pfaden reproduziert, einschließlich eines ersten `/favicon.ico`-Requests mit HTTP 500. Gültige Sprachrouten lieferten danach HTTP 200. Ursache des genauen Windows-Ablaufs und dauerhafte Behebung bleiben offen; [Analyse und Prüfgrenzen](docs/development/open-items.md#windows-html-test-und-devmodus-routenbefund--17102026). Ein erfolgreicher Produktionsbuild ist keine Devmodus-Abnahme.

Ein grüner automatisierter Test ist keine visuelle Nutzerfreigabe. Aktuelle Prüfwerkzeuge und Grenzen, optionale spätere Automation sowie Bugreport-Übergabe stehen im Workflow; keine Windows-Fernsteuerung oder zusätzliche Testinfrastruktur ist eingerichtet.

## Lokal einrichten und starten

Voraussetzungen: Git-Checkout mit allen benötigten Projektdateien, die geprüfte Kombination **Node.js 24.22.0 / npm 11.19.1**, HTTPS-Zugriff auf die npm-Registry für die Installation und Schreibrechte für generierte Dateien. `.nvmrc` hält die Node-Version fest; die Programme müssen bereits vorhanden sein. Ein npm- oder Node-Installer ist nicht Teil des Projekts.

Im Repository-Hauptverzeichnis:

```sh
npm ci --ignore-scripts
npm run dev
```

Danach lokal `http://localhost:3000/` öffnen. Den Entwicklungsserver mit Strg+C beenden. `npm ci` verwendet das vorhandene `package-lock.json`; keine erzwungene Peer-Auflösung oder Lockfile-Neuerzeugung als Standardweg.

`.npmrc` enthält strenge Engine-/Peer-Prüfung und deaktivierte Installationsskripte. Der aktive Checkout liegt auf dem nativen Ubuntu-Dateisystem; `bin-links=false` ist entfernt und der reguläre npm-Symlink-Betrieb bestätigt. Die npm-Skripte rufen die lokalen CLIs weiterhin direkt mit Node auf.

## Prüfungen und statischer Export

Nach einem frischen Clone zunächst Entwicklung starten oder den Build ausführen: Next.js erzeugt dabei `next-env.d.ts` und seine Routentypen. Diese generierten Dateien werden nicht getrackt. Installation allein ist noch kein Nachweis, dass eine anschließende Typprüfung ohne diese Generierung funktioniert.

```sh
npm run build
npm run typecheck
npm run lint
npm run format:check
```

Der Build erzeugt den statischen Export unter `out/`, insbesondere `index.html`, `de-DE/index.html` und `en-EN/index.html`. Es gibt kein `start`-Skript; die Ausgabe wird mit einem statischen HTTP-Server ausgeliefert. Optional lokal mit vorhandenem Python 3:

```sh
python3 -m http.server 8080 --bind 127.0.0.1 --directory out
```

`npm run format` schreibt Formatierungsänderungen. Die allgemeine Formatprüfung respektiert `.prettierignore`; Dokumentation und Originalassets sind davon ausgenommen und müssen bei Dokumentationsaufträgen gesondert geprüft werden.

Florian hat den frischen Clone aus GitHub, die erfolgreiche Neuinstallation und den Entwicklungsstart auf Ubuntu bestätigt. Diese Schritte wurden in der Abschlusssitzung nicht wiederholt; die vier Qualitätsprüfungen wurden dort erneut ausgeführt. Der genaue [Nachweisstand](docs/development/open-items.md#tatsächlicher-nachweisstand) trennt beide Quellen.

## Bekannte technische Ausnahme und Git-Vorbereitung

ESLint 9.39.5 bleibt als ausdrücklich akzeptierte, zeitlich begrenzte EOL-Ausnahme erhalten. Der ESLint-10-Proof-of-Concept war installierbar und ausführbar, aber kein nachgewiesen gleichwertiger Ersatz. [Erkenntnisse und Gründe](docs/context/architecture.md#eslint-9-ausnahme-und-eslint-10-proof-of-concept), [priorisierte Migration](docs/development/open-items.md#priorisierte-technische-aufgaben).

Die explizite Deaktivierung der persistenten Turbopack-Dateisystem-Caches für Entwicklung und Build ist ebenfalls entfernt. Der anschließende Produktionsbuild ist im nativen Checkout erneut erfolgreich. Historische Shared-Folder-Probleme und die aktuellen Prüfgrenzen stehen in [architecture.md](docs/context/architecture.md#nativer-ubuntu-checkout-und-historische-shared-folder-probleme); eine Performance-Vergleichsmessung liegt nicht vor.

Das GitHub-Repository ist laut Florian öffentlich. Projekttexte sollen relative Repository-Pfade oder neutrale Beispiele verwenden und keine persönlichen absoluten Pfade enthalten. Eine Bereinigung aktueller Dateien entfernt bereits veröffentlichte Angaben nicht aus älteren Commits; die Git-Historie wurde nicht untersucht oder verändert.

Florian übernimmt Commit und Sicherung auf `dev`; `main` bleibt geschützt; keine automatischen Commits, Pushes oder Deployments durch die KI. Git muss Anwendung, Lockfile, erforderliche Konfigurationen/Skripte, Dokumentation und benötigte freigegebene Assets enthalten. Die zentrale [Git-/Modellregel](docs/context/architecture.md#git-und-3d-modelle) schützt benötigte Modelle und Originale vor pauschaler Bereinigung.

## Historisches Übergabepaket

[revision-notes.md](docs/development/revision-notes.md) beschreibt die frühere Dokumentations-/Archivkonsolidierung, nicht den aktuellen Implementierungsstand. Die historische Umstellung alter Promptpfade steht unter [Prompts verwenden](prompts/README.md#umstellung-aus-dem-alten-paket). Bestehende Git-Historie und Nutzeränderungen bewahren; kein neues Übergabepaket oder Generator darf sie überschreiben.

Jeder dateiverändernde Auftrag endet mit dem Kontext-/Prompt-Abgleich gemäß AGENTS.md.
