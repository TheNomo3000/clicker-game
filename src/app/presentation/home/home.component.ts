import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoadGame } from '../../domain/use-cases/load-game.usecase';
import { GameModel } from '../../domain/models/game.model';
import { GameService } from '../../application/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private loadGame: LoadGame,
    private gameService: GameService
  ) {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  sendUsername(): void {
    this.loadGame.execute(this.form.value.name)
      .subscribe({
        next: (game: GameModel) => {
          this.gameService.updateCurrentGame(game);
          this.router.navigate(['/game']);
        }
      })

  }

}
