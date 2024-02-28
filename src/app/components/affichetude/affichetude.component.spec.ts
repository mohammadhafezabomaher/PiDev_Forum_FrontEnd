import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichetudeComponent } from './affichetude.component';

describe('AffichetudeComponent', () => {
  let component: AffichetudeComponent;
  let fixture: ComponentFixture<AffichetudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichetudeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichetudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
