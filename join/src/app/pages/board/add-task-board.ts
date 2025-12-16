import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task-board',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-task-board.html',
  styleUrl: './add-task-board.scss',
})
export class AddTaskBoard {
  @Output() close = new EventEmitter<void>();
  @Output() create = new EventEmitter<any>();

  taskForm: FormGroup;

  priorities = ['Urgent', 'Medium', 'Low'];
  categories = ['Work', 'Personal', 'Study'];

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      dueDate: ['', Validators.required],
      priority: ['Medium'],
      assignedTo: [''],
      category: ['', Validators.required],
      subtask: [''],
    });
  }

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.create.emit(this.taskForm.value);
    }
  }
}
