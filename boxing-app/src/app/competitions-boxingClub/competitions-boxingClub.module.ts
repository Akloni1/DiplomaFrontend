import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { CompetitionInfoComponent } from './competition-info/competition-info.component';
import { CompetitionBoxingClubsListComponents } from './competitions-boxingClub-list/competitions-boxingClub-list.component';
import { CompetitionClubsService } from './competitions-boxingClub.service';
import { CompetitionBoxingClubsRoutingModule } from './competitions-boxingClub.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CompetitionBoxingClubsListComponents,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompetitionBoxingClubsRoutingModule,
    SharedModule,
  ],
  providers: [CompetitionClubsService],
})
export class CompetitionBoxingClubsModule {}
