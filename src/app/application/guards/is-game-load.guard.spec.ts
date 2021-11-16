import { TestBed } from '@angular/core/testing';

import { IsGameLoadGuard } from './is-game-load.guard';
import { GameService } from '../services/game.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('IsGameLoadGuard', () => {
  let guard: IsGameLoadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        GameService
      ]
    });
    guard = TestBed.inject(IsGameLoadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
