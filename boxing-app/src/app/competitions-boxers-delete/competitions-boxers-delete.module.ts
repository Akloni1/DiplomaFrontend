import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { CompetitionInfoComponent } from './competition-info/competition-info.component';
import { CompetitionBoxersListComponents } from './competitions-boxers-delete-list/competitions-boxers-delete-list.component';
import { CompetitionBoxersService } from './competitions-boxers-delete.service';
import { CompetitionBoxersRoutingModule } from './competitions-boxers-delete.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    //  CompetitionInfoComponent,
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
export class CompetitionBoxersDeleteModule {}
