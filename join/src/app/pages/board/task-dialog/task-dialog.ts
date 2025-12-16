import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { TasksService } from '../../../core/services/tasks.service';
import { Task } from '../../add-task/task';

@Component({
  selector: 'app-task-dialog',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './task-dialog.html',
  styleUrl: './task-dialog.scss',
})
export class TaskDialog {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly tasksService = inject(TasksService);

  taskId$ = this.route.paramMap.pipe(map((params) => params.get('id') ?? ''));

  task$ = this.taskId$.pipe(
    switchMap((id) => this.tasksService.getById(id))
  );

  close(): void {
    this.router.navigate(['/board']);
  }

  getCategoryLabel(category?: Task['category']): string {
    if (category === 'user-story') return 'User Story';
    if (category === 'technical-task') return 'Technical Task';
    return 'Uncategorized';
  }
}
