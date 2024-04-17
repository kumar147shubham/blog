import { TestBed } from '@angular/core/testing';

import { RicheditService } from './richedit.service';

describe('RicheditService', () => {
  let service: RicheditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RicheditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
