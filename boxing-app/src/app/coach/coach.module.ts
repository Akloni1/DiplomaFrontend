import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoachInfoComponent } from './coach-info/coach-info.component';
import { CoachesListComponents } from './coaches-list/coaches-list.component';
import { CoachService } from './coach.service';
import { CoachRoutingModule } from './coach.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CoachInfoComponent,
    CoachesListComponents,
    //BackgroundDirectives,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoachRoutingModule,
    SharedModule,
  ],
  providers: [CoachService],
})
export class CoachModule {}
