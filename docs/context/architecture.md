# Architektur

Stand: 16.10.2026. Der Produktstack ist ausdrücklich beschlossen. Nur konkrete Versionen und gegebenenfalls begründete Ergänzungen sind beim Setup zu prüfen; keine pauschale erneute Stackauswahl. Noch keine Pakete installiert oder Anwendung getestet.

## Beschlossener Stack

| Bereich | Technik |
|---|---|
| Anwendung | Next.js App Router, React, TypeScript |
| 3D | Three.js, React Three Fiber, Drei |
| UI | Tailwind CSS, eigene Komponenten |
| Übergänge | GSAP für koordinierte Kamera-/Kristallabläufe; vorhandene Modellclips für Charakteranimation |
| Inhalte | Lokale strukturierte Dateien und Übersetzungen |
| Auslieferung | Statischer Export als Ziel |

Kein eigenes Backend, keine Datenbank, kein SAP CAP für dieses private Projekt, keine NestJS-/Prisma-/Docker-Infrastruktur auf Vorrat. Frühere Backend-Vorschläge sind nicht Teil des beschlossenen Stacks. Keine zusätzliche UI-/Animationsbibliothek allein aus älteren Vorschlagslisten übernehmen.

## Technisch geprüft, nicht als Anwendung getestet

Next.js unterstützt statischen Export über `output: 'export'`. Explizite Sprachsegmente lassen sich mit App-Router-Routen und vorab erzeugten Parametern abbilden. Kein serverseitiges Spracherkennungs-Middleware nötig. Dynamische Pfade beim Build vollständig erzeugen. Serverabhängige Funktionen vermeiden. Bilder für statische Auslieferung vorbereiten; nicht auf den standardmäßigen serverseitigen Bildoptimierer vertrauen.

Die frühere Vorprüfung nannte Node.js mindestens 20.9; das ist keine aktuelle Versionsfreigabe. React Three Fiber v9 gehört zu React 19; v8 zu React 18. Als Kandidat für die Initialisierung eignet sich eine aktuelle stabile Next.js-Version mit React 19 und Fiber 9, passenden Drei-/Three-Versionen. Das ist keine vollständig geprüfte Versionsmatrix. Bei Initialisierung konkrete peerDependencies, Node-Version, TypeScript, Tailwind und GSAP-Versionen prüfen, Lockfile erzeugen, Build und Smoke-Test ausführen. Keine Alpha/Canary-Version ohne begründeten Bedarf. Ein publizierter Dokumentationsstand ersetzt keinen installierten Kompatibilitätstest.

## Umsetzungsvorschlag: Modulgrenzen

- `src/app/`: statische Routen, Layouts und Metadaten.
- `src/features/world/`: Szene, Bewegung, Kollisionen, Kamera, Hotspots.
- `src/features/portfolio/`: gemeinsame Portfolio-Komponenten und Navigation.
- `src/features/settings/`: Sprache, Audio, Qualität, reduzierte Bewegung.
- `src/content/`: typisierte Daten mit stabilen IDs; keine React-Abhängigkeit.
- `src/i18n/`: URL-/Sprachzuordnung und Texte.
- `src/lib/`: tatsächlich gemeinsam benötigte Hilfen, keine Sammelablage.
- `public/assets/`: freigegebene optimierte Runtime-Dateien.

Ordnernamen sind Vorschläge. Kein großes generisches Framework, ECS oder Physikpaket ohne nachgewiesenen Bedarf. Für den ersten Prototyp einfache Bewegung und begrenzte Kollisionen prüfen.

## Routing / Zustandsbewahrung

Root und beide Präfixe explizit bauen. Vorschlag: feste HTML-Rubriken unter dem jeweiligen Sprachpräfix, Projektdetails vorab generieren; exakte Unterpfade bei Einrichtung festlegen. `trailingSlash: true` passend zu gewünschten URLs prüfen. 404, direkte Aufrufe und Reloads am statischen Export testen.

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

Die genannten Ordner sind ein Umsetzungsvorschlag, keine bereits vorhandene Anwendung. Zusätzlich gemeinsame UI-Primitiven unter `src/components/ui/` und zentrale Designtokens unter einem passenden Styles-Bereich prüfen. Keine leeren Framework-Gerüste auf Vorrat.

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
