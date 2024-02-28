import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtupdateComponent } from './etupdate.component';

describe('EtupdateComponent', () => {
  let component: EtupdateComponent;
  let fixture: ComponentFixture<EtupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
