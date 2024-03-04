import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCommandProuditComponent } from './show-command-proudit.component';

describe('ShowCommandProuditComponent', () => {
  let component: ShowCommandProuditComponent;
  let fixture: ComponentFixture<ShowCommandProuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCommandProuditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCommandProuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
