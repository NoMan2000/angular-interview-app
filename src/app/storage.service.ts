import { Injectable } from '@angular/core';

export interface IGameObject {
  playerOne: number;
  playerTwo: number;
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly PLAYER_ONE = 'playerOne';
  private readonly PLAYER_TWO = 'playerTwo';
  private readonly GAMES = 'GAMES';
  private _storage = window.localStorage;

  /**
   * This uses the 10 point counting system for 8-ball.
   * 8-ball is worth 3 points, other balls worth 1 point.
   * Winner gets 10 points, loser gets a maximum of 7 points.
   */

  constructor() {
    const games = this.read(this.GAMES, undefined);
    if (!games) {
      this.write(this.GAMES, [
        {
          playerOne: 6,
          playerTwo: 10,
        },
        {
          playerOne: 10,
          playerTwo: 7,
        },
        {
          playerTwo: 5,
          playerOne: 10,
        },
      ]);
    }
  }

  getGames() {
    return this.read<IGameObject[]>(this.GAMES);
  }

  addGame(game: IGameObject) {
    const games = this.getGames();
    games.push(game);
    this.write(this.GAMES, games);
  }

  updateGame(index: number, game: IGameObject) {
    const games = this.getGames();
    games[index] = game;
    this.write(this.GAMES, games);
  }

  deleteGame(index: number) {
    const games = this.getGames();
    games.splice(index, 1);
    this.write(this.GAMES, games);
  }

  getPlayerOneName(): string {
    return this.read(this.PLAYER_ONE, 'Player One');
  }

  updatePlayerOneName(name: string) {
    this.write(this.PLAYER_ONE, name);
  }

  getPlayerTwoName(): string {
    return this.read(this.PLAYER_TWO, 'Player Two');
  }

  updatePlayerTwoName(name: string) {
    this.write(this.PLAYER_TWO, name);
  }

  private read<T = any>(id: string, fallback?: T): T {
    let item = this._storage.getItem(id);
    if (!item && fallback) {
      return fallback;
    }
    if (!item && !fallback) {
      throw new Error('If the item is not set, a fallback must be supplied');
    }
    return JSON.parse(item as string) as T;
  }

  private write(id: string, value: any) {
    this._storage.setItem(id, JSON.stringify(value));
  }
}
