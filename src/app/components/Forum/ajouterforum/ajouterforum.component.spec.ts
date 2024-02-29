import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterforumComponent } from './ajouterforum.component';

describe('AjouterforumComponent', () => {
  let component: AjouterforumComponent;
  let fixture: ComponentFixture<AjouterforumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterforumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
