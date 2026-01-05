# 🎫 Sprint 3 Tickets - Login, Summary, Help & Legal

> **Verantwortungsbereich:** Benutzeraccount, Summary, Help, Privacy & Legal Notice  
> **Erstellt:** 05.01.2026  
> **Gesamtzeit geschätzt:** 10-14 Stunden

---

## 🔴 PRIORITÄT: KRITISCH

### Ticket 1: Registrierungsformular erstellen
**Geschätzte Zeit:** ⏱️ 2-3 Stunden  
**Status:** [ ] Offen  
**Checklist-Referenz:** Benutzeraccount - User Story 1

> **User Story:**  
> *Als neuer Benutzer möchte ich mich registrieren können, um Zugang zu Join zu erhalten und Join nutzen zu können.*

**Akzeptanzkriterien:**
- [ ] Formular mit Feldern für E-Mail, Name und Passwort
- [ ] Checkbox für Datenschutzerklärung akzeptieren
- [ ] Fehlermeldungen bei ungültiger Eingabe (z.B. ungültige E-Mail)
- [ ] "Registrieren"-Button deaktiviert bis alle Pflichtfelder ausgefüllt

**Technische Hinweise:**
```typescript
// Angular Reactive Forms für Validierung
this.registerForm = this.fb.group({
  name: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]],
  acceptPrivacy: [false, Validators.requiredTrue]
});
```

---

### Ticket 2: Login-Fehlerbehandlung
**Geschätzte Zeit:** ⏱️ 1 Stunde  
**Status:** [ ] Offen  
**Checklist-Referenz:** Benutzeraccount - User Story 2

> **User Story:**  
> *Als Benutzer möchte ich mich anmelden können, um Zugriff auf das Dashboard und das Kanban-Board zu bekommen.*

**Akzeptanzkriterien:**
- [ ] Fehlermeldung bei falschem Passwort
- [ ] Fehlermeldung bei nicht existierendem Account
- [ ] Keine Standard-Browser-Alerts verwenden

**Technische Hinweise:**
```typescript
signIn(email: string, password: string) {
  return signInWithEmailAndPassword(this.auth, email, password)
    .catch(error => {
      this.errorMessage = this.getErrorMessage(error.code);
    });
}
```

---

### Ticket 3: Route Guards für geschützte Seiten
**Geschätzte Zeit:** ⏱️ 1-1.5 Stunden  
**Status:** [ ] Offen  
**Checklist-Referenz:** Benutzeraccount - User Story 2, Punkt 5

> **User Story:**  
> *Als Benutzer möchte ich mich anmelden können, um Zugriff auf das Dashboard und das Kanban-Board zu bekommen.*

**Akzeptanzkriterien:**
- [ ] Nicht angemeldete Besucher werden bei geschützten Seiten auf Login weitergeleitet
- [ ] Geschützte Seiten: Summary, Add-Task, Board, Contacts
- [ ] Nach Login: Weiterleitung zur ursprünglich angefragten Seite

**Technische Hinweise:**
```typescript
// auth.guard.ts
canActivate(): boolean {
  if (this.authService.isLoggedIn()) {
    return true;
  }
  this.router.navigate(['/login']);
  return false;
}
```

---

### Ticket 4: Logout-Funktion implementieren
**Geschätzte Zeit:** ⏱️ 45 Minuten  
**Status:** [ ] Offen  
**Checklist-Referenz:** Benutzeraccount - User Story 4

> **User Story:**  
> *Als Benutzer möchte ich mich von Join abmelden können, damit niemand ohne meine Zustimmung auf meinen Account zugreifen kann.*

**Akzeptanzkriterien:**
- [ ] Logout-Option im Header (User-Menü)
- [ ] Nach Logout: Weiterleitung zum Login-Bildschirm
- [ ] Session/Token wird gelöscht

**Technische Hinweise:**
```typescript
logout(): void {
  signOut(this.auth).then(() => {
    this.router.navigate(['/login']);
  });
}
```

---

## 🟠 PRIORITÄT: HOCH

### Ticket 5: Legal Notice Seite erstellen
**Geschätzte Zeit:** ⏱️ 1 Stunde  
**Status:** [ ] Offen  
**Checklist-Referenz:** Impressum/Datenschutz - User Story 1

> **User Story:**  
> *Als Benutzer möchte ich die Rechtshinweise und Impressum von Join einsehen können, um Informationen über den Anbieter und den Nutzungsbedingungen zu erhalten.*

