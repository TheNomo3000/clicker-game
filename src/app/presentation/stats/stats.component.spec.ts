import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsComponent } from './stats.component';
import { HeaderModule } from '../shared/header/header.module';
import { RouterTestingModule } from '@angular/router/testing';
import { GameRepository } from '../../domain/repositories/game.repository';
import { GameLocalstorageRepository } from '../../infrastructure/localstorage/game-localstorage.repository';

describe('StatsPageComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsComponent ],
      imports: [
        HeaderModule,
        RouterTestingModule
      ],
      providers: [
        { provide: GameRepository, useClass: GameLocalstorageRepository },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
