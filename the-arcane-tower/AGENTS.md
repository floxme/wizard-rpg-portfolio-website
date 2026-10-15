# The Arcane Tower – Regeln für Codex

Stand: 15.10.2026 · Eigentümer: Florian Metzger · Erste autorisierte Kontextfassung.

## Vor jedem Auftrag

1. Lies diese Datei und `docs/context/README.md`.
2. Lies die für die Aufgabe zuständigen Kontextdateien sowie `docs/development/open-items.md`.
3. Prüfe den tatsächlichen Repository-Zustand. Dokumentation beschreibt Anforderungen, nicht automatisch bereits implementierte Funktionen.
4. Arbeite in kleinen, überprüfbaren Schritten. Erkläre geplante Schritte und Ergebnisse auf Deutsch, verständlich und konkret.

## Zustimmung zu Dokumentationsänderungen

Diese Regel gilt für AGENTS.md, README.md, alle Dateien unter docs/ sowie die wiederverwendbaren Prompts unter prompts/. Auch Ergänzungen, vermeintliche Korrekturen und Statusänderungen fallen darunter.

Erkennst du eine relevante neue Entscheidung oder veralteten Kontext, schlage die Anpassung vor. Nenne VOR dem Schreiben:
- betroffene Datei(en),
- konkrete geplante Änderung, möglichst als kurzer Textvorschlag oder Diff,
- warum diese Information späteren Entwicklungsaufträgen hilft,
- Auswirkungen auf bestehende Anforderungen.

Frage ausdrücklich und warte auf Florians Zustimmung. Keine stillen Dokumentationsänderungen, keine automatisch ergänzten Entscheidungsprotokolle oder Abnahmekriterien. Eine ausdrückliche Anweisung, genau diese Dokumente zu ändern, gilt als Zustimmung für diesen Umfang; nicht erneut dieselbe Freigabe erfragen. Bei allgemeinem Entwicklungsauftrag ist eine Dokumentationsänderung nicht automatisch freigegeben. Bis zur Freigabe den Vorschlag im Gespräch ausgeben; unabhängige autorisierte Arbeit fortsetzen.

## Arbeitsgrenzen

- Keine eigenständigen Commits, Pushes, Repository-Veröffentlichungen oder Deployments. Florian prüft und übernimmt diese Schritte.
- Keine ungefragte Einführung von Backend, Datenbank, Analytics, Tracking, Administrationsoberfläche oder Konten. Backend braucht begründeten Vorschlag und ausdrückliche Freigabe.
- Befehle und Änderungen transparent ankündigen; keine unbeaufsichtigten Hintergrundaktionen. Bereits konkret beauftragte reversible Implementierung und zugehörige Prüfungen im vereinbarten Umfang durchführen. Tatsächliche Berechtigungsgrenzen respektieren.
- Bestehende Nutzeränderungen nicht überschreiben. Generatoren dürfen diese AGENTS.md nicht ersetzen.
- Architekturentscheidungen nicht aus Mockup-Beschriftungen oder Paketvorgaben ableiten. Bei Widerspruch zu einer bestätigten Produktentscheidung fragen.
- Keine erfundenen beruflichen Stationen, Skills, Projekte, Kennzahlen oder Nutzungsrechte.
- Kein Lebenslauf-Download, auch nicht als vorsorglicher Platzhalter.

## Verbindliche Produktgrenzen

Erster Release: private Quellen, öffentliches Portfolio als Ziel; lokal gepflegte DE/EN-Inhalte, statisches Hosting als Ziel, kein eigenes Backend. Desktop-Spielwelt und vollständiges HTML-Portfolio für alle Geräte. Platzhalter-Prototyp zuerst, finale Assets später.

Keine internen Unternehmensdetails veröffentlichen. toom Baumarkt darf genannt werden; das ist keine Freigabe für interne Screenshots, Code, Systeme, Architektur, Projektbezeichnungen oder Geschäftszahlen.

Esc schließt das Portfolio NICHT. Zurück und X schließen per Nutzeraktion; normaler Rückweg darf keinen zusätzlichen Klick/Q erfordern. Browserfehler nicht durch heimliche Änderung dieser Anforderung lösen. Details: `docs/context/gameplay-and-interactions.md`.

## Verbindliche Regel: Nachweise statt Erfindungen

Von Florian ausdrücklich am 15.10.2026 ergänzt:
- Keine Fakten, APIs, Paketfunktionen, Konfigurationsoptionen, Dateiinhalte, Nutzerentscheidungen, Quellen, Testergebnisse oder Projektfortschritte erfinden.
- Für technische Entscheidungen und Bibliotheksnutzung die offizielle Dokumentation der tatsächlich eingesetzten Version lesen. Bei Bedarf offizielle Release Notes, Migrationshinweise und Repository-Quellen ergänzen. Suchtreffer oder Erinnerungen allein sind kein ausreichender Implementierungsnachweis.
- Prüfe Aussagen am vorhandenen Code, an Paketmetadaten und an echten Ausgaben. „Laut Dokumentation möglich“, „im Code umgesetzt“ und „erfolgreich getestet“ sind unterschiedliche Nachweisstände.
- Unsicherheit, fehlenden Zugriff und nicht durchgeführte Prüfungen ausdrücklich nennen. Bei fehlender Dokumentation nicht raten: begrenzte überprüfbare Arbeit fortsetzen, offene Frage benennen und nötigenfalls nachfragen.
- Vorschläge, Annahmen und bestätigte Entscheidungen klar unterscheiden. Kein erfundenes API als Platzhalter in lauffähigem Code ausgeben. Bewusste Entwicklungsplatzhalter sichtbar kennzeichnen.
- Offizielle Quellen mit URL und relevanter Version bei technischen Empfehlungen nennen. Keine erfundenen Links oder Zitate.
- Eine Anweisung kann Fehler nicht vollständig ausschließen: durch Prüfung und transparente Nachweise absichern, keine Unfehlbarkeit versprechen.

## Umsetzung und Prüfung

- Fachinhalte einmal strukturiert pflegen und in HTML, Kristall, Schmiede und Garten wiederverwenden.
- Module klein halten; Formatierung, klare Namen und TypeScript-Typen konsequent einsetzen. Kommentare erklären Gründe und besondere Randbedingungen.
- Keine überflüssigen Abhängigkeiten oder spekulativen Erweiterungen.
- Relevante Abnahmekriterien auswählen. Tests müssen Verhalten prüfen, keine bloßen Implementierungsduplikate.
- Tatsächliche Befehle, Ergebnisse und nicht getestete Aspekte offen nennen. Browser- oder Performanceprüfung niemals behaupten, wenn nur Code gelesen wurde.
- Nach ausreichender Prüfung keine endlosen Zusatzprüfungen. Ergebnis, bekannte Einschränkungen und nächsten sinnvollen Schritt nennen.

## Konflikte und Quellen

Aktuelle ausdrückliche Nutzerentscheidungen gehen älteren Projektentscheidungen vor. Ihre Übernahme in Dateien folgt trotzdem dem oben beschriebenen Zustimmungsprozess. Kontextdateien beschreiben den aktuellen Sollzustand; das Entscheidungsprotokoll erklärt Änderungen. Vorschläge und offene Punkte sind keine bestätigten Anforderungen. Nicht abrufbare frühere Chatteile gelten nicht als analysiert.
