# Entwicklungs- und Testworkflow

Stand: 17.10.2026. Maßgebliche Prozessquelle für Entwicklung, Prüfung und Befundübergabe. Produktverhalten bleibt in den Fachkontexten, Prüffälle in den [Abnahmekriterien](acceptance-criteria.md), tatsächliche Nachweise und Restaufgaben in [open-items.md](open-items.md). Dieser Workflow beginnt keine Entwicklungsphase.

## Umgebungen und Zuständigkeiten

Die folgenden Umgebungsangaben stammen aus Florians bestätigtem Bericht vom 17.10.2026; sie sind keine von Codex durchgeführte Hardware- oder Windows-Abnahme.

| Umgebung | Aufgabe und aktueller Stand |
| --- | --- |
| Ubuntu-VM in VirtualBox auf Windows | Primärer Ort für VS Code/Codex, Quellcodeentwicklung, Entwicklungsserver, statische Prüfungen, Builds, geeignete automatisierte Tests und Fehleranalyse. Aktiver Checkout auf nativem Linux-Dateisystem, kein Shared Folder. |
| Google Chrome in Ubuntu | Bevorzugter Entwicklungsbrowser; ersetzt Firefox in dieser Rolle. Firefox bleibt für optionale Kompatibilitätstests möglich. GPU-Beschleunigung/WebGL sind in der aktuellen VM eingeschränkt beziehungsweise in Chrome blockiert. |
| Separater Windows-Checkout | Vorgesehen für realistische grafische Tests, noch nicht vollständig eingerichtet. Opera ist der primäre manuelle Abnahmebrowser; Windows-Grafikkarte laut Florian NVIDIA GeForce RTX 5070 Ti. Keine daraus abgeleitete Leistungsgarantie. |

Die VM hat aktuell vier zugewiesene CPU-Kerne; laut Florian hat das die allgemeine Bedienbarkeit spürbar verbessert. Guest Additions wurden auf 7.2.20 aktualisiert. Tests mit Wayland und X11 beseitigten die Grafikgrenzen nicht. Diese VirtualBox-Grafikprobleme sind Umgebungsgrenzen, kein nachgewiesener Anwendungsfehler. Ein beobachteter Windows-Hypervisor-/NEM-Modus ist ein separater möglicher Performancefaktor; ein ursächlicher Zusammenhang mit der WebGL-Sperre ist nicht nachgewiesen. Windows-Sicherheitsfunktionen und OPNsense werden nicht eigenständig verändert.

Opera unter Windows ist der primäre manuelle Prüfweg, nicht der einzige langfristige Zielbrowser. Ergänzende Desktop-Kompatibilitätstests mit Chrome/Edge, Firefox und Safari sowie mobile HTML-Prüfungen mit Safari/Chrome bleiben Teil der Strategie. Verfügbare Geräte, konkrete Browser-/OS-Versionen und Mindestversionen sind für die jeweilige Prüfung festzuhalten; ungetestete Kombinationen bleiben offen.

## Isolation und Git-Übergabe

Codex in Ubuntu besitzt durch diesen Workflow keine Windows-Berechtigungen. Kein automatischer Zugriff auf Windows-Dateien, keine Programmausführung oder Browserfernsteuerung auf dem Host und keine still eingerichtete Schnittstelle. Entwicklungsstände werden über GitHub ausgetauscht; der Nutzer kann Befunde und bereinigte Medien bewusst zur Analyse bereitstellen.

Entwickelt wird auf `dev`; `main` bleibt geschützt. Das ist eine verbindliche Arbeitsregel, kein hier erneut geprüfter Nachweis der GitHub-Branchschutzkonfiguration. Florian prüft und überträgt freigegebene Änderungen selbst. Codex führt keine eigenständigen Commits, Pushes, Branchwechsel oder Veröffentlichungen aus. Der Windows-Checkout übernimmt freigegebene Stände über Git, statt dieselben Projektdateien parallel in beiden Umgebungen zu bearbeiten.

## Offene Windows-Vorbereitung vor Phase 01

Diese Vorbereitung ist noch offen; keine erfolgreiche Windows-Einrichtung behaupten:

