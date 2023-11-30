import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class GameService {
    board: string[][] = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    currentPlayer: 'X' | 'O' = 'X';

    getCurrentPlayer(): 'X' | 'O' {
        return this.currentPlayer;
    }

    switchPlayer(): void {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }

    playMove(row: number, col: number): void {
        if (!this.board[row][col]) {
            this.board[row][col] = this.currentPlayer;
            this.switchPlayer(); // Alternar para o próximo jogador após a jogada
        }
    }

    selectedCell: { row: number, col: number } | null = null;

    getBoard(): string[][] {
        return this.board;
    }

    setSelectedCell(row: number, col: number): void {
        this.selectedCell = { row, col };
    }

    getSelectedCell(): { row: number, col: number } | null {
        return this.selectedCell;
    }
}