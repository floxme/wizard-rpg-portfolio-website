# Asset-Integration

Zweck: Ein freigegebenes Asset einbinden.

## Verwendung

Den folgenden Prompt kopieren, eckige Platzhalter ausfüllen und an KI im Projekt übergeben. Nicht benötigte optionale Felder entfernen. Ein Prompt erweitert keine Berechtigung aus AGENTS.md.

## Kopierbarer Prompt

```text
Assetdatei: [PFAD]
Zweck: [OBJEKT / ANIMATION / AUDIO / BILD]
Quelle/Rechte: [ANGABE ODER OFFEN]
Zu ersetzender Platzhalter: [ANGABE]

Alle Dateipfade sind relativ zum Projektroot. Lies zuerst AGENTS.md, docs/context/README.md und die unten genannten Dokumente. Prüfe den tatsächlichen Repository-Zustand. Halte dich an bestätigte Anforderungen.

Erfinde keine APIs, Fakten, Inhalte, Testergebnisse oder Entscheidungen. Nutze offizielle Dokumentation passend zu den tatsächlich eingesetzten Paketversionen; nenne bei technischen Aussagen Quelle und Nachweisstand. Wenn etwas nicht geprüft werden kann, sage es ausdrücklich. Trenne Annahmen und Vorschläge von bestätigten Fakten.

Ändere AGENTS.md, README.md, docs/ oder prompts/ nur, wenn ich die konkrete Änderung ausdrücklich beauftragt oder nach Erklärung genehmigt habe. Ansonsten nenne Datei, geplante Änderung und Nutzen, frage und warte. Kein eigenständiger Commit, Push oder Deployment. Keine Einführung von Backend, Datenbank, Tracking oder neuen Produktfunktionen ohne Freigabe.

Für diesen Auftrag zusätzlich lesen: docs/context/assets.md, docs/context/world-and-design.md, docs/context/privacy-security-and-licenses.md. Bei HTML-Portfolio-Assets zusätzlich docs/design/asset-inventory/arcane-portfolio-asset-inventar-phase-01.md und die elf ursprünglichen Portfolio-Referenzen. Das Inventar enthält Planung sowie in Abschnitt 9 sieben konkret ausgewählte PNGs: B01/B02 als Bildmotive, D01 und D02-A bis D02-D als Designvorlagen. Herkunft laut Nutzer: ChatGPT/OpenAI-Bildgenerierung. PNG-Vorhandensein und Motivauswahl belegen weder SVG-/CSS-Umsetzung noch Appintegration, Performance, Browserfreigabe oder abgeschlossene Rechteprüfung. D02-D bleibt reduziert; tatsächliche Pfade, Alpha und Tracking-Status prüfen statt Transparenz oder technische Produktionsreife vorauszusetzen. Weitere Assetproduktion oder technische Ableitungen benötigen einen eigenen Auftrag; ein Dokumentationsabgleich ist kein Integrationsauftrag.

Zusätzlicher Projektfokus: Für 3D bleibt die vorhandene GLB Prototyp, nur Running/Walking strukturell nachgewiesen; fehlende Clips vorläufig ersetzen. Spätere Weltassets in Phasen 06/07: Standardassets zuerst kostenlos suchen, nötige Meshy-Lücken nur nach konkretem Auftrag. Davon begrenzt ausgenommen sind notwendige HTML-Portfolio-Assets schon während Phase 01. Illustrationen von skalierbaren SVG/CSS-Elementen und echten React/HTML/CSS-Komponenten trennen, kein starres UI-Gesamtbild. Bestehende geeignete Motive bevorzugt wiederverwenden; 18 Bildmotiv-Kandidaten sind keine Pflichtdateizahl. Neue Einzelproduktion und Integration brauchen gesonderte Beauftragung/Freigabe, neue Mockup-Entwürfe drei Varianten. Original-PNGs/GLB unverändert; Herkunft, Rechte und technische Eignung vor Verwendung belegen, nicht erfinden.

Arbeitsauftrag:
1. Prüfe Datei, Herkunft und Rechteangaben; keine Lizenz aus Dateiname oder KI-Herkunft ableiten.
2. Bei 3D: Maßstab, Ausrichtung, Materialien, Texturen, Rig/Clips, Root Motion und Ladegröße prüfen. Bei Audio/Bildern passende Qualitäts- und Formatprüfung.
3. Bewahre Originale, erstelle benötigte optimierte Ableitungen getrennt. Keine kostenpflichtigen Dienste oder Käufe eigenständig auslösen.
4. Integriere im genannten Umfang; bei ungeklärten Veröffentlichungsrechten Material nicht als releasefreigegeben behandeln.
5. Prüfe Interaktionen, reduzierte Bewegung und Qualitätsstufen. Assetregister-Änderung mit konkretem Nachweis zur Zustimmung vorlegen.

Bei visuellen Aufgaben zusätzlich docs/design/README.md, die zuständige Mockup-README UND die tatsächlichen PNGs lesen. Alle 29 ursprünglichen Mockup-PNGs sind als Designreferenzen freigegeben; nicht verändern. Die sieben zusätzlich ausgewählten Portfolio-PNGs getrennt davon erhalten. Relevante Patterns aus Architektur, UI, Gameplay und Performance beachten. Fragen nur zum unmittelbar betroffenen Schritt stellen.

Erwartetes Ergebnis:
Assetbefund, tatsächliche Integration, Tests/visuelle Prüfung, Rechte- und Performancefragen, vorgeschlagener Registereintrag.

Letzter Arbeitsschritt nach allen Implementierungs-/Testschritten: Prüfe Kontextdateien UND betroffene Prompts auf Konsistenz mit Dateiänderungen und wichtigen Entscheidungen. Bereits konkret beauftragte Dokumentationsänderungen im Umfang ausführen; sonst betroffene Datei, konkreten Textvorschlag/Diff, Nutzen und Auswirkungen nennen, ausdrücklich Bestätigung erfragen und vor dem Schreiben warten. Falls keine Anpassung nötig ist, dies als letzten Antwortpunkt bestätigen. Keine automatische Kontextpflege ohne Freigabe.
```
