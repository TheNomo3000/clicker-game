import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render stats button', () => {
    let button = fixture.debugElement.nativeElement.querySelector('#stats-btn');
    expect(button).toBeTruthy();
  })

  it('should render back button', () => {
    let button = fixture.debugElement.nativeElement.querySelector('#back-btn');
    expect(button).toBeTruthy();
  })

  it('should render title', () => {
    let title = fixture.debugElement.nativeElement.querySelector('.title');
    expect(title).toBeTruthy();
  })
});
