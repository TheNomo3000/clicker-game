import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeaderModule } from '../shared/header/header.module';
import { RouterTestingModule } from '@angular/router/testing';
import { GameRepository } from '../../domain/repositories/game.repository';
import { GameLocalstorageRepository } from '../../infrastructure/localstorage/game-localstorage.repository';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input element', () => {
    let input = fixture.debugElement.nativeElement.querySelector('input');
    expect(input).toBeTruthy();
  })

  it('should render button element', () => {
    let button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button).toBeTruthy();
  })

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  })

  it('name field validity', () => {
    let name = component.form.controls['name'];
    expect(name.valid).toBeFalsy();

    let errors: any = {};
    errors = name.errors || {};
    expect(errors['required']).toBeTruthy();
  })

  it('should enter to game', () => {
    let input = fixture.debugElement.query(By.css('input'));
    let el = input.nativeElement;
    el.value = 'testUser';
    el.dispatchEvent(new Event('input'));

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.sendUsername).toHaveBeenCalled();
    })
  })
});
