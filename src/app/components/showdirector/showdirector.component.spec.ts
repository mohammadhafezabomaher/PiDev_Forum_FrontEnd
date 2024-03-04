import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdirectorComponent } from './showdirector.component';

describe('ShowdirectorComponent', () => {
  let component: ShowdirectorComponent;
  let fixture: ComponentFixture<ShowdirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowdirectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowdirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
