import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CompetitionComponent } from './competition/competition.component';
import { EventComponent } from './event/event.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { CompetitionsRoutingModule } from './competitions-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CompetitionsRoutingModule,
    SharedModule,
    AngularSvgIconModule,
  ],
  declarations: [CompetitionComponent, EventComponent],
})
export class CompetitionsModule {}
