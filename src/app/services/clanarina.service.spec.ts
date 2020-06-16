import { TestBed } from '@angular/core/testing';

import { ClanarinaService } from './clanarina.service';

describe('ClanarinaService', () => {
  let service: ClanarinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClanarinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
