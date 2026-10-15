# Umsetzungsplan

Die Reihenfolge konkretisiert „bedienbarer Prototyp zuerst“. Alle Phasen sind zum Zeitpunkt dieser Dokumentation noch nicht als implementiert nachgewiesen. Statusänderungen dieser Datei nur mit Zustimmung.

## 0 – Repository und Versionen

Bestehende Dateien prüfen, AGENTS erhalten, private Repository-Einstellung durch Florian prüfen lassen. Stabile kompatible Pakete auflösen; tatsächliche Node/npm-Version feststellen. Installierbaren Lockfile-Stand, Formatierung, Typecheck und Build vorbereiten. Keine finale Assetintegration und kein Deployment.

## 1 – HTML und Sprache

Root-Startscreen, Sprachrouten, gemeinsame Inhaltsmodelle und sechs Rubriken. Fehlende persönliche Texte als Entwicklungsplatzhalter kennzeichnen. Statischen Export und direkte URL-Aufrufe testen. Mobiles HTML, Fokus und reduzierte Bewegung früh berücksichtigen.

## 2 – Technischer Spielprototyp

Einfaches Gelände, Weg, Turmraum, Kristall und drei Hotspots. Platzhaltermagier, WASD/Shift, Kamera, Q/E, einfache Grenzen/Kollisionen. Frühe Pointer-Lock-Prüfung: Öffnen und Rückkehr über X/Zurück ohne weitere Nutzeraktion. Bei Konflikt erst Lösung mit Florian klären, bevor visuelle Abhängigkeiten darauf aufgebaut werden.

## 3 – Vollständiger Interaktionsdurchlauf

Kristall-Zustände, Teleport mit automatischem Öffnen, Kamerarückkehr, Idle und Leuchten-Aus. Platzhalteranimationen reichen. Schmiede, Garten, Schild, Minimap, freiwillige Aufgaben. Sprache erhält Weltzustand. HTML/3D-Inhalte identisch. Keine Mehrfachauslösung durch gehaltenes E.

## 4 – Robustheit und Einstellungen

Automatik/manuelle Grafik, Speicher-Fallbacks, reduzierte Bewegung, WebGL-/Ladefehler, Audio-Grundgerüst stumm. Messwerte sammeln; Leistungsbudgets vorschlagen und freigeben lassen. Prototyp gemeinsam gegen Abnahmekriterien bewerten.

## 5 – Visuelle und akustische Ausarbeitung

Freigegebene Assets integrieren, Idle/Zauber ergänzen, Pixel-UI, Dämmerung, Licht, Effekte, Musik/Sounds. Vorher/Nachher messen. Visuelle Qualität darf bereits funktionierende Bedienabläufe nicht aufheben.

## 6 – Inhalte und Releasevorbereitung

DE/EN-Texte, Links, Rechte/Attribution, erforderliche rechtliche Inhalte und reale Browser-/Gerätematrix prüfen. Domain/Hosting wählen, statischen Export dort testen. Releasebericht mit verbleibenden Problemen. Florian entscheidet über Veröffentlichung und führt Commit/Push aus; kein selbstständiges Deployment.
