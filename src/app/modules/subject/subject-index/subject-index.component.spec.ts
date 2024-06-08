import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectIndexComponent } from './subject-index.component';

describe('SubjectIndexComponent', () => {
  let component: SubjectIndexComponent;
  let fixture: ComponentFixture<SubjectIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
