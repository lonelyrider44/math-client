import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTestsComponent } from './subject-tests.component';

describe('SubjectTestsComponent', () => {
  let component: SubjectTestsComponent;
  let fixture: ComponentFixture<SubjectTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectTestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
