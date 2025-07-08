import { TestBed } from '@angular/core/testing';

import { MathObjectService } from './math-object.service';

describe('MathObjectService', () => {
  let service: MathObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
