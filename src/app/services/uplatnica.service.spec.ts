import { TestBed } from '@angular/core/testing';

import { UplatnicaService } from './uplatnica.service';

describe('UplatnicaService', () => {
  let service: UplatnicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UplatnicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
