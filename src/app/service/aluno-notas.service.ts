import { Injectable } from '@angular/core';
import { AlunoNotas } from '../module/alunoNotas';

@Injectable({
  providedIn: 'root'
})
export class AlunoNotasService {
  alunos : AlunoNotas[] = []

  constructor() { }

  obterTodos(): AlunoNotas[]{
    return this.alunos;
  }

  adicionar(aluno : AlunoNotas, id : number){
    if(id == -1)
      this.alunos.push(aluno);
    else
      this.alunos[id] = aluno;
  }

  // 1 - editado com sucesso | 0 - aluno não existe
  editar(antigoAluno: AlunoNotas, novoAluno: AlunoNotas): AlunoNotas[]{
    const index = this.alunos.indexOf(antigoAluno);
    if(index != -1){
      this.alunos[index] = novoAluno;
      return this.alunos;
    }
    return this.alunos;
  }

  // 1 - removido | 0 - aluno não existe no array
  remover(aluno : AlunoNotas): AlunoNotas[]{
    const index = this.alunos.indexOf(aluno);
    if(index != -1){
      this.alunos.splice(index);
      return this.alunos;
    }
    return this.alunos;      
  }


  obterID(alunoNota : AlunoNotas) : number{
    const id = this.alunos.indexOf(alunoNota);
    return id;
  }
}
