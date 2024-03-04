import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedirectorComponent } from './updatedirector.component';

describe('UpdatedirectorComponent', () => {
  let component: UpdatedirectorComponent;
  let fixture: ComponentFixture<UpdatedirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedirectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
