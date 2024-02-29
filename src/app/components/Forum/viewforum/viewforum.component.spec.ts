import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewforumComponent } from './viewforum.component';

describe('ViewforumComponent', () => {
  let component: ViewforumComponent;
  let fixture: ComponentFixture<ViewforumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewforumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
