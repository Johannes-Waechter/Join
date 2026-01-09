import { Component, inject, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { TasksService } from '../../core/services/tasks.service';
import { Task } from '../add-task/task';

/**
 * Interface für die berechneten Task-Statistiken
 */
interface TaskStats {
  todoCount: number;
  doneCount: number;
  inProgressCount: number;
  awaitingFeedbackCount: number;
  totalCount: number;
  urgentCount: number;
  nearestDeadline: Date | null;
}

@Component({
  selector: 'app-summary',
  imports: [CommonModule, RouterLink],
  templateUrl: './summary.html',
  styleUrl: './summary.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Summary implements OnInit, OnDestroy {
  private authService = inject(AuthService);
  private tasksService = inject(TasksService);
  private cdr = inject(ChangeDetectorRef);

  /** Aktueller Benutzername aus dem AuthService */
  userName: string = '';

  /** Berechnete Task-Statistiken */
  stats: TaskStats = {
    todoCount: 0,
    doneCount: 0,
    inProgressCount: 0,
    awaitingFeedbackCount: 0,
    totalCount: 0,
    urgentCount: 0,
    nearestDeadline: null,
  };

  /** Ladezustand für besseres UX */
  isLoading = true;

  /** Begrüßungs-Overlay für Mobile */
  showGreetingOverlay = false;
  greetingFadeOut = false;

  private userSubscription: Subscription | null = null;
  private tasksSubscription: Subscription | null = null;

  ngOnInit(): void {
    this.checkAndShowGreeting();
    this.subscribeToUser();
    this.subscribeToTasks();
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
    this.tasksSubscription?.unsubscribe();
  }

  /**
   * Prüft, ob das Begrüßungs-Overlay angezeigt werden soll (nur Mobile, nur nach Login)
   */
  private checkAndShowGreeting(): void {
    // Nur auf Mobile (unter 1000px, da .summary-right dort versteckt ist)
    const isMobile = window.innerWidth < 1000;
    // Prüfe, ob wir gerade eingeloggt sind (via sessionStorage Flag)
    const justLoggedIn = sessionStorage.getItem('just_logged_in') === 'true';

    if (isMobile && justLoggedIn) {
      this.showGreetingOverlay = true;
      sessionStorage.removeItem('just_logged_in'); // Nur einmal zeigen

      // Nach 1,5 Sekunden fade-out starten
      setTimeout(() => {
        this.greetingFadeOut = true;
        this.cdr.markForCheck();

        // Nach dem Fade-Out das Overlay komplett entfernen
        setTimeout(() => {
          this.showGreetingOverlay = false;
          this.cdr.markForCheck();
        }, 500); // Fade-Out Dauer
      }, 1500);
    }
  }

  /**
   * Abonniert den aktuellen User und setzt den Benutzernamen
   */
  private subscribeToUser(): void {
    this.userSubscription = this.authService.user$.subscribe((user) => {
      this.userName = user?.displayName || 'Guest';
      this.cdr.markForCheck();
    });
  }

  /**
   * Abonniert alle Tasks und berechnet die Statistiken
   */
  private subscribeToTasks(): void {
    this.tasksSubscription = this.tasksService.list().subscribe({
      next: (tasks) => {
        this.calculateStats(tasks);
        this.isLoading = false;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Fehler beim Laden der Tasks:', error);
        this.isLoading = false;
        this.cdr.markForCheck();
      },
    });
  }

  /**
   * Berechnet alle Statistiken basierend auf den Tasks
   */
  private calculateStats(tasks: Task[]): void {
    const urgentTasks = tasks.filter((t) => t.priority === 'urgent');

    // Finde die nächste Deadline unter allen dringenden Tasks
    let nearestDeadline: Date | null = null;
    for (const task of urgentTasks) {
      if (task.dueDate) {
        const dueDate = new Date(task.dueDate);
        if (!nearestDeadline || dueDate < nearestDeadline) {
          nearestDeadline = dueDate;
        }
      }
    }

    this.stats = {
      todoCount: tasks.filter((t) => t.status === 'todo').length,
      doneCount: tasks.filter((t) => t.status === 'done').length,
      inProgressCount: tasks.filter((t) => t.status === 'in-progress').length,
      awaitingFeedbackCount: tasks.filter((t) => t.status === 'awaiting-feedback').length,
      totalCount: tasks.length,
      urgentCount: urgentTasks.length,
      nearestDeadline,
    };
  }

  /**
   * Gibt die Begrüßung basierend auf der Tageszeit zurück
   */
  getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Good morning';
    } else if (hour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  }

  /**
   * Formatiert das Datum für die Anzeige (z.B. "October 16, 2022")
   */
  formatDate(date: Date | null): string {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  /**
   * Gibt das passende Label für die Deadline zurück
   * - Zukunft: "Upcoming Deadline"
   * - Vergangenheit: "Deadline"
   * - Keine: "No Upcoming Deadline"
   */
  getDeadlineLabel(): string {
    if (!this.stats.nearestDeadline) {
      return 'No Upcoming Deadline';
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const deadline = new Date(this.stats.nearestDeadline);
    deadline.setHours(0, 0, 0, 0);

    return deadline >= today ? 'Upcoming Deadline' : 'Overdue';
  }
}
