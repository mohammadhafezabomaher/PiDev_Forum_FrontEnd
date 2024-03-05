import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateexposantComponent } from './createexposant.component';

describe('CreateexposantComponent', () => {
  let component: CreateexposantComponent;
  let fixture: ComponentFixture<CreateexposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateexposantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateexposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
