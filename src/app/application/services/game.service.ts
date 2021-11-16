import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { GameType } from 'src/app/domain/models/game-type.enum';
import { GameModel } from '../../domain/models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private game: ReplaySubject<GameModel> = new ReplaySubject<GameModel>(1);
  game$: Observable<GameModel> = this.game.asObservable();

  constructor() {
    this.updateCurrentGame({
      clicks: 0,
      name: '',
      type: GameType.NEW,
      items: {
        autoclicker: 0
      }
    })
  }

  updateCurrentGame(game: GameModel): void {
    this.game.next(game);
  }
}
