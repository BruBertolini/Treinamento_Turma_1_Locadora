import { TestBed } from '@angular/core/testing';

import { RegistroFilmeService } from './registro-filme.service';

describe('RegistroFilmeService', () => {
  let service: RegistroFilmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroFilmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
