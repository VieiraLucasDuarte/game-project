import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu/menu.component';
import { JogoVelhaComponent } from './jogo-velha/jogo-velha/jogo-velha.component';
import { PerguntasComponent } from './perguntas/perguntas/perguntas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { ValidacaoComponent } from './perguntas/perguntas/validacao/validacao/validacao.component';
import { MatDialogModule } from '@angular/material/dialog';
import { IntrucaoComponent } from './instrucao/intrucao/intrucao.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    JogoVelhaComponent,
    PerguntasComponent,
    ValidacaoComponent,
    IntrucaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
