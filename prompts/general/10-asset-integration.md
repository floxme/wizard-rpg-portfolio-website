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

Für diesen Auftrag zusätzlich lesen: docs/context/assets.md, docs/context/world-and-design.md, docs/context/privacy-security-and-licenses.md.

Zusätzlicher Projektfokus: Vorhandene GLB ist Prototyp, nur Running/Walking strukturell nachgewiesen. Fehlende Clips vorläufig ersetzen. Standardassets zuerst kostenlos suchen; nötige Lücken über Meshy.ai nur nach konkretem Auftrag. Original-PNGs und Original-GLB unverändert; Rechte/Plan nicht erfinden.

Arbeitsauftrag:
1. Prüfe Datei, Herkunft und Rechteangaben; keine Lizenz aus Dateiname oder KI-Herkunft ableiten.
2. Bei 3D: Maßstab, Ausrichtung, Materialien, Texturen, Rig/Clips, Root Motion und Ladegröße prüfen. Bei Audio/Bildern passende Qualitäts- und Formatprüfung.
3. Bewahre Originale, erstelle benötigte optimierte Ableitungen getrennt. Keine kostenpflichtigen Dienste oder Käufe eigenständig auslösen.
4. Integriere im genannten Umfang; bei ungeklärten Veröffentlichungsrechten Material nicht als releasefreigegeben behandeln.
5. Prüfe Interaktionen, reduzierte Bewegung und Qualitätsstufen. Assetregister-Änderung mit konkretem Nachweis zur Zustimmung vorlegen.

Bei visuellen Aufgaben zusätzlich docs/design/README.md, die zuständige Mockup-README UND die tatsächlichen PNGs lesen. Alle 29 vorhandenen PNGs sind freigegeben; nicht verändern. Relevante Patterns aus Architektur, UI, Gameplay und Performance beachten. Fragen nur zum unmittelbar betroffenen Schritt stellen.

Erwartetes Ergebnis:
Assetbefund, tatsächliche Integration, Tests/visuelle Prüfung, Rechte- und Performancefragen, vorgeschlagener Registereintrag.

Letzter Arbeitsschritt nach allen Implementierungs-/Testschritten: Prüfe Kontextdateien UND betroffene Prompts auf Konsistenz mit Dateiänderungen und wichtigen Entscheidungen. Bereits konkret beauftragte Dokumentationsänderungen im Umfang ausführen; sonst betroffene Datei, konkreten Textvorschlag/Diff, Nutzen und Auswirkungen nennen, ausdrücklich Bestätigung erfragen und vor dem Schreiben warten. Falls keine Anpassung nötig ist, dies als letzten Antwortpunkt bestätigen. Keine automatische Kontextpflege ohne Freigabe.
```
