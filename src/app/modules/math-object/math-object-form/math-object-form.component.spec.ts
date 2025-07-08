import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathObjectFormComponent } from './math-object-form.component';

describe('MathObjectFormComponent', () => {
  let component: MathObjectFormComponent;
  let fixture: ComponentFixture<MathObjectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathObjectFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MathObjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
