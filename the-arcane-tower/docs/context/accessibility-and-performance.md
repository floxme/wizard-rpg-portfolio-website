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
