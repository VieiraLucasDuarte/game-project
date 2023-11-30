import { Component, OnInit } from '@angular/core';
import { Pergunta } from './perguntas';
import { Router } from '@angular/router';
import { GameService } from 'src/app/jogo-velha/jogo-velha/jogo-velha.service';
import { ValidacaoComponent } from './validacao/validacao/validacao.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.scss']
})
export class PerguntasComponent implements OnInit {

  perguntasData!: Pergunta;
  selecionado!: string

  constructor(
    private router: Router, 
    private gameService: GameService,
    private dialog: MatDialog
    ) { }


ngOnInit(): void {
  const selectedCell = this.gameService.getSelectedCell();
  this.prencher();
}

reposta() {
  if(this.selecionado)
    this.router.navigate(["/velha"]);
  else
  {
    const dialogRef = this.dialog.open(ValidacaoComponent, {
      width: '400px'
    })
  }
    // this.router.navigate(["/"]);
}

prencher() {
  const perguntas: Pergunta = {
    id: 1,
    texto: "Onde joga o Metal",
    respostas: [
      {
        id: 1,
        texto: "Amarelo",
        certo: true,
        pergunta: 1,
      },
      {
        id: 2,
        texto: "Azul",
        certo: false,
        pergunta: 1
      },
      {
        id: 3,
        texto: "Vermelho",
        certo: false,
        pergunta: 1
      },      {
        id: 4,
        texto: "Verde",
        certo: false,
        pergunta: 1
      }
    ]
  }
  this.perguntasData = perguntas;
}
  
}
