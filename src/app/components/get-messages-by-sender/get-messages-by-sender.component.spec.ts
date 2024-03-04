import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMessagesBySenderComponent } from './get-messages-by-sender.component';

describe('GetMessagesBySenderComponent', () => {
  let component: GetMessagesBySenderComponent;
  let fixture: ComponentFixture<GetMessagesBySenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMessagesBySenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetMessagesBySenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
