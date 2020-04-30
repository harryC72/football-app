import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CompetitionComponent } from './competition/competition.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':name', component: CompetitionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
