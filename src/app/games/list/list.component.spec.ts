import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { StorageService } from 'src/app/storage.service';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let storageService: StorageService;
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        MatDialogModule,
        MatCardModule,
        MatButtonModule,
        MatBadgeModule,
        MatIconModule,
      ],
      declarations: [ListComponent],
      providers: [StorageService],
    }).compileComponents();
    fixture = TestBed.createComponent(ListComponent);
    storageService = TestBed.inject<StorageService>(StorageService);
    storageService.resetGames();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should be able to get the total number of games won by player one', () => {
    storageService.addGame({
      playerOne: 10,
      playerTwo: 7,
    });
    const totalWins = component.getTotalWinsPlayerOne();
    expect(totalWins).toEqual(2);
  });
});
