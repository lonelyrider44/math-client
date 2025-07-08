import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathObjectIndexComponent } from './math-object-index.component';

describe('MathObjectIndexComponent', () => {
  let component: MathObjectIndexComponent;
  let fixture: ComponentFixture<MathObjectIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathObjectIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MathObjectIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
