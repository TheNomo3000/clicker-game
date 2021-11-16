import { Component, Input, OnInit } from '@angular/core';
import { GameModel } from '../../../domain/models/game.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() game!: GameModel;

  constructor() { }

  ngOnInit(): void {
  }

}
