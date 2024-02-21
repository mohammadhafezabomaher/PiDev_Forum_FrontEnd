import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionfinanciereComponent } from './directionfinanciere.component';

describe('DirectionfinanciereComponent', () => {
  let component: DirectionfinanciereComponent;
  let fixture: ComponentFixture<DirectionfinanciereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectionfinanciereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectionfinanciereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
