import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoNotasComponent } from './aluno-notas.component';

describe('AlunoNotasComponent', () => {
  let component: AlunoNotasComponent;
  let fixture: ComponentFixture<AlunoNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoNotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
