# README


Kurzfassung: Ziele und Arbeitsweise von „Join“. Figma dient nur zur Visualisierung; Inhalte wachsen mit dem Projektstand.


## Inhalt

- Projektüberblick
- Aktuelle Sprint‑Vorgaben (Stand 2025‑12‑04)
- Screenshots
- Features
- Technischer Stack
- Installation
- Entwicklung
- Tests
- Build und Deployment
- Ordnerstruktur
- Konfiguration und Umgebungsvariablen
- Qualität und Sicherheit
- Roadmap
- Zusätzliche Ressourcen
- Lizenz

---

## Projektüberblick

Kurzbeschreibung des Ziels der Anwendung, Hauptnutzergruppe und der wichtigsten Use Cases. Formuliere hier in 2–4 Sätzen, was das Produkt leistet und welchen Mehrwert es bietet.

- Primärer Use Case: Kontaktverwaltung und Team‑Zusammenarbeit
- Zielgruppe: Studententeams und kleine Projektgruppen
- UI‑Guidelines: Responsiv bis 320 px, klare Fehlermeldungen, keine Console‑Errors

---

## Aktuelle Sprint‑Vorgaben (Stand 2025‑12‑04)

- Sprint 1 Fokus: Kontakte End‑to‑End (Liste, Detail, Erstellen, Bearbeiten, Löschen)
- Firebase/Firestore mit realistischen Dummy‑Daten und konsistentem Mehrnutzer‑Zugriff
- Klare Validierungen und Fehlermeldungen; Loading‑States; Buttons während Requests deaktiviert
- Responsiv bis 320 px; keine Console‑Errors; saubere, modulare Code‑Struktur
- Definition of Done anwenden; Pull Requests mit kurzer Beschreibung und Screenshots
- Daily um 09:30 (kurze Abstimmung); Ad‑hoc‑Syncs bei Bedarf

---

## Screenshots

Die folgenden Screens zeigen aktuelle UI‑Stände aus Figma. Details zur Interaktion, Validierungen und States sollten beim Umsetzen gespiegelt werden. Die Bilder findest du unterhalb dieser README auf der Seite.

### Übersicht
![Join Übersicht](join/public/img/README/Join_Übersicht.png)

### Aufgabe hinzufügen
![Join Aufgabe hinzufügen](join/public/img/README/Join_Aufgabe-hinzufügen.png)

### Boardansicht
![Join Boardansicht](join/public/img/README/Join_Boardansicht.png)

### Kontakte
![Join Kontakte](join/public/img/README/Join_Kontakte.png)
    

> Tipp: Ergänze zu jedem Screen in Zukunft eine kurze Bildunterschrift mit Zweck, wichtigen Komponenten und Edge Cases.
> 

---

## Features

- Kontakte: Auflisten, Details, Erstellen, Bearbeiten, Löschen
- Formularvalidierung mit klaren Fehlermeldungen
- Benutzerfeedback: Loading‑States, Disabled‑Buttons während Requests
- Tastatur‑ und Screenreader‑freundliche Interaktionen

Optional für spätere Sprints:

- Suche und Filter
- Paginierung oder virtuelle Liste bei großen Datenmengen
- Rollen/Gäste mit eingeschränkten Rechten

---

