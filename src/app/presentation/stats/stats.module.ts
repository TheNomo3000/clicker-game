import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from '../shared/header/header.module';

const routes: Routes = [
  {
    path: '',
    component: StatsComponent
  }
]


@NgModule({
  declarations: [
    StatsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule
  ]
})
export class StatsModule { }
