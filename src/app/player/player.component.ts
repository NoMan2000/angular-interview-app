import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  public formGroup = new FormGroup({
    playerOneName: new FormControl(''),
    playerTwoName: new FormControl(''),
  });
  constructor(private storage: StorageService, private router: Router) {}

  ngOnInit(): void {
    const playerOneName = this.storage.getPlayerOneName();
    const playerTwoName = this.storage.getPlayerTwoName();
    this.formGroup.setValue(
      {
        playerOneName,
        playerTwoName,
      },
      { emitEvent: true }
    );
  }

  isValid() {
    const values = this.formGroup.value;
    return values.playerOneName && values.playerTwoName;
  }
  submit() {
    const values = this.formGroup.value;
    this.storage.updatePlayerOneName(values.playerOneName!);
    this.storage.updatePlayerTwoName(values.playerTwoName!);
    this.router.navigate(['/']);
  }
}
