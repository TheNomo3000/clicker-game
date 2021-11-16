import { Injectable } from '@angular/core';
import { GameModel } from '../models/game.model';
import { UseCase } from '../base/use-case';
import { GameRepository } from '../repositories/game.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GetStats implements UseCase<void, GameModel []> {
  constructor(private repository: GameRepository) { }
  execute(): Observable<GameModel []> {
    return this.repository.getStats();
  }
}
