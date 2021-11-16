import { Injectable } from '@angular/core';
import { GameRepository } from '../../domain/repositories/game.repository';
import { map, Observable, of, switchMap } from 'rxjs';
import { GameModel } from 'src/app/domain/models/game.model';
import { GameType } from 'src/app/domain/models/game-type.enum';
import { StorageMap } from '@ngx-pwa/local-storage';
import { GameService } from '../../application/services/game.service';
import { ItemType } from '../../domain/models/items-type.enum';
import { CONFIG } from 'src/app/config';

@Injectable({
  providedIn: 'root',
})

export class GameLocalstorageRepository extends GameRepository {
  constructor(gameService: GameService, private storage: StorageMap) {
    super(gameService);
  }

  loadGame(name: string): Observable<GameModel> {
    return this.checkIsGameAlreadyExists(name).pipe(
      switchMap((game) => {
        if (game && game.name) {
          game.type = GameType.LOAD;
          return of<GameModel>(game);
        } else {
          const newGame: GameModel = {
            clicks: 0,
            name,
            type: GameType.NEW,
            items: {
              autoclicker: 0
            }
          }
          return this.storage.set(name, newGame ).pipe(
            map(() => newGame)
          )
        }
      })
    )
  }

  updateClicks(clicks: number): Observable<GameModel> {
    this.game.clicks += clicks;
    return this.updateStorage(this.game);
  }

  updateItems(item: ItemType): Observable<GameModel> {
    this.game.items[item] += 1;
    this.game.clicks = this.game.clicks - (CONFIG.price[item] * this.game.items[item]);
    return this.updateStorage(this.game);
  }

  private checkIsGameAlreadyExists(name: string): Observable<GameModel> {
    return this.storage.get(name).pipe(
      map((game) => game as any as GameModel)
    )
  }

  private updateStorage(game: GameModel): Observable<GameModel> {
    return this.storage.set(this.game.name, game).pipe(
      map(() => {
        this.gameService.updateCurrentGame(this.game);
        return this.game;
      })
    )
  }
}
