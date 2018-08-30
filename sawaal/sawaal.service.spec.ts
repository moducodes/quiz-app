import { TestBed, inject } from '@angular/core/testing';

import { SawaalService } from './sawaal.service';

describe('SawaalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SawaalService]
    });
  });

  it('should be created', inject([SawaalService], (service: SawaalService) => {
    expect(service).toBeTruthy();
  }));
});
