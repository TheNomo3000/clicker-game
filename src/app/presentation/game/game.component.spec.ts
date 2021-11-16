import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GameRepository } from 'src/app/domain/repositories/game.repository';
import { GameLocalstorageRepository } from 'src/app/infrastructure/localstorage/game-localstorage.repository';
import { HeaderModule } from '../shared/header/header.module';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameComponent ],
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
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clicker button', () => {
    let button = fixture.debugElement.nativeElement.querySelector('.clicker-btn');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.addClick).toHaveBeenCalled();
    })
  })

  it('should be able to purchase items', async () => {
    let button = fixture.debugElement.nativeElement.querySelector('.item-btn');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.buyItem).toHaveBeenCalled();
    })
  })

});
