import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterIndexComponent } from './chapter-index.component';

describe('ChapterIndexComponent', () => {
  let component: ChapterIndexComponent;
  let fixture: ComponentFixture<ChapterIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChapterIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
