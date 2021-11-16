import { Observable } from 'rxjs';
import { GameModel } from '../models/game.model';
import { GameService } from '../../application/services/game.service';
import { ItemType } from '../models/items-type.enum';
export abstract class GameRepository {
  protected game!: GameModel;

  constructor(protected gameService: GameService) {
    this.gameService.game$.subscribe({
      next: (game) => this.game = game
    });
  }
  abstract loadGame(name: string): Observable<GameModel>;
  abstract updateClicks(clicks: number): Observable<GameModel>;
  abstract updateItems(item: ItemType): Observable<GameModel>;
  abstract getStats(): Observable<GameModel []>;
}
