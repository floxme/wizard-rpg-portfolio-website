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

### P1 – Nächste Git-Sicherung und verbleibende Umgebungsnachweise

Der native Ubuntu-Checkout ist eingerichtet; Clone, Neuinstallation und Entwicklungsstart sind von Florian bestätigt. Beide VirtualBox-spezifischen Workarounds sind entfernt; die vier Qualitätsprüfungen wurden hier erneut erfolgreich ausgeführt. Quellen und Grenzen stehen im [Nachweisstand](#tatsächlicher-nachweisstand). Die Verlagerung und die grundlegende Clone-Prüfung sind keine offenen Aufgaben mehr.

Florian übernimmt den nächsten Commit auf `dev` und die Sicherung. Performance- und Vergleichsmessungen stehen weiterhin aus. Der erfolgreiche Build belegt keine Cache-Trefferquote. Die vollständige Browser-/Accessibility-Abnahme bleibt ein gesonderter Schritt.

### P1 – Echte Browserabnahme des vorhandenen Grundgerüsts

Die drei Einstiegspunkte wurden laut Florian bereits im Browser dargestellt. Für die vollständige Abnahme im nativen Checkout weiterhin Sprache/Links, direkter Aufruf/Reload, 404, Tastatur/Fokus, Zoom, responsive Ansichten, Accessibility und tatsächliche Browserkonsole prüfen; Browser, Version, Gerät und Ergebnis nennen. Diese Angaben fehlen für den berichteten Browserlauf. Keine vollständige Abnahme von A01/A02 oder A24/A26 allein aus CLI-/HTTP-Prüfungen oder der berichteten Darstellung ableiten. Weltwahl, gespeicherte Sprache und Portfolio-Unterseiten fehlen noch.

### Spätere technische Aufgaben

- Geeignete Verhaltenstest-Werkzeuge erst bei konkretem Funktionsbedarf auswählen; Vitest/Testing Library/Playwright sind nicht installiert.
- Nur benötigte, freigegebene Modelle samt Abhängigkeiten tracken. Obsolete Modelle erst nach Nutzungsprüfung und ausdrücklicher Freigabe gezielt bereinigen; zentrale [Git-/Modellregel](../context/architecture.md#git-und-3d-modelle) beachten.
- Modellintegration, praktische Animation, Performance und Veröffentlichungsrechte sind weiterhin offen.

## Fachliche Fragen nach Phase

| Zeitpunkt                | Offene Entscheidung / Prüfung                                                                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase 00 – Restprüfungen | Vollständige Browser-/Accessibility-Abnahme, Performance-Messungen, nächster Commit durch Florian und priorisierte ESLint-10-Migration; nativer Checkout und grundlegende Clone-Prüfung abgeschlossen, Quellen und Grenzen unten. |
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

Nachweise vom 16.10.2026. Drei Quellen getrennt halten: **erneut geprüft** bezeichnet die aktuelle Ubuntu-Abschlusssitzung; **von Florian berichtet** bezeichnet den im Auftrag bestätigten bisherigen Verlauf; **historisch** bezeichnet die früheren Initialisierungs-/Dokumentations- und PoC-Prüfungen. Keine dauerhafte vollständige Testlogsuite im Repository behaupten.

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

Nach Entfernung der Workarounds hat Florian keine erneuten Symlink- oder Turbopack-Dateisystemfehler berichtet. Auch die aktuellen Prüfungen ergaben solche Fehler nicht; daraus folgt keine allgemeine Fehlerfreiheit.

Die ursprüngliche Dokumentations-/Archivprüfung (33 ursprüngliche Markdown-Dateien, 29 PNGs visuell, eine GLB strukturell mit Running/Walking) bleibt historisch in [revision-notes.md](revision-notes.md). Sie ist kein aktueller App-Status und keine praktische Modellabnahme.

Nach Änderungen abschließend Kontext/Prompts abgleichen. Noch nicht autorisierte Anpassungen konkret vorschlagen und vor dem Schreiben bestätigen lassen.
