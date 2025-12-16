import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskBoard } from './add-task-board';

describe('DialogBoard', () => {
  let component: AddTaskBoard;
  let fixture: ComponentFixture<AddTaskBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTaskBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaskBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
