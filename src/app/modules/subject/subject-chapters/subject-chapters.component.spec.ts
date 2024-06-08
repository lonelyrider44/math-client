import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectChaptersComponent } from './subject-chapters.component';

describe('SubjectChaptersComponent', () => {
  let component: SubjectChaptersComponent;
  let fixture: ComponentFixture<SubjectChaptersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectChaptersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
