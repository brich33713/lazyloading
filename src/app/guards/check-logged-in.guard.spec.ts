import { TestBed } from '@angular/core/testing';

import { CheckLoggedInGuard } from './check-logged-in.guard';

describe('CheckLoggedInGuard', () => {
  let guard: CheckLoggedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckLoggedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
