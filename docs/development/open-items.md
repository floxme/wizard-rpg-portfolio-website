# Offene Punkte und Nachweise

Stand: 16.10.2026. Phase 00 ist technisch initialisiert und dokumentiert. Die folgenden Restaufgaben und Nachweise sind ausdrücklich vom beschlossenen, noch nicht implementierten Produktumfang getrennt. Fragen gezielt vor dem betroffenen Schritt stellen.

## Priorisierte technische Aufgaben

### P1 – Verbindliche ESLint-10-Migration

ESLint 9.39.5 bleibt bewusst vorläufig als zeitlich begrenzte EOL-Ausnahme. Gründe, konkrete PoC-Versionen und Regelunterschiede: [architecture.md](../context/architecture.md#eslint-9-ausnahme-und-eslint-10-proof-of-concept); Entscheidung D48 im [Entscheidungsprotokoll](../decisions/decision-log.md). Keine dauerhafte Festlegung auf ESLint 9.

Sobald offiziell unterstützte, miteinander kompatible Versionen der benötigten Plugins verfügbar sind und die erforderliche Regelabdeckung nachgewiesen werden kann, die Migration ausdrücklich durchführen. Bei der nächsten beauftragten Toolchain-Prüfung erneut bewerten; kein Kalendertermin und keine automatische Hintergrundüberwachung beschlossen.

Vor dem Wechsel müssen mindestens alle Bedingungen erfüllt sein:

1. Keine erzwungene Paketauflösung, kein `--force` / `--legacy-peer-deps` und keine unzulässigen Peer-Konflikte.
2. Offiziell unterstützte Versionen der benötigten ESLint-Plugins.
3. Ausreichende React-, Hooks-, Next.js-, TypeScript-, Import- und Accessibility-Prüfungen.
4. Vergleich effektiver Regeln, Schweregrade und Optionen für die betroffenen Dateitypen.
5. Gezielte Tests mit korrekten und fehlerhaften Codebeispielen; Compiler-Ersatzprüfungen gesondert nachweisen.
6. Erfolgreiche Typprüfung, Lint-Prüfung, Formatprüfung und Produktionsbuild.
7. Keine unbegründeten Regelverluste oder stillschweigend entfernten Sicherheits-/Qualitätsprüfungen.

Insbesondere die nachgewiesenen Lücken bei display-name, jsx-key/Spread, doppelten Props, veralteten APIs und unescaped Entities klären. Einzelne erfolgreiche Compilerbeispiele sind kein vollständiger Ersatznachweis. Der Dokumentationsabschluss enthält keine Migration.

### P1 – Git-Sicherung, nativer Entwicklungsort und Clone-Prüfung

Florian übernimmt den ersten Implementierungs-Commit auf `dev` und die Sicherung. Danach aktives Repository vom VirtualBox Shared Folder auf das native Ubuntu-Dateisystem verlagern. Die vorhandenen Workarounds bleiben bis zu einer gesondert geprüften Änderung bestehen.

Am nativen Ort frischen Clone bzw. neu eingerichteten Checkout mit der dokumentierten Node-/npm-Kombination prüfen: `npm ci --ignore-scripts`, lokaler Entwicklungsstart, Next-Typgenerierung, Typ-/Lint-/Formatprüfung, Produktionsbuild und statische Routen. Dateisystemkompatibilität und Performance messen; Notwendigkeit von bin-links=false und deaktivierten persistenten Turbopack-Caches neu bewerten. Keine erfolgreiche Neuinstallation oder Verlagerung behaupten, solange sie nicht ausgeführt wurde.

### P1 – Echte Browserabnahme des vorhandenen Grundgerüsts

Nach Möglichkeit nach dem Ubuntu-Umzug: Sprache/Links, direkter Aufruf/Reload, 404, Tastatur/Fokus, Zoom, responsive Ansichten und tatsächliche Browserkonsole prüfen; Browser, Gerät und Ergebnis nennen. Keine vollständige Abnahme von A01/A02 oder A24/A26 allein aus dem bisherigen CLI-/HTTP-Nachweis ableiten. Weltwahl, gespeicherte Sprache und Portfolio-Unterseiten fehlen noch.

### Spätere technische Aufgaben

- Geeignete Verhaltenstest-Werkzeuge erst bei konkretem Funktionsbedarf auswählen; Vitest/Testing Library/Playwright sind nicht installiert.
- Nur benötigte, freigegebene Modelle samt Abhängigkeiten tracken. Obsolete Modelle erst nach Nutzungsprüfung und ausdrücklicher Freigabe gezielt bereinigen; zentrale [Git-/Modellregel](../context/architecture.md#git-und-3d-modelle) beachten.
- Modellintegration, praktische Animation, Performance und Veröffentlichungsrechte sind weiterhin offen.

## Fachliche Fragen nach Phase

| Zeitpunkt                | Offene Entscheidung / Prüfung                                                                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase 00 – Restprüfungen | Browserabnahme, frischer Clone, nativer Entwicklungsort und priorisierte ESLint-10-Migration wie oben; Versionen und Lockfile des Grundgerüsts sind bereits nachgewiesen. |
| Phase 1                  | Konkrete statische Unterpfade/History, Scrollbewahrung, responsive Breiten, Übersetzungsschlüssel.                                                                        |
| Phase 2                  | Maßstab, Kameraabstand, Kollisions-/Rampenparameter, Grenzen, Durchgänge, begehbare Flächen; Prototypmodell laden/abspielen.                                              |
| Phase 3                  | Kristall-Anker und sichere Annäherung, Drehung, Animationstiming inklusive Teleport/Positionierung; etwa eine Sekunde nur Startvorschlag.                                 |
| Phase 3                  | Ein-Klick-Pointer-Lock-Rückkehr in Zielbrowsern; Fokus-/Tabverlust und Fehlerpfade.                                                                                       |
| Phase 3–4                | Details verschachtelter Weltobjekt-/Portfolio-Rückkehr, Browser-Zurück; keine erneute Entscheidung über kristallfreien „Mehr erfahren“-Einstieg.                          |
| Phase 4                  | Minimap-Skalierung/Rotation für erkennbare Turmbewegung, weitere Defaultwerte und Schließen nach Übernehmen.                                                              |
| Phase 4–5                | Browser-/Gerätematrix, tatsächliche Leistungs-/Ladebudgets und automatische Qualitätsschwellen.                                                                           |
| Phase 6–7                | Konkrete kostenlose Assetkandidaten und Rechte; Meshy-Funktionen/Plan bei verbleibendem Bedarf; keine Kaufpflicht.                                                        |
| Phase 7                  | Finale Modell-/Stabdetails, fehlende Clips, Schriften, Icons, Audio, Illustrationen; Performance und Nutzungsrechte.                                                      |
| Phase 8                  | Bestätigte Skillnamen/-stufen, Bio, Zeiträume, Favoriten, DE/EN-Texte, E-Mail/GitHub/optionales LinkedIn, Verfügbarkeit.                                                  |
| Vor Release              | Domain/Hosting, reale Hostinglogs, erforderliche rechtliche Inhalte, Rechte/Attribution und reale Browsernachweise.                                                       |

## Optionale Erweiterungen nach Projektabschluss

### Optionale Windows-Desktop-Version (.exe)

Nach vollständiger Fertigstellung und Abnahme der Webanwendung kann geprüft werden, ob The Arcane Tower zusätzlich als Windows-Desktop-Anwendung angeboten werden soll.

- Gemeinsame Next.js-/React-Codebasis, keine zweite eigenständige Anwendungsimplementierung.
- Tauri 2 ist ein unverbindlicher Technologiekandidat, keine festgelegte Abhängigkeit.
- Machbarkeit, Zusatzaufwand, WebGL/Three.js, Pointer Lock, Offline-Start und Windows-Bereitstellung gegebenenfalls erst nach Projektabschluss prüfen.
- Umsetzung nur bei vertretbarem Aufwand.
- Bei unverhältnismäßigem Aufwand bleibt es ausschließlich bei der Webanwendung.

**Verbindliche Abgrenzung:** Diese Idee ist kein Bestandteil des MVP, keine Voraussetzung für den regulären Projektabschluss, kein Abnahmekriterium und darf weder eine bestehende Entwicklungsphase blockieren noch verzögern.

## Bereits entschieden, nicht erneut als offen behandeln

29 PNGs freigegeben; vier Portfolio-Hauptbereiche, sechs Interessen, vierstufige Skilldarstellung ohne sichtbare Prozentwerte; drei Career-Phasen; sechs echte Projekte pro Galerieseite maximal. Keine Skill-/Inhaltssperren, kein Lebenslauf-Download.

Kein Springen, keine Box-Sprünge, kein Kampf/Schaden; vereinfachte Rampen/Kollisionen mit sicheren Grenzen. Automatische Positionierung nur für Kristall, danach dort bleiben. Timing offen statt harter Sekundengrenze. B teleportiert und aktiviert ohne E. Aufgaben zählen erst nach erfolgreicher Interaktion/Inhaltsöffnung. „Mehr erfahren“ ohne Kristallteleport. Direkter HTML-Zugang ohne Welt-X. Settings-Entwurf mit Übernehmen/Verwerfen. HP/Mana dekorativ. Außen-Minimap mit auch innen beweglichem Marker, keine Innenraumkarte.

Stack beschlossen; installierte Grundgerüst-Versionen in [architecture.md](../context/architecture.md), spätere 3D-Versionen noch zu prüfen. Erst funktionaler Prototyp, dann finale Assets. Kostenlose passende Standardassets zuerst, Meshy nur für nötige Lücken. Keine automatischen Käufe, Commits, Pushes oder Deployments.

## Tatsächlicher Nachweisstand

Nachweise vom 16.10.2026. Quelle: tatsächliche Dateien, Paket-/Lockfile-Abgleich und die Ausgaben/Abschlussberichte der Initialisierung sowie des isolierten PoC in dieser Projektsitzung. Keine dauerhafte vollständige Testlogsuite im Repository behaupten.

| Prüfung                       | Tatsächliches Ergebnis und Grenze                                                                                                                                                                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Grundgerüst / Paketauflösung  | Next.js App Router, React, TypeScript, Tailwind, ESLint, Prettier eingerichtet; npm festgelegt; ein Root-Lockfile, Formatversion 3. Alle 14 direkten deklarierten, gelockten und installierten Versionen im Dokumentationsabschluss abgeglichen. |
| Typprüfung                    | Initialisierung erfolgreich; im Dokumentationsabschluss erneut `node node_modules/typescript/bin/tsc --noEmit --incremental false` erfolgreich, ohne neue tsbuildinfo-Datei.                                                                     |
| ESLint 9                      | Initialisierung erfolgreich; im Dokumentationsabschluss erneut `node node_modules/eslint/bin/eslint.js . --no-cache` erfolgreich. EOL-Ausnahme bleibt bestehen.                                                                                  |
| Formatprüfung                 | Initialisierung und erneuter Lauf des vorhandenen Prettier-Checks erfolgreich; dessen bestehende Ignore-Liste nimmt Dokumentation/Assets aus. Dokumentationslinks und -konsistenz sind separat zu prüfen.                                        |
| Produktionsbuild              | Bei Initialisierung mit deaktiviertem persistentem Turbopack-Cache erfolgreich. Im reinen Dokumentationsabschluss kein neuer Build und keine Anwendungskonfiguration geändert.                                                                   |
| Statischer Export             | `out/index.html`, `out/de-DE/index.html`, `out/en-EN/index.html` vorhanden; Routen, Links, HTML-lang de/de/en und fehlender Root-Refresh-Redirect im Dokumentationsabschluss erneut lesend kontrolliert.                                         |
| Lokales HTTP                  | Sprachlinks und HTML-Sprachangaben der drei Einstiegspunkte bei Initialisierung geprüft. Kein erneuter HTTP-Lauf oder echter Browsernachweis im Dokumentationsabschluss.                                                                         |
| ESLint-10-PoC                 | Strenge Installation und Ausführung erfolgreich, konkrete React-Abweichungen nachgewiesen, keine Migration. Details zentral in architecture.md. Temporäre Umgebung vollständig bereinigt; Hauptprojekt dabei unverändert.                        |
| Browser / Portfolio / 3D      | Vollständige Browserabnahme fehlt; Portfoliofunktionen, Welt, Canvas und 3D-Integration nicht implementiert. Kein Rendering-/Animations-/Performance- oder vollständiger Rechtenachweis.                                                         |
| Frischer Clone / Ubuntu-Umzug | Noch nicht ausgeführt. Installations- und Startanleitung vorhanden; Reproduzierbarkeit aus einem frischen Clone bleibt praktisch zu prüfen.                                                                                                      |

Die ursprüngliche Dokumentations-/Archivprüfung (33 ursprüngliche Markdown-Dateien, 29 PNGs visuell, eine GLB strukturell mit Running/Walking) bleibt historisch in [revision-notes.md](revision-notes.md). Sie ist kein aktueller App-Status und keine praktische Modellabnahme.

Nach Änderungen abschließend Kontext/Prompts abgleichen. Noch nicht autorisierte Anpassungen konkret vorschlagen und vor dem Schreiben bestätigen lassen.
