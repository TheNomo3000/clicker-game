import { Injectable } from '@angular/core';
import { GameModel } from '../models/game.model';
import { UseCase } from '../base/use-case';
import { GameRepository } from '../repositories/game.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UpdateClicks implements UseCase<number, GameModel> {
  constructor(private repository: GameRepository) { }
  execute(clicks: number): Observable<GameModel> {
    return this.repository.updateClicks(clicks);
  }
}
