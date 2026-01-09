Bitte erfülle alle Punkte auf dieser Liste, bevor du das Projekt einreichst. Diese **Definition of Done (DoD)** kannst du für alle deine Projekte verwenden.

**Merke:** Wir werden Join in einzelnen Abschnitten erstellen. Nach jedem "Sprint" erfolgt eine Zwischenabgabe des aktuellen Standes, welcher von den Mentoren abgenommen werden muss. In diesem dritten Abschnitt werden wir uns sowohl um die Login und Sign Up Sektion kümmern, als auch Summary, Help, Privacy und Legal Notice.

## **1. Benutzeraccount & Administration**

### **User Story 1**

Als neuer Benutzer möchte ich mich registrieren können, um Zugang zu Join zu erhalten und Join nutzen zu können.

- [x]  Es gibt ein Registrierungsformular, auf dem Benutzer ihre E-Mail-Adresse, ihren Namen und ihr Passwort eingeben können
- [x]  Bevor die Registrierung abgeschlossen wird, muss der Benutzer die Datenschutzerklärung akzeptieren.
- [x]  Bei falscher Eingabe (z.B. ungültige E-Mail) erhält der Benutzer eine Fehlermeldung.
- [x]  Der "Registrieren"-Button ist deaktiviert, solange nicht alle Pflichtfelder ausgefüllt sind.

### **User Story 2**

Als Benutzer möchte ich mich anmelden können, um Zugriff auf das Dashboard und das Kanban-Board zu bekommen.

- [x]  Es gibt ein Login-Formular mit Feldern für E-Mail und Passwort.
- [x]  Bei falscher Eingabe (z.B. falsches Passwort) erhält der Benutzer eine Fehlermeldung.
- [x]  Es gibt eine Option für einen Gast-Login.
- [x]  Wichtig: Sowohl registrierte User als auch Gäste bekommen im Board und in den Kontakten die gleichen Daten angezeigt.
- [x]  Nicht angemeldete Besucher von Join werden werden bei geschützten Seiten (Summary, Add-Task, Board, Contacts etc.) auf die Login-Seite weitergeleitet

### **User Story 3**

Als Benutzer möchte ich auch meinen eigenen Account in der Kontaktliste bearbeiten können, um sicherzustellen, dass meine Daten aktuell sind.

- [x]  Auch mein eigener Account ist in der "Contacts"-Liste sichtbar.
- [x]  Ich kann auf meinen eigenen Kontakt klicken und ihn genauso bearbeiten wie andere Kontakte in der Liste.

### **User Story 4**

Als Benutzer möchte ich mich von Join abmelden können, damit niemand ohne meine Zustimmung auf meinen Account zugreifen kann.

- [x]  Es gibt eine "Logout"-Option in der Benutzeroberfläche.
- [x]  Nach Auswahl dieser Option werde ich sicher aus der Anwendung ausgeloggt und zum Login-Bildschirm von Join weitergeleitet.
- [x]  Nach dem Abmelden sind meine persönlichen Daten und Einstellungen ohne erneutes Einloggen nicht zugänglich.

### **User Story 5**

Als Benutzer möchte ich die wichtigsten Informationen zur Anzahl der Tasks in dem jeweiligen Status und den Task mit der nächsten Deadline auf dem Dashboard sehen, wenn ich mich anmelde.

- [x]  Das Dashboard zeigt die Anzahl der Tasks bis zur nächsten Deadline an.
- [x]  Das Dashboard zeigt die Anzahl der Tasks in den Phasen ToDo, In Progress, Awaiting Feedback und Done.
- [x]  Abhängig von der Tageszeit wird eine Begrüßungsnachricht (z.B. "Good morning, [Benutzername]") angezeigt.

## **2. Impressum / Datenschutzerklärung**

### **User Story 1:**

Als Benutzer möchte ich die Rechtshinweise und Impressum von Join einsehen können, um Informationen über den Anbieter und den Nutzungsbedingungen zu erhalten.

- [x]  Es gibt einen Bereich wo man die Rechtliche Hinweise zu Join einsehen kann ("Legal Notice")
- [x]  Durch Anklicken des Links werde ich zu einer Seite weitergeleitet, die alle notwendigen Informationen über den Anbieter und rechtliche Hinweise enthält.

### **User Story 2:**

Als Benutzer möchte ich die Datenschutzerklärung der Anwendung einsehen können, um zu verstehen, wie meine Daten verwendet und geschützt werden.

