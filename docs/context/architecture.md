# Architektur

Stand: 17.10.2026. Der Produktstack bleibt ausdrücklich beschlossen. Das minimale Grundgerüst von Phase 00 ist implementiert und im [Nachweisstand](../development/open-items.md#tatsächlicher-nachweisstand) geprüft. Spätere Architekturpatterns sind weiterhin Sollzustand; keine vollständige Produkt- oder Browserabnahme.

## Beschlossener Stack

| Bereich      | Technik                                                                                      |
| ------------ | -------------------------------------------------------------------------------------------- |
| Anwendung    | Next.js App Router, React, TypeScript                                                        |
| 3D           | Three.js, React Three Fiber, Drei                                                            |
| UI           | Tailwind CSS, eigene Komponenten                                                             |
| Übergänge    | GSAP für koordinierte Kamera-/Kristallabläufe; vorhandene Modellclips für Charakteranimation |
| Inhalte      | Lokale strukturierte Dateien und Übersetzungen                                               |
| Auslieferung | Statischer Export als Ziel                                                                   |

Kein eigenes Backend, keine Datenbank, kein SAP CAP für dieses private Projekt, keine NestJS-/Prisma-/Docker-Infrastruktur auf Vorrat. Frühere Backend-Vorschläge sind nicht Teil des beschlossenen Stacks. Keine zusätzliche UI-/Animationsbibliothek allein aus älteren Vorschlagslisten übernehmen.

## Phase 00: installierter Stand

Am 16.10.2026 anhand von `package.json`, `package-lock.json` und installierten Paketmanifesten abgeglichen: alle 14 direkten Abhängigkeiten stimmen überein. Geprüfte Werkzeuge: **Node.js 24.22.0 und npm 11.19.1**. `.nvmrc` hält Node fest; `packageManager` benennt npm. Das Lockfile hat Formatversion 3; im Projektroot existiert genau ein npm-Lockfile. Dies sind verifizierte Projektversionen, keine Behauptung über dauerhaft aktuelle Releases.

| Zweck            | Paket                                 | Installiert und gelockt         |
| ---------------- | ------------------------------------- | ------------------------------- |
| Anwendung        | Next.js                               | 16.4.2                          |
| UI               | React / React DOM                     | jeweils 19.3.1                  |
| Typprüfung       | TypeScript                            | 6.0.3                           |
| Styles           | Tailwind CSS / `@tailwindcss/postcss` | jeweils 4.3.3                   |
| CSS-Verarbeitung | PostCSS                               | 8.5.30                          |
| Lint             | ESLint                                | 9.39.5, befristete EOL-Ausnahme |
| Next-Lintregeln  | `eslint-config-next`                  | 16.4.2                          |
| Formatierung     | Prettier / `eslint-config-prettier`   | 3.9.10 / 10.1.8                 |
| Node-Typen       | `@types/node`                         | 24.19.2                         |
| React-Typen      | `@types/react` / `@types/react-dom`   | jeweils 19.3.0                  |

Lint-Abhängigkeiten im vorhandenen Lockfile: `@next/eslint-plugin-next@16.4.2`, `eslint-plugin-react@7.37.5`, `eslint-plugin-react-hooks@7.1.1`, `eslint-plugin-import@2.32.0`, `eslint-plugin-jsx-a11y@6.10.2`, `typescript-eslint` samt Parser/Plugin `8.71.2`, Resolver Node `0.3.10` und TypeScript `3.10.1`.

Vorhanden sind `src/app/` mit zwei Root-Layouts, `src/components/entry-frame.tsx`, `src/i18n/`, globale Tailwind-Styles sowie Next-/TypeScript-/PostCSS-/ESLint-/Prettier-Konfigurationen. Gemeinsame Sprachtexte und Locale-Typen sind vorhanden, noch kein fachliches Portfolio-Inhaltsmodell.

Three.js, React Three Fiber, Drei und GSAP sind beschlossen, aber nicht installiert oder integriert. Deren konkrete spätere Versionen und Peer-Abhängigkeiten vor Einbindung erneut prüfen. Fiber 9 ist der React-19-Zweig; dies ersetzt keinen Integrationstest.

## Nativer Ubuntu-Checkout und historische Shared-Folder-Probleme

Der aktive Entwicklungscheckout liegt jetzt auf einem nativen Linux-Dateisystem unter Ubuntu, nicht auf `vboxsf`. Arbeitsort und Branch `dev` wurden in der Abschlusssitzung erneut geprüft; persönliche absolute Verzeichnis- und Mountpfade werden nicht dokumentiert.

Die Initialisierung erfolgte zuvor in einem VirtualBox Shared Folder. Historisch beobachtet wurden:

- npm-Symlinks scheiterten mit `EPERM`; der damalige Workaround war `bin-links=false` in `.npmrc`.
- Der persistente Turbopack-Dateisystem-Cache scheiterte beim Verzeichnis-Sync mit `EINVAL`; damals wurden `experimental.turbopackFileSystemCacheForDev` und `experimental.turbopackFileSystemCacheForBuild` in `next.config.ts` auf `false` gesetzt. Der ursprüngliche Produktionsbuild gelang damit.

Beide Workarounds sind aus der aktiven Konfiguration entfernt. In der Abschlusssitzung erneut geprüft: kein `bin-links=false`, effektiver npm-Wert `bin-links=true`, gültige TypeScript-/ESLint-Symlinks unter `node_modules/.bin`, keine explizite Turbopack-Cache-Deaktivierung sowie erfolgreiche Typ-, Lint-, Format- und Produktionsbuild-Prüfung. Das ist kein Nachweis einer bestimmten Cache-Trefferquote oder einer Performance-Verbesserung.

Frischer GitHub-Clone, sauberer Status direkt nach dem Clone, npm-Neuinstallation, manueller Symlink-Test, Entwicklungsstart und Browserdarstellung der drei Einstiegspunkte wurden von Florian aus dem bisherigen Verlauf bestätigt. Keine erneute Installation oder Browserprüfung in dieser Abschlusssitzung. Quellen und einzelne Prüfgrenzen stehen zentral im [Nachweisstand](../development/open-items.md#tatsächlicher-nachweisstand). Vollständige Browser-/Accessibility-Abnahme und Performance-Messungen bleiben offen.

`.npmrc` hält weiterhin exakte Versionen, strenge Engines/Peers und deaktivierte Installationsskripte fest. Kein `--force` oder `--legacy-peer-deps`. Die direkten Node-CLI-Aufrufe der npm-Skripte bleiben unverändert. Der Wrapper `scripts/next.mjs` deaktiviert Next-Telemetrie für Entwicklung und Build. Start-/Prüfbefehle und Reihenfolge nach einem Clone: [Root-README](../../README.md#lokal-einrichten-und-starten).

## Entwicklungs- und Testumgebungen

Ubuntu in VirtualBox auf Windows bleibt primäre Entwicklungsumgebung mit VS Code/Codex, nativem Checkout und Chrome; Windows erhält einen eigenständigen Checkout für manuelle Grafiktests in Opera. Dessen Einrichtung ist vor Phase 01 noch offen. Die von Florian berichteten VM-Grafikgrenzen, Sicherheitsgrenze, Git-Übergabe, betriebssystemspezifische Installation und mögliche spätere Testarchitektur stehen zentral im [Testworkflow](../development/testing-workflow.md).

Entwicklung auf `dev`, `main` geschützt; keine eigenständige Git-Veröffentlichung durch KI. Keine gemeinsam bearbeiteten Projektdateien oder geteilten `node_modules` zwischen Betriebssystemen. Vorhanden sind Typ-/Lint-/Format-/Build-Prüfungen; kein allgemeines Testskript und kein eingerichtetes Browser-Testframework. Keine CI-/Runner- oder Windows-Zugriffsinfrastruktur aus dieser Architektur ableiten. Produktstack, Paketversionen und ESLint-Ausnahme bleiben unverändert.

## ESLint-9-Ausnahme und ESLint-10-Proof-of-Concept

**Bestätigte Entscheidung:** ESLint 9.39.5 bleibt vorläufig erhalten, obwohl ESLint 9 seit 06.08.2026 offiziell nicht mehr gewartet wird. Dies ist eine bewusst akzeptierte, zeitlich begrenzte technische Ausnahme, keine dauerhaft gewünschte Architektur. Die Migration ist ausdrücklich priorisiert und bei erfüllten [Bedingungen](../development/open-items.md#priorisierte-technische-aufgaben) durchzuführen; ein Kalendertermin ist nicht festgelegt.

Die ursprüngliche offizielle Sammelkonfiguration schließt ESLint 10 zwar selbst ein (`eslint: >=9.0.0`), ihre stabilen React-/Import-/Accessibility-Abhängigkeiten akzeptierten laut Metadatenprüfung vom 16.10.2026 aber nur ESLint bis 9: React 7.37.5 bis `^9.7`, Import 2.32.0 und jsx-a11y 6.10.2 bis `^9`. Next.js dokumentiert diese Peer-Grenze trotz eigener Laufzeit-Kompatibilitätsanpassungen. Keine Peer-Prüfung abschwächen.

Der begrenzte isolierte PoC vom 16.10.2026 verwendete ESLint **10.13.0** mit dem offiziellen Next-Plugin **16.4.2**, Hooks **7.1.1**, typescript-eslint **8.71.2** und folgenden Alternativen:

| Bereich       | Getestetes Paket                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------ |
| React         | [`@eslint-react/eslint-plugin@5.28.0`](https://registry.npmjs.org/@eslint-react%2feslint-plugin) |
| Import        | [`eslint-plugin-import-x@4.17.1`](https://registry.npmjs.org/eslint-plugin-import-x)             |
| Accessibility | [`eslint-plugin-jsx-a11y-x@0.2.0`](https://registry.npmjs.org/eslint-plugin-jsx-a11y-x)          |

TypeScript 6.0.3, React/React DOM 19.3.1, deren Typdefinitionen 19.3.0, globals 16.4.0 und eslint-config-prettier 10.1.8 ergänzten den Test. Installation mit strenger Peer-/Engine-Prüfung und deaktivierten Installationsskripten: 198 Pakete, Exitcode 0; 56 vorhandene Peer-Beziehungen ohne Konflikt, nur eine ESLint-Engine (10.13.0), keine erzwungene Auflösung.

Die eigene ESM-Flat-Konfiguration nutzte direkte Plugins, den TypeScript-Parser, ausdrücklich zugeordnete React-Regeln, gleiche Import-/Accessibility-Optionen, Prettier und bisherige Ausschlüsse. 22 Next-, 16 Hooks-, 20 TypeScript-, sechs Accessibility-Regeln und eine Import-Regel konnten in ihren Stufen/Optionen erhalten bzw. unter neuem Namespace konfiguriert werden. TS-/TSX-Konfiguration: 86 aktive Regeln zuvor, 83 im Kandidaten; Regelzahlen sind wegen Aufteilung/Zusammenführung kein Gleichwertigkeitsbeweis.

Getestet wurden 87 gezielte Quellbeispiele auf beiden Konfigurationen, zwölf Compilerprüfungen und zehn bestehende Projektdateien. Die Projektdateien linteten in beiden Konfigurationen ohne Meldungen. Gezielte Next-/Hooks-/TypeScript-/Import-/Accessibility-Beispiele bestätigten die getesteten Prüfungen einschließlich `alt-text` für `Image`.

| Bisherige React-Prüfung                                                                                               | Tatsächlicher PoC-Befund                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `display-name`                                                                                                        | Anonymes memo erkannt; anonyme Standardkomponente verliert den React-Fehler und behält nur eine Import-Warnung.                                |
| `jsx-key`                                                                                                             | Fehlender expliziter Key erkannt; Spread-Key wird vom Ersatz nicht wie zuvor beanstandet, Fragmente dagegen strenger.                          |
| `jsx-no-duplicate-props`                                                                                              | Lint-Prüfung entfällt; getestetes TSX durch TS17001 erkannt, zusätzliches JSX-Beispiel ohne Meldung.                                           |
| `no-deprecated`                                                                                                       | Getesteter Lifecycle erkannt; React.createClass vom Ersatz nicht beanstandet.                                                                  |
| `no-unescaped-entities`                                                                                               | Getestetes unescaped Apostroph weder durch Kandidaten noch TypeScript beanstandet: Prüfverlust.                                                |
| `jsx-no-undef`                                                                                                        | TSX-Beispiel durch TS2304; JavaScript-Beispiel durch zusätzliches no-undef erkannt.                                                            |
| `no-is-mounted` / `no-string-refs` / `require-render-return`                                                          | Lint-Prüfungen entfallen; konkrete Compilerbeispiele durch TS2339 / TS2322 / TS2416 erkannt. Keine vollständige Gleichwertigkeit nachgewiesen. |
| `jsx-uses-react` / `jsx-uses-vars`                                                                                    | Vier ergänzende TSX-/JSX-Beispiele zur Verwendungserkennung stimmten überein.                                                                  |
| Kommentartext, children-Prop, gefährliches HTML mit Kindern, direkte State-Mutation, findDOMNode, render-Rückgabewert | Jeweilige positive/negative Ersatzbeispiele stimmten überein; keine pauschale Gleichwertigkeitsgarantie.                                       |

Ein erster Lauf mit dem zusätzlich untersuchten `no-implicit-key` scheiterte an fehlenden Typinformationen. Der abschließende Kandidat nutzte die syntaktische Regel `no-missing-key`; deren Unterschiede blieben ausdrücklich offen. Kein Aufbau eigener Kompatibilitätsregeln oder umfangreicher zusätzlicher Infrastruktur.

Ergebnis: installierbarer und ausführbarer ESLint-10-Kandidat, aber kein nachgewiesen vollständig gleichwertiger Ersatz. Direkte Konfiguration, geänderte Semantik und Aufteilung zwischen Lint/Compiler verursachen zusätzlichen Pflegebedarf; Unterstützung einzelner Pakete ist keine Gesamtfreigabe durch Next.js/Meta. Keine Migration des Hauptprojekts durchgeführt.

Nachweisquelle sind die ausgeführten Prüfungen und Abschlussberichte dieser Projektsitzung vom 16.10.2026. Die eigene temporäre Testumgebung wurde vollständig entfernt; 100 Projektdateien einschließlich aller Originalassets waren danach per Pfad-/SHA-256-Abgleich unverändert. Testtreiber und Rohberichte sind deshalb nicht als dauerhafte Testsuite im Repository vorhanden. Ein vollständiger App-Build oder eine Browserabnahme war nicht Bestandteil des PoC.

Offizielle Quellen, geprüft am 16.10.2026: [ESLint-Supportstatus](https://eslint.org/version-support/), [Next.js ESLint-Konfiguration und direkter Plugin-Einsatz](https://nextjs.org/docs/app/api-reference/config/eslint), [ESLint React](https://github.com/Rel1cx/eslint-react), [Import-X](https://github.com/un-ts/eslint-plugin-import-x), [Accessibility-X](https://github.com/eslint-community/eslint-plugin-jsx-a11y-x). Die konkreten Paketmetadaten wurden für die vorangegangene Versionsprüfung aus [registry.npmjs.org](https://registry.npmjs.org/) gelesen; im Dokumentationsabschluss wurden keine Pakete aktualisiert.

## Git und 3D-Modelle

Diese Git-Verwaltungsregel ergänzt die fachliche [Assetquelle](assets.md), ohne Modell- oder Rechtefreigaben zu erweitern:

- Nur tatsächlich benötigte und freigegebene 3D-Modelle sowie ihre erforderlichen Abhängigkeiten im aktiven Repository tracken. Benötigte Dateien müssen nach einem frischen Clone verfügbar sein.
- Keine globale pauschale Ignorierung sämtlicher GLB-/GLTF-Dateien. Der bestehende Schutz neuer Rohmodelle unter `assets/source/` hat eine gezielte Ausnahme für das benötigte Magier-Prototypmodell; weitere benötigte, freigegebene Quellen gezielt berücksichtigen. Laufzeitmodelle unter `public/assets/` werden dadurch nicht pauschal ausgeschlossen.
- Vor einer Bereinigung tatsächliche Verwendung einschließlich benötigter Texturen/Abhängigkeiten prüfen. Veraltete, überflüssige oder ungenutzte Modelle später gezielt bereinigen, erst nach ausdrücklicher Freigabe.
- Bereits getrackte Dateien verschwinden nicht durch neue Ignore-Regeln. Eine Entfernung aus der Git-Verfolgung muss bewusst und nachvollziehbar erfolgen.
- Originalassets nicht versehentlich löschen, verändern, verschieben, umbenennen oder überschreiben. Große neue Originale und Git LFS benötigen weiterhin eine gesonderte Entscheidung gemäß AGENTS.md.

Im geprüften Stand ist das Magiermodell `assets/source/characters/wandering-rune-mage/wandering-rune-mage_v1_rigged_walk.glb` bereits getrackt (24.685.140 Bytes), noch nicht in die App integriert. Seine Verwendung als späteres Prototypmodell ist freigegeben; aus der derzeit fehlenden App-Referenz folgt kein Löschauftrag. In Phase 00 werden keine Modelle entfernt oder aus der Verfolgung gelöst.

## Statischer Export und spätere Integration

Implementiert sind `output: 'export'`, `trailingSlash: true` und React Strict Mode. Root zeigt eine echte Sprachwahl ohne Redirect; `generateStaticParams` erzeugt die beiden festen Locale-Segmente, `dynamicParams=false` begrenzt sie. Die getrennten Root-Layouts geben HTML-lang de / de / en aus; das öffentliche URL-Segment en-EN bleibt unverändert und wird intern auf en abgebildet. Es gibt keine serverseitige Spracherkennungs-Middleware und keinen Canvas im Grundgerüst.

Weitere dynamische Pfade beim Build vollständig erzeugen, serverabhängige Funktionen vermeiden. Bilder für statische Auslieferung vorbereiten; nicht auf den standardmäßigen serverseitigen Bildoptimierer vertrauen.

Die historische Node-Mindestangabe 20.9 ist keine aktuelle Projektfreigabe; maßgeblich ist die oben geprüfte Werkzeugkombination. Bei späteren Paketänderungen erneut konkrete Engines/Peers und Verhalten prüfen. Keine Alpha/Canary-Version ohne begründeten Bedarf. Publizierte Dokumentation ersetzt keinen installierten Kompatibilitätstest.

## Umsetzungsvorschlag: Modulgrenzen

- `src/app/`: statische Routen, Layouts und Metadaten.
- `src/features/world/`: Szene, Bewegung, Kollisionen, Kamera, Hotspots.
- `src/features/portfolio/`: gemeinsame Portfolio-Komponenten und Navigation.
- `src/features/settings/`: Sprache, Audio, Qualität, reduzierte Bewegung.
- `src/content/`: typisierte Daten mit stabilen IDs; keine React-Abhängigkeit.
- `src/i18n/`: URL-/Sprachzuordnung und Texte.
- `src/lib/`: tatsächlich gemeinsam benötigte Hilfen, keine Sammelablage.
- `public/assets/`: freigegebene optimierte Runtime-Dateien.

`src/app/`, `src/i18n/` und ein kleiner gemeinsamer Komponentenbereich sind bereits vorhanden. Die übrigen Modulgrenzen und Ordnernamen bleiben Vorschläge für spätere Phasen. Kein großes generisches Framework, ECS oder Physikpaket ohne nachgewiesenen Bedarf. Für den ersten Prototyp einfache Bewegung und begrenzte Kollisionen prüfen.

## Routing / Zustandsbewahrung

Root und beide Präfixe werden bereits explizit statisch gebaut. Weitere feste HTML-Rubriken unter dem jeweiligen Sprachpräfix und vorab generierte Projektdetails bleiben Vorschläge; exakte Unterpfade in Phase 01 festlegen. `trailingSlash: true` ist eingerichtet. Weitergehende 404-, Reload-, History- und Browserprüfungen bleiben offen.

Die 3D-Szene erst beim Welt-Einstieg laden. HTML-Inhalte müssen ohne Canvas zugänglich bleiben. Ein Sprachwechsel darf keinen unbeabsichtigten World-Remount mit Spawn-Reset auslösen. Vorschlag: langlebiger Client-State außerhalb des wechselnden Sprachsegments bzw. explizite Übergabe des flüchtigen Weltzustands. Nur während derselben Sitzung, keine dauerhafte Positionsspeicherung.

`window`, Audio, WebGL und localStorage ausschließlich im Browser verwenden. Hydration darf nicht an gespeicherten Einstellungen scheitern. Lokale Daten nach Schema/Typen validieren, Migrationen/Fallbacks für Einstellungen vorsehen. Kein Kontosystem oder Fernspeichern.

## Animation und Lifecycle

Bewegung/Animationsmixer, Übergänge und UI getrennt steuern. GSAP-Timelines bei Wechsel und Unmount sauber beenden; Events und Ressourcen freigeben. Keine React-State-Updates für jedes Animationsframe, wenn Refs/Renderer-State reichen. Assets teilen, mehrfaches Laden vermeiden.

## Offizielle Quellen der Vorprüfung

Abgerufen am 15.10.2026; vor Installation erneut Versionsanforderungen prüfen:

- [Next.js Static Export](https://nextjs.org/docs/app/guides/static-exports)
- [Next.js Internationalization](https://nextjs.org/docs/app/guides/internationalization)
- [Next.js Installation](https://nextjs.org/docs/app/getting-started/installation)
- [React Three Fiber – Versionzuordnung](https://r3f.docs.pmnd.rs/)
- [Drei PerformanceMonitor](https://drei.docs.pmnd.rs/performances/performance-monitor)
- [MDN requestPointerLock](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestPointerLock)

Pointer Lock muss aus einer geeigneten Nutzeraktion beantragt werden; Browserzustand und Fehler beobachten. Dieser Mechanismus ermöglicht den vorgesehenen Schließen-Klick, garantiert ihn aber nicht für jeden Browserzustand. Früh testen, keine zusätzliche Eingabe heimlich einführen.

## Ergänzte Modulgrenzen und wiederverwendbare Patterns

Die noch nicht vorhandenen Feature-/Inhaltsmodule bleiben Umsetzungsvorschläge; das bestehende Phase-00-Grundgerüst ist oben abgegrenzt. Zusätzlich gemeinsame UI-Primitiven unter `src/components/ui/` und zentrale Designtokens unter einem passenden Styles-Bereich prüfen. Keine leeren Framework-Gerüste auf Vorrat.

- Ein Portfolio-Layout und dieselben Daten für HTML-Einstieg und Welt-Portfolio. Einstiegskontext (HTML/Kristall/Weltobjekt) getrennt von aktiver Inhalts-ID.
- Eine Navigationdefinition für Desktop, Mobile und Quick Navigation; offene Gruppen nicht mit aktiver Seite verwechseln.
- Optional zusammengesetzte Interest-/Project-Detailmodule, gemeinsame Karten, Kontaktkarten, Dialograhmen und Career Timeline.
- Zentraler Skill-/Interessen-/Projektdatenbestand; echte Projekte und dekorative Platzhalter trennen, Pagination daraus ableiten.
- Ein Interaktionskoordinator und klare Zuständigkeit für Kamera/Figur/UI. Zustände, Übergangsschutz, Abbruch und Fehlerpfade explizit; keine zusätzliche State-Machine-Bibliothek zwingend voraussetzen.
- Settings-Entwurf getrennt von aktiven/persistierten Werten. X/Verwerfen muss wirksam rückgängig machen; Speicherfehler getrennt behandeln.
- Gemeinsame Welt-/Minimap-Positionen und Interaktions-IDs. Dekorative Geometrie und Kollisionen getrennt, vereinfachte Rampen für Stufen.
- Gemeinsame Material-/Assetressourcen, cachebewusste Ladeplanung, Instanzen für geeignete Wiederholungen prüfen. Kein blindes Freigeben noch geteilter Ressourcen.
- Zustandswiederherstellung nach Sprache, Fokusverlust und UI-Wechsel; Scroll- und Fokuszuständigkeit mit definierten Overlay-Ebenen.

Details: `ui-and-navigation.md`, `gameplay-and-interactions.md`, `world-and-design.md` und `accessibility-and-performance.md` sind die jeweiligen Fachquellen.

## Offiziell dokumentierte Grenzen – Abgleich 16.10.2026

Diese Hinweise sind keine nachgewiesenen Projektbugs. Bei Installation offizielle Dokumentation der konkreten Versionen erneut prüfen und echte Ergebnisse berichten.

**Pointer Lock:** Nutzeraktion und Browserzustand berücksichtigen; Erfolg über `pointerLockElement`/`pointerlockchange`, Fehler über `pointerlockerror` bzw. unterstützte Rückgabe behandeln. Promise- und Nicht-Promise-Varianten nicht blind gleich behandeln. Browser-Unlock nicht umgehen; Ein-Klick-Rückkehr früh auf normaler Website prüfen. Quelle: https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API

**React-Lifecycle:** Strict Mode führt in der Entwicklung zusätzliche Prüfungen einschließlich Effect-Setup/Cleanup aus. Tastatur-/Pointer-Listener, Animationen, Timer und Ressourcen benötigen sauberes Cleanup. Doppelte Abläufe beheben, nicht durch Abschalten der Prüfung verdecken. Quelle: https://react.dev/reference/react/StrictMode

**Next.js Static Export:** Auch Client Components werden beim Build vorgerendert. `use client` allein macht Browser-APIs nicht beim Rendern verfügbar; `window`, `localStorage`, WebGL und Audio nur browsergerecht initialisieren. Dynamische Exportpfade benötigen vorab erzeugbare Parameter. Default-Server-Bildoptimierung und Intercepting Routes werden im dokumentierten statischen Export nicht unterstützt. Das Welt-Portfolio daher nicht ungeprüft als Intercepting-Route-Modal planen. Reguläre statische Routen mit gemeinsamem UI/Clientzustand als Ansatz prüfen. Quelle: https://nextjs.org/docs/app/guides/static-exports

**Frühe Prüftore:** tatsächliche Versionsmatrix/peerDependencies/Lockfile, Produktionsbuild und Export-Reloads, HTML ohne 3D-Laden, Pointer-Lock-Rückkehr, Sprachwechsel ohne Spawn-Reset und Listener-/Animationscleanup. Versionsspezifische Bugs erst nach installierter Matrix aus offiziellen Issues/Release Notes ableiten; keine erfundene Bugliste.
