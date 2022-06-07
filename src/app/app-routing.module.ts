import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './games/list/list.component';
import { UpdateComponent } from './games/update/update.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'games',
    component: ListComponent,
  },
  {
    path: 'games/create',
    component: UpdateComponent,
  },
  {
    path: 'games/edit/:id',
    component: UpdateComponent,
  },
  {
    path: 'player',
    component: PlayerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
