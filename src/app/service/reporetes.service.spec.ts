import { TestBed } from '@angular/core/testing';

import { ReporetesService } from './reporetes.service';

describe('ReporetesService', () => {
  let service: ReporetesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporetesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
