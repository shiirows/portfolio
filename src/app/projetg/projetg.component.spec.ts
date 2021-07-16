import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetgComponent } from './projetg.component';

describe('ProjetgComponent', () => {
  let component: ProjetgComponent;
  let fixture: ComponentFixture<ProjetgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
