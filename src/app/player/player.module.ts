import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
})
export class PlayerModule {}
