import { Component, OnInit } from '@angular/core';
import { GameModel } from '../../domain/models/game.model';
import { GetStats } from '../../domain/use-cases/get-stats.usecase';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  games: GameModel [] = [];

  constructor(
    private getStats: GetStats
  ) { }

  ngOnInit(): void {
    this.getStats.execute()
      .subscribe({
        next: (games) => this.games = games
      })
  }

}
