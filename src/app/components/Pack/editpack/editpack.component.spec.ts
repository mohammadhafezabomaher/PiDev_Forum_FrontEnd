import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpackComponent } from './editpack.component';

describe('EditpackComponent', () => {
  let component: EditpackComponent;
  let fixture: ComponentFixture<EditpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
