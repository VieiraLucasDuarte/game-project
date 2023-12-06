import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fim-de-game',
  templateUrl: './fim-de-game.component.html',
  styleUrls: ['./fim-de-game.component.scss']
})
export class FimDeGameComponent {

  constructor(private dialogRef: MatDialogRef<FimDeGameComponent>, private router: Router) { }

  closeModal() {
    this.dialogRef.close();
    this.router.navigate([""]);
  }
}
