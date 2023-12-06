import { Component } from '@angular/core';
import { GameService } from './jogo-velha.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FimDeGameComponent } from './FimDeGame/fim-de-game/fim-de-game.component';

@Component({
  selector: 'app-jogo-velha',
  templateUrl: './jogo-velha.component.html',
  styleUrls: ['./jogo-velha.component.scss']
})
export class JogoVelhaComponent {
  board: string[][] = [];
  currentPlayer: 'X' | 'O' = 'X';

  constructor(private gameService: GameService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.board = this.gameService.getBoard();
    this.currentPlayer = this.gameService.getCurrentPlayer();
  }

  selecionarCelula(row: number, col: number): void {
    const currentPlayer = this.gameService.getCurrentPlayer();
    console.log(currentPlayer, 'player')
    if (currentPlayer === "X") {
      sessionStorage.setItem('nextPlayer', "O");
      console.log(currentPlayer, 'if')
    }
    else {
      sessionStorage.setItem('nextPlayer', "X");
      console.log(currentPlayer, 'else')
    }

    if (!this.board[row][col]) {
      this.board[row][col] = currentPlayer;
      this.gameService.setSelectedCell(row, col);
      this.gameService.switchPlayer();
      const valor = this.verificarVitoria()
      if (valor === false)
        this.router.navigate(['/perguntas']);
      else
        this.openDialg();
    }
  }

  verificarVitoria() {
    const column = this.verificarColunas()
    const linha = this.verificarLinhas()
    const diag = this.verificarDiagonal()
    const empate = this.verificarEmpate()
    if (column || linha || diag || empate)
      return true;
    else
      return false;
  }

  verificarDiagonal() {
    if (this.board[0][0] !== '' && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
      console.log('ganhou')
      return true;
    }

    if (this.board[0][2] !== '' && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) {
      console.log('Ganhou na diagonal secundária');
      return true;
    }
    return false;
  }

  verificarColunas() {
    for (let i = 0; i < 3; i++) {
      if (this.board[i][0] !== '' && this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2]) {
        console.log('Ganhou na linha', i + 1);
        return true;
      }
    }
    return false;
  }

  verificarLinhas() {
    for (let i = 0; i < 3; i++) {
      if (this.board[0][i] !== '' && this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i]) {
        console.log('Ganhou na coluna', i + 1);
        return true;
      }
    }
    return false;
  }

  verificarEmpate() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j] === '') {
          console.log("empatado")
          return null;
        }
      }
    }
    console.log('acabou');
    return true;
  }

  openDialg() {
    this.dialog.open(FimDeGameComponent)
  }
}
