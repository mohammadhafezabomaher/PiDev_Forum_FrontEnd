import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumfrontComponent } from './forumfront.component';

describe('ForumfrontComponent', () => {
  let component: ForumfrontComponent;
  let fixture: ComponentFixture<ForumfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumfrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
