import { TestBed } from '@angular/core/testing';

import { DuiLibService } from './dui-lib.service';

describe('DuiLibService', () => {
  let service: DuiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