## Technischer Stack
> Hinweis: Dieses Projekt wurde mit der [Angular CLI](https://github.com/angular/angular-cli) in Version 20.3.9 erzeugt.
> 
- Frontend: Angular mit RxJS
- Backend/DB: Firebase (Firestore), AngularFire
- Tooling: npm, TypeScript, SCSS
- Design: Figma als UI‑Quelle

---

## Installation

```bash
# Node-Version prüfen (z. B. via nvm)
node -v

# Abhängigkeiten installieren
npm ci
```

Falls Angular CLI noch nicht global installiert ist:

```bash
npm i -g @angular/cli
```

### Repository klonen (Terminal)

Angenommen, die IDE‑Startseite ist geschlossen und du arbeitest nur im Terminal:

```bash
# In ein Arbeitsverzeichnis wechseln
cd ~/Projects

# Repo klonen (URL anpassen)
git clone <REPO_URL>

# In das Projektverzeichnis wechseln
cd <REPO_ORDNERNAME>

# Optional: Sicherstellen, dass du auf main bist
git branch -a
git switch main  # oder: git checkout main (ältere Git-Version)

# Abhängigkeiten installieren
npm ci
```

Hinweise, um NICHT versehentlich einen neuen Branch zu erstellen:

- Verwende "git switch main" statt in der IDE auf "Neuen Branch" zu klicken.
- Prüfe mit "git status" und "git branch" deine aktuelle Branch‑Position, bevor du Änderungen machst.
- Ziehe aktuelle Änderungen mit:

```bash
git fetch origin
git pull origin main
```

- Wenn die Standardbranch "main" heißt, nicht "master" verwenden. Bei abweichendem Namen entsprechend anpassen.
- In der IDE: Beim Öffnen des Ordners keinen Wizard nutzen, der automatisch einen neuen Branch (z. B. "feature/") vorschlägt.

---

## Entwicklung

### Entwicklungsserver

Um einen lokalen Entwicklungsserver zu starten, führe aus:

```bash
ng serve
```

Sobald der Server läuft, öffne den Browser und rufe http://localhost:4200 auf. Die Anwendung lädt automatisch neu, sobald du eine der Quelldateien änderst.

### Code‑Generierung

Die Angular CLI enthält leistungsfähige Werkzeuge für Code‑Gerüste. Um eine neue Komponente zu erzeugen, führe aus:

```bash
ng generate component component-name
```

Für eine vollständige Liste verfügbarer Schematics (z. B. components, directives oder pipes), verwende:

```bash
ng generate --help
```

```bash
# Dev-Server starten
npm start
# oder
ng serve --open
```

Richtlinien:

- Funktionslänge klein halten, verständliche Namen
- Keine Console‑Errors oder ungenutzte Variablen
- Reaktive Patterns mit RxJS, Subscriptions sauber aufräumen

---

## Tests

```bash
# Unit-Tests ausführen
ng test
```

Die Unit-Tests laufen mit dem [Karma](https://karma-runner.github.io/) Test‑Runner.

> Linting weiterhin separat:
> 

```bash
npm run lint
```

### End‑to‑End Tests (E2E)

```bash
ng e2e
```

Angular CLI bringt kein E2E‑Framework „out of the box“ mit. Wähle ein passendes Tool (z. B. Cypress oder Playwright) und konfiguriere es für dein Projekt.

---

## Build und Deployment

```bash
# Produktionsbuild
npm run build
# oder
ng build --configuration production
```

Deployment‑Hinweise:

- SPA‑Fallback konfigurieren (z. B. via .htaccess), damit Deep‑Links funktionieren
- Umgebungsvariablen für Prod getrennt pflegen

---

## Ordnerstruktur

Aktueller Stand und empfohlene Zielstruktur. Die Vorschläge orientieren sich am Angular Style Guide, feature‑first Architektur, Presentational vs. Container Components und typischen Setups mit Firebase/AngularFire.

```
src/app/
├── app.ts
├── app.html                     # <router-outlet></router-outlet>
├── app.scss
├── app.config.ts                # Router Provider
├── app.routes.ts                # Routing-Konfiguration
│
├── core/
│   ├── layouts/
│   │   ├── auth-layout/
│   │   │   ├── auth-layout.ts
│   │   │   ├── auth-layout.html
│   │   │   └── auth-layout.scss
│   │   └── main-layout/
│   │       ├── main-layout.ts
│   │       ├── main-layout.html
│   │       └── main-layout.scss
│   │
│   └── .../
│
├── shared/
│   ├── components/
│   │   ├── sidebar/
│   │   │   ├── sidebar.ts
│   │   │   ├── sidebar.html
│   │   │   └── sidebar.scss
│   │   │
│   │   ├── header/
│   │   │   ├── header.ts
│   │   │   ├── header.html
│   │   │   └── header.scss
│   │   │
│   │   ├── contact-list/
│   │   │   ├── contact-card.ts
│   │   │   ├── contact-card.html
│   │   │   └── contact-card.scss
│   │   │
│   │   └── contact-details/
│   │       ├── contact-details.ts
│   │       ├── contact-details.html
│   │       └── contact-details.scss
│   │
│   ├── services/
│   │   ├── firebase.service.ts
│   │   └── contact.service.ts
│   │
│   └── interfaces/
│       └── contact.interface.ts
│
└── pages/
    ├── contacts/
    │   ├── contacts.ts
    │   ├── contacts.html
    │   └── contacts.scss
    │
    ├── summary/
    │   ├── summary.ts
    │   ├── summary.html
    │   └── summary.scss
    │
    ├── add-task/
    │   ├── add-task.ts
    │   ├── add-task.html
    │   └── add-task.scss
    │
    ├── board/
    │   ├── board.ts
    │   ├── board.html
    │   └── board.scss
    │
    ├── privacy-policy/
    │   ├── privacy-policy.ts
    │   ├── privacy-policy.html
    │   └── privacy-policy.scss
    │
    └── legal-notes/
        ├── legal-notes.ts
        ├── legal-notes.html
        └── legal-notes.scss
```

Empfehlungen und Begründungen

- Feature‑First: Jede Domäne kapselt Pages, Components, Services, Models. Vereinfachtes Ownership, sauberes Lazy Loading, kurze Importwege.
- Core vs. Shared: Core für Singletons und Infrastruktur. Shared für presentational components und Utilities ohne Domänenlogik.
- Namenskonvention: Einheitlich .component.ts, .page.ts, .service.ts, .model.ts. Verbessert Lesbarkeit und Tooling.
- Services pro Feature: Kontakte‑Logik in contacts.service.ts; UI bleibt dünn und reaktiv (Observables, AsyncPipe, takeUntil).
- Layout separat: Shell, Header, Navigation als eigene Ebene. Navigation per Config statt Hardcoding.
- Testing nahe am Feature: testing/ je Feature für Mocks/Stubs und Harnesses.
- Optionaler state/: Erst einführen, wenn nötig. Bei wachsender Komplexität z. B. Component Store oder Signals einsetzen.
- Styles/Tokens: Design‑Tokens in _variables.scss, Patterns in _mixins.scss. Globale styles.scss minimal halten.
- Environments: Firebase‑Keys strikt über environments; keine Secrets im Repo.

Branchenübliche Patterns/Referenzen

- Angular Style Guide: Feature‑Module, klare Suffixe, Core/Shared‑Trennung.
- Presentational/Container Pattern: Wiederverwendbarkeit und Testbarkeit.
- Lazy Loading je Feature: Bessere Performance, klare Boundaries.
- Datenzugriff kapseln: Firestore/HTTP nur in Services, nicht in Components.

Nächste sinnvolle Ergänzungen

- guards/ auf Feature‑Ebene, wenn AuthZ/Navigation abhängig ist
- error‑handling/ und logging/ in core/interceptors/
- analytics/ Service in core/services/ (optional)
- i18n/ Struktur, falls Mehrsprachigkeit geplant ist

## Konfiguration und Umgebungsvariablen

Lege Firebase‑Konfigurationen in environments/ ab.

Beispiel keys in environment.ts:

```tsx
export const environment = {
  production: false,
  firebase: {
    apiKey: '...',
    authDomain: '...',
    projectId: '...',
    storageBucket: '...',
    messagingSenderId: '...',
    appId: '...'
  }
};
```

Sensible Werte niemals committen. Für CI/CD sichere Secrets nutzen.

---

## Qualität und Sicherheit

- Barrierefreiheit: Labels, ARIA‑Attribute, Fokusmanagement
- Performance: OnPush wo sinnvoll, asynchrone Pipes, Lazy Loading
- Sicherheit: Eingaben validieren, nur minimal nötige Firestore‑Regeln
- Code‑Review: Pull Requests mit klarer Beschreibung und Screens

---

## Roadmap

1. Kontakte‑MVP abschließen inklusive Validierung und Tests
2. Suche und Filter hinzufügen
3. Authentifizierung und Rollen
4. Optimierungen für Performance und Barrierefreiheit

---

## Zusätzliche Ressourcen

- Ausführliche CLI‑Referenz: [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
- Angular CLI Repository: [angular/angular-cli](https://github.com/angular/angular-cli)
- Karma Test Runner: [karma-runner.github.io](http://karma-runner.github.io)

## Lizenz

Gib hier die verwendete Lizenz oder interne Nutzungsbedingungen an.
