import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomizeQuestionComponent } from './randomize-question.component';

describe('RandomizeQuestionComponent', () => {
  let component: RandomizeQuestionComponent;
  let fixture: ComponentFixture<RandomizeQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomizeQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomizeQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