**Akzeptanzkriterien:**
- [ ] Link in der Sidebar vorhanden
- [ ] Seite mit vollständigem Impressum (Generator nutzen!)
- [ ] Auch für nicht-angemeldete User zugänglich

**Hinweis:** Verwende einen Impressum-Generator wie e-recht24.de

---

### Ticket 6: Privacy Policy Seite erstellen
**Geschätzte Zeit:** ⏱️ 1 Stunde  
**Status:** [ ] Offen  
**Checklist-Referenz:** Impressum/Datenschutz - User Story 2

> **User Story:**  
> *Als Benutzer möchte ich die Datenschutzerklärung der Anwendung einsehen können, um zu verstehen, wie meine Daten verwendet und geschützt werden.*

**Akzeptanzkriterien:**
- [ ] Link in der Sidebar vorhanden
- [ ] Seite mit vollständiger Datenschutzerklärung (Generator nutzen!)
- [ ] Auch für nicht-angemeldete User zugänglich

**Hinweis:** Verwende einen Datenschutz-Generator wie e-recht24.de

---

### Ticket 7: Help-Seite mit Hilfe-Button
**Geschätzte Zeit:** ⏱️ 1-1.5 Stunden  
**Status:** [ ] Offen  
**Checklist-Referenz:** Hilfe - User Story 1

> **User Story:**  
> *Als Benutzer möchte ich nach der Anmeldung im Header einen Hilfe-Button vorfinden, über den ich auf eine Informationsseite zum Kanbanboard gelange.*

**Akzeptanzkriterien:**
- [ ] Hilfe-Button (?) neben User-Icon im Header
- [ ] Button auf jeder Seite sichtbar
- [ ] Hilfe-Seite mit Kanban-Board Erklärung
- [ ] Zurück-Button zur letzten besuchten Seite

**Technische Hinweise:**
```typescript
goBack(): void {
  this.location.back();
}
```

---

### Ticket 8: Sidebar für nicht-angemeldete User anpassen
**Geschätzte Zeit:** ⏱️ 30-45 Minuten  
**Status:** [ ] Offen  
**Checklist-Referenz:** Häufige Fehler - Punkt 3

> **User Story:**  
> *Unangemeldete User haben nach Click auf Privacy Policy und Legal Notice Zugriff auf das komplette Board.*

**Akzeptanzkriterien:**
- [ ] Sidebar-Links (Summary, Board, etc.) ausblenden für nicht-angemeldete User
- [ ] Nur Legal Notice und Privacy Policy zeigen
- [ ] Nach Login: Alle Links wieder sichtbar

---

## 🟡 PRIORITÄT: MITTEL

### Ticket 9: Eigenen Account in Kontaktliste anzeigen
**Geschätzte Zeit:** ⏱️ 1-1.5 Stunden  
**Status:** [ ] Offen  
**Checklist-Referenz:** Benutzeraccount - User Story 3

> **User Story:**  
> *Als Benutzer möchte ich auch meinen eigenen Account in der Kontaktliste bearbeiten können, um sicherzustellen, dass meine Daten aktuell sind.*

**Akzeptanzkriterien:**
- [ ] Eigener Account in der Contacts-Liste sichtbar
- [ ] Eigenen Kontakt anklicken und bearbeiten können
- [ ] Änderungen werden in Firebase gespeichert

---

### Ticket 10: Dummy-Daten hinzufügen
**Geschätzte Zeit:** ⏱️ 30 Minuten  
**Status:** [ ] Offen  
**Checklist-Referenz:** Allgemein - Punkt 3

**Akzeptanzkriterien:**
- [ ] Mindestens 5 seriöse Tasks im Board
- [ ] Tasks mit verschiedenen Prioritäten
- [ ] Tasks in verschiedenen Spalten

---

### Ticket 11: Cross-Browser Testing
**Geschätzte Zeit:** ⏱️ 1-2 Stunden  
**Status:** [ ] Offen  
**Checklist-Referenz:** Allgemein - Punkt 4

**Akzeptanzkriterien:**
- [ ] Chrome getestet und funktioniert
- [ ] Firefox getestet und funktioniert
- [ ] Edge getestet und funktioniert
- [ ] Safari getestet (optional)

---

## 🟢 PRIORITÄT: NIEDRIG

### Ticket 12: Console-Fehler beheben
**Geschätzte Zeit:** ⏱️ 30-45 Minuten  
**Status:** [ ] Offen  
**Checklist-Referenz:** Technische Anforderungen - Punkt 3

