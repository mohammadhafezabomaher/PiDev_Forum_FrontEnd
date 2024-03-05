import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaddminComponent } from './viewaddmin.component';

describe('ViewaddminComponent', () => {
  let component: ViewaddminComponent;
  let fixture: ComponentFixture<ViewaddminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewaddminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewaddminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
