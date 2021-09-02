import { TestBed } from '@angular/core/testing';

import { CheckCompanyGuard } from './check-company.guard';

describe('CheckCompanyGuard', () => {
  let guard: CheckCompanyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckCompanyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
