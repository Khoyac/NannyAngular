import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomNavBarComponent } from './tom-nav-bar.component';

describe('TomNavBarComponent', () => {
  let component: TomNavBarComponent;
  let fixture: ComponentFixture<TomNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TomNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
