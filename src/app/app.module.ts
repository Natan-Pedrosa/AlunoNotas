import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlunoNotasComponent } from './aluno-notas/aluno-notas.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoNotasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
