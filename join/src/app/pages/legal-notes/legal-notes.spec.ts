import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNotes } from './legal-notes';

describe('LegalNotes', () => {
  let component: LegalNotes;
  let fixture: ComponentFixture<LegalNotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalNotes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalNotes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
