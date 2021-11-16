import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { GameService } from '../services/game.service';

@Injectable({
  providedIn: 'root'
})
export class IsGameLoadGuard implements CanActivate {
  constructor(
    private gameService: GameService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.gameService.game$.pipe(
      map((game) => {
        if (game && game.name != '') {
          return true;
        } else {
          return this.router.parseUrl('/home');
        }
      })
    );
  }

}