- [x]  Es gibt einen Bereich in Join, wo Benutzer die "Privacy Policy" einsehen können.
- [x]  Durch Anklicken des Links werde ich zu einer Seite weitergeleitet, die detaillierte Informationen darüber enthält, wie meine Daten gesammelt, verwendet und geschützt werden.

## **3. Hilfe**

### **User Story 1:**

Als Benutzer möchte ich nach der Anmeldung im Header einen Hilfe-Button vorfinden, über den ich auf eine Informationsseite zum Kanbanboard gelange.

- [x]  Der Button ist auf jeder Seite neben dem User-Icon im Header anwählbar.
- [x]  Es gibt einen Zurück-Button, der mich auf die letzte von mir besuchte Seite zurückbringt.

## **4. Immer zu berücksichtigen**

### **Allgemein**

- [x]  Alle User Stories und Akzeptanzkriterien sind erfüllt.
- [x]  Alle Features funktionieren fehlerfrei und wie erwartet.
- [ ]  Vor Abgabe werden mindestens 5 seriöse Tasks hinzugefügt (Dummy-Daten).
- [ ]  Alle Funktionalitäten wurden vor Abgabe von den Gruppenmitgliedern manuell getestet mit den aktuellsten Versionen der Hauptbrowser (Chrome, Firefox, Edge, wenn möglich auch Safari).

### **User Experience**

- [x]  User erhält intuitiv Feedback bei Interaktionen (hover, toast-messages etc.)
- [x]  Alle UI-Elemente (Farben, Abstände, Schatten) entsprechen dem Design-Prototypen in Figma.
- [x]  Transitions auf anklickbaren Elementen liegen zwischen 75ms und 125ms.
- [x]  Join funktioniert auf mobilen Geräten und unterstützt vertikale Anordnung der Kanban-Spalten.
- [x]  Buttons haben die CSS Eigenschaft cursor: pointer; Inputs und Buttons haben keinen Standard-Border (Besser border: unset;);

### **Technische Anforderungen**

- [x]  Join hat eine SPA-Architektur (Single-Page-Application)
- [x]  Dateinamen
    - [x]  beschreibend / aussagekräftig
    - [x]  konsistent
- [x]  Es gibt keine Fehlermeldungen oder logs in der Konsole

### **Design**

- [x]  Haben Buttons die CSS Eigenschaft cursor: pointer; ?
- [x]  Inputs und Buttons haben keinen Standard-Border (Besser border: unset;);

### **Responsiveness**

- [x]  Jede Seite funktioniert bei jeder Auflösung bis min. 320px (Fenster kleiner ziehen)
- [x]  Jede Seite funktioniert sowohl mobile als auch auf Desktop
- [x]  Content-Begrenzung für große Monitore (max-width bei 1440px / linksbündig)
    
    → gilt nicht für Design-Elemente
    
- [x]  Keine horizontalen Scrollbalken bei kleineren Auflösungen

### **Formulare**

- [x]  Verwende eine Form Validation
- [x]  Orientiere dich am Figma, keine HTML5-Standardvalidation verwenden
- [x]  Button deaktivieren während der Ladezeit

### **JavaScript / Clean Code**

- [ ]  Eine Funktion hat nur eine Aufgabe
- [ ]  Eine Funktion ist maximal 14 Zeilen lang (HTML ausgenommen)
- [ ]  Deutliche Funktionsnamen
- [ ]  Geschrieben in camelCase (Richtig: shoppingCart, falsch; Shopping_Cart) für Dateinamen, Variablen und Funktionen
- [ ]  Der erste Buchstabe von Funktionen / Variablen ist **klein geschrieben**
- [ ]  2 Leerzeilen Abstand zwischen Funktionen
- [ ]  Max 400 LOCs (Lines of Code) pro Datei
- [ ]  Dateien sind richtig benannt: index.html, script.js, style.css
- [ ]  Ggf. HTML Code in extra Funktion
- [ ]  Extra Ordner für templates und Bilder (img)
- [ ]  Statischer HTML Code wird **nicht** über JavaScript generiert
- [ ]  Funktionen sind nach JSDoc Standard dokumentiert: https://jsdoc.app/about-getting-started.html

### **Vermeide diese häufigen Fehler**

- [x]  Kein User-Feedback, wenn etwas gespeichert / geändert wird
- [x]  Du hast kein gültiges Impressum oder keine gültige Datenschutzerklärung (verwende einen Generator)
- [x]  Unangemeldete User haben nach Click auf Privacy Policy und Legal Notice Zugriff auf das komplette Board (blende die entsprechenden Links in der Sidebar aus)
- [x]  verwenden von alerts/HTML5 in der Form Validation