import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedQuestionsComponent } from './selected-questions.component';

describe('SelectedQuestionsComponent', () => {
  let component: SelectedQuestionsComponent;
  let fixture: ComponentFixture<SelectedQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedQuestionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectedQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
