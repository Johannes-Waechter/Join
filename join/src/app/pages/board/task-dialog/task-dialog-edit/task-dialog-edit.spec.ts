import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDialogEdit } from './task-dialog-edit';

describe('TaskDialogEdit', () => {
  let component: TaskDialogEdit;
  let fixture: ComponentFixture<TaskDialogEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDialogEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDialogEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
