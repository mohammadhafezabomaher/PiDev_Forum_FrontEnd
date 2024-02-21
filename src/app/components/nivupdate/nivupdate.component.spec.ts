import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivupdateComponent } from './nivupdate.component';

describe('NivupdateComponent', () => {
  let component: NivupdateComponent;
  let fixture: ComponentFixture<NivupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
