import { Component, ChangeDetectorRef, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule, AsyncPipe, DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map, switchMap } from 'rxjs';

import { TasksService } from '../../../core/services/tasks.service';
import { ContactsService, Contact } from '../../../core/services/contacts.service';
import { Task, AssigneeRef, Subtask } from '../../../shared/interfaces/task';
import { TaskDialogEdit } from './task-dialog-edit/task-dialog-edit';

/**
 * Dialog component for displaying and editing task details.
 * Shows task information including title, description, due date, priority,
 * category, assignees, and subtasks. Supports edit mode via child route.
 */
@Component({
  selector: 'app-task-dialog',
  standalone: true,
  imports: [CommonModule, AsyncPipe, DatePipe, TaskDialogEdit],
  templateUrl: './task-dialog.html',
  styleUrl: './task-dialog.scss',
})
export class TaskDialog {
  /** Angular Router for navigation */
  private readonly router = inject(Router);
  /** Activated route to access route parameters */
  private readonly route = inject(ActivatedRoute);
  /** Service for task CRUD operations */
  private readonly tasksService = inject(TasksService);
  /** Service for contact data (assignee resolution) */
  private readonly contactsService = inject(ContactsService);
  /** Change detector for manual change detection */
  private readonly cdr = inject(ChangeDetectorRef);

  /** Observable of the current task ID from route params */
  taskId$ = this.route.paramMap.pipe(map((p) => p.get('id') ?? ''));
  /** Observable of the current task data */
  task$ = this.taskId$.pipe(switchMap((id) => this.tasksService.getById(id)));
  /** Observable that emits true if current route is edit mode */
  isEdit$ = this.route.url.pipe(map((segments) => segments.some((s) => s.path === 'edit')));
  /** Flag indicating dialog is closing (triggers exit animation) */
  isClosing = false;
  /** Flag to disable enter animation (used when navigating from edit) */
  disableEnterAnimation = false;
  /** Flag for immediate close without animation */
  isHardClose = false;

  /** Observable of all contacts for assignee resolution */
  contacts$ = this.contactsService.getContacts();

  /** Combined observable of task and contacts mapped by ID */
  taskView$ = combineLatest([this.task$, this.contacts$]).pipe(
    map(([task, contacts]) => {
      const contactsById = new Map<string, Contact>();
      contacts.forEach((contact) => {
        if (contact.id) contactsById.set(contact.id, contact);
      });

      return { task, contactsById };
    })
  );

  /** Reference to the edit component (when in edit mode) */
  @ViewChild(TaskDialogEdit) editCmp?: TaskDialogEdit;
  /** Reference to the dialog element for height measurement */
  @ViewChild('dialogEl') dialogEl?: ElementRef<HTMLElement>;
  /** Fixed height for dialog (preserves height when switching to edit mode) */
  fixedHeight: number | null = null;

  /**
   * Initializes the dialog component.
   * Reads navigation state to determine animation behavior and fixed height.
   */
  constructor() {
    const nav = this.router.getCurrentNavigation();
    const state = (nav?.extras.state as any) ?? history.state;

    this.disableEnterAnimation = !!state?.skipEnter;
    this.fixedHeight = typeof state?.dialogHeight === 'number' ? state.dialogHeight : null;
  }

  /**
   * Closes the dialog with exit animation and navigates back to board.
   */
  close(): void {
    this.isClosing = true;
    this.cdr.detectChanges();

    setTimeout(() => {
      this.router.navigate(['/board']);
    }, 400);
  }

  /**
   * Deletes the given task and closes the dialog.
   * @param task - The task to delete
   */
  deleteTask(task: Task): void {
    if (!task.id) return;

    this.hardClose();
    void this.tasksService.remove(task.id);
  }

  /**
   * Opens the edit mode for the given task.
   * Preserves dialog height to prevent layout shift.
   * @param task - The task to edit
   */
  openEdit(task: Task): void {
    if (!task.id) return;

    const height = this.dialogEl?.nativeElement.getBoundingClientRect().height ?? null;

    this.router.navigate(['/board', task.id, 'edit'], {
      state: { skipEnter: true, dialogHeight: height },
    });
  }

