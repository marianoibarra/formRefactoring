import { TestBed } from '@angular/core/testing';

import { DummyEntityService } from './dummy-entity.service';

describe('DummyEntityService', () => {
  let service: DummyEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
