import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StorageService, IGameObject } from 'src/app/storage.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public games: IGameObject[] = [];

  constructor(
    private _service: StorageService,
    private _router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.games = this._service.getGames();
  }
  playerOneName(): string {
    return this._service.getPlayerOneName();
  }
  playerTwoName(): string {
    return this._service.getPlayerTwoName();
  }
  getWinner(playerOneScore: number, playerTwoScore: number) {
    return playerOneScore > playerTwoScore
      ? `${this.playerOneName()} is the winner!`
      : `${this.playerTwoName()} is the winner!`;
  }
  getTotalWinsPlayerOne() {
    return this.games.reduce((acc, curr) => {
      if (curr.playerOne > curr.playerTwo) {
        acc += 1;
      }
      return acc;
    }, 0);
  }
  getTotalWinsPlayerTwo() {
    return this.games.reduce((acc, curr) => {
      if (curr.playerTwo > curr.playerOne) {
        acc += 1;
      }
      return acc;
    }, 0);
  }
  clickNewButton() {
    this._router.navigate(['/games/create']);
  }
  delete(i: number) {
    const ref = this.dialog.open(DeleteDialogComponent, {
      width: '600px',
      data: {
        id: i,
      },
    });
    ref.afterClosed().subscribe({
      next: (closed: boolean) => {
        if (closed) {
          this.games = this._service.getGames();
        }
      },
    });
  }
}
