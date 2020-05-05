import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchesComponent } from './matches/matches.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  { path: ':name', component: MatchesComponent },
  { path: ':name/:id', component: EventComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompetitionsRoutingModule {}
