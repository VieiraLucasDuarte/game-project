import { Component, OnInit } from '@angular/core';
import { Pergunta } from './perguntas';
import { Router } from '@angular/router';
import { GameService } from 'src/app/jogo-velha/jogo-velha/jogo-velha.service';
import { ValidacaoComponent } from './validacao/validacao/validacao.component';
import { MatDialog } from '@angular/material/dialog';
import { PerguntasService } from './perguntas.service';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.scss']
})
export class PerguntasComponent implements OnInit {

  perguntasData: Pergunta[] = [];
  perguntaDaVez!: Pergunta;
  selecionado!: string;
  player: string = 'X';
  index!: number;

  constructor(
    private router: Router,
    private gameService: GameService,
    private dialog: MatDialog,
    private service: PerguntasService
  ) { }


  ngOnInit(): void {
    const selectedCell = this.gameService.getSelectedCell();
    this.carregarPerguntas();
  }

  reposta() {
    if (this.selecionado == "S") {
      this.router.navigate(["/velha"]);
    }
    else {
      const dialogRef = this.dialog.open(ValidacaoComponent)
      dialogRef.afterClosed().subscribe(result => {
        this.carregarPerguntas()
      })
    }
  }

  carregarPerguntas() {
    this.service.getPerguntas().subscribe((data: any[]) => {
      this.perguntasData = data
      const random = Math.floor(Math.random() * this.perguntasData.length);
      this.index = random
      this.perguntaDaVez = this.perguntasData[random];
    })
  }
}
