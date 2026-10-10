# Politik statt Schlagworte

Eine statische, mobil lesbare GitHub-Pages-Seite für einen **offenen Debattenvorschlag**. Sie erklärt die Methode, politische Forderungen nach konkreter Maßnahme, Zuständigkeit, Finanzierung, Wirkung und Grundrechten zu befragen. Zwei PDFs dienen ausdrücklich als **privates Arbeitsbeispiel**, nicht als amtliche oder vollständige Studie. Kein Framework, keine Installation, keine Analytics, kein externes Skript.

## STOP: Impressum vor dem Upload ausfüllen

Die Datei **`impressum.html` enthält noch den sichtbaren Platzhalter `[STRASSE_UND_HAUSNUMMER]`**. ZIP zuerst entpacken, dann `impressum.html` in einem einfachen Texteditor öffnen und genau diesen Text **einschließlich der eckigen Klammern** durch deine vollständige Straße und Hausnummer ersetzen. Speichern und die Datei vor dem Upload nochmals öffnen. **Niemals die unvollständige Fassung als fertige öffentliche Website hochladen oder den Link dazu teilen.**

Der rechtliche Name wurde nach deiner Korrektur zu **Mario Wildner** geändert (auch als inhaltlich Verantwortlicher); prüfe beide Stellen in der Datei vor dem Upload. Die E-Mail lautet `wildner.mario@gmail.com`. Ob für deine konkrete Nutzung zusätzlich ein weiterer Kontaktweg nach § 5 DDG und eigene Datenschutzangaben erforderlich sind, solltest du gegebenenfalls fachkundig prüfen. Dieses Muster garantiert keine vollständige Rechtskonformität. **Deine eingetragene Anschrift wird öffentlich; nach einem Upload kann sie auch in der Git-Historie erhalten bleiben, selbst wenn du sie später aus der sichtbaren Seite entfernst.**

Falls du schon die vorige Paketversion hochgeladen hast: Die neuen Dateien einschließlich `impressum.html` und der aktualisierten Fußzeilen zusätzlich hochladen bzw. ersetzen. Prüfe die öffentliche Seite **vor dem Teilen**.

## In 10 Minuten veröffentlichen – ohne Terminal

