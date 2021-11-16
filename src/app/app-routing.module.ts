import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsGameLoadGuard } from './application/guards/is-game-load.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./presentation/home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./presentation/game/game.module').then(module => module.GameModule),
    canActivate: [IsGameLoadGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
