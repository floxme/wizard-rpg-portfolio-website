# Offene Punkte und Nachweise

Stand: 17.10.2026. Phase 00 ist im dokumentierten Umfang abgeschlossen; die offenen technischen Befunde bleiben erhalten. Die folgenden Restaufgaben und Nachweise sind ausdrücklich vom beschlossenen, noch nicht implementierten Produktumfang getrennt. Fragen gezielt vor dem betroffenen Schritt stellen.

## Priorisierte technische Aufgaben

### Windows-Grundeinrichtung erledigt; Devmodus-Routenbefund offen

Die Windows-Testumgebung ist für die grundlegenden HTML-Tests eingerichtet: lokaler Devstart und drei Einstiegsseiten von Florian in Opera manuell bestätigt. Umgebung zentral im [Testworkflow](testing-workflow.md#windows-einrichtung-und-erster-html-test); konkreter Fehler- und Reproduktionsnachweis [unten](#windows-html-test-und-devmodus-routenbefund--17102026). Kein automatischer Windows-Zugriff für Codex und keine geteilten `node_modules`.

Offen ist die fehlerhafte Devserver-Behandlung nicht generierter Pfade mit `output: export`: unter Ubuntu reproduziert, Windows-Ursache und dauerhafte Behebung nicht abschließend nachgewiesen. Vor einem folgenden Implementierungsauftrag den Windows-Ablauf mit eindeutigem Stand und Requestreihenfolge abgleichen. Phase 01 bleibt nicht begonnen; Grafik-/Animations-/Accessibility-Abnahmen erfolgen im jeweils betroffenen Umfang. Keine neuen Testframeworks oder CI aus diesem Befund ableiten.

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

### P1 – Nächste Git-Sicherung und verbleibende Umgebungsnachweise

Der native Ubuntu-Checkout ist eingerichtet; Clone, Neuinstallation und Entwicklungsstart sind von Florian bestätigt. Beide VirtualBox-spezifischen Workarounds sind entfernt; die vier Qualitätsprüfungen wurden hier erneut erfolgreich ausgeführt. Quellen und Grenzen stehen im [Nachweisstand](#tatsächlicher-nachweisstand). Die Verlagerung und die grundlegende Clone-Prüfung sind keine offenen Aufgaben mehr.

Florian übernimmt den nächsten Commit auf `dev` und die Sicherung. Performance- und Vergleichsmessungen stehen weiterhin aus. Der erfolgreiche Build belegt keine Cache-Trefferquote. Die vollständige Browser-/Accessibility-Abnahme bleibt ein gesonderter Schritt.

### P1 – Echte Browserabnahme des vorhandenen Grundgerüsts

Die drei Einstiegspunkte wurden laut Florian bereits im Browser dargestellt. Für die vollständige Abnahme nach dem [Testworkflow](testing-workflow.md) weiterhin Sprache/Links, direkter Aufruf/Reload, 404, Tastatur/Fokus, Zoom, responsive Ansichten, Accessibility und tatsächliche Browserkonsole prüfen; Browser, Version, Gerät und Ergebnis nennen. Diese Angaben fehlen für den berichteten Browserlauf. Keine vollständige Abnahme von A01/A02 oder A24/A26 allein aus CLI-/HTTP-Prüfungen oder der berichteten Darstellung ableiten. Weltwahl, gespeicherte Sprache und Portfolio-Unterseiten fehlen noch.

### Spätere technische Aufgaben

- Geeignete Verhaltenstest-Werkzeuge erst bei konkretem Funktionsbedarf auswählen; Vitest/Testing Library/Playwright sind nicht installiert. Phasenbezogene Kandidaten und optionale CI-/Windows-Automation zentral im [Testworkflow](testing-workflow.md#vorhandene-prüfungen-und-mögliche-testarchitektur); kein zusätzlicher Infrastrukturblocker vor Phase 01.
- Nur benötigte, freigegebene Modelle samt Abhängigkeiten tracken. Obsolete Modelle erst nach Nutzungsprüfung und ausdrücklicher Freigabe gezielt bereinigen; zentrale [Git-/Modellregel](../context/architecture.md#git-und-3d-modelle) beachten.
- Modellintegration, praktische Animation, Performance und Veröffentlichungsrechte sind weiterhin offen.

## Phase 01 – beschlossene Grundlage und offene Freigaben

Beschlossen, noch nicht implementiert: [Root-Sprachwahl → lokalisierter Startscreen → eigenständiges HTML-Portfolio](../context/portfolio-and-content.md#sprachen-und-routen), [notwendige Portfolio-Assets bereits während Phase 01](../context/assets.md#portfolio-assets-während-phase-01) und [eigener gemeinsamer Inhaltsschritt](../context/portfolio-and-content.md#echte-inhalte-innerhalb-von-phase-01). Der Anwendungscode enthält weiterhin nur die Phase-00-Sprachwahl und zwei lokalisierte Platzhalter, keine `/portfolio/`-Route. Sieben ausgewählte Portfolio-PNGs sind inzwischen im Checkout vorhanden, noch ohne technische Integration. Der Dokumentationsabgleich ist kein neuer Funktions- oder Browsernachweis.

**Visuelle Auswahl des ersten Asset-Pakets erfolgt:** B01/B02 als Bildmotive, D01 und D02-A bis D02-D als PNG-Designvorlagen. Herkunft und Auswahl sind vom Nutzer bestätigt; Existenz, Format, Abmessungen, Bytes und Alpha wurden bei der Bestandsprüfung am 17.10.2026 lesend geprüft. Vollständiger [Datei-/Freigabenachweis mit datiertem Git-Tracking-Befund](../design/asset-inventory/arcane-portfolio-asset-inventar-phase-01.md#9-erstes-ausgewähltes-portfolio-asset-paket); aktuellen Git-Status direkt im Repository prüfen. Keine SVG-, Implementierungs-, Performance- oder Browserfreigabe daraus ableiten.

Offen bleiben:

- Bereichs-/Detail-URLs für About Me, Skilltree, Projects und Contact vor der jeweiligen Implementierung gesondert festlegen; die beiden Portfolio-Basispfade sind bereits beschlossen.
- Nummerierung und Ausgestaltung der [acht vorgeschlagenen Unterpakete](roadmap.md#phase-01--vorgeschlagene-operative-unterteilung) sowie tatsächliche Implementierungsaufträge; keine pauschale Freigabe aller Pakete.
- Für die sieben ausgewählten PNGs technische Aufbereitung erst gesondert beauftragen: D01 als SVG-Masterversion, D02-A bis D02-D skalierbar in SVG/CSS beziehungsweise HTML/CSS ausarbeiten und erneut visuell prüfen. D02-D reduziert gestalten; keine PNG mit fertiger Vektorgrafik oder UI verwechseln.
- B01/B02 auf geeignete responsive Zuschnitte, tatsächliche Bildgrößen, Optimierung und Ladeverhalten prüfen; unterschiedliche Breiten, lange DE/EN-Texte, Zoom, Tastatur/Fokus und Opera-Darstellung aller betroffenen Elemente abnehmen. Keine feste KB-/Pixelgrenze ohne Messung und keine Browserfreigabe allein aus PNG-Auswahl.
- Assetbezogene Rechteprüfung und Herkunftsnachweise für öffentliche, möglicherweise kommerzielle Nutzung abschließen. Die [offiziellen OpenAI-Quellen wurden geöffnet](../design/asset-inventory/arcane-portfolio-asset-inventar-phase-01.md#herkunft-und-rechteprüfung); kontobezogene Anwendbarkeit, Eingaberechte und mögliche Rechte Dritter bleiben offen. Keine pauschale Exklusivität, Gemeinfreiheit oder CC-Lizenz. Eine gegebenenfalls noch erforderliche Git-Übernahme der PNGs erfolgt durch Florian nach Prüfung des aktuellen Git-Status und der bestehenden Veröffentlichungs-/Rechteregeln, keine automatische Veröffentlichung durch Codex.
- Weitere Portfolio-Assets nach Bedarf aus dem [Inventar](../design/asset-inventory/arcane-portfolio-asset-inventar-phase-01.md) auswählen und gesondert beauftragen; 18 Bildmotiv-Kandidaten sind keine Pflichtdateizahl und durch die sieben Freigaben nicht pauschal genehmigt. Geeignete Motive bevorzugt wiederverwenden, neue Mockup-Entwürfe weiterhin mit drei Varianten und ausdrücklicher Auswahl.
- Echte Inhalte kontrolliert mit Florian erarbeiten und bestätigen, zunächst Platzhalter. Phase 08 behält Inhaltsfinalisierung/Releaseprüfung; Phasen 06/07 behalten spätere Welt-/Charakter-/Animationsassetarbeit.
- Neuen Portfolio-Unterpfad und später beschlossene Deep Links in Devmodus und statischem Export prüfen. Der bekannte `generateStaticParams()`-/`output: export`-Befund bleibt ungeklärt und ohne dauerhaft bestätigten Fix; keine neue Ursache aus der Routingplanung ableiten.

Phase 01 ist weiterhin nicht implementiert. Dieser Auftrag führt keine dieser offenen Produktions-, Spezifikations- oder Implementierungsaufgaben aus.

## Fachliche Fragen nach Phase

| Zeitpunkt                | Offene Entscheidung / Prüfung                                                                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase 00 – Restprüfungen | Devmodus-Routenbefund nach Windows-Grundtest, vollständige Browser-/Accessibility-Abnahme, Performance-Messungen, nächster Commit durch Florian und priorisierte ESLint-10-Migration; nativer Checkout und grundlegende Clone-Prüfung abgeschlossen, Quellen und Grenzen unten. |
| Phase 1                  | Portfolio-Basispfade beschlossen; konkrete Bereichs-/Detail-URLs, History/Scrollbewahrung, responsive Breiten, Übersetzungsschlüssel, Einzelassets und gemeinsame Inhaltsbestätigung noch offen. Unterpakete 01.1–01.8 vorgeschlagen.                                                                        |
| Phase 2                  | Maßstab, Kameraabstand, Kollisions-/Rampenparameter, Grenzen, Durchgänge, begehbare Flächen; Prototypmodell laden/abspielen.                                              |
| Phase 3                  | Kristall-Anker und sichere Annäherung, Drehung, Animationstiming inklusive Teleport/Positionierung; etwa eine Sekunde nur Startvorschlag.                                 |
| Phase 3                  | Ein-Klick-Pointer-Lock-Rückkehr in Zielbrowsern; Fokus-/Tabverlust und Fehlerpfade.                                                                                       |
| Phase 3–4                | Details verschachtelter Weltobjekt-/Portfolio-Rückkehr, Browser-Zurück; keine erneute Entscheidung über kristallfreien „Mehr erfahren“-Einstieg.                          |
| Phase 4                  | Minimap-Skalierung/Rotation für erkennbare Turmbewegung, weitere Defaultwerte und Schließen nach Übernehmen.                                                              |
| Phase 4–5                | Browser-/Gerätematrix, tatsächliche Leistungs-/Ladebudgets und automatische Qualitätsschwellen.                                                                           |
| Phase 6–7                | Spätere Welt-/Charakter-/Animationsassets und weiterer Bedarf: konkrete kostenlose Kandidaten/Rechte, Meshy-Funktionen/Plan bei Lücken; keine Kaufpflicht. Begrenzte Portfolio-Ausnahme in Phase 01 bleibt bestehen.                                                        |
| Phase 7                  | Finale Welt-/Modell-/Stabdetails, fehlende Clips und weitere benötigte Medien; Performance/Rechte. Bereits freigegebene Portfolio-Assets aus Phase 01 bei Eignung wiederverwenden.                                                      |
| Phase 8                  | Inhaltsfinalisierung und Releaseprüfung der bereits in Phase 01 gemeinsam erarbeiteten Angaben; offene/aktualisierte Fakten, DE/EN, Kontakte und Verfügbarkeit erneut bestätigen.                                                  |
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

Stack beschlossen; installierte Grundgerüst-Versionen in [architecture.md](../context/architecture.md), spätere 3D-Versionen noch zu prüfen. Für Welt-/Charakter-/Animationsassets erst funktionaler Prototyp, dann Phasen 06/07; notwendige HTML-Portfolio-Assets bereits schrittweise in Phase 01 gemäß [Assetquelle](../context/assets.md#portfolio-assets-während-phase-01). Kostenlose passende Standardassets zuerst, Meshy nur für nötige Lücken. Keine automatischen Käufe, Commits, Pushes oder Deployments.

## Tatsächlicher Nachweisstand

Nachweise vom 16.10.2026. Drei Quellen getrennt halten: **erneut geprüft** bezeichnet in der folgenden Tabelle die Ubuntu-Abschlusssitzung vom 16.10.2026; **von Florian berichtet** bezeichnet den im Auftrag bestätigten bisherigen Verlauf; **historisch** bezeichnet die früheren Initialisierungs-/Dokumentations- und PoC-Prüfungen. Keine dauerhafte vollständige Testlogsuite im Repository behaupten.

| Prüfung | Tatsächliches Ergebnis und Grenze |
| --- | --- |
| Grundgerüst / Paketauflösung | Erneut geprüft: alle 14 direkten Paketversionen stimmen zwischen Manifest, Lockfile und installierten Manifesten überein; ein Root-Lockfile, Formatversion 3. Node.js 24.22.0 und npm 11.19.1 erneut bestätigt. Keine Paketinstallation oder Aktualisierung in dieser Sitzung. |
| Nativer Checkout / Git | Erneut geprüft: erwartetes Ubuntu-Repository auf nativem Linux-Dateisystem, kein `vboxsf`; Branch `dev` verfolgt `origin/dev`. Frischer GitHub-Clone, unmittelbar danach sauberer Status und Öffnen in VS Code von Florian berichtet; hier keinen zweiten Clone angelegt. |
| Neuinstallation / Symlinks | Von Florian berichtet: `npm ci --ignore-scripts` installierte 361 Pakete erfolgreich; manueller Symlink-Test und erneute Installation nach Entfernung von `bin-links=false` erfolgreich. Erneut geprüft: Eintrag fehlt, npm meldet `bin-links=true`; TypeScript-/ESLint-Symlinks unter `node_modules/.bin` sind gültig. Installation und manuellen Schreibtest hier nicht wiederholt. |
| Typprüfung | Erneut `npm run typecheck`: Exitcode 0, keine Warnungen ausgegeben. Next-Typdateien waren bereits vorhanden; kein separater Test vor deren erster Generierung. |
| ESLint 9 | Erneut `npm run lint`: Exitcode 0, keine Warnungen ausgegeben. Befristete ESLint-9.39.5-Ausnahme und priorisierte ESLint-10-Migration bleiben bestehen. |
| Formatprüfung | Erneut `npm run format:check`: Exitcode 0, keine Warnungen ausgegeben. Die bestehende Ignore-Liste nimmt Dokumentation/Assets aus; Dokumentationslinks und Konsistenz werden separat geprüft. |
| Produktionsbuild | Erneut `npm run build` mit Next.js 16.4.2/Turbopack: Exitcode 0, keine Warnungen ausgegeben. Keine explizite persistente Turbopack-Cache-Deaktivierung mehr in `next.config.ts`; Build nach Entfernung der Workarounds auch von Florian berichtet. Keine Performance-/Cache-Trefferquotenmessung. |
| Statischer Export | Erneuter Build erzeugt `/`, `/de-DE/` und `/en-EN/`; zugehörige HTML-Dateien anschließend lesend geprüft: HTML-lang de/de/en, Sprach-/Startlinks vorhanden, kein Meta-Refresh-Redirect. Dies ersetzt keine Browserabnahme. |
| Entwicklungsstart / lokales HTTP | Entwicklungsstart im nativen Checkout von Florian berichtet. Historisch Sprachlinks und HTML-Sprachangaben lokal per HTTP geprüft. In dieser Sitzung keinen Entwicklungsserver oder HTTP-Test gestartet und keinen Prozess beendet. |
| Browser | Darstellung aller drei Einstiegspunkte im nativen Checkout von Florian berichtet; hier nicht wiederholt. Browser-/Geräteversionen und detaillierte Prüfschritte liegen nicht vor. Vollständige Browser-, Accessibility- und Performance-Abnahme bleibt offen. |
| ESLint-10-PoC | Historisch strenge Installation und Ausführung erfolgreich, konkrete React-Abweichungen nachgewiesen, keine Migration. Details zentral in architecture.md. Temporäre Umgebung bereinigt; Hauptprojekt dabei unverändert. Hier nicht erneut ausgeführt oder neu bewertet. |
| Portfolio / 3D / Rechte | Portfoliofunktionen, Welt, Canvas und 3D-Integration nicht implementiert. Kein praktischer 3D-Rendering-/Animations-/Performance- oder vollständiger Rechtenachweis. |

Nach Entfernung der Workarounds wurden bis zum damaligen Abschluss keine erneuten Symlink- oder Turbopack-Dateisystemfehler berichtet oder in dessen Prüfungen beobachtet. Das ist keine allgemeine Fehlerfreiheit und kein Ausschluss des später dokumentierten Devmodus-Routenfehlers.

### Dokumentationskonsolidierung vor Phase 01 – 17.10.2026

In dieser Konsolidierung erneut in Ubuntu ausgeführt: `npm run typecheck`, `npm run lint`, `npm run format:check` und `npm run build`, jeweils Exitcode 0 ohne ausgegebene Warnungen. Der Build erzeugt weiterhin die drei Einstiegspunkte `/`, `/de-DE/` und `/en-EN/`. Typdateien und lokale Abhängigkeiten waren bereits vorhanden; keine Neuinstallation oder Windows-Reproduktion. Formatprüfung nimmt Dokumentation aus; deren Struktur, relative Links, Anker und Konsistenz wurden separat geprüft.

Der zentrale Testworkflow und seine Verweise sind dokumentiert. Hardware-/VM-Grafikangaben stammen aus Florians Bericht vom 17.10.2026; Windows-Einrichtung, Opera-, WebGL-/GPU-, Accessibility- und visuelle Nutzerabnahme wurden hier nicht ausgeführt. Keine Testframeworks oder CI eingerichtet, keine Phase-01-Implementierung. Die historischen Nachweise oben behalten ihre ursprünglichen Quellen und Grenzen.

### Windows-HTML-Test und Devmodus-Routenbefund – 17.10.2026

**Windows: manuell vom Nutzer geprüft.** Im eigenständigen `dev`-Checkout unter Windows 11 mit VS Code, Git for Windows 2.56.0.windows.2 und nvm-windows 2.0.1 (Shim-Modus): Node.js 24.22.0, npm 11.19.1; `npm ci` installierte laut Nutzer 360 Pakete erfolgreich. Bekannte ESLint-9.39.5-Warnung, keine Änderung der befristeten Ausnahme. `npm run dev` startete, `/`, `/de-DE/` und `/en-EN/` zeigten die vorhandenen Platzhalter in Opera. Wiederholte Sprachrouten antworteten laut Nutzer mit HTTP 200. Umgebung und Sicherheitsgrenze zentral im [Testworkflow](testing-workflow.md#windows-einrichtung-und-erster-html-test).

Während der ersten Initialisierung, unter anderem im Zusammenhang mit `/favicon.ico`, wurde folgende Meldung beobachtet:

```text
Error: Page "/(localized)/[locale]/page" is missing param "/[locale]" in "generateStaticParams()", which is required with "output: export" config.
Failed to generate static paths for /[locale]
```

Spätere erfolgreiche Sprachroutenaufrufe zeigten laut Nutzer die Meldung nicht erneut. Das belegt funktionierende Seiten im geprüften Ablauf, keine dauerhafte Fehlerbehebung. Screenshot zu `/en-EN/` laut Nutzer vorhanden, hier nicht separat erhalten/gesichtet; keine eigenen Windows-Tests durch Codex. Opera-Version, genauer Windows-Testcommit, vollständige Requestchronologie und Originallogs fehlen für einen exakten Umgebungsvergleich.

**Ubuntu: von Codex per lokalen HTTP-Requests geprüft, kein Browserlauf.** Next.js 16.4.2/Turbopack, Node.js 24.22.0, npm 11.19.1; unveränderter Routing-/Konfigurationsstand von Commit `33586566f94b` auf `dev`. Zwei getrennte Devserver-Prozesse mit `npm run dev -- --hostname 127.0.0.1 --port 3100`; vorhandene Plattencaches erhalten, kein Test eines frisch installierten oder geleerten Checkouts. Nur die eigenen Prozesse beendet.

- Erster Ablauf: `/`, `/de-DE/`, `/en-EN/` jeweils 200; `/favicon.ico`, `/fr-FR/`, `/unbekannt/` und `/de-DE/unbekannt/` jeweils 404; gültige Sprachrouten danach weiterhin 200. Im Ablauf erschienen die exakte Missing-param-Meldung und `Failed to generate static paths` insgesamt viermal. Wegen asynchroner Logausgabe keine eindeutige Zuordnung jeder Meldung zu einem einzelnen Request behaupten.
- Zweiter Ablauf mit neuem Prozess, Favicon zuerst und je einer Sekunde Beobachtungszeit nach Requests:

| Requestreihenfolge | HTTP | Neue Missing-param-Meldungen im Beobachtungsfenster |
| --- | --- | --- |
| `/favicon.ico` zuerst | 500 | 1 |
| `/` | 200 | 0 |
| `/de-DE/` | 200 | 0 |
| `/en-EN/` | 200 | 0 |
| `/favicon.ico` erneut | 404 | 1, zusätzlich `Failed to generate static paths` |
| `/fr-FR/` | 500 | 1 |
| `/unbekannt/` | 500 | 1 |
| `/de-DE/unbekannt/` | 404 | 0 |
| `/de-DE/`, danach `/en-EN/` | jeweils 200 | jeweils 0 |

Damit ist die Meldung unter Ubuntu reproduziert; teilweise sogar HTTP 500 bei unbekannten Pfaden statt bloßer Terminalausgabe. Der konkrete Windows-Ablauf und seine Cache-/Requestbedingungen sind damit nicht bewiesen.

**Belegte technische Einordnung:**

- `src/app/(localized)/[locale]/layout.tsx` exportiert `generateStaticParams()` mit `{ locale: "de-DE" }` und `{ locale: "en-EN" }` sowie `dynamicParams=false`. Die Funktion fehlt nicht. Page und Layout prüfen die Locale zusätzlich mit `isLocale`/`notFound`. Root liegt getrennt unter `(entry)`; keine Middleware, kein eigenes Favicon und keine spezielle Favicon-Route im vorhandenen Projekt.
- Die offizielle, im installierten Paket mitgelieferte Dokumentation erlaubt `generateStaticParams` in Layouts. Route Groups gehören nicht zur URL; mehrere Root-Layouts sind bei einer Home-Route innerhalb einer Gruppe erlaubt. Kein belegter Fehler durch den Layout-Export oder die beiden Route Groups.
- Im installierten `node_modules/next/dist/server/dev/next-dev-server.js` prüft `getStaticPaths` bei `output === 'export'`, ob ein erzeugter `prerenderedRoutes`-Eintrag exakt `urlPathname` entspricht. Andernfalls wirft es die beobachtete Meldung. Deren `"/[locale]"` stammt aus dem Routenmuster `pathname`, nicht aus einem Nachweis, dass der Objektschlüssel `locale` fehlt.
- Die Funktion liest einen Cache nach Routenmuster, startet eine erneute Generierung und gibt einen vorhandenen Wert sofort zurück. Der Catch-Zweig protokolliert bei vorhandenem Cache `Failed to generate static paths`, entfernt den Cacheeintrag und wirft ohne vorherigen Wert den Fehler weiter. Das erklärt auf Codeebene die möglichen Vordergrund-/Hintergrundfehler; keine vollständige Ablaufverfolgung sämtlicher Windows-Interna behaupten.
- Unbekannte erste Segmente können im untersuchten Devablauf auf die dynamische Locale-Route treffen und an der Exportprüfung scheitern, bevor eine gewöhnliche 404-Antwort zustande kommt. Für den ersten Favicon-Aufruf ist das durch die Meldung plus HTTP 500 belegt. Welche Rolle Turbopack gegenüber anderen Bundlern oder Windows gegenüber Ubuntu spielt, ist ohne Gegenprobe offen. Kein bestätigter allgemeiner Turbopack- oder Windows-Defekt abgeleitet.

**Korrekturstatus und nächste Prüfung:** Kein belegter Fehler in der Rückgabe der gültigen Locales; keine Quellcode-, Routing-, Konfigurations- oder Paketänderung durchgeführt. Der Dev-404-/Export-Befund bleibt offen, kein Fix nachgewiesen. Root-/Sprach-URLs und Static Export erhalten; weder `dynamicParams=true` noch Entfernen von `output: export` oder ein erfundenes Favicon als pauschalen Fix einsetzen. Ein Produktionsbuild ist ein separater Nachweis, keine Devmodus-Abnahme.

Für den nächsten Windows-Vergleich exakten Commit, Opera-/Node-/npm-Version, Startmodus, vorhandenen Cache und zeitliche Requests festhalten: nach neuem Serverstart Favicon zuerst, danach Root/de/en und erneut Favicon, dann unbekannte Locale und tiefer unbekannter Pfad. Logs und Statuscodes bereinigt übermitteln. Cache-Leerung oder anderer Bundler wären getrennte, bislang nicht ausgeführte Gegenproben. Erst bei belegtem Änderungsbedarf eine minimale Korrektur mit Auswirkungen auf Spracharchitektur/Export zur Freigabe vorlegen.

**Abschlussprüfungen dieses Windows-/Routenanalyseauftrags:** `npm run typecheck`, `npm run lint`, `npm run format:check` und `npm run build` in Ubuntu jeweils Exitcode 0, keine Warnungen ausgegeben. Der Build erzeugte erneut `/`, `/de-DE/` und `/en-EN/`; Exportdateien anschließend lesend geprüft. Die bekannte ESLint-Warnung stammt aus dem vom Nutzer berichteten Windows-Installationslauf, nicht aus diesen vier Checks. Keine Installation oder Paketänderung; Typdateien und Abhängigkeiten waren vorhanden. Markdown-/Linkprüfung und Git-Diff-Prüfung separat, da Dokumentation vom Formatcheck ausgenommen ist.

Die Dokumentation der Grundeinrichtung und des ersten Windows-HTML-Tests ist nachgeführt. Offene Devmodus-Befunde sind damit dokumentiert, nicht behoben; keine vorbehaltlose technische Phase-00-Abnahme und keine Phase-01-Freigabe daraus ableiten.

Zusatzbefund des Ubuntu-Devstarts: Next.js 16.4.2 hängte einen verwalteten `nextjs-agent-rules`-Block an AGENTS.md an. Nur dieser selbst erzeugte Anhang wurde nach dem Test entfernt; ursprüngliche Projektregeln blieben erhalten. Beleg im installierten `server/lib/start-server.js` / `generate-agent-files.js`; keine Änderung der Anwendungskonfiguration zur Abschaltung vorgenommen.

Quellen, geprüft am 17.10.2026: installierter Next.js-16.4.2-Code und mitgelieferte Dokumentation unter `node_modules/next/dist/docs/`, ergänzend [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params), [Route Groups](https://nextjs.org/docs/app/api-reference/file-conventions/route-groups) und [Static Export](https://nextjs.org/docs/app/guides/static-exports). Die Webdokumentation allein ist kein exakter 16.4.2- oder Windows-Laufzeitnachweis; keine passende bestätigte Upstream-Korrektur nachgewiesen.

Die ursprüngliche Dokumentations-/Archivprüfung (33 ursprüngliche Markdown-Dateien, 29 PNGs visuell, eine GLB strukturell mit Running/Walking) bleibt historisch in [revision-notes.md](revision-notes.md). Sie ist kein aktueller App-Status und keine praktische Modellabnahme.

Nach Änderungen abschließend Kontext/Prompts abgleichen. Noch nicht autorisierte Anpassungen konkret vorschlagen und vor dem Schreiben bestätigen lassen.