1. Auf GitHub ein **neues öffentliches Repository** namens `politik-statt-schlagworte` anlegen. Auf GitHub Free benötigt Pages für diese Einrichtung ein öffentliches Repository. **Beim Erstellen kein README hinzufügen**, denn dieses Paket enthält bereits eines. [GitHub Pages – Quickstart](https://docs.github.com/en/pages/quickstart)
2. Das ZIP-Paket auf dem eigenen Rechner **entpacken**. Auf der neuen Repository-Seite **Add file → Upload files** wählen. **Alle Inhalte des entpackten Ordners** hineinziehen, nicht den übergeordneten Ordner als einzelnes Verzeichnis und nicht die ZIP-Datei selbst. Im Repository-Stamm muss `index.html` liegen; die PDFs müssen unter `docs/` liegen. Änderung mit **Commit changes** speichern. [GitHub: Dateien im Browser hochladen](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
3. Im Repository **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main → /(root) → Save** wählen. Die Veröffentlichung kann laut GitHub einige Minuten dauern. [GitHub Pages – Quickstart](https://docs.github.com/en/pages/quickstart)
4. Bei deinem GitHub-Konto **`seelenstein`** lautet die voraussichtliche öffentliche Adresse **`https://seelenstein.github.io/politik-statt-schlagworte/`**. Die exakte URL wird nach Aktivierung in den Pages-Einstellungen angezeigt. Die Adresse funktioniert erst, wenn das Repository hochgeladen und Pages veröffentlicht ist.
5. Seite **auf dem Smartphone und in einem privaten Browserfenster** testen. In beiden PDF-Kacheln die Dateien öffnen; `fragen.html` und `updates.html` prüfen. Erst danach den Link auf Facebook teilen.

**Alternative, falls du bereits ein Repository `seelenstein.github.io` verwendest:** Die Dateien dort im Stamm hochladen; die Seite erscheint unter `https://seelenstein.github.io/`. In diesem Fall die festen `og:url`-, `og:image`- und Canonical-Adressen in `index.html` auf die tatsächliche Adresse ändern. Das lokale JavaScript ermittelt den Repository-Link für beide Standardfälle automatisch. Bei einer eigenen Domain muss dieser Link gegebenenfalls manuell angepasst werden.

## Wichtig: vor dem öffentlichen Teilen

- **Rechtliche Verantwortlichkeit prüfen.** Eine allgemein zugängliche Seite zur politischen Meinungsbildung kann in Deutschland eine Anbieterkennzeichnung und ggf. weitere redaktionelle Angaben erfordern. Name und E-Mail stammen aus deiner Angabe; die **Straße und Hausnummer fehlen noch**. Ergänze keine erfundenen oder fremden Daten. Entscheide vor Veröffentlichung, welche weiteren Angaben für dein konkretes Angebot erforderlich sind und wie du sie korrekt bereitstellst; im Zweifel fachkundige Beratung einholen. Die Medienanstalt Sachsen-Anhalt erläutert unterschiedliche Fallgruppen zur Impressumspflicht; daneben gibt es das [DDG § 5](https://www.gesetze-im-internet.de/ddg/__5.html). [Hinweise der Medienanstalt (PDF)](https://medienanstalt-sachsen-anhalt.de/cms/upload/downloads/Rechtsgrundlagen/2021-03-17_Hinweis_Impressumspflicht.pdf). Das ist keine Rechtsberatung. Dein GitHub-Benutzername ist öffentlich; eine rein anonyme Veröffentlichung wird hier nicht zugesagt.
- **PDF-Aussagen punktuell erneut prüfen**, wenn du sie im Facebook-Text als gesicherte Tatsachen hervorheben willst. Die PDFs sind als Beispiel und mit Stichtag gekennzeichnet. Besonders Zahlen, Zitate und aktuelle Gerichtsstände können sich ändern.
- **Social-Media-Bild separat hochladen:** `assets/social-card.png` ist ein optionales Bild für einen Facebook-Beitrag. Die Website selbst lädt keine externen Bilder.
- **Issues einschalten**, falls öffentliche Korrekturvorschläge erwünscht sind: Repository → Settings → General → Features → Issues. Keine Bearbeitungspflicht versprechen; die Seite sagt das ausdrücklich. Falls Issues deaktiviert bleiben, Links zu Issues aus `updates.html` entfernen oder den Hinweis umformulieren.

## Dateistruktur

```
index.html           Startseite
fragen.html          allgemein verwendbarer Fragenkatalog
updates.html         Transparenz und menschlich lesbares Änderungsprotokoll
impressum.html       Anbieterkennzeichnung — VOR DEM UPLOAD ausfüllen
styles.css           Layout; lokal, responsiv, ohne Webfont
site.js              nur Mobilmenü, Repo-Link und Kopierknopf
assets/icon.svg      Seitenicon
assets/social-card.png  optionales Facebook-Bild
docs/bericht.pdf     ausführlicher Bericht, 15 Seiten
docs/kurzfassung.pdf Kurzfassung, 2 Seiten
CHANGELOG.md         Änderungen am Inhalt protokollieren
CONTRIBUTING.md      Korrekturhinweise und Beiträge
```

## Änderungen vornehmen

- Texte: Datei `index.html`, `fragen.html` oder `updates.html` auf GitHub öffnen → Stiftsymbol → bearbeiten → Commit. Der Commit dokumentiert die Änderung in der Versionsgeschichte. Inhaltlich relevante Korrekturen **zusätzlich** in `CHANGELOG.md` und `updates.html` mit Datum und Grund eintragen.
- PDF: neue geprüfte Datei hochladen, alte Datei austauschen, PDF-Stichtag und Änderungsnotiz anpassen. Vorherige Fassungen bleiben über die Git-Historie nachvollziehbar; keine sensiblen Daten hochladen, denn das spätere Löschen einer Datei entfernt sie nicht automatisch aus früheren Commits.
- HTML/CSS/JS sind statisch; die Seite funktioniert ohne Build-Schritt und ohne Node.js.

## Redaktionelle Grenzen

Dieses Projekt ist **kein Parteiauftritt, keine amtliche Prüfung und keine repräsentative Untersuchung**. Seine Kernthese ist eine Verfahrensregel für öffentliche Debatten. Die exemplarischen PDFs enthalten überprüfbare Fundstellen; einzelne Aussagen sollten an den Originalquellen und am Veröffentlichungsdatum geprüft werden. Grundrechte gehören zur inhaltlichen Prüfung und werden nicht zugunsten eines „weniger aufgeregten Tons“ zurückgestellt.

## Öffentlich teilen

Außerhalb des Repositorys liegen zwei anpassbare Entwürfe: ein Facebook-Artikel und ein E-Mail-Text an die Bundesgeschäftsstelle der Linken. **Vor Versand prüfen, dass die bereits eingetragene GitHub-Pages-URL erreichbar ist.** E-Mail und Facebook-Text sind nicht Bestandteil dieser Website, damit das öffentliche Repository nicht wie eine parteigebundene Kampagnenorganisation erscheint.
