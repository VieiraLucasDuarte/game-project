import { Component } from '@angular/core';
import { GameService } from './jogo-velha.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogo-velha',
  templateUrl: './jogo-velha.component.html',
  styleUrls: ['./jogo-velha.component.scss']
})
export class JogoVelhaComponent {
  board: string[][] = [];

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
    this.board = this.gameService.getBoard();
  }

  selecionarCelula(row: number, col: number): void {
    const currentPlayer = this.gameService.getCurrentPlayer();
    if (!this.board[row][col]) {
      this.board[row][col] = currentPlayer;
      this.gameService.setSelectedCell(row, col);
      this.gameService.switchPlayer();
      this.router.navigate(['/perguntas']);
    }
  }
}
