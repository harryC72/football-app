import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionComponent } from './competition/competition.component';
import { EventComponent } from './event/event.component';

import { CompetitionsRoutingModule } from './competitions-routing.module';

@NgModule({
  imports: [CommonModule, CompetitionsRoutingModule],
  declarations: [CompetitionComponent, EventComponent],
})
export class CompetitionsModule {}
