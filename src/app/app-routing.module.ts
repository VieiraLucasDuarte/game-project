import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu/menu.component';
import { JogoVelhaComponent } from './jogo-velha/jogo-velha/jogo-velha.component';
import { PerguntasComponent } from './perguntas/perguntas/perguntas.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'velha', component: JogoVelhaComponent},
  {path: 'perguntas', component: PerguntasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
