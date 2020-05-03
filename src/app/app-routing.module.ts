import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CompetitionComponent } from './competition/competition.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':name', component: CompetitionComponent },
  { path: ':name/:id', component: EventComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
