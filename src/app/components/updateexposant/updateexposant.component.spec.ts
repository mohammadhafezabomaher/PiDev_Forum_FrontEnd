import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateexposantComponent } from './updateexposant.component';

describe('UpdateexposantComponent', () => {
  let component: UpdateexposantComponent;
  let fixture: ComponentFixture<UpdateexposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateexposantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateexposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