  /**
   * Toggles the done state of a subtask and updates Firestore.
   * @param task - The parent task
   * @param subtask - The subtask to toggle
   */
  async toggleSubtask(task: Task, subtask: Subtask): Promise<void> {
    if (!task.id) return;

    const currentSubtasks = task.subtasks ?? [];

    const nextSubtasks = currentSubtasks.map((existingSubtask) => {
      if (existingSubtask.id !== subtask.id) {
        return existingSubtask;
      }

      return {
        ...existingSubtask,
        done: !existingSubtask.done,
      };
    });

    await this.tasksService.update(task.id, { subtasks: nextSubtasks });
  }

  /**
   * Extracts initials from a full name.
   * @param name - Full name of the person
   * @returns Initials (max. 2 characters, uppercase)
   */
  getInitials(name: string): string {
    const parts = name.trim().split(/\s+/);
    const first = parts[0]?.[0] ?? '';
    const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
    return (first + last).toUpperCase();
  }

  /**
   * Resolves the display name for an assignee.
   * @param a - Assignee reference
   * @param mapById - Map of contacts by ID
   * @returns Display name (from contact, assignee, or UID as fallback)
   */
  getAssigneeName(a: AssigneeRef, mapById: Map<string, Contact>): string {
    const c = mapById.get(a.uid);
    return c?.name ?? a.name ?? a.email ?? a.uid;
  }

  /**
   * Resolves the avatar color for an assignee.
   * @param a - Assignee reference
   * @param mapById - Map of contacts by ID
   * @returns Hex color code or default gray
   */
  getAssigneeColor(a: AssigneeRef, mapById: Map<string, Contact>): string {
    const c = mapById.get(a.uid);
    return c?.color ?? '#ccc';
  }

  /**
   * Returns a human-readable label for the task category.
   * @param category - Task category value
   * @returns Display label for the category
   */
  getCategoryLabel(category?: Task['category']): string {
    if (category === 'user-story') return 'User Story';
    if (category === 'technical-task') return 'Technical Task';
    return 'Uncategorized';
  }

  /**
   * Builds an array of assignee view objects with resolved names and colors.
   * @param assignees - Array of assignee references
   * @param contactsById - Map of contacts by ID
   * @returns Array of assignee view objects with uid, name, initials, and color
   */
  buildAssigneeViews(
    assignees: AssigneeRef[] | undefined,
    contactsById: Map<string, Contact>
  ): { uid: string; name: string; initials: string; color: string }[] {
    if (!assignees?.length) return [];

    return assignees.map((assignee) => {
      const name = this.getAssigneeName(assignee, contactsById);
      return {
        uid: assignee.uid,
        name,
        initials: this.getInitials(name),
        color: this.getAssigneeColor(assignee, contactsById),
      };
    });
  }

  /**
   * Handles the OK button click in edit mode.
   * Validates the form, saves changes, and navigates back to view mode.
   * @param task - The task being edited
   */
  async onOk(task: Task): Promise<void> {
    if (!task.id) return;

    if (this.editCmp) {
      this.editCmp.editForm.markAllAsTouched();

      if (this.editCmp.editForm.invalid) {
        return;
      }
    }

    const payload = this.editCmp?.buildUpdatePayload();
    if (!payload) {
      this.router.navigate(['/board', task.id], { state: { skipEnter: true } });
      return;
    }

    await this.tasksService.update(task.id, payload);

    this.router.navigate(['/board', task.id], {
      state: { skipEnter: true },
    });
  }

  /**
   * Immediately closes the dialog without exit animation.
   */
  private hardClose(): void {
    this.isHardClose = true;
    this.router.navigate(['/board']);
  }

  /**
   * Handles clicks inside the dialog.
   * Stops propagation and closes any open dropdowns.
   * @param event - Mouse click event
   */
  onDialogClick(event: MouseEvent): void {
    event.stopPropagation();
    this.editCmp?.closeAssigneeDropdown();
  }

  /**
   * Handles clicks on the overlay (outside dialog).
   * Closes dropdown if open, otherwise closes the dialog.
   * @param event - Mouse click event
   */
  onOverlayClick(event: MouseEvent): void {
    if (this.editCmp?.assigneeOpen) {
      event.stopPropagation();
      this.editCmp.closeAssigneeDropdown();
      return;
    }

    this.close();
  }
}
