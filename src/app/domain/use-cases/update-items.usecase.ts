import { Injectable } from '@angular/core';
import { GameModel } from '../models/game.model';
import { UseCase } from '../base/use-case';
import { GameRepository } from '../repositories/game.repository';
import { Observable } from 'rxjs';
import { ItemType } from '../models/items-type.enum';

@Injectable({
  providedIn: 'root'
})

export class UpdateItems implements UseCase<ItemType, GameModel> {
  constructor(private repository: GameRepository) { }
  execute(item: ItemType): Observable<GameModel> {
    return this.repository.updateItems(item);
  }
}
