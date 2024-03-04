import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMessagesByResciverComponent } from './get-messages-by-resciver.component';

describe('GetMessagesByResciverComponent', () => {
  let component: GetMessagesByResciverComponent;
  let fixture: ComponentFixture<GetMessagesByResciverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMessagesByResciverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetMessagesByResciverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
