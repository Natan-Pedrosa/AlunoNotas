import { Component, OnInit } from '@angular/core';
import { AlunoNotas } from '../module/alunoNotas';
import { AlunoNotasService } from '../service/aluno-notas.service';

@Component({
  selector: 'app-aluno-notas',
  templateUrl: './aluno-notas.component.html',
  styleUrls: ['./aluno-notas.component.css']
})

export class AlunoNotasComponent implements OnInit{
  alunosNotas : AlunoNotas[] = [];

  constructor(
      private alunoNotasService : AlunoNotasService
  ){}
  
  ngOnInit(): void {
    const idForm = document.getElementById('id') as HTMLInputElement;
    this.alunosNotas = [];
    this.obterTodos();    
    idForm.style.display = 'none';
    idForm.valueAsNumber = -1;
    
  }

  adicionar(){
    const idForm = document.getElementById('id') as HTMLInputElement;
    const alunoForm = document.getElementById('nome') as HTMLInputElement;
    const nota1Form = document.getElementById('nota1') as HTMLInputElement;
    const nota2Form = document.getElementById('nota2') as HTMLInputElement;

    // novo aluno
    const n1 = nota1Form.valueAsNumber;
      const n2 = nota2Form.valueAsNumber;
      const media = (n1 + n2) / 2;

      const alunoNotas : AlunoNotas = {
        nome : alunoForm.value,
        nota1 : n1,
        nota2 : n2,
        media : media,
        aprovado : media >= 7 ? true : false, 
      }

      this.alunoNotasService.adicionar(alunoNotas, idForm.valueAsNumber);
      this.cleanForm(alunoForm, nota1Form, nota2Form);
  }

  obterTodos(){
    this.alunosNotas = this.alunoNotasService.obterTodos();
  }

  editarForm(alunoNotas : AlunoNotas){
    const alunoForm = document.getElementById('nome') as HTMLInputElement;
    const nota1Form = document.getElementById('nota1') as HTMLInputElement;
    const nota2Form = document.getElementById('nota2') as HTMLInputElement;
    const idForm = document.getElementById('id') as HTMLInputElement;
    
    alunoForm.value = alunoNotas.nome;
    nota1Form.valueAsNumber = alunoNotas.nota1;
    nota2Form.valueAsNumber = alunoNotas.nota2;
    idForm.valueAsNumber = this.alunoNotasService.obterID(alunoNotas);
  }

  excluir(alunoNotas : AlunoNotas){
    this.alunosNotas = this.alunoNotasService.remover(alunoNotas);
  }

  cleanForm(n : HTMLInputElement, n1 :  HTMLInputElement, n2 : HTMLInputElement ){
    n.value = "";
    n1.value = "";
    n2.value = "";
  }
}
