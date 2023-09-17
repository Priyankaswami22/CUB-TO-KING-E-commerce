import { TestBed } from '@angular/core/testing';

import { AutholdGuard } from './authold.guard';

describe('AutholdGuard', () => {
  let guard: AutholdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutholdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
