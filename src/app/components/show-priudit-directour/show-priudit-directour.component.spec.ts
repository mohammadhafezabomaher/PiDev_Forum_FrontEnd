import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPriuditDirectourComponent } from './show-priudit-directour.component';

describe('ShowPriuditDirectourComponent', () => {
  let component: ShowPriuditDirectourComponent;
  let fixture: ComponentFixture<ShowPriuditDirectourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPriuditDirectourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPriuditDirectourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
