import { SpinnerComponent } from './../spinner/spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandler } from '@angular/core';

import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, SharedRoutingModule],
  providers: [],
  exports: [SpinnerComponent],
})
export class SharedModule {}
