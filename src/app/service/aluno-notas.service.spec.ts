import { TestBed } from '@angular/core/testing';

import { AlunoNotasService } from './aluno-notas.service';

describe('AlunoNotasService', () => {
  let service: AlunoNotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunoNotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
