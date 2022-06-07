import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GamesModule } from './games/games.module';
import { HomeComponent } from './home/home.component';
import { PlayerModule } from './player/player.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GamesModule,
    PlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
