import { SpinnerComponent } from './../spinner/spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [SpinnerComponent],
})
export class SharedModule {}
