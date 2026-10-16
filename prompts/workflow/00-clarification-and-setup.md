# Phase 00 – Klärung und Initialisierung

Stand 16.10.2026: Das minimale Grundgerüst ist bereits initialisiert. Diese Vorlage dient auch begrenzten Nachprüfungen und dem Setup-Abschluss; vorhandenen Code, Lockfile und Konfigurationen prüfen statt erneut erzeugen. Nachweise und offene Grenzen in docs/development/open-items.md.

Die Phase in kleine Aufträge teilen, nicht ungefragt alle Arbeitspakete auf einmal erledigen. Fehlende Fragen nur soweit für den nächsten Schritt nötig stellen.

```text
Projektroot: [PFAD]
Aktueller Stand: [PRÜFEN / BEKANNTER STAND]
Umfang dieser Sitzung: [KLEINER TEILSCHRITT DIESER PHASE]

Lies AGENTS.md, README.md, docs/context/README.md, docs/context/architecture.md, docs/context/project.md, docs/development/open-items.md, docs/development/roadmap.md, docs/decisions/decision-log.md und die relevanten Abnahmekriterien. Prüfe package.json, package-lock.json, .npmrc, .gitignore und die vorhandenen Anwendungskonfigurationen.

Alle Pfade ab Projektroot. Prüfe tatsächliche Dateien und Nutzeränderungen. Bei visuellen Aufgaben docs/design/README.md, zuständige Bereichs-README und die PNGs selbst lesen. Alle 29 Referenzen sind freigegeben; Original-PNGs/GLB nicht verändern. Arbeitsanweisungen gelten KI-unabhängig.

Erfinde keine APIs, Paketfunktionen, Inhalte, Rechte, Entscheidungen oder Prüfergebnisse. Offizielle Dokumentation passend zur eingesetzten Version konsultieren, Quellen/Versionen nennen und dokumentiert/implementiert/getestet trennen. Beschlossener Stack bleibt Ausgangspunkt; keine ungefragten Zusatzsysteme.

Arbeitsauftrag:
Klär nur Fragen, die den ausdrücklich beauftragten Teilschritt beeinflussen. npm und Produktstack bleiben beschlossen. Versionsangaben aus Architektur und tatsächlichen Dateien abgleichen; bei beauftragten Paketänderungen aktuelle offizielle Engines/Peers prüfen, keine Installation ungeprüfter latest-Kombinationen. Vorhandenes Grundgerüst nicht überschreiben; keine erneute Initialisierung, Paketänderung oder neue Testbibliothek aus dieser Vorlage allein ableiten.

Initialisierung ist technisch nachgewiesen: Root-Sprachwahl ohne Redirect, /de-DE/ und /en-EN/, statischer Export und Qualitätswerkzeuge. Die volle Browserabnahme, Portfoliofunktionen und 3D-Welt fehlen noch. Kein Absenken der bestehenden Abnahmekriterien.

ESLint 9.39.5 bleibt die bestätigte befristete EOL-Ausnahme. Die priorisierte ESLint-10-Aufgabe und alle Migrationsbedingungen in open-items.md beachten; keine automatische Migration oder stillen Regelverluste. Shared-Folder-Workarounds bleiben bis zu gesondertem Nachweis erhalten. Nach Git-Sicherung geplanter Ubuntu-Umzug samt Clone-/Start-/Performanceprüfung und nach Möglichkeit Browserabnahme ist kein bereits ausgeführter Schritt.

Bei beauftragter Git-/Dokumentationsvorbereitung .gitignore und Clone-Verfügbarkeit notwendiger Dateien/Modelle prüfen. Nur benötigte, freigegebene Modelle tracken; Bereinigung erst nach Nutzungsprüfung und ausdrücklicher Freigabe. Keine Originale ändern, keine Git-Schreiboperation aus einem reinen Prüfauftrag ableiten. Keine finalen Assets oder Veröffentlichung.

Gehe mit kurzem Plan in einen überprüfbaren Teilschritt. Keine Käufe/Generierungen, Commits, Pushes oder Deployments ohne konkreten Auftrag; keine automatische Dokumentationsänderung. Fehlende persönliche Inhalte nicht aus Bildbeispielen übernehmen.

Prüftor/Ergebnis:
Tatsächlichen Stand und Freigabeumfang benennen; Versions-/Quellennachweise, vorhandene Skripte und echte Prüfergebnisse mit Datum und Grenzen berichten. Historische erfolgreiche Initialisierungsprüfungen von neu ausgeführten Prüfungen trennen. Vorhandene Exportdateien allein beweisen keinen neuen Build oder Browserlauf. Frischen Clone/Umzug erst nach tatsächlicher Durchführung als bestanden melden.
Berichte tatsächliche Änderungen, Nachweise, nicht getestete Aspekte und den nächsten kleinen Schritt. Nicht bestandene Prüftore nicht durch Änderung der Anforderungen umgehen.

Letzter Arbeitsschritt nach allen Implementierungs-/Testschritten: Prüfe Kontextdateien UND betroffene Prompts auf Konsistenz mit Dateiänderungen und wichtigen Entscheidungen. Bereits konkret beauftragte Dokumentationsänderungen im Umfang ausführen; sonst betroffene Datei, konkreten Textvorschlag/Diff, Nutzen und Auswirkungen nennen, ausdrücklich Bestätigung erfragen und vor dem Schreiben warten. Falls keine Anpassung nötig ist, dies als letzten Antwortpunkt bestätigen. Keine automatische Kontextpflege ohne Freigabe.
```
