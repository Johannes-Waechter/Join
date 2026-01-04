Bitte erfülle alle Punkte auf dieser Liste, bevor du das Projekt einreichst. Diese **Definition of Done (DoD)** kannst du für alle deine Projekte verwenden.

**Merke:** Wir werden Join in einzelnen Abschnitten erstellen. Nach jedem "Sprint" erfolgt eine Zwischenabgabe des aktuellen Standes, welcher von den Mentoren abgenommen werden muss. In diesem dritten Abschnitt werden wir uns sowohl um die Login und Sign Up Sektion kümmern, als auch Summary, Help, Privacy und Legal Notice.

## **1. Benutzeraccount & Administration**

### **User Story 1**

Als neuer Benutzer möchte ich mich registrieren können, um Zugang zu Join zu erhalten und Join nutzen zu können.

- [ ]  Es gibt ein Registrierungsformular, auf dem Benutzer ihre E-Mail-Adresse, ihren Namen und ihr Passwort eingeben können
- [ ]  Bevor die Registrierung abgeschlossen wird, muss der Benutzer die Datenschutzerklärung akzeptieren.
- [ ]  Bei falscher Eingabe (z.B. ungültige E-Mail) erhält der Benutzer eine Fehlermeldung.
- [ ]  Der "Registrieren"-Button ist deaktiviert, solange nicht alle Pflichtfelder ausgefüllt sind.

### **User Story 2**

Als Benutzer möchte ich mich anmelden können, um Zugriff auf das Dashboard und das Kanban-Board zu bekommen.

- [ ]  Es gibt ein Login-Formular mit Feldern für E-Mail und Passwort.
- [ ]  Bei falscher Eingabe (z.B. falsches Passwort) erhält der Benutzer eine Fehlermeldung.
- [ ]  Es gibt eine Option für einen Gast-Login.
- [ ]  Wichtig: Sowohl registrierte User als auch Gäste bekommen im Board und in den Kontakten die gleichen Daten angezeigt.
- [ ]  Nicht angemeldete Besucher von Join werden werden bei geschützten Seiten (Summary, Add-Task, Board, Contacts etc.) auf die Login-Seite weitergeleitet

### **User Story 3**

Als Benutzer möchte ich auch meinen eigenen Account in der Kontaktliste bearbeiten können, um sicherzustellen, dass meine Daten aktuell sind.

- [ ]  Auch mein eigener Account ist in der "Contacts"-Liste sichtbar.
- [ ]  Ich kann auf meinen eigenen Kontakt klicken und ihn genauso bearbeiten wie andere Kontakte in der Liste.

### **User Story 4**

Als Benutzer möchte ich mich von Join abmelden können, damit niemand ohne meine Zustimmung auf meinen Account zugreifen kann.

- [ ]  Es gibt eine "Logout"-Option in der Benutzeroberfläche.
- [ ]  Nach Auswahl dieser Option werde ich sicher aus der Anwendung ausgeloggt und zum Login-Bildschirm von Join weitergeleitet.
- [ ]  Nach dem Abmelden sind meine persönlichen Daten und Einstellungen ohne erneutes Einloggen nicht zugänglich.

### **User Story 5**

Als Benutzer möchte ich die wichtigsten Informationen zur Anzahl der Tasks in dem jeweiligen Status und den Task mit der nächsten Deadline auf dem Dashboard sehen, wenn ich mich anmelde.

- [ ]  Das Dashboard zeigt die Anzahl der Tasks bis zur nächsten Deadline an.
- [ ]  Das Dashboard zeigt die Anzahl der Tasks in den Phasen ToDo, In Progress, Awaiting Feedback und Done.
- [ ]  Abhängig von der Tageszeit wird eine Begrüßungsnachricht (z.B. "Good morning, [Benutzername]") angezeigt.

## **2. Impressum / Datenschutzerklärung**

### **User Story 1:**

Als Benutzer möchte ich die Rechtshinweise und Impressum von Join einsehen können, um Informationen über den Anbieter und den Nutzungsbedingungen zu erhalten.

