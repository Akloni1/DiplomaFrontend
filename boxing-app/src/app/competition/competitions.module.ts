import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CompetitionInfoComponent } from './competition-info/competition-info.component';
import { CompetitionsListComponents } from './competitions-list/competitions-list.component';
import { CompetitionBoxersListComponents } from './competitions-boxers-list/competitions-boxers-list.component';
import { CompetitionBoxingClubsListComponents } from './competitions-boxingClub-list/competitions-boxingClub-list.component';
import { ComparisonBoxersListComponents } from './competitions-comparison-boxers-list/competitions-comparison-boxers-list.component';
import { CompetitionService } from './competitions.service';
import { CompetitionRoutingModule } from './competitions.routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CompetitionInfoComponent,
    CompetitionsListComponents,
    CompetitionBoxersListComponents,
    CompetitionBoxingClubsListComponents,
    ComparisonBoxersListComponents,
    //BackgroundDirectives,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompetitionRoutingModule,
    SharedModule,
   MatButtonModule
  ],
  providers: [CompetitionService],
})
export class CompetitionsModule {}
