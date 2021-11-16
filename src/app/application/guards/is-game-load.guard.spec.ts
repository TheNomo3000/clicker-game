import { TestBed } from '@angular/core/testing';

import { IsGameLoadGuard } from './is-game-load.guard';

describe('IsGameLoadGuard', () => {
  let guard: IsGameLoadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsGameLoadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
