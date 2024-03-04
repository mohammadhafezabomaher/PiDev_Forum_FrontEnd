import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommandProuditComponent } from './add-command-proudit.component';

describe('AddCommandProuditComponent', () => {
  let component: AddCommandProuditComponent;
  let fixture: ComponentFixture<AddCommandProuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCommandProuditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCommandProuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
