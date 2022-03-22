import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { CompetitionInfoComponent } from './competition-info/competition-info.component';
import { ComparisonBoxersListComponents } from './comparison-boxers-list/comparison-boxers-list.component';
import { ComparisonBoxersService } from './comparison-boxers.servise';
import { ComparisonBoxersRoutingModule } from './comparison-boxers.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    //  CompetitionInfoComponent,
    ComparisonBoxersListComponents,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComparisonBoxersRoutingModule,
    SharedModule,
  ],
  providers: [ComparisonBoxersService],
})
export class ComparisonBoxersModule {}
