# The Arcane Tower – Wizard RPG Portfolio

Persönliches Entwicklerportfolio von Florian Metzger: freiwillige Third-Person-Fantasywelt und vollständiger HTML-Zugang als Produktziel. Stand: **16.10.2026**.

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

Typecheck, Linting, Formatprüfung und Produktionsbuild waren erfolgreich; Sprachlinks und HTML-Sprachangaben wurden lokal per HTTP geprüft. Das ist keine vollständige Browser-, Barrierefreiheits- oder Produktabnahme. Einzelne Nachweise und Prüfgrenzen stehen in [open-items.md](docs/development/open-items.md).

## Lokal einrichten und starten

Voraussetzungen: Git-Checkout mit allen benötigten Projektdateien, die geprüfte Kombination **Node.js 24.22.0 / npm 11.19.1**, HTTPS-Zugriff auf die npm-Registry für die Installation und Schreibrechte für generierte Dateien. `.nvmrc` hält die Node-Version fest; die Programme müssen bereits vorhanden sein. Ein npm- oder Node-Installer ist nicht Teil des Projekts.

Im Repository-Hauptverzeichnis:

```sh
npm ci --ignore-scripts
npm run dev
```

Danach lokal `http://localhost:3000/` öffnen. Den Entwicklungsserver mit Strg+C beenden. `npm ci` verwendet das vorhandene `package-lock.json`; keine erzwungene Peer-Auflösung oder Lockfile-Neuerzeugung als Standardweg.

`.npmrc` enthält strenge Engine-/Peer-Prüfung und deaktivierte Installationsskripte. Wegen des VirtualBox Shared Folders bleibt `bin-links=false` aktiv. Die npm-Skripte rufen die lokalen CLIs direkt mit Node auf und benötigen keine `node_modules/.bin`-Symlinks.

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

Eine Neuinstallation und ein Entwicklungsstart aus einem frischen Clone wurden noch nicht durchgeführt. Die obigen Befehle beschreiben den vorgesehenen Ablauf, keinen bereits bestandenen Clone-Test.

## Bekannte technische Ausnahmen und nächste Sicherung

ESLint 9.39.5 bleibt als ausdrücklich akzeptierte, zeitlich begrenzte EOL-Ausnahme erhalten. Der ESLint-10-Proof-of-Concept war installierbar und ausführbar, aber kein nachgewiesen gleichwertiger Ersatz. [Erkenntnisse und Gründe](docs/context/architecture.md#eslint-9-ausnahme-und-eslint-10-proof-of-concept), [priorisierte Migration](docs/development/open-items.md#priorisierte-technische-aufgaben).

Die persistenten Turbopack-Dateisystem-Caches für Entwicklung und Build sind deaktiviert. Beide Shared-Folder-Workarounds bleiben zunächst bestehen. Nach Sicherung in Git soll das aktive Repository auf das native Ubuntu-Dateisystem umziehen; anschließend Installation, Start, Performance und Notwendigkeit der Workarounds erneut prüfen. Die echte Browserabnahme soll nach Möglichkeit dort erfolgen. Der Umzug ist noch nicht durchgeführt.

Florian übernimmt Commit und Sicherung auf `dev`; keine automatischen Commits, Pushes oder Deployments durch die KI. Git muss Anwendung, Lockfile, erforderliche Konfigurationen/Skripte, Dokumentation und benötigte freigegebene Assets enthalten. Die zentrale [Git-/Modellregel](docs/context/architecture.md#git-und-3d-modelle) schützt benötigte Modelle und Originale vor pauschaler Bereinigung.

## Historisches Übergabepaket

[revision-notes.md](docs/development/revision-notes.md) beschreibt die frühere Dokumentations-/Archivkonsolidierung, nicht den aktuellen Implementierungsstand. Die historische Umstellung alter Promptpfade steht unter [Prompts verwenden](prompts/README.md#umstellung-aus-dem-alten-paket). Bestehende Git-Historie und Nutzeränderungen bewahren; kein neues Übergabepaket oder Generator darf sie überschreiben.

Jeder dateiverändernde Auftrag endet mit dem Kontext-/Prompt-Abgleich gemäß AGENTS.md.
