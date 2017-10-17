import { TestBed, inject } from '@angular/core/testing';

import { IndusoftServiceService } from './indusoft.service';

describe('IndusoftService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndusoftServiceService]
    });
  });

  it('should be created', inject([IndusoftServiceService], (service: IndusoftServiceService) => {
    expect(service).toBeTruthy();
  }));
});