- [ ]  Es gibt einen Bereich wo man die Rechtliche Hinweise zu Join einsehen kann ("Legal Notice")
- [ ]  Durch Anklicken des Links werde ich zu einer Seite weitergeleitet, die alle notwendigen Informationen über den Anbieter und rechtliche Hinweise enthält.

### **User Story 2:**

Als Benutzer möchte ich die Datenschutzerklärung der Anwendung einsehen können, um zu verstehen, wie meine Daten verwendet und geschützt werden.

- [ ]  Es gibt einen Bereich in Join, wo Benutzer die "Privacy Policy" einsehen können.
- [ ]  Durch Anklicken des Links werde ich zu einer Seite weitergeleitet, die detaillierte Informationen darüber enthält, wie meine Daten gesammelt, verwendet und geschützt werden.

## **3. Hilfe**

### **User Story 1:**

Als Benutzer möchte ich nach der Anmeldung im Header einen Hilfe-Button vorfinden, über den ich auf eine Informationsseite zum Kanbanboard gelange.

- [ ]  Der Button ist auf jeder Seite neben dem User-Icon im Header anwählbar.
- [ ]  Es gibt einen Zurück-Button, der mich auf die letzte von mir besuchte Seite zurückbringt.

## **4. Immer zu berücksichtigen**

### **Allgemein**

- [ ]  Alle User Stories und Akzeptanzkriterien sind erfüllt.
- [ ]  Alle Features funktionieren fehlerfrei und wie erwartet.
- [ ]  Vor Abgabe werden mindestens 5 seriöse Tasks hinzugefügt (Dummy-Daten).
- [ ]  Alle Funktionalitäten wurden vor Abgabe von den Gruppenmitgliedern manuell getestet mit den aktuellsten Versionen der Hauptbrowser (Chrome, Firefox, Edge, wenn möglich auch Safari).

### **User Experience**

- [ ]  User erhält intuitiv Feedback bei Interaktionen (hover, toast-messages etc.)
- [ ]  Alle UI-Elemente (Farben, Abstände, Schatten) entsprechen dem Design-Prototypen in Figma.
- [ ]  Transitions auf anklickbaren Elementen liegen zwischen 75ms und 125ms.
- [ ]  Join funktioniert auf mobilen Geräten und unterstützt vertikale Anordnung der Kanban-Spalten.
- [ ]  Buttons haben die CSS Eigenschaft cursor: pointer; Inputs und Buttons haben keinen Standard-Border (Besser border: unset;);

### **Technische Anforderungen**

- [ ]  Join hat eine SPA-Architektur (Single-Page-Application)
- [ ]  Dateinamen
    - [ ]  beschreibend / aussagekräftig
    - [ ]  konsistent
- [ ]  Es gibt keine Fehlermeldungen oder logs in der Konsole

### **Design**

- [ ]  Haben Buttons die CSS Eigenschaft cursor: pointer; ?
- [ ]  Inputs und Buttons haben keinen Standard-Border (Besser border: unset;);

### **Responsiveness**

- [ ]  Jede Seite funktioniert bei jeder Auflösung bis min. 320px (Fenster kleiner ziehen)
- [ ]  Jede Seite funktioniert sowohl mobile als auch auf Desktop
- [ ]  Content-Begrenzung für große Monitore (max-width bei 1440px / linksbündig)
    
    → gilt nicht für Design-Elemente
    
- [ ]  Keine horizontalen Scrollbalken bei kleineren Auflösungen

### **Formulare**

- [ ]  Verwende eine Form Validation
- [ ]  Orientiere dich am Figma, keine HTML5-Standardvalidation verwenden
- [ ]  Button deaktivieren während der Ladezeit

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

- [ ]  Kein User-Feedback, wenn etwas gespeichert / geändert wird
- [ ]  Du hast kein gültiges Impressum oder keine gültige Datenschutzerklärung (verwende einen Generator)
- [ ]  Unangemeldete User haben nach Click auf Privacy Policy und Legal Notice Zugriff auf das komplette Board (blende die entsprechenden Links in der Sidebar aus)
- [ ]  verwenden von alerts/HTML5 in der Form Validation