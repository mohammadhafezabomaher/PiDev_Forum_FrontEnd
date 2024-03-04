import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandShowComponent } from './command-show.component';

describe('CommandShowComponent', () => {
  let component: CommandShowComponent;
  let fixture: ComponentFixture<CommandShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
