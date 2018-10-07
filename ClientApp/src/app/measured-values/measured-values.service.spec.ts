import { TestBed, inject } from '@angular/core/testing';

import { MeasuredValuesService } from './measured-values.service';

describe('MeasuredValuesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeasuredValuesService]
    });
  });

  it('should be created', inject([MeasuredValuesService], (service: MeasuredValuesService) => {
    expect(service).toBeTruthy();
  }));
});
