import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CompetitionInfoComponent } from './competition-info/competition-info.component';
import { CompetitionsListComponents } from './competitions-list/competitions-list.component';
import { CompetitionService } from './competitions.service';
import { CompetitionRoutingModule } from './competitions.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CompetitionInfoComponent,
    CompetitionsListComponents,
    //BackgroundDirectives,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompetitionRoutingModule,
    SharedModule,
  ],
  providers: [CompetitionService],
})
export class CompetitionModule {}