1. Florian richtet VS Code, Git und die erforderliche Node.js-/npm-Umgebung lokal unter Windows ein. Versionen aus `.nvmrc`, `package.json` (`engines`, `packageManager`) und dem [installierten Projektstand](../context/architecture.md#phase-00-installierter-stand) ableiten, nicht eine ungeprüfte neueste Version wählen.
2. Das öffentliche GitHub-Repository mit bestätigter URL in einen eigenständigen lokalen Checkout klonen und `dev` verwenden. Keine privaten absoluten Verzeichnisse in Projekttexte übernehmen. Vor jedem späteren Git-Abgleich lokale Änderungen prüfen und erhalten.
3. Abhängigkeiten unter Windows selbst mit dem vorhandenen Lockfile und `.npmrc` einrichten. Der bestehende Installationsweg ist `npm ci --ignore-scripts`; keine erzwungene Peer-Auflösung und kein neues Lockfile als Fehlerumgehung. Dies ist eine Anleitung, keine in diesem Dokumentationsauftrag ausgeführte Installation.
4. `node_modules`, `.next`, `out` und andere generierte Dateien pro Betriebssystem lokal erzeugen. Insbesondere `node_modules` niemals zwischen Ubuntu und Windows austauschen. Nach dem Clone Next-Typgenerierung durch Entwicklung oder Build gemäß [Root-README](../../README.md#prüfungen-und-statischer-export) berücksichtigen.
5. Vorhandene Start-/Prüfbefehle lokal ausführen und den jeweiligen Entwicklungsstand in Opera öffnen. Tatsächliche Ergebnisse samt Browser-/OS-Version festhalten. Installation, Start und Darstellung des Grundgerüsts sind noch keine vollständige Browser-, Accessibility- oder Performance-Abnahme.

Vor Phase 01 Windows-Vorbereitung nachweisen; Phase 01 benötigt zusätzlich einen gesonderten Implementierungsauftrag. Zusätzliche Testframeworks oder CI sind keine Voraussetzung für diesen Vorbereitungsschritt.

## Ablauf pro Entwicklungsstand

1. Codex implementiert ausschließlich den beauftragten Funktionsumfang im Ubuntu-Checkout.
2. Codex führt alle geeigneten bereits verfügbaren automatisierten Qualitätsprüfungen aus; Auswahl und Voraussetzungen richten sich nach Änderung und Repository-Stand.
3. Codex benennt erfolgreiche, fehlgeschlagene und nicht ausgeführte Prüfungen mit Belegen und Grenzen. Technische Implementierung, automatisierte Prüfung, tatsächlicher Browserlauf und menschliche visuelle Freigabe werden getrennt berichtet.
4. Florian prüft die Änderungen und überträgt den freigegebenen Stand selbst über Git auf `dev`.
5. Florian übernimmt genau diesen Stand über Git im eigenständigen Windows-Checkout und richtet gegebenenfalls geänderte Abhängigkeiten dort lokal ein.
6. Florian startet die Anwendung lokal mit den vorhandenen Skripten und prüft sie in Opera; weitere Kompatibilitätsprüfungen nach betroffenem Verhalten.
7. Grafische, funktionale und performancebezogene Auffälligkeiten werden mit reproduzierbaren Schritten und geeignetem Material festgehalten.
8. Codex analysiert die bewusst übermittelten Befunde in Ubuntu, untersucht zunächst die Ursache und implementiert einen gezielten Fix im beauftragten Umfang. VM-Probleme nicht ungeprüft durch Produktänderungen kompensieren.
9. Soweit sinnvoll werden Regressionstests ergänzt; dafür erforderliche neue Werkzeuge erst bei konkretem Bedarf gesondert abstimmen.
10. Betroffene Prüfungen und gegebenenfalls die visuelle Abnahme werden erneut ausgeführt. Ein automatischer Erfolg erledigt keine noch offene manuelle Freigabe.

## Vorhandene Prüfungen und mögliche Testarchitektur

Bestand am 17.10.2026 anhand von `package.json`, Konfigurationen und installierten Manifesten geprüft:

| Vorhandener Befehl | Aussage und Grenze |
| --- | --- |
| `npm run typecheck` | TypeScript-Prüfung; benötigt die generierten Next-Typdateien. Kein Browser- oder Grafiknachweis. |
| `npm run lint` | ESLint-Prüfung mit befristeter ESLint-9-Ausnahme; kein Beleg für vollständige funktionale oder visuelle Korrektheit. |
| `npm run format:check` | Prettier-Prüfung gemäß `.prettierignore`; Dokumentation und Originalassets sind ausgenommen. Markdown-Struktur, Links und Konsistenz separat prüfen. |
| `npm run build` | Produktionsbuild und statischer Export; kein Nachweis realer Eingaben, GPU-Leistung oder visueller Qualität. |

`npm run dev` startet die Entwicklung; `npm run format` schreibt Formatierungsänderungen und ist kein reiner Check. Ein allgemeines `npm run test`, ein `start`-Skript und ein fertig installiertes Browser-Testframework sind nicht vorhanden. Vitest, Testing Library und Playwright sind Kandidaten, keine produktiv verfügbare oder abschließend beschlossene Toolchain. Start-/Exportanleitung: [Root-README](../../README.md#lokal-einrichten-und-starten).

| Ebene | Geeignete spätere Prüfungen | Grenze und Einführung |
| --- | --- | --- |
| Unit / Integration | Inhalts-/Übersetzungskonsistenz, Zustand und Speicherfallbacks, Spielzustände, Animationszustandsübergänge | Vitest und Testing Library bei konkretem Funktionsbedarf prüfen, etwa in Phase 01 für HTML-Verhalten und später für Interaktionen. Kein Paketwechsel auf Vorrat; Tests prüfen Verhalten statt Implementierungsduplikate. |
| Browserautomation | Navigation, UI-Verhalten, direkte Routen/Reloads, Fokus und reproduzierbare Interaktionsabläufe | Playwright ist ein möglicher Kandidat. Browser, Version und unterstützte APIs tatsächlich prüfen; ein anderer automatisierter Browser ist kein Opera-Nachweis. |
| Reale Browserinteraktion | Pointer Lock, Audiofreigabe, Eingaben, WebGL und Fehlerpfade | Tatsächliche Nutzeraktion, Browser-/Sitzungszustand und verfügbare Grafik berücksichtigen. Mocks belegen Logik, ersetzen diese Browsernachweise nicht. |
| Geräte-/Performanceprüfung | Ladezeit, CPU-/GPU-Last, Speicher, Bildrate und Animationsverhalten | Reale Umgebung nennen: Entwicklungsstand, OS, Browser, GPU, Auflösung, Qualität, Szene, Cachezustand und Messmethode. VM-Werte nicht als Windows-GPU-Leistung ausgeben; keine Zahlen schätzen. |
| Menschliche visuelle Freigabe | Natürlichkeit, Kamerawirkung, Layout und Referenznähe | Gesonderte Prüfung durch Florian; keine automatische Ableitung aus grünen Tests oder Screenshots ohne Nutzerfreigabe. |

GitHub Actions und automatisierte Windows-Browserprüfungen sind optionale spätere Erweiterungen. Keine CI-Dateien, Runner, externen Dienste oder Berechtigungen ohne gesonderte Freigabe einrichten. Windows-Testautomation muss zunächst lokal vom Nutzer gestartet werden können, ohne zusätzliche Windows-Rechte für die Ubuntu-KI. Ihre Einführung passend zur Phase darf Phase 01 nicht unnötig verzögern.

## Visuelle Abnahme durch den Nutzer

**Ein erfolgreich abgeschlossener automatisierter Test beweist nicht, dass eine Animation natürlich aussieht, eine Kamerafahrt angenehm wirkt, ein Übergang optisch gelungen ist oder eine 3D-Szene den verbindlichen Mockups entspricht.** Diese Eigenschaften benötigen eine gesonderte visuelle Überprüfung durch Florian.

Das betrifft Magierbewegung einschließlich Idle/Lauf/Interaktion, automatische Kristallpositionierung und Ausrichtung, Kristallaktivierung, Teleport und Kamerafahrten, Übergänge zwischen 3D und HTML, Grafikqualität/Licht/Effekte und Performance sowie Layouts und die Übereinstimmung mit den 29 verbindlichen PNGs. Im Prototyp bleiben offen gekennzeichnete Platzhalter zulässig; daraus keine finale visuelle Freigabe ableiten. Gameplay-/Timingregeln und Originalschutz bleiben unverändert.

Codex darf keine erfolgreiche Windows-/Opera-Abnahme behaupten, wenn diese nicht tatsächlich stattgefunden hat. Vom Nutzer berichtete Ergebnisse als solche kennzeichnen; nicht als eigenen Browserlauf ausgeben. Eine technische Ablaufprüfung kann bestanden sein, während die visuelle Freigabe noch aussteht.

## Bugreports und Regressionen

Ein Befund enthält nach Bedarf:

- Funktion, betroffene A-Kriterien und getestete Umgebung: OS, Browser/Version, bei Grafikfragen GPU und Einstellungen.
- Commit beziehungsweise eindeutig beschriebenen lokalen Entwicklungsstand und Startmodus (Entwicklung oder statischer Export).
- Reproduzierbare Schritte, erwartetes und tatsächliches Verhalten, Häufigkeit sowie relevante Fokus-/Audio-/Pointer-Lock-Zustände.
- Screenshot, Video, Konsolenmeldung oder Trace, soweit tatsächlich vorhanden und bewusst bereitgestellt.
- Bereits durchgeführte Tests mit Ergebnis und noch offenen Prüfungen.

Codex prüft zuerst die Ursache anhand des erhaltenen Materials und des tatsächlichen Codes. Fehlende Windows-Reproduktion oder fehlende Artefakte offen benennen, gezielten Fix und geeignete Regressionen prüfen, anschließend Windows-/Sichtprüfung bei Bedarf wiederholen lassen. Keine externen Dateien als erhalten oder geprüft ausgeben, die nicht vorliegen.

## Nachweisstatus und Datenschutz

Pro Kriterium Methode und Ergebnis getrennt dokumentieren: **automatisch geprüft** oder **manuell geprüft**, jeweils mit bestanden/fehlgeschlagen; **noch nicht geprüft** für fehlende Ausführung. Technisch nicht ausführbare Prüfungen mit Grund kennzeichnen. Zusätzlich Datum, Entwicklungsstand, Umgebung, Ausführender/Quelle, tatsächlicher Befehl oder Schritte, Beleg und Prüfgrenze nennen. Nutzer-Sichtfreigabe ausdrücklich separat erfassen. Eine Vorlage ist kein Testergebnis.

Das Repository ist öffentlich, die Website noch nicht veröffentlicht. Öffentliche Sichtbarkeit gibt keine lokalen Dateien, Assets oder Testergebnisse automatisch frei. Vor Veröffentlichung Screenshots, Videos, Traces, Logs und Fehlermeldungen auf Tokens, private Pfade/Benutzernamen, Kontodaten, interne Arbeitgeberinformationen und andere vertrauliche Inhalte prüfen. Nur benötigte, bereinigte und freigegebene Nachweise veröffentlichen; private Originale nicht beiläufig tracken. Vollständige Regeln: [Datenschutz und Lizenzen](../context/privacy-security-and-licenses.md).

`.gitignore` schützt bereits `node_modules/`, Build-Ausgaben, `coverage/`, `playwright-report/`, `test-results/`, Caches, Logs, ZIPs, lokale Umgebungsdateien und typische OS-Dateien. Ignorierung ersetzt keine Inhalts-/Freigabeprüfung und schützt bereits getrackte Dateien nicht rückwirkend. Benötigte Quell-/Konfigurationsdateien, Skripte, Lockfile und freigegebene erforderliche Assets müssen im frischen Clone verfügbar bleiben; [Git-/Modellregel](../context/architecture.md#git-und-3d-modelle) erhalten. Keine Historienbereinigung durch bloße Textänderungen behaupten.

## Quellen und Prüfgrenze

Maßgeblich sind die tatsächlichen Repository-Dateien und Florians Vorgaben vom 17.10.2026. Ergänzend geprüft für die im Projekt verwendete npm-11-Linie: [npm ci](https://docs.npmjs.com/cli/v11/commands/npm-ci/) (Lockfile-basierte Installation ohne Manifest-/Lockfile-Neuschreiben). Die laufend gepflegte v11-Webdokumentation ist kein Windows-Installationsnachweis für npm 11.19.1. Paketversionsentscheidungen und historische Quellen bleiben in [architecture.md](../context/architecture.md).
