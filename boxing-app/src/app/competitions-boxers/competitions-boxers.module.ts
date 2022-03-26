import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { CompetitionInfoComponent } from './competition-info/competition-info.component';
import { CompetitionBoxersListComponents } from './competitions-boxers-list/competitions-boxers-list.component';
import { CompetitionBoxersService } from './competitions-boxers.service';
import { CompetitionBoxersRoutingModule } from './competitions-boxers.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CompetitionBoxersListComponents,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompetitionBoxersRoutingModule,
    SharedModule,
  ],
  providers: [CompetitionBoxersService],
})
export class CompetitionBoxersModule {}
