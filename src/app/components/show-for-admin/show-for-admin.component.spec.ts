import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowForAdminComponent } from './show-for-admin.component';

describe('ShowForAdminComponent', () => {
  let component: ShowForAdminComponent;
  let fixture: ComponentFixture<ShowForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowForAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
