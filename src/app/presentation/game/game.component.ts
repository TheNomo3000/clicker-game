import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService } from '../../application/services/game.service';
import { GameModel } from '../../domain/models/game.model';
import { UpdateClicks } from '../../domain/use-cases/update-click.usecase';
import { ItemType } from '../../domain/models/items-type.enum';
import { UpdateItems } from '../../domain/use-cases/update-items.usecase';
import { filter, interval, map, Subject, switchMap, takeUntil, takeWhile } from 'rxjs';
import { CONFIG } from '../../config';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  game!: GameModel;
  itemType = ItemType;
  itemInterval = interval(100);
  autoclickerPrice = 100;

  constructor(
    private gameService: GameService,
    private updateClicks: UpdateClicks,
    private updateItems: UpdateItems
  ) {
    this.gameService.game$.pipe(
      takeUntil(this.destroy$),
      map((game) => {
        this.game = game;
        return game;
      }),
      filter(game => game.items.autoclicker > 0),
      switchMap((game) => {
        this.autoclickerPrice = (CONFIG.price.autoclicker * this.game.items.autoclicker);
        return this.itemInterval.pipe(
          takeUntil(this.destroy$)
        );
      })
    ).subscribe({
      next: () => {
        this.updateClicks.execute(this.game.items.autoclicker)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: () => {}
          })
      }
    })
  }

  ngOnInit(): void {
  }

  addClick(): void {
    this.updateClicks.execute(1)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {}
      })
  }

  buyItem(itemType: ItemType): void {
    this.updateItems.execute(itemType)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {}
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
