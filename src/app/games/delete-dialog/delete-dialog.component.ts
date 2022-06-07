import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StorageService } from 'src/app/storage.service';

export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {
  public displayId: number;
  private id: number;
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private storageService: StorageService
  ) {
    this.displayId = data.id + 1;
    this.id = data.id;
  }

  ngOnInit(): void {}

  delete() {
    this.storageService.deleteGame(this.id);
  }
}
