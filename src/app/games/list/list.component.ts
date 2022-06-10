import { Component, OnInit } from '@angular/core';
import { IGameObject } from 'src/app/storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public games: IGameObject[] = [];

  constructor() {}

  ngOnInit(): void {}
  playerOneName(): string {
    return '';
  }
  playerTwoName(): string {
    return '';
  }
  getWinner(): number {
    return 0;
  }
  getTotalWinsPlayerOne(): number {
    return 0;
  }
  getTotalWinsPlayerTwo(): number {
    return 0;
  }
  clickNewButton() {}
  delete() {
    return 0;
  }
}
