# Asset-Integration

Zweck: Ein freigegebenes Asset einbinden.

## Verwendung

Den folgenden Prompt kopieren, eckige Platzhalter ausfüllen und an Codex im Projekt übergeben. Nicht benötigte optionale Felder entfernen. Ein Prompt erweitert keine Berechtigung aus AGENTS.md.

## Kopierbarer Prompt

```text
Assetdatei: [PFAD]
Zweck: [OBJEKT / ANIMATION / AUDIO / BILD]
Quelle/Rechte: [ANGABE ODER OFFEN]
Zu ersetzender Platzhalter: [ANGABE]

Lies zuerst AGENTS.md, docs/context/README.md und die unten genannten Dokumente. Prüfe den tatsächlichen Repository-Zustand. Halte dich an bestätigte Anforderungen.

Erfinde keine APIs, Fakten, Inhalte, Testergebnisse oder Entscheidungen. Nutze offizielle Dokumentation passend zu den tatsächlich eingesetzten Paketversionen; nenne bei technischen Aussagen Quelle und Nachweisstand. Wenn etwas nicht geprüft werden kann, sage es ausdrücklich. Trenne Annahmen und Vorschläge von bestätigten Fakten.

Ändere AGENTS.md, README.md, docs/ oder prompts/ nur, wenn ich die konkrete Änderung ausdrücklich beauftragt oder nach Erklärung genehmigt habe. Ansonsten nenne Datei, geplante Änderung und Nutzen, frage und warte. Kein eigenständiger Commit, Push oder Deployment. Keine Einführung von Backend, Datenbank, Tracking oder neuen Produktfunktionen ohne Freigabe.

Für diesen Auftrag zusätzlich lesen: docs/context/assets.md, docs/context/world-and-design.md, docs/context/privacy-security-and-licenses.md.

Arbeitsauftrag:
1. Prüfe Datei, Herkunft und Rechteangaben; keine Lizenz aus Dateiname oder KI-Herkunft ableiten.
2. Bei 3D: Maßstab, Ausrichtung, Materialien, Texturen, Rig/Clips, Root Motion und Ladegröße prüfen. Bei Audio/Bildern passende Qualitäts- und Formatprüfung.
3. Bewahre Originale, erstelle benötigte optimierte Ableitungen getrennt. Keine kostenpflichtigen Dienste oder Käufe eigenständig auslösen.
4. Integriere im genannten Umfang; bei ungeklärten Veröffentlichungsrechten Material nicht als releasefreigegeben behandeln.
5. Prüfe Interaktionen, reduzierte Bewegung und Qualitätsstufen. Assetregister-Änderung mit konkretem Nachweis zur Zustimmung vorlegen.

Erwartetes Ergebnis:
Assetbefund, tatsächliche Integration, Tests/visuelle Prüfung, Rechte- und Performancefragen, vorgeschlagener Registereintrag.
```
