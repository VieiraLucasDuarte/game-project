import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu/menu.component';
import { JogoVelhaComponent } from './jogo-velha/jogo-velha/jogo-velha.component';
import { PerguntasComponent } from './perguntas/perguntas/perguntas.component';
import { IntrucaoComponent } from './instrucao/intrucao/intrucao.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'velha', component: JogoVelhaComponent},
  {path: 'perguntas', component: PerguntasComponent},
  {path: 'instrucao', component: IntrucaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
