# Zugänglichkeit und Performance

## Beschlossen

Vollständiges HTML-Portfolio auf allen Geräten. Desktop/Laptop mit Maus und Tastatur erhält die spielbare 3D-Welt; Smartphone/Tablet im ersten Release HTML. Touch-Gameplay ist eine spätere Erweiterung. Inhalte sind weder an WebGL noch an Quests gebunden.

Automatische Qualitätsregelung ist Standard; zusätzlich Niedrig, Mittel, Hoch. Bei manueller Auswahl keine heimlichen Stufenwechsel. Grafikeinstellung lokal speichern.

## Automatische Qualität

Gemessene Leistung statt allein Gerätebezeichnung verwenden. Bei anhaltender Schwäche schrittweise Renderauflösung, Schatten, Partikel, Leuchteffekte und dekorative Animationen reduzieren; bei stabiler Reserve vorsichtig erhöhen. Untergrenze gegen starke Unschärfe, getrennte Schwellen und Wartezeiten gegen Pendeln. Ladephasen, Hintergrundtabs und Portfolio-Pausen nicht als normale FPS-Messung auswerten.

HTML-Texte/UI bleiben scharf und vollständig. PerformanceMonitor liefert Mess-/Triggerhilfe, nicht automatisch die vollständige Qualitätslogik. Exakte DPR-Grenzen, FPS-Ziele, Schattenbudgets und Wartezeiten erst am Prototyp bestimmen und nach Zustimmung dokumentieren. Kein pauschales 60-FPS-Versprechen auf allen Geräten.

Dateigröße und GPU-/CPU-Last separat behandeln: niedrigere Renderauflösung reduziert keine Downloads. Modelle, Texturen, Draw Calls und Schatten später messen. Finale Assets verzögert laden, HTML-Einstieg nicht durch 3D blockieren.

## Zugänglichkeit

- Systemeinstellung für reduzierte Bewegung und eigener Schalter; sofortige funktionsgleiche Übergänge.
- Semantisches HTML, klare Überschriften, echte Links/Buttons und lesbare Schrift.
- Sichtbarer Fokus, verständliche Beschriftungen, ausreichende Kontraste; Status nicht allein durch Farbe.
- X und Zurück per Tab erreichbar und mit Enter/Leertaste bedienbar. Esc schließt gemäß Produktentscheidung nicht.
- Fokus bei geöffneten Oberflächen sinnvoll führen; Hintergrund nicht unbeabsichtigt bedienen; nach Schließen zurück in passenden Kontext.
- HTML-Pfad ohne Maus verwendbar; interaktiver Skillbaum hat eine zugängliche Informationsdarstellung.
- Pixelstil darf Texte, Zoom und kleine Bildschirme nicht unlesbar machen.

Dies sind Umsetzungsanforderungen, keine bereits nachgewiesene Konformitätszertifizierung. Konkrete Kontrast-/Tastaturprüfungen bei Implementierung durchführen.

## Fehler und Unterbrechungen

Fehlendes WebGL, Ladefehler oder verlorener Rendering-Kontext: verständlicher Hinweis und direkter vollständiger HTML-Zugang. Kein endloser Loader. Gesperrter/beschädigter lokaler Speicher fällt auf Sitzungseinstellungen zurück. Audiofehler blockieren nicht. Verlust des Pointer Lock oder Tab-Fokus pausiert ungewollte Bewegung.

Browser-Matrix als Umsetzungsvorschlag: aktuelle Desktop-Versionen von Chrome/Edge, Firefox, Safari und Opera (Florians Browser); mobile HTML-Prüfung in Safari/Chrome. Verfügbare Testgeräte und Mindestversionen noch festlegen. Ungetestete Browser explizit nennen. Pointer-Lock-Rückkehr und Sprachwechsel unter 3D sind frühe Prüftore.

## Priorisiertes Laden und Ressourcen – Stand 16.10.2026

Beschlossen ist eine performancebewusste Umsetzung mit sinnvollem Hintergrundladen bereits im Startscreen. Technische Verfahren und Budgets erst messen/abstimmen; kein bestimmter Loader oder eine unbegrenzte Vorladepflicht folgt daraus.

| Priorität | Arbeit |
|---|---|
| 0 | Startscreen, Sprache, Einstellungen und direkter HTML-Zugang müssen schnell bedienbar sein. |
| 1 | Auf geeigneten Desktopgeräten nach dem nutzbaren Startscreen begrenzt wesentliche Weltressourcen im Hintergrund laden: Magier, Spawn, grundlegende Materialien. |
| 2 | Nach Weltwahl fehlende Pflichtressourcen mit verständlicher Ladeanzeige abschließen; keinen falschen Prozentfortschritt erfinden. |
| 3 | Bei Erkundung voraussichtlich bald benötigte Bereiche/Objekte nachladen. |
| 4 | Hochwertige Texturen, zusätzliche Dekoration, Audio und aufwendige Effekte zuletzt oder bei Bedarf. |

HTML-/Mobile-Besucher nicht zum Download der gesamten Welt zwingen. Bei direkter Portfolio-Wahl nicht benötigte Vorladung abbrechen/depriorisieren, soweit technisch möglich; Cache weiterverwenden. Begrenzte Parallelität, Geräte-/Netzbedingungen und Nutzerpräferenzen soweit verfügbar berücksichtigen, nicht nur Gerätebezeichnungen.

Download, Dekompression/Decoding, GPU-Upload und Shaderaufbereitung getrennt betrachten. Heruntergeladene Datei kann beim ersten Rendern weiterhin ruckeln. Teure Arbeit verteilen, doppelte Requests vermeiden, vorhandene Caches nutzen und Ladefehler/Retry/funktionsfähigen HTML-Ausweg vorsehen. Budgets für Bytes, Speicher, Texturen, Draw Calls, Lichter und Effekte am Prototyp bestimmen.

Nicht jede Laterne braucht dynamisches Licht/Schatten. Gemeinsame Materialien, Instancing für passende Wiederholungen, reduzierte Partikel und dekorative Animationen sowie angemessene Texturgrößen prüfen. Nur tatsächlich benötigte Modellvarianten ausliefern. Nicht alle Hintergrundressourcen nur für vermeintlich kürzere Ladezeiten in den Speicher laden.

## Ergänzte UI-/Prototypprüfungen

Lange DE/EN-Texte, Zoom und mobile Bildschirmhöhen prüfen; dekorative Rahmen dürfen Fokus/Touch-Ziele nicht verdecken. Hauptscrollbereich festlegen und Scrollsperren nach Menü-/Dialogschließen entfernen. Skillstufen zugänglich beschreiben; dekorative HP/Mana nicht als tatsächlichen Spielstatus ausgeben.

Kamera, Durchgänge, Rampen, Brücken, Podeste, Objekt-/Weltgrenzen und Kristallpositionierung vor finalen Assets testen. Kein Springen. Minimap-Marker folgt auch im Turm der echten Position/Ausrichtung. Reduzierte Bewegung erreicht dieselben Endzustände ohne Wartezeiten auf ausgelassene Clips.

Am Ende jeder Änderung Performance-/Zugänglichkeitskontext und betroffene Prompts auf Konsistenz prüfen; notwendige unautorisierte Anpassungen zunächst zur Bestätigung vorlegen.
