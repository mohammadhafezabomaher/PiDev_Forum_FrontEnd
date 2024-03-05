import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetudiantComponent } from './createtudiant.component';

describe('CreatetudiantComponent', () => {
  let component: CreatetudiantComponent;
  let fixture: ComponentFixture<CreatetudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatetudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
