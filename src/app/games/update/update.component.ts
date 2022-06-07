import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService, IGameObject } from 'src/app/storage.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  public isEdit = false;
  private id?: number;
  public displayId?: number;
  public formGroup = new FormGroup({
    playerOne: new FormControl(0),
    playerTwo: new FormControl(0),
  });
  constructor(
    private _activeRouter: ActivatedRoute,
    private _router: Router,
    private _storage: StorageService
  ) {}

  ngOnInit(): void {
    this._activeRouter.params.subscribe((p) => {
      if (p['id']) {
        this.isEdit = true;
        this.id = Number(p['id']);
        this.displayId = this.id + 1;
        const currentGame = this._storage.getGames()[this.id];
        this.formGroup.setValue(
          {
            playerOne: currentGame.playerOne,
            playerTwo: currentGame.playerTwo,
          },
          {
            emitEvent: true,
          }
        );
      }
    });
  }

  isValid() {
    const values = this.formGroup.value;
    let isValid = false;
    if (!values.playerOne || !values.playerTwo) {
      return isValid;
    }
    if (values.playerOne > values.playerTwo) {
      isValid = values.playerTwo <= 7 && values.playerOne === 10;
    } else if (values.playerTwo > values.playerOne) {
      isValid = values.playerOne <= 7 && values.playerTwo === 10;
    }
    return isValid;
  }
  submit() {
    const values = this.formGroup.value;
    if (this.id != null) {
      this._storage.updateGame(this.id, values as IGameObject);
    } else {
      this._storage.addGame(values as IGameObject);
    }
    this._router.navigate(['/games']);
  }
}