**Akzeptanzkriterien:**
- [ ] Keine Fehlermeldungen in der Konsole
- [ ] Keine Warnings (wenn möglich)

---

### Ticket 13: Responsive Design - Summary Seite
**Geschätzte Zeit:** ⏱️ 1-1.5 Stunden  
**Status:** [ ] Offen  
**Checklist-Referenz:** Responsiveness - Punkt 1-4

> **Anforderung:**  
> *Jede Seite funktioniert bei jeder Auflösung bis min. 320px.*

**Akzeptanzkriterien:**
- [ ] Desktop-View (> 1200px) prüfen und ggf. anpassen
- [ ] Tablet-View (768px - 1200px) prüfen und ggf. anpassen
- [ ] Mobile-View (< 768px) prüfen und ggf. anpassen
- [ ] Keine horizontalen Scrollbalken
- [ ] Content-Begrenzung bei max-width 1440px

**Breakpoints testen:**
- [ ] 1440px (Desktop max)
- [ ] 1200px (Tablet/Desktop)
- [ ] 768px (Tablet/Mobile)
- [ ] 425px (Mobile L)
- [ ] 375px (Mobile M)
- [ ] 320px (Mobile S)

---

### Ticket 14: Responsive Design - Login & Registrierung
**Geschätzte Zeit:** ⏱️ 1 Stunde  
**Status:** [ ] Offen  
**Checklist-Referenz:** Responsiveness - Punkt 1-4

**Akzeptanzkriterien:**
- [ ] Desktop-View prüfen und ggf. anpassen
- [ ] Mobile-View prüfen und ggf. anpassen
- [ ] Formular auf allen Bildschirmgrößen nutzbar
- [ ] Keine horizontalen Scrollbalken

---

### Ticket 15: Responsive Design - Help, Legal Notice, Privacy Policy
**Geschätzte Zeit:** ⏱️ 45 Minuten  
**Status:** [ ] Offen  
**Checklist-Referenz:** Responsiveness - Punkt 1-4

**Akzeptanzkriterien:**
- [ ] Alle drei Seiten responsive gestalten
- [ ] Texte lesbar auf allen Bildschirmgrößen
- [ ] Keine horizontalen Scrollbalken

---

## ✅ BEREITS ERLEDIGT

### Summary/Dashboard (Desktop) ✅
**Status:** [x] Erledigt  
**Checklist-Referenz:** Benutzeraccount - User Story 5

> **User Story:**  
> *Als Benutzer möchte ich die wichtigsten Informationen zur Anzahl der Tasks in dem jeweiligen Status und den Task mit der nächsten Deadline auf dem Dashboard sehen.*

**Umgesetzte Features:**
- [x] Anzahl Tasks bis zur nächsten Deadline
- [x] Anzahl Tasks pro Status (To-do, In Progress, Awaiting Feedback, Done)
- [x] Begrüßung basierend auf Tageszeit
- [x] Benutzername wird angezeigt
- [x] Dynamische Deadline-Labels (Upcoming Deadline / Overdue)
- [x] OnPush Change Detection für Performance
- [x] Desktop-Layout (50/50 Split)

---

## 📊 Zusammenfassung

| Priorität | Ticket | Zeit |
|-----------|--------|------|
| 🔴 Kritisch | 1. Registrierungsformular | 2-3h |
| 🔴 Kritisch | 2. Login-Fehlerbehandlung | 1h |
| 🔴 Kritisch | 3. Route Guards | 1-1.5h |
| 🔴 Kritisch | 4. Logout-Funktion | 45 min |
| 🟠 Hoch | 5. Legal Notice Seite | 1h |
| 🟠 Hoch | 6. Privacy Policy Seite | 1h |
| 🟠 Hoch | 7. Help-Seite | 1-1.5h |
| 🟠 Hoch | 8. Sidebar anpassen | 30-45 min |
| 🟡 Mittel | 9. Eigener Account in Contacts | 1-1.5h |
| 🟡 Mittel | 10. Dummy-Daten | 30 min |
| 🟡 Mittel | 11. Cross-Browser Testing | 1-2h |
| 🟢 Niedrig | 12. Console-Fehler | 30-45 min |
| 🟢 Niedrig | 13. Responsive: Summary | 1-1.5h |
| 🟢 Niedrig | 14. Responsive: Login & Registrierung | 1h |
| 🟢 Niedrig | 15. Responsive: Help, Legal, Privacy | 45 min |
| ✅ Erledigt | Summary/Dashboard (Desktop) | - |

**Gesamt (offen):** ~13-18 Stunden

