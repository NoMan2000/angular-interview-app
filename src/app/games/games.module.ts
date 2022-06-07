import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { StorageService } from '../storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [ListComponent, UpdateComponent, DeleteDialogComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [StorageService],
  exports: [ListComponent, UpdateComponent, DeleteDialogComponent],
})
export class GamesModule {}
