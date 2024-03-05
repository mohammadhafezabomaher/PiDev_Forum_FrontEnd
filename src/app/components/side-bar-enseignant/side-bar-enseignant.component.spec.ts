import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarEnseignantComponent } from './side-bar-enseignant.component';

describe('SideBarEnseignantComponent', () => {
  let component: SideBarEnseignantComponent;
  let fixture: ComponentFixture<SideBarEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarEnseignantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
